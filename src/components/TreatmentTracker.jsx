'use client';

import { useEffect } from 'react';
import { clientAnalytics } from '@/lib/analytics';

export function TreatmentTracker({ treatmentId }) {
  useEffect(() => {
    clientAnalytics.trackTreatmentInterest(treatmentId, 'page-view');
  }, [treatmentId]);

  return null; // This component doesn't render anything
}
