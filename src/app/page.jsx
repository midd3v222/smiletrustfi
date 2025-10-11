"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import ImageUploader from "../components/ImageUploader";
import ResultDisplay from "../components/ResultDisplay";
import ClinicList from "../components/ClinicList";
import LoadingSpinner from "../components/LoadingSpinner";
import ClinicListSkeleton from "../components/ClinicListSkeleton"; // Import the new skeleton component
import BeforeAfterComparison from "../components/BeforeAfterComparison";
import Banner from "../components/Banner";
import Header from "../components/Header";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
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
  const [locationError, setLocationError] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track page view on mount
  useEffect(() => {
    clientAnalytics.trackPageView('home');
  }, []);

  // Handle scroll detection for animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Trigger animations when user scrolls past hero section
      if (scrollPosition > windowHeight * 0.3) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    console.log("🚀 initializeClinicSearch called");
    console.log("📱 Device info:", {
      userAgent: navigator.userAgent.substring(0, 100),
      geolocationSupported: !!navigator.geolocation,
      currentTab: activeTab,
      currentLocationError: locationError,
      currentPermissionDenied: locationPermissionDenied,
    });
    
    // Reset location states before trying again
    console.log("🔄 Resetting location states for fresh attempt");
    setLocationPermissionDenied(false);
    setLocationError(null);
    
    if (!navigator.geolocation) {
      console.log("❌ Geolocation not supported, falling back to popular destinations");
      setPopularDestinations(POPULAR_DESTINATIONS.europe);
      setActiveTab("popular");
      findPopularClinics();
      return;
    }

    console.log("🌍 Geolocation supported, proceeding with permission request...");

    // Always attempt real location request - no mock coordinates to avoid interference
    console.log("🔍 Environment check:", {
      protocol: window.location.protocol,
      hostname: window.location.hostname,
      url: window.location.href,
      userAgent: navigator.userAgent.substring(0, 50),
    });

    console.log("🌐 Proceeding with real location request for hostname:", window.location.hostname);
    
    // Check if location services are enabled before requesting
    const requestLocationWithPermissionCheck = () => {
      console.log("🎯 Starting location request...");
      
      // iOS-specific configuration for better location accuracy
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const options = {
        timeout: 15000, // Increased timeout to give more time for permission dialog
        enableHighAccuracy: isIOS ? true : false, // Enable high accuracy on iOS
        maximumAge: isIOS ? 5000 : 300000, // Shorter cache for iOS
      };
      
      console.log("📱 Requesting location with options:", options);
      
      navigator.geolocation.getCurrentPosition(
      async (position) => {
        console.log("Geolocation success:", position);
        const { latitude, longitude } = position.coords;
        const coords = { lat: latitude, lng: longitude };
        setLocationPermissionDenied(false);
        setLocationError(null);
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
        console.log("🔍 Geolocation error details:", {
          code: error.code,
          message: error.message,
          PERMISSION_DENIED: error.PERMISSION_DENIED,
          POSITION_UNAVAILABLE: error.POSITION_UNAVAILABLE,
          TIMEOUT: error.TIMEOUT,
          userAgent: navigator.userAgent,
          isIOS: /iPad|iPhone|iPod/.test(navigator.userAgent),
          isSafari: /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent),
        });

        // Handle different error types appropriately
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        
        if (error.code === error.PERMISSION_DENIED) {
          // User denied location permission - show permission UI but stay on nearby tab
          console.log("🚫 Location permission denied by user - staying on nearby tab");
          setLocationPermissionDenied(true);
          setLocationError('PERMISSION_DENIED');
          setPopularDestinations(POPULAR_DESTINATIONS.europe);
          setActiveTab("nearby"); // Stay on nearby tab to show permission request UI
          // Don't call findPopularClinics - let the UI show the permission request
        } else if (error.code === error.POSITION_UNAVAILABLE && isIOS) {
          // iOS sometimes needs a retry with different settings
          console.log("📱 iOS location unavailable, trying with basic settings...");
          setTimeout(() => {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                console.log("iOS retry success:", position);
                const { latitude, longitude } = position.coords;
                const coords = { lat: latitude, lng: longitude };
                setLocationPermissionDenied(false);
                setLocationError(null);
                setUserCoords(coords);
                setActiveTab("nearby");
                findClinics(coords);
              },
              (retryError) => {
                console.log("iOS retry failed:", retryError);
                setLocationError('UNAVAILABLE');
                setLocationPermissionDenied(false);
                setActiveTab("nearby");
              },
              { timeout: 10000, enableHighAccuracy: false, maximumAge: 0 }
            );
          }, 1000);
        } else {
          // Other errors (timeout, unavailable) - show try again option
          console.log("⏰ Location error (timeout/unavailable) - BUT KEEPING NEARBY TAB");
          
          // For non-permission errors, show retry option but don't mark as permission denied
          setLocationPermissionDenied(false); // Don't show "permission denied" text
          setLocationError(error.code === error.TIMEOUT ? 'TIMEOUT' : 'UNAVAILABLE');
          setActiveTab("nearby");
          
          console.log("✅ Staying on nearby tab despite non-permission error - users can try again or use alternatives");
        }
      },
      options
      );
    };
    
    // Check if location services are enabled before requesting
    if (navigator.permissions && navigator.permissions.query) {
      console.log("🔍 Checking geolocation permission state...");
      navigator.permissions.query({ name: 'geolocation' }).then(function(permissionStatus) {
        console.log("📋 Permission status:", permissionStatus.state);
        if (permissionStatus.state === 'denied') {
          console.log("❌ Geolocation permission permanently denied");
          setLocationPermissionDenied(true);
          setLocationError('PERMISSION_DENIED');
          setActiveTab("nearby");
          return;
        } else {
          console.log("✅ Permission state allows location request, proceeding...");
          requestLocationWithPermissionCheck();
        }
      }).catch(function(error) {
        console.log("🔍 Permission API not supported, proceeding with geolocation request:", error);
        requestLocationWithPermissionCheck();
      });
    } else {
      console.log("🔍 Permission API not available, proceeding with geolocation request");
      requestLocationWithPermissionCheck();
    }
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
    console.log(`🔄 Tab clicked: ${tabKey}, current activeTab: ${activeTab}`);
    setActiveTab(tabKey);
    setError(""); // Clear any previous errors when switching tabs
    if (tabKey === "nearby") {
      console.log(`📍 Nearby tab clicked, userCoords:`, userCoords);
      if (userCoords) {
        console.log("✅ Have userCoords, finding clinics");
        findClinics(userCoords);
      } else {
        console.log("❌ No userCoords, initializing location search");
        initializeClinicSearch();
      }
    } else if (tabKey === "popular") {
      console.log("🌍 Popular tab clicked, finding popular clinics");
      findPopularClinics();
    }
  };

  const handleReset = () => {
    // Store whether we were browsing clinics before reset
    const wasBrowsingClinics = showClinicBrowsing;
    
    setOriginalImage(null);
    setGeneratedImage(null);
    setClinics([]);
    setError("");
    setIsLoading(false);
    setIsFindingClinics(false);
    setShowClinicBrowsing(false);
    
    // If we were browsing clinics before reset, restart the clinic search process
    if (wasBrowsingClinics) {
      console.log("🔄 Restarting clinic search after reset");
      // Reset location permission state to allow retry
      setLocationPermissionDenied(false);
      setLocationError(null);
      // Trigger clinic search initialization after state clears
      setTimeout(() => {
        initializeClinicSearch();
      }, 100);
    }
  };

  const handleBrowseClinics = () => {
    setError(""); // Clear any existing errors
    setClinics([]); // Clear existing clinics
    setLocationPermissionDenied(false); // Reset permission state
    setLocationError(null); // Clear location errors
    setShowClinicBrowsing(true);
    
    // Track analytics
    clientAnalytics.trackInteraction('clinic-browse');
    
    // The useEffect will handle initializeClinicSearch when showClinicBrowsing changes
  };

  return (
    <div className="min-h-screen w-full bg-grid-pattern relative">
      <Header showBackButton={false} />
      
      {/* Hero Section - Full Viewport */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 z-0">
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: [50, -10, 0],
            }}
            transition={{
              duration: 1,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
          >
            Professional{" "}
            <Highlight className="text-black dark:text-white">
              Smile Visualization
            </Highlight>{" "}
            Technology
          </motion.h1>
          
          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: [30, -5, 0],
            }}
            transition={{
              duration: 1,
              ease: [0.4, 0.0, 0.2, 1],
              delay: 0.3,
            }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-6 leading-relaxed"
          >
            Discover your smile transformation potential with our advanced AI technology. Trusted by dental professionals worldwide for accurate smile previews and verified dental clinic recommendations.
          </motion.p>
          
          {/* Inviting CTA Button */}
          <motion.div 
            className="mt-16"
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: [40, -10, 0],
            }}
            transition={{
              duration: 1,
              ease: [0.4, 0.0, 0.2, 1],
              delay: 0.6,
            }}
          >
            <div className="flex flex-col items-center gap-4">
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Ready to see your smile transformation? Upload your photo and discover what's possible with our AI-powered technology.
              </p>
              <button
                onClick={() => {
                  // Trigger animations immediately when button is clicked
                  setIsScrolled(true);
                  
                  // Scroll to the image uploader section
                  setTimeout(() => {
                    const uploadSection = document.getElementById('image-uploader');
                    if (uploadSection) {
                      uploadSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }, 100);
                }}
                className="btn-primary px-12 py-4 text-lg flex items-center gap-3 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Camera size={24} />
                <span>Try AI Smile Preview</span>
                <Sparkles size={20} />
              </button>
              <div className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>100% Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>No Registration</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Privacy Protected</span>
                </div>
              </div>
            </div>
          </motion.div>
        </HeroHighlight>
      </section>

      {/* Main Content - Hidden initially, revealed on scroll */}
      <main className="container mx-auto px-4 sm:px-6 pb-12 relative z-0">
        {/* Treatment Options Section */}
        <section className={`transition-all duration-1000 ease-out ${
          isScrolled 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-center mb-8">
            <h2 className="sr-only">Available Treatment Options</h2>
            <div className="inline-flex gap-3 md:gap-4 flex-wrap justify-center">
              <Link href="/treatments#veneers" className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full btn-text-sm transition-colors">
                Veneers Specialist
              </Link>
              <Link href="/treatments#zirconia-crowns" className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full btn-text-sm transition-colors">
                Zirconia Crowns
              </Link>
              <Link href="/treatments#smile-makeover" className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/40 text-blue-800 dark:text-blue-200 rounded-full btn-text-sm transition-colors">
                Full Smile Makeover
              </Link>
              <Link href="/destinations" className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full btn-text-sm transition-colors">
                Top Destinations
              </Link>
            </div>
          </div>
        </section>

        {/* Main Upload Section */}
        <div id="image-uploader" className={`mt-16 max-w-5xl mx-auto transition-all duration-1000 ease-out delay-200 ${
          isScrolled 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <div className="glass-elevated p-6 sm:p-10 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            {error && (
              <div className="text-center text-red-800 dark:text-red-200 bg-red-50 dark:bg-red-900/20 p-6 rounded-xl mb-8 border border-red-200 dark:border-red-800 card">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                  <p className="text-emphasis">
                    {error.includes("quota") || error.includes("Daily") ? "Daily Limit Reached" : "Processing Error"}
                  </p>
                </div>
                <p className="text-body-sm text-red-700 dark:text-red-300 mb-4">{error}</p>
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
                  <p className="text-caption text-gray-600 mt-4">
                    You can still browse and find dental clinics without generating a smile preview
                  </p>
                )}
              </div>
            )}

            {!originalImage && !error && !showClinicBrowsing && (
              <div>
                <ImageUploader onImageUpload={handleImageUpload} />
                
                {/* Encouragement to check examples */}
                <div className="text-center mt-8 mb-6">
                  <div className="glass-elevated p-4 md:p-6 rounded-xl border border-gray-200/50 max-w-lg mx-auto">
                    <p className="text-body-sm text-gray-600 mb-4">
                      Not sure what to expect? Check out our transformation examples below to see the amazing results our AI can create!
                    </p>
                    <button
                      onClick={() => {
                        // Scroll to the examples section
                        const examplesSection = document.querySelector('[aria-label="Smile transformation examples"]');
                        if (examplesSection) {
                          examplesSection.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                          });
                        }
                      }}
                      className="btn-secondary flex items-center gap-2 mx-auto text-sm"
                    >
                      <span>See Examples</span>
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="animate-bounce"
                      >
                        <path d="M12 5v14M5 12l7 7 7-7"/>
                      </svg>
                    </button>
                  </div>
                </div>

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
                  <p className="text-caption text-gray-500 mt-2">
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
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <section className={`mt-16 transition-all duration-1000 ease-out delay-400 ${
                isScrolled 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`} aria-label="Dental Professionals Directory">
                <header className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    Certified Dental Professionals
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Connect with verified, top-rated dental clinics specializing in cosmetic dentistry, veneer procedures, and zirconia crowns worldwide. Our GDPR-compliant platform ensures your privacy while helping you find the best dental professionals.
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
                {/* Mobile: static vertical stack, no horizontal scrolling */}
                <nav className="sm:hidden" role="tablist" aria-label="Clinic search categories">
                  <div className="max-w-2xl mx-auto space-y-3">
                    <button
                      onClick={() => handleTabClick("nearby")}
                      role="tab"
                      aria-selected={activeTab === "nearby"}
                      aria-controls="nearby-clinics"
                      className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-2xl transition-all ${
                        activeTab === "nearby" ? "btn-primary" : "btn-secondary"
                      }`}
                    >
                      <Map size={16} />
                      Near Me
                    </button>
                    <form onSubmit={handleSearch} className="relative w-full">
                      <label htmlFor="clinic-search" className="sr-only">Search for dental clinics by city</label>
                      <input
                        id="clinic-search"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search for a city (e.g., Istanbul, Mexico City, Bangkok)..."
                        className="w-full px-4 py-2.5 text-sm text-gray-700 bg-white/90 rounded-2xl focus:outline-none focus:ring-3 focus:ring-blue-300 shadow-lg border border-white/50"
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
                      className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-2xl transition-all ${
                        activeTab === "popular" ? "btn-primary" : "btn-secondary"
                      }`}
                    >
                      <Globe size={16} />
                      Popular Destinations
                    </button>
                  </div>
                </nav>

                {/* Tablet/Desktop: single-row inline layout */}
                <nav className="hidden sm:flex items-center gap-3 max-w-2xl mx-auto mb-8" role="tablist" aria-label="Clinic search categories">
                  <button
                    onClick={() => handleTabClick("nearby")}
                    role="tab"
                    aria-selected={activeTab === "nearby"}
                    aria-controls="nearby-clinics"
                    className={`flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-2xl transition-all ${
                      activeTab === "nearby" ? "btn-primary" : "btn-secondary"
                    }`}
                  >
                    <Map size={16} />
                    Near Me
                  </button>
                  <form onSubmit={handleSearch} className="relative w-full mx-2">
                    <label htmlFor="clinic-search-desktop" className="sr-only">Search for dental clinics by city</label>
                    <input
                      id="clinic-search-desktop"
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
                    className={`flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-2xl transition-all ${
                      activeTab === "popular" ? "btn-primary" : "btn-secondary"
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
                ) : activeTab === "nearby" && (!userCoords || locationError) ? (
                  <div className="text-center py-12">
                    <div className="glass-elevated p-8 rounded-xl max-w-lg mx-auto border border-gray-200">
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                          <Map size={14} className="text-blue-600" />
                        </div>
                        <h3 className="font-semibold text-gray-800">
                          {locationError === 'PERMISSION_DENIED' ? "Location Permission Denied" : 
                           locationError === 'TIMEOUT' ? "Location Request Timed Out" :
                           locationError === 'UNAVAILABLE' ? "Location Unavailable" : 
                           "Location Access Required"}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                        {locationError === 'PERMISSION_DENIED' ? "You previously declined location access. To find nearby clinics, please enable location permission in your browser settings, then try again." :
                         locationError === 'TIMEOUT' ? "Location request took too long to respond. Please try again or use the search feature below." :
                         locationError === 'UNAVAILABLE' ? "Location services are unavailable on your device. Please try again or use the search feature below." :
                         "To find nearby certified dental experts, we need access to your location. Your privacy is protected and location data is not stored."
                        }
                      </p>
                      <div className="space-y-3">
                        <button
                          onClick={() => {
                            console.log("Manual location request triggered");
                            initializeClinicSearch();
                          }}
                          className="btn-primary w-full"
                        >
                          <Map size={16} className="mr-2" />
                          {locationPermissionDenied ? "Try Again" : "Enable Location Access"}
                        </button>
                        
                        {/* Debug information in development */}
                        {process.env.NODE_ENV === 'development' && (
                          <details className="text-left">
                            <summary className="text-xs text-gray-500 cursor-pointer">Debug Info</summary>
                            <div className="text-xs text-gray-500 mt-2 bg-gray-50 p-3 rounded">
                              <div>Protocol: {typeof window !== 'undefined' ? window.location.protocol : 'N/A'}</div>
                              <div>Hostname: {typeof window !== 'undefined' ? window.location.hostname : 'N/A'}</div>
                              <div>Location Error: {locationError || 'None'}</div>
                              <div>Permission Denied: {locationPermissionDenied ? 'Yes' : 'No'}</div>
                              <div>User Coords: {userCoords ? `${userCoords.lat.toFixed(4)}, ${userCoords.lng.toFixed(4)}` : 'None'}</div>
                              <div>Geolocation Support: {typeof navigator !== 'undefined' && navigator.geolocation ? 'Yes' : 'No'}</div>
                            </div>
                          </details>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">
                        Alternative: Use the search bar or browse popular destinations
                      </p>
                    </div>
                  </div>
                ) : (
                  <ClinicListSkeleton />
                )}
              </section>
            )}
          </div>
        </div>

        {/* Before/After Results Section */}
        <section className={`max-w-6xl mx-auto mt-16 md:mt-20 mb-16 md:mb-20 transition-all duration-1000 ease-out delay-600 ${
          isScrolled 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`} aria-label="Smile transformation examples">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="heading-lg text-gray-900 mb-4">
              See the <span className="text-blue-600">Transformation</span> Potential
            </h2>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              Real results from our AI-powered smile visualization technology. 
              See what's possible with professional dental treatments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Example 1 - Veneers Treatment */}
            <div className="glass-elevated p-4 md:p-6 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
              <div className="mb-4">
                <BeforeAfterComparison
                  beforeImage="/examples/before-after/veneers-before-1.jpg"
                  afterImage="/examples/before-after/veneers-after-1.jpg"
                  beforeAlt="Before veneers treatment"
                  afterAlt="After veneers treatment"
                />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-1">Veneers Treatment</h3>
                <p className="text-sm text-gray-600">Professional smile enhancement</p>
              </div>
            </div>

            {/* Example 2 - Zirconia Crowns */}
            <div className="glass-elevated p-4 md:p-6 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
              <div className="mb-4">
                <BeforeAfterComparison
                  beforeImage="/examples/before-after/zirconia-before-1.jpg"
                  afterImage="/examples/before-after/zirconia-after-1.jpg"
                  beforeAlt="Before zirconia crowns treatment"
                  afterAlt="After zirconia crowns treatment"
                />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-1">Zirconia Crowns</h3>
                <p className="text-sm text-gray-600">Durable restoration solution</p>
              </div>
            </div>

            {/* Example 3 - Full Smile Makeover */}
            <div className="glass-elevated p-4 md:p-6 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="mb-4">
                <BeforeAfterComparison
                  beforeImage="/examples/before-after/makeover-before-1.jpg"
                  afterImage="/examples/before-after/makeover-after-1.jpg"
                  beforeAlt="Before full smile makeover"
                  afterAlt="After full smile makeover"
                />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-1">Full Smile Makeover</h3>
                <p className="text-sm text-gray-600">Complete transformation</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8 md:mt-12">
            <div className="glass-elevated p-6 md:p-8 rounded-2xl border border-gray-200/50 max-w-2xl mx-auto">
              <h3 className="heading-md text-gray-900 mb-3">
                Ready to See <span className="text-blue-600">Your</span> Transformation?
              </h3>
              <p className="text-body text-gray-600 mb-6">
                Upload your photo and get your personalized AI-powered smile preview in seconds. 
                See what's possible for your own smile makeover.
              </p>
              <button
                onClick={() => {
                  // Scroll to the upload section (the main glass-elevated container)
                  const uploadSection = document.querySelector('.glass-elevated.p-6');
                  if (uploadSection) {
                    uploadSection.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
                className="btn-primary px-8 py-4 text-lg flex items-center gap-3 mx-auto transform hover:scale-105 transition-all duration-200"
              >
                <Camera size={24} />
                Try Now
              </button>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-6">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>100% Free Preview</span>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <span>No Registration Required</span>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <span>Privacy Protected</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
