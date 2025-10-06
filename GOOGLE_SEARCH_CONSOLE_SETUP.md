# Google Search Console Setup Guide

## Why This is Critical for SEO (100% FREE)

Google Search Console is the **#1 most important free SEO tool**. It shows you:

- What keywords people use to find your site
- How many people see your site in search results
- Which pages rank well (and which don't)
- Technical issues that prevent ranking
- Index coverage and errors

**Without Search Console, you're flying blind!**

---

## Step-by-Step Setup (15 minutes)

### 1. Sign Up for Google Search Console

1. Go to: https://search.google.com/search-console/
2. Click "Start Now"
3. Sign in with your Google account (create one if needed)

### 2. Add Your Property

You'll see two options - choose **"URL prefix"**:

```
URL prefix: https://smiletrustclinic.com
```

Click "Continue"

### 3. Verify Ownership

Google will ask you to verify you own the website. For Next.js/Vercel:

**Option A: HTML Tag (Easiest for Next.js)**

1. Google will give you a meta tag like:

```html
<meta name="google-site-verification" content="YOUR_CODE_HERE" />
```

2. Add it to your Next.js layout file:

Open `src/app/layout.js` and add the verification meta tag inside the `<head>` section:

```javascript
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add Google Search Console verification here */}
        <meta name="google-site-verification" content="YOUR_CODE_HERE" />

        {/* ... rest of your head tags ... */}
      </head>
      <body>{children}</body>
    </html>
  );
}
```

3. Deploy your changes to production
4. Go back to Search Console and click "Verify"

**Option B: Vercel DNS (Alternative)**

If you use Vercel for hosting:

1. Choose "DNS record" verification
2. Add the TXT record to your domain settings in Vercel
3. Wait a few minutes and verify

### 4. Submit Your Sitemap

Once verified:

1. In Search Console, go to "Sitemaps" in the left menu
2. Enter your sitemap URL: `https://smiletrustclinic.com/sitemap.xml`
3. Click "Submit"

You should see a success message!

### 5. Wait for Data (Be Patient!)

- It takes 24-48 hours for data to start appearing
- Full data may take 1-2 weeks
- Check back regularly to monitor progress

---

## What to Check Weekly in Search Console

### 1. Performance Report

**Location:** Performance > Search Results

**Key Metrics:**

- **Total Clicks:** How many people clicked your site
- **Total Impressions:** How many times your site appeared in search
- **Average CTR:** Click-through rate (aim for 3%+)
- **Average Position:** Your ranking (lower is better, aim for < 10)

**Action Items:**

- Identify which pages get the most impressions but low clicks
- Improve titles and descriptions for those pages
- See which keywords you rank for (target more similar keywords)

### 2. Coverage Report

**Location:** Coverage

**What to Check:**

- **Errors:** Fix immediately (pages that can't be indexed)
- **Valid pages:** Should match your sitemap count
- **Excluded pages:** Review if important pages are excluded

**Common Errors:**

- "Submitted URL not found (404)" - broken links in sitemap
- "Server error (5xx)" - website downtime issues
- "Redirect error" - fix redirect chains

### 3. URL Inspection

**Location:** Top search bar

**Use This To:**

- Check if specific pages are indexed
- Request indexing for new pages
- See Google's rendered version of your page
- Debug why pages aren't ranking

**How to Request Indexing:**

1. Paste your URL in the top search bar
2. Click "Request Indexing"
3. Wait 1-7 days for Google to crawl

---

## Immediate Actions After Setup

### Week 1: Setup

- [ ] Verify ownership
- [ ] Submit sitemap
- [ ] Enable email notifications
- [ ] Link to Google Analytics (if you have it)

### Week 2: First Check

- [ ] Review Performance report
- [ ] Check Coverage for errors
- [ ] Note your top 10 keywords
- [ ] Identify pages with high impressions but low clicks

### Week 3: Optimization

- [ ] Improve titles for low-CTR pages
- [ ] Create content targeting keywords you almost rank for (position 11-20)
- [ ] Request indexing for any new pages/blog posts

### Weekly Routine

- [ ] Check Performance (track clicks growth)
- [ ] Fix any new errors in Coverage
- [ ] Request indexing for new content
- [ ] Identify new keyword opportunities

---

## Pro Tips for SmileTrust

### 1. Track Location-Specific Keywords

Use filters in Performance to see searches like:

- "dental clinics in Istanbul"
- "veneers cost Turkey"
- "best dental tourism destinations"

Create more content around terms you're already ranking for!

### 2. Monitor Competitor Keywords

See what keywords bring people to your site, then search those terms yourself to see who ranks above you. Analyze their content and make yours better.

### 3. Request Indexing for Every New Blog Post

Don't wait for Google to find your new content:

1. Publish blog post
2. Go to Search Console
3. Request indexing immediately
4. Your post can rank within hours instead of days!

### 4. Fix Mobile Issues

Check "Mobile Usability" report to ensure your site works perfectly on phones (where most searches happen).

### 5. Use Search Queries to Find Content Ideas

Look at queries with:

- **High impressions + Low clicks** = Improve your title/description
- **Position 11-20** = You're close to first page! Create better content
- **Questions** = Create FAQ content answering those questions

---

## Common Issues & Fixes

### "Page is not indexed"

**Causes:**

- Page is too new (wait 1-2 weeks)
- Robots.txt is blocking it
- Page has noindex tag
- Page is low quality/thin content

**Fix:**

- Request indexing manually
- Check your robots.txt
- Add more content (aim for 800+ words)

### "Crawled but not indexed"

**Causes:**

- Content is too similar to other pages
- Page quality is low
- Site has too many pages

**Fix:**

- Make content more unique and valuable
- Add more detailed information
- Improve internal linking to the page

### "Submitted URL not found (404)"

**Causes:**

- URL in sitemap doesn't exist
- Page was deleted
- Wrong URL format

**Fix:**

- Update your sitemap
- Check for typos in URLs
- Verify the page exists

---

## Expected Timeline

### Week 1-2

- Search Console setup complete
- Data starts appearing
- You see your first keywords

### Week 3-4

- Clear picture of what you rank for
- Can identify optimization opportunities
- First blog posts getting indexed

### Month 2-3

- Noticeable traffic increase
- More keywords ranking
- Better understanding of what content works

### Month 6+

- Significant organic traffic growth
- Multiple pages ranking well
- Consistent search visibility

---

## Additional Free Tools to Use Alongside

1. **Google Analytics 4** (track visitor behavior)

   - See what pages people visit
   - How long they stay
   - What actions they take

2. **Bing Webmaster Tools** (Don't ignore Bing!)

   - Similar to Search Console but for Bing
   - 5-10% of search traffic comes from Bing
   - Setup: https://www.bing.com/webmasters

3. **Google Business Profile** (if you have physical office)
   - Free listing on Google Maps
   - Show up in local searches
   - Get reviews

---

## Tracking Your SEO Progress

Create a simple spreadsheet to track monthly:

| Month | Total Clicks | Total Impressions | Avg Position | Top Keyword             | Notes        |
| ----- | ------------ | ----------------- | ------------ | ----------------------- | ------------ |
| Jan   | 50           | 5,000             | 35           | veneers cost Turkey     | Started blog |
| Feb   | 150          | 12,000            | 28           | dental clinics Turkey   | 3 new posts  |
| Mar   | 450          | 25,000            | 22           | Istanbul dental tourism | Growing!     |

This helps you see progress over time and proves your SEO efforts are working!

---

## Key Takeaways

✅ **Set up Search Console immediately** (takes 15 minutes)
✅ **Submit your sitemap** (critical for indexing)
✅ **Check Performance weekly** (track growth)
✅ **Request indexing for new content** (get ranked faster)
✅ **Fix errors as they appear** (maintain site health)
✅ **Use keyword data to guide content** (create what people search for)

---

## Need Help?

If you encounter issues:

1. Google's official help: https://support.google.com/webmasters
2. Search Console documentation: https://developers.google.com/search
3. Community forums: https://support.google.com/webmasters/community

---

**Remember:** Search Console is your direct line to Google. Use it religiously and let data guide your SEO strategy!

Good luck! 🚀
