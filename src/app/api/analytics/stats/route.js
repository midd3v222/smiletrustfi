import { analyticsTracker } from '@/lib/analytics.js';

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const timeframe = url.searchParams.get('timeframe') || '7d';
    const format = url.searchParams.get('format') || 'summary';
    
    // Get basic stats
    const stats = await analyticsTracker.getStats(timeframe);
    
    if (format === 'detailed') {
      // Get detailed statistics
      const detailedStats = await getDetailedStats(timeframe);
      return Response.json({
        ...stats,
        detailed: detailedStats
      });
    }
    
    return Response.json(stats);
  } catch (error) {
    console.error('Failed to fetch analytics:', error);
    return Response.json({ error: 'Failed to fetch analytics' }, { status: 500 });
  }
}

async function getDetailedStats(timeframe) {
  const detailed = {
    pageViews: {},
    interactions: {},
    apiUsage: {},
    treatmentInterest: {},
    conversions: {}
  };
  
  // Use the analytics tracker instead of direct Redis calls
  try {
    const stats = await analyticsTracker.getStats(timeframe);
    
    // Return detailed stats based on what we have
    return {
      pageViews: {
        home: stats.pageViews?.today || '0',
        about: stats.pageViews?.about || '0',
        treatments: stats.pageViews?.treatments || '0',
        destinations: stats.pageViews?.destinations || '0'
      },
      interactions: {
        generateClick: stats.totals?.generateClicks || '0',
        clinicBrowse: stats.totals?.clinicBrowses || '0',
        imageUpload: stats.totals?.imageUploads || '0'
      },
      apiUsage: {
        generateSmile: stats.apiUsage?.generateSmile || '0',
        findClinics: stats.apiUsage?.findClinics || '0',
        getLocation: stats.apiUsage?.getLocation || '0'
      },
      treatmentInterest: {
        veneers: stats.treatmentInterest?.veneers || '0',
        crowns: stats.treatmentInterest?.crowns || '0',
        makeover: stats.treatmentInterest?.makeover || '0'
      },
      conversions: {
        completedGeneration: '0', // Placeholder
        clinicContact: '0' // Placeholder
      }
    };
  } catch (error) {
    console.error('Failed to get detailed stats:', error);
    return {
      pageViews: {},
      interactions: {},
      apiUsage: {},
      treatmentInterest: {},
      conversions: {}
    };
  }
}

// Real-time endpoint for dashboard
export async function HEAD(request) {
  try {
    const stats = await analyticsTracker.getStats('today');
    return new Response(null, {
      status: 200,
      headers: {
        'X-Total-PageViews': stats.totals.pageViews || '0',
        'X-Today-PageViews': stats.pageViews.today || '0',
        'X-Treatment-Veneers': stats.treatmentInterest.veneers || '0',
        'X-Treatment-Crowns': stats.treatmentInterest.crowns || '0'
      }
    });
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}
