import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { checkAndIncrementDailyQuota } from "@/lib/quota";
import { analyticsTracker } from "@/lib/analytics.js";

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';

// Initialize the Google Generative AI client with the API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// This helper function remains the same. It's perfect for preparing the input.
async function fileToGenerativePart(file) {
  const fileBuffer = Buffer.from(await file.arrayBuffer());
  return {
    inlineData: {
      data: fileBuffer.toString("base64"),
      mimeType: file.type,
    },
  };
}

export async function POST(request) {
  try {
    // Determine identifier: IP-based only
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ipCandidate = forwardedFor ? forwardedFor.split(",")[0] : "";
    const ipHeader =
      request.headers.get("x-real-ip") ||
      request.headers.get("cf-connecting-ip") ||
      "";
    const ip = (ipCandidate || ipHeader || "unknown").trim();
    const identifier = `ip:${ip}`;
    const limitPerDay = Number(process.env.SMILE_GEN_DAILY_LIMIT || 10);
    const quota = await checkAndIncrementDailyQuota(identifier, limitPerDay);
    if (!quota.allowed) {
      const res = NextResponse.json(
        {
          error: "Daily quota exceeded. Please try again tomorrow.",
          resetAt: quota.resetAtMs,
        },
        { status: 429 }
      );
      res.headers.set("X-RateLimit-Limit", String(limitPerDay));
      res.headers.set("X-RateLimit-Remaining", "0");
      res.headers.set("X-RateLimit-Reset", String(quota.resetAtMs));
      return res;
    }
    const formData = await request.formData();
    const imageFile = formData.get("image");
    const treatmentType = formData.get("treatment");

    if (!imageFile || !treatmentType) {
      return NextResponse.json(
        { error: "Missing image or treatment type" },
        { status: 400 }
      );
    }

    // IMPORTANT: You would change the model name to the one that supports image output.
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash-image-preview",
    }); // Hypothetical model name

    const imagePart = await fileToGenerativePart(imageFile);

    const prompt = `
      You are a world-class dental simulation AI. Your task is to realistically edit the user's smile without overdoing the brightness of the teeth color in the provided photo.
      The user has selected the "${treatmentType}" treatment.
      - If the treatment is "veneers", apply perfectly shaped, natural-looking porcelain veneers, natural looking colors with natural brightness.(color A1/BL4).
      - If the treatment is "zirconia crowns", apply perfectly shaped, natural-looking zirconia crowns, natural looking colors with natural brightness.(color A1/BL4).
      - CRITICAL: Only modify the teeth. Do not alter the gums, lips, skin, or any other part of the face.
      - IMPORTANT FOR IMMERSION: The teeth should not be too white. Don't make it over the top white this will make the image look fake.
      - Ensure the lighting, shadows, and reflections on the new teeth match the original photo perfectly.
      - The result must be photorealistic and indistinguishable from a real dental procedure.
      - Output ONLY the edited image, with no additional text or commentary.
      - If teeth are not visible or in the image, respond with a refusal to generate an image.
      - If the image is not a clear photo of a person's face, respond with a refusal to generate an image.
      - If the users teeth are already perfect, respond with a refusal to generate an image.
    `;

    const result = await model.generateContent([prompt, imagePart]);

    // --- THIS IS THE KEY CHANGE ---
    // Instead of getting text, you would parse the response to find the image data.
    const response = await result.response;

    // The API would likely return a 'part' that contains image data.
    // We find the first part that has 'inlineData' (which signifies an image/file).
    const editedImagePart = response.candidates[0].content.parts.find(
      (part) => part.inlineData
    );

    if (!editedImagePart) {
      // Handle cases where the model might have refused to generate an image or returned text instead.
      // Track this as a failed generation
      await analyticsTracker.trackApiUsage('/api/generate-smile', 'error');
      
      return NextResponse.json(
        { error: "Please upload a valid image." },
        { status: 500 }
      );
    }

    // Extract the base64 data and MIME type from the response.
    const editedImageBase64 = editedImagePart.inlineData.data;
    const mimeType = editedImagePart.inlineData.mimeType;

    // Track successful smile generation
    await analyticsTracker.trackApiUsage('/api/generate-smile', 'success');

    const res = NextResponse.json({
      imageData: `data:${mimeType};base64,${editedImageBase64}`,
    });
    res.headers.set("X-RateLimit-Limit", String(limitPerDay));
    res.headers.set("X-RateLimit-Remaining", String(quota.remaining));
    res.headers.set("X-RateLimit-Reset", String(quota.resetAtMs));
    return res;
  } catch (error) {
    console.error("Error in generate-smile API:", error);
    
    // Track failed smile generation
    await analyticsTracker.trackApiUsage('/api/generate-smile', 'error');
    
    return NextResponse.json(
      { error: "Failed to generate image. Please try again." },
      { status: 500 }
    );
  }
}
