'use client';

import { useState, useEffect } from 'react';

export default function AnalyticsDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeframe, setTimeframe] = useState('7d');
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    fetchStats();
  }, [timeframe]);

  // Auto-refresh every 30 seconds to keep data current
  useEffect(() => {
    const interval = setInterval(() => {
      fetchStats(false); // Don't show loading during auto-refresh
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, [timeframe]);

  const fetchStats = async (showLoading = true) => {
    if (showLoading) {
      setLoading(true);
    }
    setError(null);
    
    try {
      const response = await fetch(`/api/analytics/stats?timeframe=${timeframe}&format=detailed`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch stats');
      }
      
      setStats(data);
      setLastUpdated(new Date());
    } catch (err) {
      setError(err.message);
    } finally {
      if (showLoading) {
        setLoading(false);
      }
    }
  };

  const StatCard = ({ title, value, subtitle, trend, icon: Icon }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{value}</p>
          {subtitle && <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{subtitle}</p>}
        </div>
        {Icon && <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
      </div>
      {trend && (
        <div className="mt-4 flex items-center">
          <span className={`text-xs font-medium ${
            trend > 0 ? 'text-green-600 dark:text-green-400' : trend < 0 ? 'text-red-600 dark:text-red-400' : 'text-gray-500 dark:text-gray-400'
          }`}>
            {trend > 0 ? '+' : ''}{trend}%
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">vs previous period</span>
        </div>
      )}
    </div>
  );

  const ProcessChart = ({ title, data }) => {
    // Filter out empty or invalid data
    const validEntries = Object.entries(data || {}).filter(([key, value]) => {
      const numValue = parseInt(value);
      return !isNaN(numValue) && numValue >= 0;
    });
    
    if (validEntries.length === 0) {
      return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">No data available</p>
        </div>
      );
    }
    
    const maxValue = Math.max(...validEntries.map(([_, v]) => parseInt(v)));
    
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">{title}</h3>
        <div className="space-y-3">
          {validEntries.map(([key, value]) => {
            const numValue = parseInt(value);
            const percentage = maxValue > 0 ? (numValue / maxValue) * 100 : 0;
            
            return (
              <div key={key} className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </span>
                <div className="flex items-center">
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 w-32 mr-3">
                    <div 
                      className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all" 
                      style={{ width: `${Math.min(100, percentage)}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100 min-w-[40px] text-right">{value}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-6"></div>
          <div className="space-y-4">
            <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-red-200 dark:border-red-800 p-8">
        <div className="text-center">
          <div className="text-red-600 dark:text-red-400 font-medium mb-2">Analytics Unavailable</div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{error}</p>
          <button 
            onClick={fetchStats}
            className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          >
            Refresh
          </button>
        </div>
      </div>
    );
  }

  if (!stats) return null;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Website Analytics</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Overview of your SmileTrust website performance
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <select 
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
          <button 
            onClick={() => fetchStats(true)}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm"
          >
            Refresh
          </button>
          {lastUpdated && (
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </span>
          )}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Page Views"
          value={stats.totals?.pageViews || '0'}
          subtitle="All time"
        />
        <StatCard 
          title="Today's Page Views"
          value={stats.pageViews?.today || '0'}
          subtitle="Current day"
        />
        <StatCard 
          title="Clinic Clicks"
          value={stats.clinicClicks?.total || '0'}
          subtitle="Total clinic engagements"
        />
        <StatCard 
          title="Smile Generations"
          value={stats.apiUsage?.generateSmile || '0'}
          subtitle="AI processing requests"
        />
      </div>

      {/* Treatment Interest */}
      <ProcessChart 
        title="Treatment Interest"
        data={stats.treatmentInterest || {}}
      />

      {/* Clinic Engagement */}
      <ProcessChart 
        title="Clinic Engagement"
        data={{
          'Card Clicks': stats.clinicClicks?.cardClicks || '0',
          'Maps Clicks': stats.clinicClicks?.mapsClicks || '0',
          'Sponsored': stats.clinicClicks?.sponsored || '0',
          'Organic': stats.clinicClicks?.organic || '0'
        }}
      />

      {/* User Interactions */}
      <ProcessChart 
        title="User Interactions"
        data={stats.totals || {}}
      />

      {/* Website Performance */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Popular Pages</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-300">Home Page</span>
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{stats.pageViews?.home || '0'}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-300">About Page</span>
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{stats.pageViews?.about || '0'}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-300">Treatments Page</span>
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{stats.pageViews?.treatments || '0'}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-300">Destinations Page</span>
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{stats.pageViews?.destinations || '0'}</span>
          </div>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="w-5 h-5 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">i</span>
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Analytics Status:</strong> {stats.redisEnabled ? 'Active' : 'Limited'} 
              {stats.redisEnabled ? ' - Full tracking enabled with Redis' : ' - Basic in-memory tracking only'}
            </p>
            <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
              Last updated: {new Date(stats.timestamp).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
