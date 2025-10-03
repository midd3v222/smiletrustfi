// src/app/api/find-clinics-popular/route.js
import { Client } from "@googlemaps/google-maps-services-js";
import { NextResponse } from "next/server";
import { getCache, setCache, makeCacheKey } from "@/lib/cache";
import {
  rankingConfig,
  filterClinics,
  mapClinic,
  computePlacementScore,
} from "@/lib/ranking";
import {
  getTabConfig,
  applySponsorBoosts,
  applyFixedPlacements,
  isClinicSponsored,
} from "@/lib/sponsors";

export const revalidate = 0;

const mapsClient = new Client({});

// Legacy kept for reference; replaced by ranking helpers
const calculateConfidenceScore = (rating, totalReviews) => {
  const ratingWeight = Math.pow(rating, 2);
  const reviewConfidence = Math.log10(totalReviews + 1);
  return ratingWeight * reviewConfidence;
};

const findClinicsForLocation = async (location) => {
  const searchResponse = await mapsClient.placesNearby({
    params: {
      location,
      radius: 15000,
      type: "dental_clinic",
      keyword: 'dentist OR "dental clinic"',
      key: process.env.GOOGLE_MAPS_API_KEY,
    },
    timeout: 2000,
  });

  const clinics = searchResponse.data.results;

  const detailPromises = clinics.map((clinic) => {
    if (!clinic.place_id) return Promise.resolve(null);
    return mapsClient
      .placeDetails({
        params: {
          place_id: clinic.place_id,
          fields: [
            "place_id",
            "name",
            "rating",
            "user_ratings_total",
            "vicinity",
            "website",
            "url",
          ],
          key: process.env.GOOGLE_MAPS_API_KEY,
        },
      })
      .then((res) => res.data.result)
      .catch(() => null);
  });

  return Promise.all(detailPromises);
};

export async function POST(request) {
  const { locations } = await request.json();

  if (!locations || !Array.isArray(locations) || locations.length === 0) {
    return NextResponse.json(
      { error: "An array of locations is required" },
      { status: 400 }
    );
  }

  try {
    const cacheKey = makeCacheKey("find-clinics-popular:list", [locations]);
    const cached = getCache(cacheKey);
    if (cached) {
      return NextResponse.json(cached);
    }
    const allClinicsPromises = locations.map(findClinicsForLocation);
    const allClinicsArrays = await Promise.all(allClinicsPromises);
    const combinedClinics = [].concat(...allClinicsArrays);

    // Apply new minimum reviews rule via filterClinics
    const validClinics = filterClinics(combinedClinics, rankingConfig);

    // Remove duplicates
    const uniqueClinics = Array.from(
      new Set(validClinics.map((c) => c.place_id))
    ).map((id) => {
      return validClinics.find((c) => c.place_id === id);
    });

    if (uniqueClinics.length === 0) {
      return NextResponse.json([]);
    }

    // Use popular tab config
    const tabConfig = getTabConfig("popular");

    // Sponsor-aware sorting: compute scores, apply boosts and fixed placements
    const sponsorAware = applySponsorBoosts(
      uniqueClinics,
      (c) => computePlacementScore(c, rankingConfig),
      tabConfig
    ).sort((a, b) => b.score - a.score);

    const withFixed = applyFixedPlacements(sponsorAware, tabConfig);

    const formattedClinics = withFixed.map((clinic) =>
      mapClinic(clinic, isClinicSponsored(clinic, tabConfig))
    );

    setCache(cacheKey, formattedClinics, 60 * 60 * 24); // cache for 24 hours
    return NextResponse.json(formattedClinics);
  } catch (error) {
    console.error(
      "Error in find-clinics-popular API:",
      error.response?.data || error.message
    );
    return NextResponse.json(
      { error: "Failed to fetch clinic data." },
      { status: 500 }
    );
  }
}
