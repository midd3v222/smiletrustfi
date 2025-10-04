import { analyticsTracker } from '@/lib/analytics.js';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    // Check for admin authentication (you may want to implement proper auth)
    const authHeader = request.headers.get('authorization');
    if (authHeader !== 'Bearer ' + process.env.ADMIN_TOKEN) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const url = new URL(request.url);
    const timeframe = url.searchParams.get('timeframe') || '7d';
    const format = url.searchParams.get('format') || 'detailed';

    // Get comprehensive analytics data
    const metrics = await analyticsTracker.getStats(timeframe);
    
    if (format === 'summary') {
      return NextResponse.json({
        timeframe,
        summary: {
          totalPageViews: metrics.totals?.pageViews || '0',
          todayPageViews: metrics.pageViews?.today || '0',
          topTreatment: getTopTreatment(metrics.treatmentInterest),
          apiUsage: metrics.apiUsage || {}
        }
      });
    }

    return NextResponse.json(metrics);
  } catch (error) {
    console.error('Metrics API error:', error);
    return NextResponse.json({ error: 'Failed to fetch metrics' }, { status: 500 });
  }
}

function getTopTreatment(treatmentInterest) {
  const treatments = Object.entries(treatmentInterest);
  treatments.sort((a, b) => parseInt(b[1]) - parseInt(a[1]));
  return treatments.length > 0 ? treatments[0] : ['None', '0'];
}

// Export metrics functionality for internal use
export async function trackConversion(conversionType, value = 1) {
  try {
    const dateKey = new Date().toISOString().split('T')[0];
    // This would track specific conversion events
    console.log(`Tracking conversion: ${conversionType}, value: ${value}, date: ${dateKey}`);
    return true;
  } catch (error) {
    console.error('Conversion tracking failed:', error);
    return false;
  }
}