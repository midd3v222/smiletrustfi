'use client';

import { useEffect } from 'react';
import { clientAnalytics } from '@/lib/analytics';

export function PageViewTracker({ pageName }) {
  useEffect(() => {
    console.log(`Tracking page view for: ${pageName}`);
    clientAnalytics.trackPageView(pageName);
  }, [pageName]);

  return null; // This component doesn't render anything
}
