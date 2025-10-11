'use client';

import { useState, useEffect } from 'react';
import { Globe, Users, TrendingUp } from 'lucide-react';

export default function CountryStatsPanel() {
  const [countryStats, setCountryStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCountryStats();
  }, []);

  const fetchCountryStats = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/analytics/stats?timeframe=30d&format=detailed');
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch country stats');
      }
      
      setCountryStats(data.countries || {});
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const CountryRow = ({ country, count, rank }) => {
    const percentage = countryStats ? 
      (parseInt(count) / Object.values(countryStats).reduce((sum, val) => sum + parseInt(val), 0)) * 100 : 0;
    
    return (
      <div className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-700 last:border-b-0">
        <div className="flex items-center gap-4 flex-1">
          {rank && (
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
              rank === 1 ? 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300' :
              rank === 2 ? 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300' :
              rank === 3 ? 'bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300' :
              'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
            }`}>
              {rank}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Globe size={16} className="text-blue-600 dark:text-blue-400" />
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">{country}</h4>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {percentage.toFixed(1)}% of total users
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-lg">
          <Users size={16} className="text-blue-600 dark:text-blue-400" />
          <span className="font-bold text-blue-700 dark:text-blue-300">{count}</span>
          <span className="text-xs text-blue-600 dark:text-blue-400">users</span>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 p-4">
                <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                </div>
                <div className="w-20 h-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-red-200 dark:border-red-800 p-6">
        <div className="text-center">
          <div className="text-red-600 dark:text-red-400 font-medium mb-2">Country Stats Unavailable</div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{error}</p>
          <button 
            onClick={fetchCountryStats}
            className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          >
            Refresh
          </button>
        </div>
      </div>
    );
  }

  if (!countryStats) return null;

  // Sort countries by user count
  const sortedCountries = Object.entries(countryStats)
    .filter(([_, count]) => parseInt(count) > 0)
    .sort(([_, a], [__, b]) => parseInt(b) - parseInt(a));

  const totalUsers = Object.values(countryStats).reduce((sum, count) => sum + parseInt(count), 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Globe size={20} className="text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">User Geography</h3>
          </div>
          <button
            onClick={fetchCountryStats}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm"
          >
            Refresh
          </button>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Users size={16} className="text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-900 dark:text-blue-100">Total Users</span>
            </div>
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">{totalUsers}</div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Globe size={16} className="text-green-600 dark:text-green-400" />
              <span className="text-sm font-medium text-green-900 dark:text-green-100">Countries</span>
            </div>
            <div className="text-2xl font-bold text-green-700 dark:text-green-300">{sortedCountries.length}</div>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={16} className="text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-medium text-purple-900 dark:text-purple-100">Top Country</span>
            </div>
            <div className="text-lg font-bold text-purple-700 dark:text-purple-300">
              {sortedCountries.length > 0 ? sortedCountries[0][0] : 'N/A'}
            </div>
          </div>
        </div>

        {/* Country List */}
        {sortedCountries.length > 0 ? (
          <>
            <div className="mb-3 text-sm text-gray-600 dark:text-gray-300">
              Showing {sortedCountries.length} countries with user activity
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              {sortedCountries.map(([country, count], index) => (
                <CountryRow 
                  key={country} 
                  country={country} 
                  count={count} 
                  rank={index + 1}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center p-12 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <Globe size={48} className="mx-auto text-gray-400 dark:text-gray-500 mb-4" />
            <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">No country data available yet</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
              Country statistics will appear here once users start visiting your site
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-xs text-blue-800 dark:text-blue-200">
                <strong>How it works:</strong> We automatically detect user locations based on their IP address 
                and track visits by country for geographic insights.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
