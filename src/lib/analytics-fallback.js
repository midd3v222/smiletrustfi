// Simple in-memory analytics fallback when Redis is not available
// This provides basic tracking functionality without external dependencies

class InMemoryAnalytics {
  constructor() {
    this.data = {
      pageViews: {},
      interactions: {},
      treatmentInterest: {},
      apiUsage: {}
    };
  }

  // Track page views
  trackPageView(page) {
    const today = new Date().toISOString().split('T')[0];
    
    // Daily page views
    const dailyKey = `${page}:${today}`;
    this.data.pageViews[dailyKey] = (this.data.pageViews[dailyKey] || 0) + 1;
    
    // Total page views
    const totalKey = `${page}:total`;
    this.data.pageViews[totalKey] = (this.data.pageViews[totalKey] || 0) + 1;
    
    return true;
  }

  // Track interactions
  trackInteraction(eventType, data = {}) {
    const today = new Date().toISOString().split('T')[0];
    
    // Daily interactions
    const dailyKey = `${eventType}:${today}`;
    this.data.interactions[dailyKey] = (this.data.interactions[dailyKey] || 0) + 1;
    
    // Total interactions
    const totalKey = `${eventType}:total`;
    this.data.interactions[totalKey] = (this.data.interactions[totalKey] || 0) + 1;
    
    return true;
  }

  // Track treatment interest
  trackTreatmentInterest(treatment, context = 'page') {
    const today = new Date().toISOString().split('T')[0];
    
    // Daily treatment interest
    const dailyKey = `${treatment}:${context}:${today}`;
    this.data.treatmentInterest[dailyKey] = (this.data.treatmentInterest[dailyKey] || 0) + 1;
    
    // Total treatment interest
    const totalKey = `${treatment}:${context}:total`;
    this.data.treatmentInterest[totalKey] = (this.data.treatmentInterest[totalKey] || 0) + 1;
    
    return true;
  }

  // Track API usage
  trackApiUsage(endpoint, status = 'success') {
    const today = new Date().toISOString().split('T')[0];
    
    // Daily API usage
    const dailyKey = `${endpoint}:${status}:${today}`;
    this.data.apiUsage[dailyKey] = (this.data.apiUsage[dailyKey] || 0) + 1;
    
    // Total API usage
    const totalKey = `${endpoint}:${status}:total`;
    this.data.apiUsage[totalKey] = (this.data.apiUsage[totalKey] || 0) + 1;
    
    return true;
  }

  // Get statistics
  getStats(timeframe = '7d') {
    const today = new Date().toISOString().split('T')[0];
    
    return {
      timeframe,
      timestamp: new Date().toISOString(),
      redisEnabled: false,
      pageViews: {
        today: this.data.pageViews[`home:${today}`] || '0'
      },
      interactions: {},
      apiUsage: {},
      treatmentInterest: {},
      totals: {
        pageViews: this.data.pageViews['home:total'] || '0',
        generateClicks: this.data.interactions['generate-click:total'] || '0',
        clinicBrowses: this.data.interactions['clinic-browse:total'] || '0'
      }
    };
  }
}

// Singleton instance
export const fallbackAnalytics = new InMemoryAnalytics();
