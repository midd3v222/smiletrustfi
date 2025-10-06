import { redisGet, redisIncr, isRedisConfigured } from './redis.js';
import { fallbackAnalytics } from './analytics-fallback.js';

// Analytics tracking class
export class AnalyticsTracker {
  constructor() {
    this.isRedisEnabled = isRedisConfigured();
  }

  // Track page views
  async trackPageView(page, country = 'unknown') {
    if (!this.isRedisEnabled) {
      return fallbackAnalytics.trackPageView(page, country);
    }

    const timestamp = new Date().toISOString();
    const dateKey = new Date().toISOString().split('T')[0];
    
    try {
      // Daily page views
      await redisIncr(`pageview:daily:${page}:${dateKey}`);
      
      // Total page views
      await redisIncr(`pageview:total:${page}`);
      
      // Page views by hour
      const hour = new Date().getHours();
      await redisIncr(`pageview:hourly:${page}:${dateKey}:${hour}`);
      
      // Unique visitors (simplified - using daily bucket)
      await redisIncr(`unique:daily:${dateKey}`);
      
      // Country tracking
      await redisIncr(`country:${country}:total`);
      await redisIncr(`country:${country}:daily:${dateKey}`);
      
      return true;
    } catch (error) {
      console.error('Failed to track page view:', error);
      // Fallback to in-memory tracking
      return fallbackAnalytics.trackPageView(page, country);
    }
  }

  // Track user interactions
  async trackInteraction(eventType, data = {}) {
    const timestamp = new Date().toISOString();
    const dateKey = new Date().toISOString().split('T')[0];
    
    try {
      // Specific event tracking
      await redisIncr(`interaction:${eventType}:daily:${dateKey}`);
      await redisIncr(`interaction:${eventType}:total`);
      
      // Store additional data if provided
      if (Object.keys(data).length > 0) {
        const dataKey = `interaction_data:${eventType}:${timestamp}`;
        // Store JSON data (implementation depends on Redis setup)
      }
      
      return true;
    } catch (error) {
      console.error('Failed to track interaction:', error);
      return false;
    }
  }

  // Track API usage
  async trackApiUsage(endpoint, status = 'success') {
    const dateKey = new Date().toISOString().split('T')[0];
    
    try {
      await redisIncr(`api:${endpoint}:${status}:daily:${dateKey}`);
      await redisIncr(`api:${endpoint}:${status}:total`);
      await redisIncr(`api:total:requests`);
      
      return true;
    } catch (error) {
      console.error('Failed to track API usage:', error);
      return false;
    }
  }

  // Track treatment interest
  async trackTreatmentInterest(treatment, context = 'page') {
    const dateKey = new Date().toISOString().split('T')[0];
    
    try {
      await redisIncr(`treatment:${treatment}:${context}:daily:${dateKey}`);
      await redisIncr(`treatment:${treatment}:${context}:total`);
      
      return true;
    } catch (error) {
      console.error('Failed to track treatment interest:', error);
      return false;
    }
  }

  // Track clinic clicks
  async trackClinicClick(clickType, data = {}) {
    if (!this.isRedisEnabled) {
      return fallbackAnalytics.trackClinicClick(clickType, data);
    }

    const dateKey = new Date().toISOString().split('T')[0];
    
    try {
      // Track overall clinic clicks
      await redisIncr(`clinic-click:${clickType}:daily:${dateKey}`);
      await redisIncr(`clinic-click:${clickType}:total`);
      await redisIncr(`clinic-click:all:total`);
      
      // Track sponsored vs non-sponsored clicks
      if (data.isSponsored) {
        await redisIncr(`clinic-click:sponsored:total`);
      } else {
        await redisIncr(`clinic-click:organic:total`);
      }
      
      // Track by specific clinic
      if (data.clinicId) {
        await redisIncr(`clinic:${data.clinicId}:clicks:total`);
      }
      
      return true;
    } catch (error) {
      console.error('Failed to track clinic click:', error);
      return fallbackAnalytics.trackClinicClick(clickType, data);
    }
  }

