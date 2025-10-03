# SmileTrust

Professional AI Smile Visualization & Dental Clinic Finder - A Next.js application that helps users discover cosmetic dentistry clinics worldwide and preview smile transformations using advanced AI technology.

## About SmileTrust

SmileTrust combines advanced AI technology with comprehensive clinic discovery to help users make informed decisions about cosmetic dental procedures. Our platform features:

- **AI Smile Visualization**: Preview your smile transformation before treatment
- **Global Clinic Directory**: Discover verified dental professionals worldwide
- **Verified Reviews**: Access authentic patient experiences and ratings
- **HIPAA Compliant**: Secure handling of user data and privacy
- **Independent Rankings**: Unbiased clinic rankings based on verified metrics

## Environment Variables

Create a `.env.local` file at the project root and define the following variables:

| Name                    | Required           | Description                                                                                    |
| ----------------------- | ------------------ | ---------------------------------------------------------------------------------------------- |
| `GOOGLE_MAPS_API_KEY`   | Yes                | Used by clinic search and reverse geocoding.                                                   |
| `GEMINI_API_KEY`        | Yes                | Used by the AI teeth generation endpoint.                                                      |
| `SMILE_GEN_DAILY_LIMIT` | No (default: `10`) | Per-IP daily quota for the `generate-smile` API. Controls maximum requests per IP per UTC day. |

Example `.env.local`:

```env
GOOGLE_MAPS_API_KEY=your-google-maps-key
GEMINI_API_KEY=your-gemini-key
SMILE_GEN_DAILY_LIMIT=25
```

Notes:

- The quota is enforced in-memory per server instance. For multi-instance or persistent quotas across restarts, use a shared store like Redis.
- Changes to `.env.local` require restarting the dev server.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Technology Stack

SmileTrust is built with modern web technologies:

- **[Next.js](https://nextjs.org)**: React framework with App Router for optimal performance
- **[Tailwind CSS](https://tailwindcss.com)**: Utility-first CSS framework for modern UI
- **[Google Maps API](https://cloud.google.com/maps-platform)**: Location services and mapping
- **[Google Generative AI](https://ai.google.dev)**: Advanced AI for smile visualization
- **[Lucide React](https://lucide.dev)**: Beautiful icon library

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Tailwind CSS](https://tailwindcss.com/docs) - utility-first CSS framework documentation
- [Google Maps Platform](https://developers.google.com/maps) - location and mapping services

## Deployment

The easiest way to deploy SmileTrust is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Ranking and Sponsor Placement

- Clinics are ranked using a Bayesian-adjusted score with a minimum review threshold.
- You can pin sponsored clinics to any index or boost their score.

Configuration files:

- `src/lib/ranking.js`

  - `rankingConfig.minimumReviews` — default 300 (clinics below are excluded)
  - `rankingConfig.priorMean` and `priorWeight` — Bayesian prior tuning
  - `rankingConfig.distanceWeight` — optional proximity influence (0 to disable)

- `src/lib/sponsors.js`
  - `sponsorsConfig.nearby.fixedPlacements` — map of `place_id` to desired index for "Near Me" tab
  - `sponsorsConfig.nearby.scoreBoosts` — map of `place_id` to additive score boost for "Near Me" tab
  - `sponsorsConfig.popular.fixedPlacements` — map of `place_id` to desired index for "Popular" tab
  - `sponsorsConfig.popular.scoreBoosts` — map of `place_id` to additive score boost for "Popular" tab
  - `sponsorsConfig.search.fixedPlacements` — map of `place_id` to desired index for "Search" tab
  - `sponsorsConfig.search.scoreBoosts` — map of `place_id` to additive score boost for "Search" tab

How to sponsor/place a clinic:

1. Find the clinic `place_id` (returned from the API).
2. Edit `src/lib/sponsors.js` and add to the appropriate tab section:
   - `nearby.fixedPlacements["PLACE_ID"] = 0` to pin it at the top in "Near Me" tab
   - `popular.fixedPlacements["PLACE_ID"] = 0` to pin it at the top in "Popular" tab
   - `search.fixedPlacements["PLACE_ID"] = 0` to pin it at the top in "Search" tab
   - Or use `scoreBoosts` instead of `fixedPlacements` for gentle ranking boosts
3. Save and redeploy. Caches expire in ~10 minutes.

How to change ranking behavior:

1. Edit `src/lib/ranking.js` and adjust `rankingConfig` values.
2. Optionally enable `distanceWeight` and provide `distanceKm` in clinics if available.
3. Save and redeploy.
