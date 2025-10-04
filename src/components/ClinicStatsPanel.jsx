'use client';

import { useState, useEffect } from 'react';
import { Search, TrendingUp, Award, MousePointerClick } from 'lucide-react';

export default function ClinicStatsPanel() {
  const [topClinics, setTopClinics] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState(null);
  const [totalClinicsInStore, setTotalClinicsInStore] = useState(0);

  useEffect(() => {
    fetchTopClinics();
  }, []);

  const fetchTopClinics = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/admin/clinic-stats?limit=10');
      const data = await response.json();
      
      if (response.ok) {
        setTopClinics(data.topClinics || []);
        setTotalClinicsInStore(data.totalClinics || 0);
      } else {
        setError(data.error || 'Failed to load clinic stats');
      }
    } catch (err) {
      setError('Error loading clinic statistics');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    setSearching(true);
    setError(null);
    
    try {
      const response = await fetch(`/api/admin/clinic-stats?search=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();
      
      if (response.ok) {
        setSearchResults(data.results || []);
      } else {
        setError(data.error || 'Failed to search clinics');
      }
    } catch (err) {
      setError('Error searching clinics');
      console.error('Search error:', err);
    } finally {
      setSearching(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setError(null);
  };

  const ClinicRow = ({ clinic, rank }) => (
    <div className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0">
      <div className="flex items-center gap-4 flex-1">
        {rank && (
          <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
            rank === 1 ? 'bg-yellow-100 text-yellow-700' :
            rank === 2 ? 'bg-gray-100 text-gray-700' :
            rank === 3 ? 'bg-orange-100 text-orange-700' :
            'bg-blue-50 text-blue-600'
          }`}>
            {rank}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-gray-900 truncate">{clinic.name}</h4>
            {clinic.isSponsored && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                <Award size={10} className="mr-1" />
                Verified
              </span>
            )}
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span>Rating: {clinic.rating?.toFixed(1) || 'N/A'}</span>
            <span>•</span>
            <span>ID: {clinic.clinicId.substring(0, 12)}...</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg">
        <MousePointerClick size={16} className="text-green-600" />
        <span className="font-bold text-green-700">{clinic.clicks}</span>
        <span className="text-xs text-green-600">clicks</span>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Search Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Search size={20} className="text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Search Clinic Statistics</h3>
          </div>
          <span className="text-xs text-gray-500">
            {totalClinicsInStore} clinic{totalClinicsInStore !== 1 ? 's' : ''} tracked
          </span>
        </div>
        
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter clinic name to search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
            <button
              type="submit"
              disabled={searching || !searchQuery.trim()}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium"
            >
              {searching ? 'Searching...' : 'Search'}
            </button>
            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
              >
                Clear
              </button>
            )}
          </div>
        </form>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-gray-900">Search Results</h4>
              <span className="text-sm text-gray-500">{searchResults.length} clinic(s) found</span>
            </div>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              {searchResults.map((clinic) => (
                <ClinicRow key={clinic.clinicId} clinic={clinic} />
              ))}
            </div>
          </div>
        )}

        {searchQuery && searchResults.length === 0 && !searching && (
          <div className="mt-6 text-center p-8 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-600 text-sm">No clinics found matching "{searchQuery}"</p>
            <p className="text-gray-500 text-xs mt-2">Clinics appear here after users click on them</p>
            <p className="text-gray-400 text-xs mt-1">Try searching for clinics that have been clicked or try a different term</p>
          </div>
        )}

        {!searchQuery && !searching && searchResults.length === 0 && (
          <div className="mt-6 text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 text-sm">💡 Enter a clinic name above to search for specific clinic statistics</p>
          </div>
        )}
      </div>

      {/* Top Clinics Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <TrendingUp size={20} className="text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">Top 10 Most Clicked Clinics</h3>
          </div>
          <button
            onClick={fetchTopClinics}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
          >
            Refresh
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800">
            {error}
          </div>
        )}

        {loading ? (
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="animate-pulse flex items-center gap-4 p-4">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
                <div className="w-20 h-8 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        ) : topClinics.length > 0 ? (
          <>
            <div className="mb-3 text-sm text-gray-600">
              Showing top {topClinics.length} of {totalClinicsInStore} clinic{totalClinicsInStore !== 1 ? 's' : ''}
            </div>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              {topClinics.map((clinic, index) => (
                <ClinicRow key={clinic.clinicId} clinic={clinic} rank={index + 1} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center p-12 bg-gray-50 rounded-lg border border-gray-200">
            <MousePointerClick size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600 font-medium mb-2">No clinic data available yet</p>
            <p className="text-gray-500 text-sm mb-4">
              Clinic clicks will appear here once users start engaging with clinic listings
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-xs text-blue-800">
                <strong>How it works:</strong> When users browse clinics and click on them, 
                they'll automatically appear here with their click counts.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

