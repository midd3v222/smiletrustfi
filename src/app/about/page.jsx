"use client";

import Link from "next/link";
import { 
  ArrowLeft, 
  Shield, 
  Heart, 
  Users, 
  Settings,
  CheckCircle,
  Star,
  Target,
  Award,
  Lightbulb,
  Globe,
  Lock
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-grid-pattern relative">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 glass z-10 shadow-lg border-b border-gray-200/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">ST</span>
            </div>
            <span className="text-xl font-bold text-gray-800">SmileTrust</span>
          </div>
          <Link 
            href="/"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 pt-24 pb-12">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Shield size={14} className="sm:w-4 sm:h-4" />
            Independent & Trustworthy
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
            About <span className="text-blue-600">SmileTrust</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto px-2">
            We believe everyone deserves access to genuine, trustworthy dental care information. 
            Our mission is to connect you with the most dependable dental professionals, 
            free from manipulation and bias.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="glass-elevated p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-200/50 mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Heart size={20} className="text-white sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6">
              <strong>A smile is the first thing you notice about someone.</strong> It's more than just aesthetics—it's confidence, health, and happiness. That's why we created SmileTrust.
            </p>
            <p className="text-sm sm:text-base mb-4 sm:mb-6">
              We understand that choosing the right dental professional for cosmetic treatments is one of the most important decisions you'll make. Unfortunately, the dental industry is plagued with manipulated reviews, inflated ratings, and biased recommendations that prioritize profit over patient care.
            </p>
            <p className="text-sm sm:text-base mb-4 sm:mb-6">
              While we do accept sponsorships from select clinics to keep our service free for users, we maintain strict editorial independence. Our ranking algorithm is never influenced by sponsorship status, and all sponsored content is clearly labeled for complete transparency.
            </p>
            <p className="text-sm sm:text-base font-medium text-gray-900">
              SmileTrust exists to change that. We are your independent, unbiased guide to finding genuine dental excellence.
            </p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {/* Independence */}
          <div className="card p-5 sm:p-6 lg:p-8 text-center group hover:shadow-lg transition-all duration-200">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-green-200 transition-colors">
              <Shield size={24} className="text-green-600 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Editorial Independence</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              While we accept transparent sponsorships to keep our service free, our ranking algorithm remains completely independent. Sponsored listings are clearly marked and don't influence our quality-based rankings.
            </p>
          </div>

          {/* Algorithm Transparency */}
          <div className="card p-5 sm:p-6 lg:p-8 text-center group hover:shadow-lg transition-all duration-200">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-blue-200 transition-colors">
              <Settings size={24} className="text-blue-600 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Transparent Algorithm</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Our ranking system combats manipulative rating boosting. We use advanced algorithms to identify and filter out fake reviews and inflated ratings.
            </p>
          </div>

          {/* Patient First */}
          <div className="card p-5 sm:p-6 lg:p-8 text-center group hover:shadow-lg transition-all duration-200">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-purple-200 transition-colors">
              <Users size={24} className="text-purple-600 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Patient-Centered</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Every decision we make prioritizes patient welfare. We believe you deserve the treatment you need, not what generates the most profit for clinics.
            </p>
          </div>
        </div>

        {/* How We Work Section */}
        <div className="glass-elevated p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-200/50 mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Lightbulb size={20} className="text-white sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">How We Ensure Quality</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                  <CheckCircle size={14} className="text-blue-600 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Authentic Review Analysis</h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    We analyze review patterns, timing, and authenticity markers to identify and exclude manipulated ratings.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                  <Star size={14} className="text-green-600 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Quality Metrics</h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    Our algorithm considers multiple factors including patient outcomes, professional credentials, and genuine patient feedback.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                  <Target size={14} className="text-purple-600 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Continuous Monitoring</h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    We continuously update our database and refine our algorithms to maintain the highest standards of accuracy.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                  <Award size={14} className="text-orange-600 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Professional Verification</h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    We verify professional credentials, certifications, and specializations to ensure you're connected with qualified practitioners.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                  <Globe size={14} className="text-red-600 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Global Standards</h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    We apply consistent quality standards across all regions, ensuring reliable recommendations worldwide.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                  <Lock size={14} className="text-gray-600 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1.5 sm:mb-2 text-sm sm:text-base">Complete Privacy Protection</h4>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    We never store your photos in our databases. All images are processed temporarily and automatically deleted after generating your smile preview. Your privacy is our priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transparency Section */}
        <div className="glass-elevated p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-200/50 mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <CheckCircle size={20} className="text-white sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Our Commitment to Transparency</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Sponsorship Transparency</h3>
              <div className="space-y-3 sm:space-y-4 text-gray-700">
                <p className="text-sm sm:text-base leading-relaxed">
                  We believe in complete transparency about our business model. SmileTrust accepts sponsorships from select dental clinics to keep our service free for users.
                </p>
                <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200">
                  <p className="text-xs sm:text-sm font-medium text-blue-900 mb-2">Important:</p>
                  <ul className="text-xs sm:text-sm text-blue-800 space-y-1">
                    <li>• Sponsored clinics are clearly marked with "Verified" badges</li>
                    <li>• Sponsorship never influences our ranking algorithm</li>
                    <li>• Quality metrics remain the primary ranking factor</li>
                    <li>• We maintain editorial independence in all recommendations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Data Privacy Guarantee</h3>
              <div className="space-y-3 sm:space-y-4 text-gray-700">
                <p className="text-sm sm:text-base leading-relaxed">
                  Your privacy and data security are non-negotiable. We've built our system with privacy-first principles.
                </p>
                <div className="bg-green-50 p-3 sm:p-4 rounded-lg border border-green-200">
                  <p className="text-xs sm:text-sm font-medium text-green-900 mb-2">Privacy Promise:</p>
                  <ul className="text-xs sm:text-sm text-green-800 space-y-1">
                    <li>• Photos are never stored in our databases</li>
                    <li>• All images are processed temporarily and deleted immediately</li>
                    <li>• No personal data is shared with third parties</li>
                    <li>• HIPAA-compliant processing standards</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Promise */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="glass-elevated p-6 sm:p-8 lg:p-12 rounded-2xl shadow-xl border border-gray-200/50">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Heart size={24} className="text-white sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Our Promise to You</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                We promise to remain independent, transparent, and dedicated to your best interests. 
                We will never compromise our integrity for financial gain.
              </p>
              <p className="font-medium text-gray-900 text-base sm:text-lg lg:text-xl">
                Your smile matters. Your trust matters. Your health matters.
              </p>
              <p className="text-sm sm:text-base lg:text-lg mt-4 sm:mt-6">
                That's why SmileTrust exists—to ensure you get the dental care you truly deserve.
              </p>
            </div>
            
            <div className="mt-6 sm:mt-8">
              <Link 
                href="/"
                className="btn-primary inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg"
              >
                Start Your Smile Journey
                <ArrowLeft size={16} className="rotate-180 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
