import { analyticsTracker } from '@/lib/analytics.js';

export async function POST(request) {
  try {
    const { type, page, eventType, data, treatment, context, endpoint, status } = await request.json();

    switch (type) {
      case 'pageview':
        await analyticsTracker.trackPageView(page || 'unknown');
        break;
        
      case 'interaction':
        await analyticsTracker.trackInteraction(eventType, data);
        break;
        
      case 'treatment':
        await analyticsTracker.trackTreatmentInterest(treatment, context);
        break;
        
      case 'api':
        await analyticsTracker.trackApiUsage(endpoint, status);
        break;
        
      case 'clinic-click':
        await analyticsTracker.trackClinicClick(eventType, data);
        break;
        
      default:
        return Response.json({ error: 'Unknown tracking type' }, { status: 400 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('Analytics tracking error:', error);
    return Response.json({ error: 'Tracking failed' }, { status: 500 });
  }
}
