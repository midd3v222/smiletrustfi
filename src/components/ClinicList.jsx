'use client';

import { Star, MapPin, ExternalLink, Shield, Users } from "lucide-react";

function ClinicCard({ clinic }) {
  const destinationUrl = clinic.website || clinic.maps_url;

  const handleClinicClick = async () => {
    // Track clinic card click
    try {
      const clinicData = {
        clinicId: clinic.place_id,
        clinicName: clinic.name,
        rating: clinic.rating,
        isSponsored: clinic.isSponsored || false,
        clickType: 'card',
        timestamp: new Date().toISOString()
      };
      
      // Track the click
      await fetch('/api/analytics/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'clinic-click',
          eventType: 'clinic-card-click',
          data: clinicData
        })
      });
      
      // Store clinic metadata for admin dashboard
      await fetch('/api/admin/clinic-stats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'update-metadata',
          clinicId: clinic.place_id,
          clinicName: clinic.name,
          rating: clinic.rating,
          isSponsored: clinic.isSponsored || false
        })
      });
    } catch (error) {
      console.error('Failed to track clinic click:', error);
    }
  };

  const handleMapsClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Track maps button click
    try {
      const clinicData = {
        clinicId: clinic.place_id,
        clinicName: clinic.name,
        rating: clinic.rating,
        isSponsored: clinic.isSponsored || false,
        clickType: 'maps-button',
        timestamp: new Date().toISOString()
      };
      
      // Track the click
      await fetch('/api/analytics/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'clinic-click',
          eventType: 'clinic-maps-click',
          data: clinicData
        })
      });
      
      // Store clinic metadata for admin dashboard
      await fetch('/api/admin/clinic-stats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'update-metadata',
          clinicId: clinic.place_id,
          clinicName: clinic.name,
          rating: clinic.rating,
          isSponsored: clinic.isSponsored || false
        })
      });
    } catch (error) {
      console.error('Failed to track maps click:', error);
    }
    
    window.open(clinic.maps_url, '_blank', 'noopener,noreferrer');
  };

  return (
    <a
      href={destinationUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClinicClick}
      className="block card p-4 sm:p-6 hover:shadow-lg transition-all duration-200 group relative overflow-hidden"
    >
      {/* Professional hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start gap-4 mb-4 sm:flex-row flex-col">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 sm:gap-3 mb-2">
              <h3 className="font-semibold text-gray-900 text-base sm:text-lg group-hover:text-blue-700 transition-colors leading-snug line-clamp-2">
                {clinic.name}
              </h3>
              {clinic.isSponsored && (
                <div className="flex items-center gap-1 text-[10px] sm:text-xs bg-blue-600 text-white font-medium px-2 py-1 rounded-md whitespace-nowrap">
                  <Shield size={12} />
                  <span>Verified</span>
                </div>
              )}
            </div>
          </div>
          <div className="flex sm:flex-col mt-1 sm:mt-0 items-center sm:items-end gap-2 sm:gap-1">
            <div className="flex items-center gap-1 text-xs sm:text-sm bg-green-100 text-green-800 font-semibold px-2.5 sm:px-3 py-1 rounded-lg border border-green-200">
              <Star size={14} fill="currentColor" />
              <span>{clinic.rating.toFixed(1)}</span>
            </div>
            <span className="text-[10px] sm:text-xs text-gray-500">Trusted Rating</span>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Users size={14} />
            {clinic.user_ratings_total.toLocaleString()} patients
          </span>
          <span className="flex items-center gap-1">
            <Shield size={14} />
            Verified reviews
          </span>
        </div>

        <div className="flex items-start gap-2.5 sm:gap-3 mb-2.5 sm:mb-4 text-gray-700">
          <MapPin size={18} className="flex-shrink-0 mt-0.5 text-gray-500" />
          <span className="text-xs sm:text-sm leading-relaxed line-clamp-2">{clinic.address}</span>
        </div>

        <div className="flex items-center justify-between pt-2.5 sm:pt-4 border-t border-gray-100">
          <button
            onClick={handleMapsClick}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs sm:text-sm px-3.5 sm:px-4 py-2 rounded-lg transition-colors"
          >
            <MapPin size={16} />
            <span>Show on Maps</span>
            <ExternalLink size={14} />
          </button>
        </div>
      </div>
    </a>
  );
}

export default function ClinicList({ clinics, treatmentType = null, location = null }) {
  if (!clinics || clinics.length === 0) {
    return (
      <div className="text-center mt-12">
        <div className="glass-elevated p-8 rounded-xl max-w-lg mx-auto border border-gray-200">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
              <MapPin size={14} className="text-gray-500" />
            </div>
            <h3 className="font-semibold text-gray-800">No Clinics Found</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            We couldn't find any certified dental professionals in this area.
          </p>
          <p className="text-gray-500 text-xs">
            Try expanding your search radius or browse popular dental tourism destinations.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="mt-10" aria-label="Dental clinics directory">
      <div className="mb-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
            <Shield size={12} className="text-white" />
          </div>
          <h3 className="font-semibold text-blue-900">Verified Professionals</h3>
        </div>
        <p className="text-blue-800 text-sm">
          Found {clinics.length} certified dental clinic{clinics.length !== 1 ? 's' : ''} specializing in cosmetic dentistry
          {treatmentType && ` • ${treatmentType} specialists`}
          {location && ` • Located near ${location}`}
        </p>
      </div>
      <div className="grid gap-3 sm:gap-5" role="list">
        {clinics.map((clinic, index) => (
          <div key={clinic.place_id} className="animate-fade-in" style={{animationDelay: `${index * 100}ms`}} role="listitem">
            <ClinicCard clinic={clinic} />
          </div>
        ))}
      </div>
    </section>
  );
}
