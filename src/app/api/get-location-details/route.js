import { Client } from "@googlemaps/google-maps-services-js";
import { NextResponse } from "next/server";
import { getCache, setCache, makeCacheKey } from "@/lib/cache";
import { analyticsTracker } from "@/lib/analytics.js";

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';

const mapsClient = new Client({});

// A simple function to map a country code to a continent
const getContinent = (countryCode) => {
  // This is a basic mapping. For a more comprehensive solution, a library could be used.
  const europe = [
    "AL",
    "AD",
    "AM",
    "AT",
    "BY",
    "BE",
    "BA",
    "BG",
    "CH",
    "CY",
    "CZ",
    "DE",
    "DK",
    "EE",
    "ES",
    "FO",
    "FI",
    "FR",
    "GB",
    "GE",
    "GI",
    "GR",
    "HU",
    "HR",
    "IE",
    "IS",
    "IT",
    "LT",
    "LU",
    "LV",
    "MC",
    "MK",
    "MT",
    "NO",
    "NL",
    "PL",
    "PT",
    "RO",
    "RU",
    "SE",
    "SI",
    "SK",
    "SM",
    "TR",
    "UA",
    "VA",
  ];
  const northAmerica = ["US", "CA", "MX", "BM", "GL", "PM"];

  if (europe.includes(countryCode)) return "Europe";
  if (northAmerica.includes(countryCode)) return "North America";

  // Default for other regions like Asia, South America, Australia, Africa
  return "Other";
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  if (!lat || !lng) {
    return NextResponse.json(
      { error: "Latitude and longitude are required" },
      { status: 400 }
    );
  }

  try {
    const cacheKey = makeCacheKey("get-location-details:reverseGeocode", [
      lat,
      lng,
    ]);
    const cached = getCache(cacheKey);
    if (cached) {
      return NextResponse.json(cached);
    }
    const response = await mapsClient.reverseGeocode({
      params: {
        latlng: { lat: parseFloat(lat), lng: parseFloat(lng) },
        result_type: "country",
        key: process.env.GOOGLE_MAPS_API_KEY,
      },
    });

    if (response.data.results.length === 0) {
      throw new Error("Could not determine country from coordinates.");
    }

    // Find the country code from the response (e.g., "US", "DE", "GB")
    const countryComponent = response.data.results[0].address_components.find(
      (c) => c.types.includes("country")
    );
    const countryCode = countryComponent ? countryComponent.short_name : null;

    if (!countryCode) {
      throw new Error("Could not extract country code.");
    }

    const continent = getContinent(countryCode);

    const payload = { continent };
    setCache(cacheKey, payload, 60 * 60); // cache for 1 hour
    
    // Track successful location details request
    await analyticsTracker.trackApiUsage('/api/get-location-details', 'success');
    
    return NextResponse.json(payload);
  } catch (error) {
    console.error("Error in get-location-details API:", error.message);
    
    // Track failed location details request
    await analyticsTracker.trackApiUsage('/api/get-location-details', 'error');
    
    return NextResponse.json(
      { error: "Failed to determine location details." },
      { status: 500 }
    );
  }
}
