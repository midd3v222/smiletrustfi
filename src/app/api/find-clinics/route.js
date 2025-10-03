import { Client } from "@googlemaps/google-maps-services-js";
import { NextResponse } from "next/server";
import { getCache, setCache, makeCacheKey } from "@/lib/cache";
import {
  rankingConfig,
  filterClinics,
  sortClinics,
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

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const city = searchParams.get("city");

  let location;

  if (lat && lng) {
    location = { lat: parseFloat(lat), lng: parseFloat(lng) };
  } else if (city) {
    const cacheKeyCity = makeCacheKey("find-clinics:geocode", [city]);
    const cachedGeocode = getCache(cacheKeyCity);
    if (cachedGeocode) {
      location = cachedGeocode;
    } else {
      try {
        const geocodeResponse = await mapsClient.geocode({
          params: {
            address: city,
            key: process.env.GOOGLE_MAPS_API_KEY,
          },
        });
        if (geocodeResponse.data.results.length === 0) {
          return NextResponse.json(
            { error: "City not found" },
            { status: 404 }
          );
        }
        location = geocodeResponse.data.results[0].geometry.location;
        setCache(cacheKeyCity, location, 60 * 60); // cache geocode for 1 hour
      } catch (error) {
        console.error(
          "Geocoding error:",
          error.response?.data || error.message
        );
        return NextResponse.json(
          { error: "Failed to geocode city." },
          { status: 500 }
        );
      }
    }
  } else {
    return NextResponse.json(
      { error: "Latitude and longitude, or a city are required" },
      { status: 400 }
    );
  }

  try {
    const cacheKey = makeCacheKey("find-clinics:list", [
      location.lat,
      location.lng,
    ]);
    const cached = getCache(cacheKey);
    if (cached) {
      return NextResponse.json(cached);
    }
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

    let detailedClinics = await Promise.all(detailPromises);

    // Apply new minimum reviews rule via filterClinics
    const validClinics = filterClinics(detailedClinics, rankingConfig);

    if (validClinics.length === 0) {
      return NextResponse.json([]);
    }

    // Determine which tab this is based on request parameters
    const tabName = city ? "search" : "nearby";
    const tabConfig = getTabConfig(tabName);

    // Sponsor-aware sorting: compute scores, apply boosts and fixed placements
    const sponsorAware = applySponsorBoosts(
      validClinics,
      (c) => computePlacementScore(c, rankingConfig),
      tabConfig
    ).sort((a, b) => b.score - a.score);

    const withFixed = applyFixedPlacements(sponsorAware, tabConfig);

    const formattedClinics = withFixed.map((clinic) =>
      mapClinic(clinic, isClinicSponsored(clinic, tabConfig))
    );

    // Cache the formatted clinics for 24 hours
    setCache(cacheKey, formattedClinics, 60 * 60 * 24);
    return NextResponse.json(formattedClinics);
  } catch (error) {
    console.error(
      "Error in find-clinics API:",
      error.response?.data || error.message
    );
    return NextResponse.json(
      { error: "Failed to fetch clinic data." },
      { status: 500 }
    );
  }
}
