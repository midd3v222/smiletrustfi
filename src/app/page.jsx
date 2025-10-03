"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ImageUploader from "../components/ImageUploader";
import ResultDisplay from "../components/ResultDisplay";
import ClinicList from "../components/ClinicList";
import LoadingSpinner from "../components/LoadingSpinner";
import ClinicListSkeleton from "../components/ClinicListSkeleton"; // Import the new skeleton component
import { clientAnalytics } from "../lib/analytics";
import {
  Sparkles,
  Map,
  Building,
  Globe,
  RefreshCw,
  Camera,
  Search,
  Menu,
  X,
} from "lucide-react";

const POPULAR_DESTINATIONS = {
  europe: [
    {
      label: "Antalya",
      icon: Building,
      coords: { lat: 36.8969, lng: 30.7133 },
    },
    {
      label: "Istanbul",
      icon: Globe,
      coords: { lat: 41.0082, lng: 28.9784 },
    },
    {
      label: "Izmir",
      icon: Building,
      coords: { lat: 38.4237, lng: 27.1428 },
    },
  ],
  north_america: [
    {
      label: "Mexico",
      icon: Building,
      coords: { lat: 23.6345, lng: -102.5528 },
    },
    {
      label: "Costa Rica",
      icon: Globe,
      coords: { lat: 9.7489, lng: -83.7534 },
    },
  ],
  other: [
    {
      label: "Thailand",
      icon: Building,
      coords: { lat: 15.87, lng: 100.9925 },
    },
    {
      label: "Hungary",
      icon: Globe,
      coords: { lat: 47.1625, lng: 19.5033 },
    },
  ],
};

