// Configurable ranking parameters and helpers for clinic placement

// Default configuration; can be adjusted without code changes if imported and overridden
export const rankingConfig = {
  minimumReviews: 300, // clinics below this are filtered out
  // Bayesian prior: priorMean ~ average rating; priorWeight ~ equivalent review count
  priorMean: 4.2,
  priorWeight: 150,
  // Optional distance weighting (0 disables). When used, smaller distance is better.
  distanceWeight: 0,
  // Optional freshness factor for recency-based signals in the future
  freshnessWeight: 0,
};

// Compute Bayesian-adjusted rating using prior
export function computeBayesianRating(
  rating,
  reviewCount,
  config = rankingConfig
) {
  const r = Number(rating) || 0;
  const n = Number(reviewCount) || 0;
  const m = Number(config.priorWeight) || 0;
  const C = Number(config.priorMean) || 0;
  if (n <= 0) return 0;
  return (m * C + n * r) / (m + n);
}

// Optional sigmoid to bound effects smoothly
function logistic(x) {
  return 1 / (1 + Math.exp(-x));
}

// Final composite score: Bayesian rating with mild review volume and optional distance
export function computePlacementScore(clinic, config = rankingConfig) {
  const n = Number(clinic.user_ratings_total) || 0;
  const bayes = computeBayesianRating(clinic.rating, n, config);

  // Review volume booster with diminishing returns
  const volumeBoost = Math.log10(n + 1); // ~0..3 for 1..1000+

  let score = bayes * (1 + 0.15 * volumeBoost);

  // Optional: distanceWeight expects clinic.distanceKm if provided by caller
  if (config.distanceWeight && typeof clinic.distanceKm === "number") {
    // Convert distance to a 0..1 proximity score where closer is better
    const proximity = logistic(3 - Math.log(clinic.distanceKm + 1));
    score = score * (1 + config.distanceWeight * (proximity - 0.5));
  }

  return score;
}

export function filterClinics(clinics, config = rankingConfig) {
  const minReviews = Number(config.minimumReviews) || 0;
  return clinics.filter(
    (c) =>
      c &&
      c.place_id &&
      c.rating &&
      (Number(c.user_ratings_total) || 0) >= minReviews
  );
}

export function sortClinics(clinics, config = rankingConfig) {
  return [...clinics].sort(
    (a, b) =>
      computePlacementScore(b, config) - computePlacementScore(a, config)
  );
}

// Utility to map raw Places API clinic to frontend shape
export function mapClinic(clinic, isSponsored = false) {
  return {
    place_id: clinic.place_id,
    name: clinic.name,
    rating: clinic.rating,
    user_ratings_total: clinic.user_ratings_total,
    address: clinic.vicinity,
    website: clinic.website,
    maps_url: clinic.url,
    isSponsored,
  };
}
