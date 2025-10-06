# SmileTrust Deployment Guide

This guide will help you deploy your SmileTrust Next.js application to production.

## Prerequisites

1. **GitHub Account**: Your code should be in a GitHub repository
2. **API Keys**: You'll need the following API keys:
   - Google Generative AI API Key
   - Google Maps API Key
   - Google Analytics ID (optional)
3. **Domain**: Domain name (smiletrustclinic.com)

## Deployment Options

### Option 1: Vercel (Recommended)

#### Step 1: Push to GitHub

1. Initialize git repository if not already done
2. Add all files: `git add .`
3. Commit: `git commit -m "Initial commit"`
4. Connect to GitHub repository and push

#### Step 2: Deploy with Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/sign in with your GitHub account
3. Click "New Project"
4. Import your GitHub repository
5. Deploy!

#### Step 3: Configure Environment Variables

In Vercel dashboard:

1. Go to Project Settings > Environment Variables
2. Add these variables:
   ```
   GOOGLE_AI_API_KEY=your_google_ai_api_key
   GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   NEXT_PUBLIC_GA_ID=your_google_analytics_id
   REDIS_URL=your_redis_url (if using)
   NEXT_PUBLIC_APP_URL=https://smiletrustclinic.com
   ```

#### Step 4: Custom Domain

1. In Vercel dashboard, go to Domains
2. Add your custom domain (smiletrustclinic.com)
3. Follow DNS configuration instructions

### Option 2: Netlify

1. Connect GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables via Netlify dashboard

### Option 3: Traditional Hosting

For servers like DigitalOcean, AWS EC2, etc:

```bash
# Build the project
npm run build

# Start production server
npm start
```

## Environment Variables Required

Make sure you have these environment variables set in your hosting platform:

- `GOOGLE_AI_API_KEY`: Google Generative AI API key
- `GOOGLE_MAPS_API_KEY`: Google Maps Places API key
- `NEXT_PUBLIC_GA_ID`: Google Analytics measurement ID (optional)
- `REDIS_URL`: Redis connection URL (if using Redis)
- `NEXT_PUBLIC_APP_URL`: Your domain URL

## Post-Deployment Checklist

- [ ] Test all API endpoints
- [ ] Verify image uploads work
- [ ] Check Google Maps integration
- [ ] Test analytics tracking
- [ ] Verify SEO meta tags
- [ ] Test mobile responsiveness

## Troubleshooting

### Common Issues:

1. **API Key Errors**: Ensure all environment variables are set
2. **Build Failures**: Check that all dependencies are in package.json
3. **Image Upload Issues**: Verify file upload limits in hosting platform
4. **Domain Issues**: Allow 24-48 hours for DNS propagation

### Support:

- Check Vercel/netlify logs for deployment errors
- Verify all environment variables are correctly set
- Test locally with `npm run build && npm start`
