import { analyticsTracker } from '@/lib/analytics.js';

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const timeframe = url.searchParams.get('timeframe') || '7d';
    const format = url.searchParams.get('format') || 'summary';
    
    // Get basic stats
    const stats = await analyticsTracker.getStats(timeframe);
    
    // For detailed format, return the stats as-is since they already have all the data
    // No need to wrap them in a 'detailed' property
    return Response.json(stats);
  } catch (error) {
    console.error('Failed to fetch analytics:', error);
    return Response.json({ error: 'Failed to fetch analytics' }, { status: 500 });
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
