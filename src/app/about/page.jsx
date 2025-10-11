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
import { PageViewTracker } from "@/components/PageViewTracker";
import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <>
      <PageViewTracker pageName="about" />
    <div className="min-h-screen w-full bg-grid-pattern relative">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 pt-24 pb-12">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-blue-200 dark:border-blue-800">
            <Shield size={14} className="sm:w-4 sm:h-4" />
            Independent & Trustworthy
          </div>
          <h1 className="heading-hero text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">
            About <span className="text-blue-600 dark:text-blue-400">SmileTrust</span>
          </h1>
          <p className="text-body-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto px-2">
            I believe everyone deserves access to genuine, trustworthy dental care information. 
            My mission is to connect you with the most dependable dental professionals, 
            free from manipulation and bias.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="glass-elevated p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <Heart size={20} className="text-white sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100">My Mission</h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6">
              <strong>A smile is the first thing you notice about someone.</strong> It's more than just aesthetics—it's confidence, health, and happiness. That's why I created SmileTrust.
            </p>
            <p className="text-sm sm:text-base mb-4 sm:mb-6">
              With years of experience in dental and aesthetic tourism, and coming from a family deeply rooted in the tourism industry, I've witnessed firsthand the challenges patients face when seeking quality dental care abroad. Having written and curated all the content on this platform, I understand that choosing the right dental professional for cosmetic treatments is one of the most important decisions you'll make. Unfortunately, the dental industry is plagued with manipulated reviews, inflated ratings, and biased recommendations that prioritize profit over patient care.
            </p>
            <p className="text-sm sm:text-base mb-4 sm:mb-6">
              While I do accept sponsorships from select clinics to keep my service free for users, I maintain strict editorial independence. My ranking algorithm is never influenced by sponsorship status, and all sponsored content is clearly labeled for complete transparency.
            </p>
            <p className="text-sm sm:text-base font-medium text-gray-900 dark:text-gray-100">
              SmileTrust exists to change that. I am your independent, unbiased guide to finding genuine dental excellence, backed by real industry experience and my personal commitment to authentic, trustworthy information.
            </p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {/* Independence */}
          <div className="card p-5 sm:p-6 lg:p-8 text-center group hover:shadow-lg transition-all duration-200">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-green-200 dark:group-hover:bg-green-900/30 transition-colors">
              <Shield size={24} className="text-green-600 dark:text-green-400 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">Editorial Independence</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              While I accept transparent sponsorships to keep my service free, my ranking algorithm remains completely independent. Sponsored listings are clearly marked and don't influence my quality-based rankings.
            </p>
          </div>

          {/* Algorithm Transparency */}
          <div className="card p-5 sm:p-6 lg:p-8 text-center group hover:shadow-lg transition-all duration-200">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/30 transition-colors">
              <Settings size={24} className="text-blue-600 dark:text-blue-400 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">Transparent Algorithm</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              My ranking system combats manipulative rating boosting. I use advanced algorithms to identify and filter out fake reviews and inflated ratings.
            </p>
          </div>

          {/* Patient First */}
          <div className="card p-5 sm:p-6 lg:p-8 text-center group hover:shadow-lg transition-all duration-200">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/30 transition-colors">
              <Users size={24} className="text-purple-600 dark:text-purple-400 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">Patient-Centered</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Every decision I make prioritizes patient welfare. I believe you deserve the treatment you need, not what generates the most profit for clinics.
            </p>
          </div>
        </div>

        {/* How We Work Section */}
        <div className="glass-elevated p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Lightbulb size={20} className="text-white sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100">How I Ensure Quality</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                  <CheckCircle size={14} className="text-blue-600 dark:text-blue-400 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1.5 sm:mb-2 text-sm sm:text-base">Authentic Review Analysis</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                    I analyze review patterns, timing, and authenticity markers to identify and exclude manipulated ratings.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                  <Star size={14} className="text-green-600 dark:text-green-400 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1.5 sm:mb-2 text-sm sm:text-base">Quality Metrics</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                    My algorithm considers multiple factors including patient outcomes, professional credentials, and genuine patient feedback.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                  <Target size={14} className="text-purple-600 dark:text-purple-400 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1.5 sm:mb-2 text-sm sm:text-base">Continuous Monitoring</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                    I continuously update my database and refine my algorithms to maintain the highest standards of accuracy.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                  <Award size={14} className="text-orange-600 dark:text-orange-400 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1.5 sm:mb-2 text-sm sm:text-base">Professional Verification</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                    I verify professional credentials, certifications, and specializations to ensure you're connected with qualified practitioners.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                  <Globe size={14} className="text-red-600 dark:text-red-400 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1.5 sm:mb-2 text-sm sm:text-base">Global Standards</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                    I apply consistent quality standards across all regions, ensuring reliable recommendations worldwide.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                  <Lock size={14} className="text-gray-600 dark:text-gray-400 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1.5 sm:mb-2 text-sm sm:text-base">Complete Privacy Protection</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                    I never store your photos in my databases. All images are processed temporarily and automatically deleted after generating your smile preview. Your privacy is my priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transparency Section */}
        <div className="glass-elevated p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <CheckCircle size={20} className="text-white sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100">My Commitment to Transparency</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">Sponsorship Transparency</h3>
              <div className="space-y-3 sm:space-y-4 text-gray-700 dark:text-gray-300">
                <p className="text-sm sm:text-base leading-relaxed">
                  I believe in complete transparency about my business model. SmileTrust accepts sponsorships from select dental clinics to keep my service free for users.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 sm:p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-xs sm:text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">Important:</p>
                  <ul className="text-xs sm:text-sm text-blue-800 dark:text-blue-200 space-y-1">
                    <li>• Sponsored clinics are clearly marked with "Verified" badges</li>
                    <li>• Sponsorship never influences my ranking algorithm</li>
                    <li>• Quality metrics remain the primary ranking factor</li>
                    <li>• I maintain editorial independence in all recommendations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">Data Privacy Guarantee</h3>
              <div className="space-y-3 sm:space-y-4 text-gray-700 dark:text-gray-300">
                <p className="text-sm sm:text-base leading-relaxed">
                  Your privacy and data security are non-negotiable. I've built my system with privacy-first principles.
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 p-3 sm:p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <p className="text-xs sm:text-sm font-medium text-green-900 dark:text-green-100 mb-2">Privacy Promise:</p>
                  <ul className="text-xs sm:text-sm text-green-800 dark:text-green-200 space-y-1">
                    <li>• Photos are never stored in my databases</li>
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
          <div className="glass-elevated p-6 sm:p-8 lg:p-12 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Heart size={24} className="text-white sm:w-8 sm:h-8" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">My Promise to You</h2>
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                I promise to remain independent, transparent, and dedicated to your best interests.
                I will never compromise my integrity for financial gain.
              </p>
              <p className="font-medium text-gray-900 dark:text-gray-100 text-base sm:text-lg lg:text-xl">
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
    </>
  );
}