  // Get statistics
  async getStats(timeframe = '7d') {
    const stats = {
      timeframe,
      timestamp: new Date().toISOString(),
      redisEnabled: this.isRedisEnabled,
      pageViews: {},
      interactions: {},
      apiUsage: {},
      treatmentInterest: {},
      clinicClicks: {},
      totals: {},
      countries: {}
    };

    if (!this.isRedisEnabled) {
      return fallbackAnalytics.getStats(timeframe);
    }

    try {
      // This is a simplified version - in production you'd want more sophisticated queries
      const dateKey = new Date().toISOString().split('T')[0];
      
      // Page views (total for all pages)
      stats.pageViews.today = await redisGet(`pageview:daily:home:${dateKey}`) || '0';
      stats.pageViews.home = await redisGet(`pageview:total:home`) || '0';
      stats.pageViews.about = await redisGet(`pageview:total:about`) || '0';
      stats.pageViews.treatments = await redisGet(`pageview:total:treatments`) || '0';
      stats.pageViews.destinations = await redisGet(`pageview:total:destinations`) || '0';
      
      // Most popular treatments
      stats.treatmentInterest.veneers = await redisGet(`treatment:veneers:page:total`) || '0';
      stats.treatmentInterest.crowns = await redisGet(`treatment:zirconia:page:total`) || '0';
      stats.treatmentInterest.makeover = await redisGet(`treatment:makeover:page:total`) || '0';
      stats.treatmentInterest.implants = await redisGet(`treatment:implants:page:total`) || '0';
      
      // API usage
      stats.apiUsage.generateSmile = await redisGet(`api:/api/generate-smile:success:total`) || '0';
      stats.apiUsage.findClinics = await redisGet(`api:/api/find-clinics:success:total`) || '0';
      stats.apiUsage.getLocation = await redisGet(`api:/api/get-location-details:success:total`) || '0';
      
      // Clinic clicks
      stats.clinicClicks = {
        total: await redisGet(`clinic-click:all:total`) || '0',
        cardClicks: await redisGet(`clinic-click:clinic-card-click:total`) || '0',
        mapsClicks: await redisGet(`clinic-click:clinic-maps-click:total`) || '0',
        sponsored: await redisGet(`clinic-click:sponsored:total`) || '0',
        organic: await redisGet(`clinic-click:organic:total`) || '0'
      };
      
      // Total interactions
      stats.totals.pageViews = await redisGet(`pageview:total:home`) || '0';
      stats.totals.generateClicks = await redisGet(`interaction:generate-click:total`) || '0';
      stats.totals.clinicBrowses = await redisGet(`interaction:clinic-browse:total`) || '0';
      stats.totals.imageUploads = await redisGet(`interaction:image-upload:total`) || '0';
      stats.totals.clinicClicks = await redisGet(`clinic-click:all:total`) || '0';
      
      // Country data (simplified - in production you'd want to scan all country keys)
      stats.countries = {
        'United States': await redisGet(`country:US:total`) || '0',
        'United Kingdom': await redisGet(`country:GB:total`) || '0',
        'Canada': await redisGet(`country:CA:total`) || '0',
        'Germany': await redisGet(`country:DE:total`) || '0',
        'France': await redisGet(`country:FR:total`) || '0',
        'Australia': await redisGet(`country:AU:total`) || '0',
        'Netherlands': await redisGet(`country:NL:total`) || '0',
        'Sweden': await redisGet(`country:SE:total`) || '0',
        'Norway': await redisGet(`country:NO:total`) || '0',
        'Denmark': await redisGet(`country:DK:total`) || '0',
        'Unknown': await redisGet(`country:unknown:total`) || '0'
      };
      
      return stats;
    } catch (error) {
      console.error('Failed to get statistics:', error);
      // Fallback to in-memory analytics
      return fallbackAnalytics.getStats(timeframe);
    }
  }
}

// Singleton instance
export const analyticsTracker = new AnalyticsTracker();

// Server-side analytics middleware
export async function trackRequest(req, endpoint, status = 'success') {
  try {
    await analyticsTracker.trackApiUsage(endpoint, status);
    
    // Track page view for non-API requests
    if (!endpoint.startsWith('/api')) {
      const page = endpoint || 'home';
      await analyticsTracker.trackPageView(page);
    }
  } catch (error) {
    console.error('Analytics tracking failed:', error);
  }
}

// Client-side analytics helper
export const clientAnalytics = {
  async trackPageView(page) {
    try {
      // Get user's country (simplified approach) with timeout
      let country = 'unknown';
      try {
        country = await Promise.race([
          this.getUserCountry(),
          new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 3000))
        ]);
      } catch (error) {
        console.log('Country detection failed, using unknown:', error.message);
        country = 'unknown';
      }
      
      await fetch('/api/analytics/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'pageview', page, country })
      });
    } catch (error) {
      console.error('Client analytics failed:', error);
    }
  },

  async getUserCountry() {
    try {
      // Try to get country from IP geolocation service
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      return data.country_code || 'unknown';
    } catch (error) {
      // Fallback to unknown if geolocation fails
      return 'unknown';
    }
  },

  async trackInteraction(eventType, data = {}) {
    try {
      await fetch('/api/analytics/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'interaction', eventType, data })
      });
    } catch (error) {
      console.error('Client analytics failed:', error);
    }
  },

  async trackTreatmentInterest(treatment, context = 'button') {
    try {
      await fetch('/api/analytics/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'treatment', treatment, context })
      });
    } catch (error) {
      console.error('Client analytics failed:', error);
    }
  }
};
