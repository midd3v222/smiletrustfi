import Link from "next/link";
import { ArrowLeft, Shield, Star, Users, Clock, Award } from "lucide-react";

export const metadata = {
  title: "Dental Treatment Options - Veneers, Crowns & Complete Smile Makeovers | SmileTrust",
  description: "Explore comprehensive dental treatments including porcelain veneers, zirconia crowns, and complete smile makeovers. Learn about procedures, costs, recovery times, and find certified specialists worldwide.",
  keywords: [
    "dental veneers procedure",
    "porcelain veneers cost",
    "zirconia crowns benefits",
    "smile makeover process",
    "cosmetic dental treatments",
    "dental crown procedure",
    "veneers vs crowns comparison",
    "dental restoration options",
    "teeth whitening",
    "dental bonding",
    "ceramic veneers",
    "full mouth reconstruction"
  ],
  openGraph: {
    title: 'Dental Treatment Guide - Veneers, Crowns & Smile Makeovers',
    description: 'Complete guide to cosmetic dental treatments including veneers, crowns, and smile makeovers with detailed procedures and costs.',
    type: 'article',
  },
};

const treatments = [
  {
    id: "veneers",
    title: "Porcelain Veneers",
    description: "Thin ceramic shells that cover the front surface of teeth to improve appearance",
    procedure: "Minimally invasive procedure where custom-made ceramic shells are bonded to teeth",
    duration: "2-3 visits over 2-3 weeks",
    recoveryTime: "2-3 days for sensitivity",
    durability: "10-15 years with proper care",
    costRange: "$1,000-$2,500 per tooth",
    bestFor: ["Discolored teeth", "Slight misalignment", "Gaps between teeth", "Worn teeth"],
    category: "Cosmetic Enhancement",
    icon: Star,
    color: "blue"
  },
  {
    id: "zirconia-crowns",
    title: "Zirconia Crowns",
    description: "Advanced ceramic crowns offering durability and natural appearance",
    procedure: "Complete tooth restoration with high-strength zirconia material",
    duration: "2 visits over 1-2 weeks",
    recoveryTime: "Immediate functionality",
    durability: "15-20 years",
    costRange: "$1,200-$3,000 per crown",
    bestFor: ["Broken teeth", "Severe decay", "Root canal treatment", "Large fillings"],
    category: "Restoration",
    icon: Shield,
    color: "green"
  },
  {
    id: "smile-makeover",
    title: "Complete Smile Makeover",
    description: "Comprehensive treatment combining multiple procedures for dramatic transformation",
    procedure: "Custom treatment plan including veneers, crowns, whitening, and alignment",
    duration: "3-6 months",
    recoveryTime: "Gradual improvement throughout treatment",
    durability: "15+ years with maintenance",
    costRange: "$8,000-$25,000 full mouth",
    bestFor: ["Multiple cosmetic concerns", "Complete aesthetic goals", "Complex cases", "Restorative needs"],
    category: "Full Treatment",
    icon: Award,
    color: "purple"
  }
];

const TreatmentCard = ({ treatment }) => {
  const IconComponent = treatment.icon;
  
  return (
    <article id={treatment.id} className="glass-elevated p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl border border-gray-200/50 mb-6 sm:mb-8 hover:shadow-2xl transition-shadow scroll-mt-24">
      <header className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-${treatment.color}-100 rounded-2xl flex items-center justify-center flex-shrink-0`}>
          <IconComponent size={28} className={`text-${treatment.color}-600 sm:w-8 sm:h-8`} />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{treatment.title}</h2>
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2 sm:px-3 py-1 bg-${treatment.color}-100 text-${treatment.color}-700 text-xs sm:text-sm font-medium rounded-full`}>
              {treatment.category}
            </span>
          </div>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">{treatment.description}</p>
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <div className="space-y-4 sm:space-y-6">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Procedure Details</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{treatment.procedure}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                <Clock size={14} className="text-gray-500 sm:w-4 sm:h-4" />
                <span className="font-semibold text-gray-900 text-xs sm:text-sm">Duration</span>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm">{treatment.duration}</p>
            </div>
            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                <Star size={14} className="text-gray-500 sm:w-4 sm:h-4" />
                <span className="font-semibold text-gray-900 text-xs sm:text-sm">Recovery</span>
              </div>
              <p className="text-gray-700 text-xs sm:text-sm">{treatment.recoveryTime}</p>
            </div>
          </div>

          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
              <Shield size={14} className="text-gray-500 sm:w-4 sm:h-4" />
              <span className="font-semibold text-gray-900 text-xs sm:text-sm">Durability</span>
            </div>
            <p className="text-gray-700 text-xs sm:text-sm">{treatment.durability}</p>
          </div>

          <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200">
            <span className="font-semibold text-blue-900 text-xs sm:text-sm">Cost Range:</span>
            <span className="text-blue-800 text-xs sm:text-sm ml-2">{treatment.costRange}</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Ideal For</h3>
          <ul className="space-y-2">
            {treatment.bestFor.map((item, index) => (
              <li key={index} className="flex items-center gap-2 sm:gap-3 text-gray-700 text-sm sm:text-base">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default function TreatmentsPage() {
  return (
    <div className="min-h-screen w-full bg-grid-pattern relative">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 glass z-10 shadow-lg border-b border-gray-200/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">ST</span>
            </div>
            <span className="text-xl font-bold text-gray-800">SmileTrust</span>
          </Link>
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
        <header className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Users size={14} className="sm:w-4 sm:h-4" />
            Comprehensive Treatment Guide
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
            Dental Treatment <span className="text-blue-600">Options & Procedures</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto px-2">
            Discover detailed information about cosmetic dental treatments including porcelain veneers, zirconia crowns, 
            and complete smile makeovers. Learn about procedures, costs, recovery, and find the right treatment for your needs.
          </p>
        </header>

        {/* Treatment Grid */}
        <section className="max-w-6xl mx-auto">
          {treatments.map((treatment) => (
            <TreatmentCard key={treatment.id} treatment={treatment} />
          ))}
        </section>

        {/* Additional Resources */}
        <section className="mt-8 sm:mt-12 lg:mt-16 max-w-4xl mx-auto">
          <div className="glass-elevated p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200/50">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
              Find Certified Dental Professionals
            </h2>
            <p className="text-sm sm:text-base text-gray-700 text-center mb-6 sm:mb-8 leading-relaxed px-2">
              Ready to start your smile transformation? Connect with trusted dental professionals who specialize in 
              cosmetic dentistry and have extensive experience with these treatments.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                href="/"
                className="btn-primary text-center px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base"
              >
                View Dental Professionals
              </Link>
              <Link 
                href="/destinations"
                className="btn-secondary text-center px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base"
              >
                Browse Popular Destinations
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
