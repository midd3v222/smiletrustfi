// Simple in-memory analytics fallback when Redis is not available
// This provides basic tracking functionality without external dependencies

class InMemoryAnalytics {
  constructor() {
    this.data = {
      pageViews: {},
      interactions: {},
      treatmentInterest: {},
      apiUsage: {},
      clinicClicks: {}
    };
  }

  // Track page views
  trackPageView(page, country = 'unknown') {
    const today = new Date().toISOString().split('T')[0];
    
    // Daily page views
    const dailyKey = `${page}:${today}`;
    this.data.pageViews[dailyKey] = (this.data.pageViews[dailyKey] || 0) + 1;
    
    // Total page views
    const totalKey = `${page}:total`;
    this.data.pageViews[totalKey] = (this.data.pageViews[totalKey] || 0) + 1;
    
    // Country tracking
    const countryKey = `${country}:total`;
    this.data.countries = this.data.countries || {};
    this.data.countries[countryKey] = (this.data.countries[countryKey] || 0) + 1;
    
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

  // Track clinic clicks
  trackClinicClick(clickType, data = {}) {
    const today = new Date().toISOString().split('T')[0];
    
    // Daily clinic clicks
    const dailyKey = `${clickType}:${today}`;
    this.data.clinicClicks[dailyKey] = (this.data.clinicClicks[dailyKey] || 0) + 1;
    
    // Total clinic clicks
    const totalKey = `${clickType}:total`;
    this.data.clinicClicks[totalKey] = (this.data.clinicClicks[totalKey] || 0) + 1;
    
    // Track all clinic clicks
    const allKey = 'all:total';
    this.data.clinicClicks[allKey] = (this.data.clinicClicks[allKey] || 0) + 1;
    
    // Track sponsored vs organic
    if (data.isSponsored) {
      const sponsoredKey = 'sponsored:total';
      this.data.clinicClicks[sponsoredKey] = (this.data.clinicClicks[sponsoredKey] || 0) + 1;
    } else {
      const organicKey = 'organic:total';
      this.data.clinicClicks[organicKey] = (this.data.clinicClicks[organicKey] || 0) + 1;
    }
    
    // Track by specific clinic
    if (data.clinicId) {
      const clinicKey = `clinic:${data.clinicId}:total`;
      this.data.clinicClicks[clinicKey] = (this.data.clinicClicks[clinicKey] || 0) + 1;
    }
    
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
        today: String(this.data.pageViews[`home:${today}`] || 0),
        home: String(this.data.pageViews['home:total'] || 0),
        about: String(this.data.pageViews['about:total'] || 0),
        treatments: String(this.data.pageViews['treatments:total'] || 0),
        destinations: String(this.data.pageViews['destinations:total'] || 0)
      },
      interactions: {
        generateClick: String(this.data.interactions['generate-click:total'] || 0),
        clinicBrowse: String(this.data.interactions['clinic-browse:total'] || 0),
        imageUpload: String(this.data.interactions['image-upload:total'] || 0)
      },
      apiUsage: {
        generateSmile: String(this.data.apiUsage['/api/generate-smile:success:total'] || 0),
        findClinics: String(this.data.apiUsage['/api/find-clinics:success:total'] || 0),
        getLocation: String(this.data.apiUsage['/api/get-location-details:success:total'] || 0)
      },
      treatmentInterest: {
        veneers: String(
          (this.data.treatmentInterest['veneers:button:total'] || 0) + 
          (this.data.treatmentInterest['veneers:page:total'] || 0) + 
          (this.data.treatmentInterest['veneers:page-view:total'] || 0)
        ),
        crowns: String(
          (this.data.treatmentInterest['zirconia:button:total'] || 0) + 
          (this.data.treatmentInterest['zirconia:page:total'] || 0) + 
          (this.data.treatmentInterest['zirconia-crowns:page-view:total'] || 0)
        ),
        makeover: String(
          (this.data.treatmentInterest['makeover:button:total'] || 0) + 
          (this.data.treatmentInterest['makeover:page:total'] || 0) + 
          (this.data.treatmentInterest['smile-makeover:page-view:total'] || 0)
        ),
        implants: String(
          (this.data.treatmentInterest['implants:button:total'] || 0) + 
          (this.data.treatmentInterest['implants:page:total'] || 0) + 
          (this.data.treatmentInterest['implants:page-view:total'] || 0)
        )
      },
      clinicClicks: {
        total: String(this.data.clinicClicks['all:total'] || 0),
        cardClicks: String(this.data.clinicClicks['clinic-card-click:total'] || 0),
        mapsClicks: String(this.data.clinicClicks['clinic-maps-click:total'] || 0),
        sponsored: String(this.data.clinicClicks['sponsored:total'] || 0),
        organic: String(this.data.clinicClicks['organic:total'] || 0)
      },
      totals: {
        pageViews: String(this.data.pageViews['home:total'] || 0),
        generateClicks: String(this.data.interactions['generate-click:total'] || 0),
        clinicBrowses: String(this.data.interactions['clinic-browse:total'] || 0),
        imageUploads: String(this.data.interactions['image-upload:total'] || 0),
        clinicClicks: String(this.data.clinicClicks['all:total'] || 0)
      },
      countries: {
        'United States': String(this.data.countries?.['US:total'] || 0),
        'United Kingdom': String(this.data.countries?.['GB:total'] || 0),
        'Canada': String(this.data.countries?.['CA:total'] || 0),
        'Germany': String(this.data.countries?.['DE:total'] || 0),
        'France': String(this.data.countries?.['FR:total'] || 0),
        'Australia': String(this.data.countries?.['AU:total'] || 0),
        'Netherlands': String(this.data.countries?.['NL:total'] || 0),
        'Sweden': String(this.data.countries?.['SE:total'] || 0),
        'Norway': String(this.data.countries?.['NO:total'] || 0),
        'Denmark': String(this.data.countries?.['DK:total'] || 0),
        'Unknown': String(this.data.countries?.['unknown:total'] || 0)
      }
    };
  }
}

// Singleton instance
export const fallbackAnalytics = new InMemoryAnalytics();
