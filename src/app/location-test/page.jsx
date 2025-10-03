"use client";

import { useState } from 'react';

export default function LocationTestPage() {
  const [debugInfo, setDebugInfo] = useState({});
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const runDiagnostics = () => {
    const info = {
      protocol: window.location.protocol,
      hostname: window.location.hostname,
      https: window.location.protocol === 'https:',
      localhost: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1',
      geolocationSupported: !!navigator.geolocation,
      permissionsSupported: !!(navigator.permissions && navigator.permissions.query),
      userAgent: navigator.userAgent,
      platform: navigator.platform,
    };
    setDebugInfo(info);
  };

  const testLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation not supported');
      return;
    }

    setError(null);
    setLocation(null);

    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: new Date(position.timestamp).toISOString()
        });
        setError(null);
      },
      (err) => {
        setError({
          code: err.code,
          message: err.message,
          PERMISSION_DENIED: err.PERMISSION_DENIED,
          POSITION_UNAVAILABLE: err.POSITION_UNAVAILABLE,
          TIMEOUT: err.TIMEOUT
        });
      },
      options
    );
  };

  const checkPermissions = async () => {
    if (navigator.permissions) {
      try {
        const permission = await navigator.permissions.query({ name: 'geolocation' });
        setDebugInfo(prev => ({
          ...prev,
          permissionState: permission.state,
          permissionSupported: true
        }));
      } catch (err) {
        setDebugInfo(prev => ({
          ...prev,
          permissionError: err.message,
          permissionSupported: false
        }));
      }
    }
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Location Services Diagnostic</h1>
        
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="font-semibold mb-2">Quick Actions</h2>
            <div className="space-x-2">
              <button
                onClick={runDiagnostics}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Run Diagnostics
              </button>
              <button
                onClick={checkPermissions}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Check Permissions
              </button>
              <button
                onClick={testLocation}
                className="bg-purple-500 text-white px-4 py-2 rounded"
              >
                Test Location
              </button>
            </div>
          </div>

          {Object.keys(debugInfo).length > 0 && (
            <div className="bg-gray-100 p-4 rounded-lg">
              <h2 className="font-semibold mb-2">Diagnostic Info</h2>
              <pre className="text-sm bg-white p-2 rounded">
                {JSON.stringify(debugInfo, null, 2)}
              </pre>
            </div>
          )}

          {location && (
            <div className="bg-green-100 p-4 rounded-lg">
              <h2 className="font-semibold mb-2">✅ Location Success</h2>
              <pre className="text-sm bg-white p-2 rounded">
                {JSON.stringify(location, null, 2)}
              </pre>
            </div>
          )}

          {error && (
            <div className="bg-red-100 p-4 rounded-lg">
              <h2 className="font-semibold mb-2">❌ Location Error</h2>
              <pre className="text-sm bg-white p-2 rounded">
                {JSON.stringify(error, null, 2)}
              </pre>
              <div className="mt-2 text-sm">
                {error.code === 1 && (
                  <p className="text-red-600">
                    Permission denied. Please check your browser settings and allow location access.
                  </p>
                )}
                {error.code === 2 && (
                  <p className="text-red-600">
                    Position unavailable. Your device may not have GPS or location services disabled.
                  </p>
                )}
                {error.code === 3 && (
                  <p className="text-red-600">
                    Request timeout. Location request took too long.
                  </p>
                )}
              </div>
            </div>
          )}

          <div className="bg-yellow-100 p-4 rounded-lg">
            <h2 className="font-semibold mb-2">Troubleshooting Tips</h2>
            <ul className="text-sm space-y-1">
              <li>• If site is not HTTPS, location services won't work</li>
              <li>• Check browser's location permission settings</li>
              <li>• For iOS Safari, go to Settings &gt; Privacy &gt; Location Services</li>
              <li>• Try clearing browser data and refreshing</li>
              <li>• Check if any extensions are blocking location</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
