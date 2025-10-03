// Simple sponsor placement configuration and helpers

// Tab-specific sponsor configuration
// Each tab can have different sponsor placements
export const sponsorsConfig = {
  // "nearby" tab (find-clinics API)
  nearby: {
    fixedPlacements: {
      // "ChIJ...": 0, // put this clinic at the very top in nearby results
    },
    scoreBoosts: {
      // "ChIJ...": 2.5, // boost this clinic in nearby results
    },
  },
  // "popular" tab (find-clinics-popular API)
  popular: {
    fixedPlacements: {
      //"ChIJueY47xKbwxQR-YxBPVFEaxc": 0, // put this clinic at the very top in popular results
      // "ChIJ...": 2, // put this clinic at index 2 in popular results
    },
    scoreBoosts: {
      // "ChIJ...": 2.5, // boost this clinic in popular results
    },
  },
  // "search" tab (find-clinics API with city parameter)
  search: {
    fixedPlacements: {
      // "ChIJ...": 0, // put this clinic at the very top in search results
    },
    scoreBoosts: {
      // "ChIJ...": 2.5, // boost this clinic in search results
    },
  },
};

export function applySponsorBoosts(clinics, scoreFn, config) {
  const boosts = (config && config.scoreBoosts) || {};
  return clinics.map((c) => {
    const base = scoreFn(c);
    const boost = Number(boosts[c.place_id] || 0);
    return { clinic: c, score: base + boost };
  });
}

export function applyFixedPlacements(scoredClinics, config) {
  const fixed = (config && config.fixedPlacements) || {};
  const output = [];
  const taken = new Set();

  // Place fixed ones first
  Object.entries(fixed).forEach(([placeId, index]) => {
    const i = scoredClinics.findIndex((x) => x.clinic.place_id === placeId);
    if (i >= 0) {
      output[index] = scoredClinics[i];
      taken.add(i);
    }
  });
  // Fill remaining spots by descending score
  const remaining = scoredClinics
    .map((x, i) => ({ i, x }))
    .filter(({ i }) => !taken.has(i))
    .sort((a, b) => b.x.score - a.x.score)
    .map(({ x }) => x);

  for (
    let i = 0, r = 0;
    i < scoredClinics.length && r < remaining.length;
    i++
  ) {
    if (!output[i]) {
      output[i] = remaining[r++];
    }
  }

  return output.map((s) => s.clinic);
}

// Helper to get tab-specific config
export function getTabConfig(tabName) {
  return sponsorsConfig[tabName] || { fixedPlacements: {}, scoreBoosts: {} };
}

// Helper to check if a clinic is sponsored (has fixed placement only)
// Score boosts are kept "underground" and don't show the verified tag
export function isClinicSponsored(clinic, config) {
  const fixed = (config && config.fixedPlacements) || {};
  return fixed[clinic.place_id] !== undefined;
}