export default function HomePage() {
  const [originalImage, setOriginalImage] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [treatment, setTreatment] = useState("veneers");
  const [clinics, setClinics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFindingClinics, setIsFindingClinics] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("nearby");
  const [userCoords, setUserCoords] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [popularDestinations, setPopularDestinations] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showClinicBrowsing, setShowClinicBrowsing] = useState(false);
  const [locationPermissionDenied, setLocationPermissionDenied] = useState(false);

  // Track page view on mount
  useEffect(() => {
    clientAnalytics.trackPageView('home');
  }, []);

  const handleImageUpload = (file) => {
    setOriginalImage(file);
    setGeneratedImage(null);
    setClinics([]);
    setError("");
  };

  const handleGenerateClick = async () => {
    if (!originalImage) return;
    setIsLoading(true);
    setError("");
    setGeneratedImage(null);

    // Track analytics
    clientAnalytics.trackInteraction('generate-click');
    clientAnalytics.trackTreatmentInterest(treatment, 'button');

    const formData = new FormData();
    formData.append("image", originalImage);
    formData.append("treatment", treatment);

    try {
      const response = await fetch("/api/generate-smile", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Something went wrong");
      }

      const data = await response.json();
      setGeneratedImage(data.imageData);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (generatedImage) {
      initializeClinicSearch();
    }
  }, [generatedImage]);

  useEffect(() => {
    if (showClinicBrowsing && !generatedImage) {
      console.log("Direct browsing mode activated, initializing clinic search...");
      initializeClinicSearch();
    }
  }, [showClinicBrowsing]);

  useEffect(() => {
    console.log("Clinics state changed, length:", clinics.length);
    console.log("isFindingClinics:", isFindingClinics);
    console.log("showClinicBrowsing:", showClinicBrowsing);
    console.log("generatedImage:", generatedImage ? "exists" : "null");
  }, [clinics, isFindingClinics, showClinicBrowsing, generatedImage]);

  const initializeClinicSearch = () => {
    console.log("initializeClinicSearch called");
    if (!navigator.geolocation) {
      console.log("Geolocation not supported, falling back to popular destinations");
      setPopularDestinations(POPULAR_DESTINATIONS.europe);
      setActiveTab("popular");
      findPopularClinics();
      return;
    }

    console.log("Geolocation supported, requesting permission...");

    // Check if we're on HTTP (non-localhost) - development fallback
    const isHttpNonLocalhost =
      window.location.protocol === "http:" &&
      !window.location.hostname.includes("localhost") &&
      !window.location.hostname.includes("127.0.0.1");

    if (isHttpNonLocalhost) {
      console.log("HTTP non-localhost detected - using development fallback");
      // For development: use a mock location or fallback
      const mockCoords = { lat: 36.8848, lng: 30.7044 }; // Antalya coordinates
      setUserCoords(mockCoords);
      setPopularDestinations(POPULAR_DESTINATIONS.europe);
      setActiveTab("nearby");
      findClinics(mockCoords);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        console.log("Geolocation success:", position);
        const { latitude, longitude } = position.coords;
        const coords = { lat: latitude, lng: longitude };
        setLocationPermissionDenied(false);
        setUserCoords(coords);

        try {
          const geoResponse = await fetch(
            `/api/get-location-details?lat=${latitude}&lng=${longitude}`
          );
          const geoData = await geoResponse.json();

          if (geoData.continent === "Europe") {
            setPopularDestinations(POPULAR_DESTINATIONS.europe);
          } else if (geoData.continent === "North America") {
            setPopularDestinations(POPULAR_DESTINATIONS.north_america);
          } else {
            setPopularDestinations(POPULAR_DESTINATIONS.other);
          }

          setActiveTab("nearby");
          findClinics(coords);
        } catch (error) {
          console.error("Error getting location details:", error);
          // Fall back to popular destinations if location details fail
          setPopularDestinations(POPULAR_DESTINATIONS.europe);
          setActiveTab("popular");
          findPopularClinics();
        }
      },
      (error) => {
        console.log("Geolocation error details:", {
          code: error.code,
          message: error.message,
          PERMISSION_DENIED: error.PERMISSION_DENIED,
          POSITION_UNAVAILABLE: error.POSITION_UNAVAILABLE,
          TIMEOUT: error.TIMEOUT,
        });

        // Handle different error types appropriately
        if (error.code === error.PERMISSION_DENIED) {
          // User denied location permission - show permission UI but stay on nearby tab
          console.log("Location permission denied by user");
          setLocationPermissionDenied(true);
          setPopularDestinations(POPULAR_DESTINATIONS.europe);
          setActiveTab("nearby"); // Stay on nearby tab to show permission request UI
          // Don't call findPopularClinics - let the UI show the permission request
        } else {
          // Other errors (timeout, unavailable) - fall back to popular
          setLocationPermissionDenied(false);
          setPopularDestinations(POPULAR_DESTINATIONS.europe);
          setActiveTab("popular");
          findPopularClinics();
        }
      },
      {
        timeout: 15000, // 15 second timeout
        enableHighAccuracy: true, // Try high accuracy first
        maximumAge: 0, // Don't use cached location, force fresh request
      }
    );
  };

  const findClinics = async (location) => {
    setIsFindingClinics(true);
    setError("");
    setClinics([]);
    try {
      const response = await fetch(
        `/api/find-clinics?lat=${location.lat}&lng=${location.lng}`,
        { cache: "no-store" }
      );
      if (!response.ok) throw new Error("Failed to find clinics");
      const data = await response.json();
      setClinics(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsFindingClinics(false);
    }
  };

  const findPopularClinics = async () => {
    console.log("findPopularClinics called");
    console.log("Current state - isFindingClinics:", isFindingClinics, "clinics:", clinics.length);
    setIsFindingClinics(true);
    setError("");
    setClinics([]);

    try {
      // Ensure we have destinations, fallback to Europe if empty
      const destinations =
        popularDestinations.length > 0
          ? popularDestinations
          : POPULAR_DESTINATIONS.europe;
      const locations = destinations.map((dest) => dest.coords);

      console.log("Finding popular clinics for destinations:", destinations);
      console.log("Mapped locations:", locations);
      console.log("About to call API...");

      const response = await fetch("/api/find-clinics-popular", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ locations }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to find clinics");
      }

      const data = await response.json();
      console.log("Popular clinics API response:", data);
      console.log("Setting clinics:", data.length, "clinics found");
      console.log("First clinic:", data[0]?.name);
      setClinics(data);
      console.log("Clinics state should be updated now");
    } catch (err) {
      console.error("Error in findPopularClinics:", err);
      setError(err.message);
    } finally {
      console.log("Setting isFindingClinics to false");
      setIsFindingClinics(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery) return;
    setIsFindingClinics(true);
    setError("");
    setClinics([]);
    setActiveTab("search");

    try {
      const response = await fetch(`/api/find-clinics?city=${searchQuery}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || "Could not find clinics in that city."
        );
      }
      const data = await response.json();
      setClinics(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsFindingClinics(false);
    }
  };
  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
    setError(""); // Clear any previous errors when switching tabs
    if (tabKey === "nearby") {
      if (userCoords) {
        findClinics(userCoords);
      } else {
        initializeClinicSearch();
      }
    } else if (tabKey === "popular") {
      findPopularClinics();
    }
  };

  const handleReset = () => {
    setOriginalImage(null);
    setGeneratedImage(null);
    setClinics([]);
    setError("");
    setIsLoading(false);
    setIsFindingClinics(false);
    setShowClinicBrowsing(false);
  };

  const handleBrowseClinics = () => {
    setError(""); // Clear any existing errors
    setClinics([]); // Clear existing clinics
    setLocationPermissionDenied(false); // Reset permission state
    setShowClinicBrowsing(true);
    
    // Track analytics
    clientAnalytics.trackInteraction('clinic-browse');
    
    // The useEffect will handle initializeClinicSearch when showClinicBrowsing changes
  };

  return (
    <div className="min-h-screen w-full bg-grid-pattern relative">
      <header className="fixed top-0 left-0 right-0 glass z-10 shadow-lg border-b border-gray-200/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">ST</span>
            </div>
            <span className="text-xl font-bold text-gray-800">SmileTrust</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600" role="navigation" aria-label="Main navigation">
            <Link 
              href="/treatments"
              className="hover:text-blue-600 transition-colors font-medium"
            >
              Treatments
            </Link>
            <Link 
              href="/destinations"
              className="hover:text-blue-600 transition-colors font-medium"
            >
              Destinations
            </Link>
            <Link 
              href="/about"
              className="hover:text-blue-600 transition-colors font-medium"
            >
              About Us
            </Link>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              HIPAA Compliant
            </span>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-elevated border-t border-gray-200/20">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <Link 
                href="/treatments"
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Treatments
              </Link>
              <Link 
                href="/destinations"
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Destinations
              </Link>
              <Link 
                href="/about"
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="flex items-center gap-2 text-sm text-gray-600 pt-2 border-t border-gray-200">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                HIPAA Compliant
              </div>
            </div>
          </div>
        )}
      </header>
      <main className="container mx-auto px-4 pt-24 pb-12">
        <header className="text-center max-w-4xl mx-auto mb-8 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight text-professional gentle-float">
            Professional <span className="text-blue-600">Smile Visualization</span> Technology
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-700 font-medium max-w-3xl mx-auto">
            Discover your smile transformation potential with our advanced AI technology. 
            Trusted by dental professionals worldwide for accurate smile previews and verified dental clinic recommendations.
          </p>
          
          {/* SEO-optimized treatment options */}
          <section className="mt-5 md:mt-8">
            <h2 className="sr-only">Available Treatment Options</h2>
            <div className="inline-flex gap-3 md:gap-4 flex-wrap justify-center">
              <Link href="/treatments#veneers" className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-medium transition-colors">
                Veneers Specialist
              </Link>
              <Link href="/treatments#zirconia-crowns" className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-medium transition-colors">
                Zirconia Crowns
              </Link>
              <Link href="/treatments#smile-makeover" className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full text-xs md:text-sm font-medium transition-colors">
                Full Smile Makeover
              </Link>
              <Link href="/destinations" className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-full text-xs md:text-sm font-medium transition-colors">
                Top Destinations
              </Link>
            </div>
          </section>
        </header>

        <div className="mt-16 max-w-5xl mx-auto">
          <div className="glass-elevated p-10 rounded-2xl shadow-xl border border-gray-200/50">
            {error && (
              <div className="text-center text-red-800 bg-red-50 p-6 rounded-xl mb-8 border border-red-200 card">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  <p className="font-semibold">
                    {error.includes("quota") || error.includes("Daily") ? "Daily Limit Reached" : "Processing Error"}
                  </p>
                </div>
                <p className="text-sm text-red-700 mb-4">{error}</p>
                <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                  <button
                    onClick={handleReset}
                    className="btn-secondary flex items-center gap-2"
                  >
                    <RefreshCw size={16} />
                    Try Again
                  </button>
                  {(error.includes("quota") || error.includes("Daily")) && (
                    <button
                      onClick={handleBrowseClinics}
                      className="btn-primary flex items-center gap-2"
                    >
                      <Building size={16} />
                      Browse Clinics Anyway
                    </button>
                  )}
                </div>
                {(error.includes("quota") || error.includes("Daily")) && (
                  <p className="text-xs text-gray-600 mt-4">
                    You can still browse and find dental clinics without generating a smile preview
                  </p>
                )}
              </div>
            )}

            {!originalImage && !error && !showClinicBrowsing && (
              <div>
                <ImageUploader onImageUpload={handleImageUpload} />
                <div className="text-center mt-8">
                  <div className="flex items-center gap-4 justify-center mb-4">
                    <div className="h-px bg-gray-300 flex-1"></div>
                    <span className="text-gray-500 text-sm">or</span>
                    <div className="h-px bg-gray-300 flex-1"></div>
                  </div>
                  <button
                    onClick={handleBrowseClinics}
                    className="btn-secondary flex items-center gap-2 mx-auto"
                  >
                    <Building size={16} />
                    Browse Clinics Without Preview
                  </button>
                  <p className="text-xs text-gray-500 mt-2">
                    Skip the AI preview and find dental professionals directly
                  </p>
                </div>
              </div>
            )}

            {originalImage && !error && (
              <div>
                {isLoading ? (
                  <LoadingSpinner />
                ) : generatedImage ? (
                  <ResultDisplay
                    originalImage={originalImage}
                    generatedImage={generatedImage}
                    onReset={handleReset}
                  />
                ) : (
                  <div className="flex flex-col items-center gap-6">
                    <img
                      src={URL.createObjectURL(originalImage)}
                      alt="Your smile"
                      className="max-w-xs w-full rounded-lg shadow-md"
                    />
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={() => {
                          setTreatment("veneers");
                          clientAnalytics.trackTreatmentInterest("veneers", "button");
                        }}
                        className={`px-8 py-3 rounded-2xl font-semibold transition-all ${
                          treatment === "veneers"
                            ? "btn-primary"
                            : "btn-secondary"
                        }`}
                        aria-pressed={treatment === "veneers"}
                        aria-label="Select veneers treatment option"
                      >
                        Veneers
                      </button>
                      <button
                        onClick={() => {
                          setTreatment("zirconia crowns");
                          clientAnalytics.trackTreatmentInterest("zirconia", "button");
                        }}
                        className={`px-8 py-3 rounded-2xl font-semibold transition-all ${
                          treatment === "zirconia crowns"
                            ? "btn-primary"
                            : "btn-secondary"
                        }`}
                        aria-pressed={treatment === "zirconia crowns"}
                        aria-label="Select zirconia crowns treatment option"
                      >
                        Zirconia Crowns
                      </button>
                    </div>
                    <div className="flex items-center gap-4 mt-6">
                      <button
                        onClick={handleReset}
                        className="btn-secondary flex items-center gap-2"
                      >
                        <Camera size={20} /> Change Photo
                      </button>
                      <button
                        onClick={handleGenerateClick}
                        className="btn-primary px-10 py-4 text-lg flex items-center gap-3 transform hover:scale-105"
                      >
                        <Sparkles size={24} /> Generate
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Clinic browsing section - works with or without image */}
            {(generatedImage || showClinicBrowsing) && (
              <section className="mt-16" aria-label="Dental Professionals Directory">
                <header className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Certified Dental Professionals
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Connect with verified, top-rated dental clinics specializing in cosmetic dentistry, veneer procedures, and zirconia crowns worldwide. Our HIPAA-compliant platform ensures your privacy while helping you find the best dental professionals.
                  </p>
                  {showClinicBrowsing && !generatedImage && (
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200 max-w-lg mx-auto">
                      <p className="text-sm text-blue-800 mb-3">
                        Browsing clinics without AI preview - you can still find excellent dental professionals!
                      </p>
                      <button
                        onClick={() => setShowClinicBrowsing(false)}
                        className="text-xs text-blue-600 hover:text-blue-700 underline"
                      >
                        ← Back to upload photo for AI preview
                      </button>
                    </div>
                  )}
                </header>
                <nav className="flex items-center gap-3 max-w-2xl mx-auto mb-8" role="tablist" aria-label="Clinic search categories">
                  <button
                    onClick={() => handleTabClick("nearby")}
                    role="tab"
                    aria-selected={activeTab === "nearby"}
                    aria-controls="nearby-clinics"
                    className={`flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-2xl transition-all flex-shrink-0 ${
                      activeTab === "nearby"
                        ? "btn-primary"
                        : "btn-secondary"
                    }`}
                  >
                    <Map size={16} />
                    Near Me
                  </button>
                  <form onSubmit={handleSearch} className="relative w-full mx-2">
                    <label htmlFor="clinic-search" className="sr-only">Search for dental clinics by city</label>
                    <input
                      id="clinic-search"
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search for a city (e.g., Istanbul, Mexico City, Bangkok)..."
                      className="w-full px-6 py-3 text-sm text-gray-700 bg-white/90 rounded-2xl focus:outline-none focus:ring-3 focus:ring-blue-300 shadow-lg border border-white/50"
                      role="searchbox"
                      aria-label="Search for dental clinics by city name"
                    />
                    <button
                      type="submit"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors"
                      aria-label="Search for clinics"
                    >
                      <Search size={18} />
                    </button>
                  </form>
                  <button
                    onClick={() => handleTabClick("popular")}
                    role="tab"
                    aria-selected={activeTab === "popular"}
                    aria-controls="popular-clinics"
                    className={`flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-2xl transition-all flex-shrink-0 ${
                      activeTab === "popular"
                        ? "btn-primary"
                        : "btn-secondary"
                    }`}
                  >
                    <Globe size={16} />
                    Popular Destinations
                  </button>
                </nav>

                {isFindingClinics ? (
                  <ClinicListSkeleton />
                ) : clinics.length > 0 ? (
                  <ClinicList clinics={clinics} />
                ) : activeTab === "nearby" && !userCoords ? (
                  <div className="text-center py-12">
                    <div className="glass-elevated p-8 rounded-xl max-w-lg mx-auto border border-gray-200">
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                          <Map size={14} className="text-blue-600" />
                        </div>
<<<<<<< HEAD
                        <h3 className="font-semibold text-gray-800">
                          {locationPermissionDenied ? "Location Permission Denied" : "Location Access Required"}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                        {locationPermissionDenied 
                          ? "You previously declined location access. To find nearby clinics, please enable location permission in your browser settings, then try again."
                          : "To show nearby certified dental experts, we need access to your location. Your privacy is protected and location data is not stored."
                        }
                      </p>
                      <button
                        onClick={() => {
                          console.log("Manual location request triggered");
                          initializeClinicSearch();
                        }}
                        className="btn-primary mb-4"
                      >
                        <Map size={16} className="mr-2" />
                        {locationPermissionDenied ? "Try Again" : "Enable Location Access"}
                      </button>
                      <p className="text-xs text-gray-500">
                        Alternative: Use the search bar or browse popular destinations
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="glass-elevated p-6 rounded-xl max-w-md mx-auto border border-gray-200">
                      <p className="text-gray-600">No clinics found. Try a different search or location.</p>
                    </div>
                  </div>
                )}
              </section>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
