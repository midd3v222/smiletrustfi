import Link from "next/link";
import { ArrowLeft, MapPin, Star, Clock, DollarSign, Globe, Plane } from "lucide-react";

export const metadata = {
  title: "Top Dental Tourism Destinations - Turkey, Mexico, Thailand & More | SmileTrust",
  description: "Discover the best dental tourism destinations worldwide. Compare costs, quality, and popular treatments in Turkey, Mexico, Thailand, Hungary, and Costa Rica.",
  keywords: [
    "dental tourism Turkey",
    "dental tourism Mexico",
    "dental tourism Thailand", 
    "dental tourism Hungary",
    "dental tourism Costa Rica",
    "best countries for dental work",
    "international dental travel",
    "dental vacation packages",
    "affordable dental care abroad",
    "dental tourism costs",
    "Turkey veneer dentist",
    "Mexico dental implants",
    "Thailand cosmetic dentistry"
  ],
  openGraph: {
    title: 'Top Dental Tourism Destinations Guide',
    description: 'Compare best dental tourism destinations including Turkey, Mexico, Thailand for quality dental care and cost savings.',
    type: 'article',
  },
};

const destinations = [
  {
    id: "turkey",
    name: "Turkey",
    cities: ["Istanbul", "Antalya", "Izmir"],
    specialties: ["Veneers", "Crowns", "Implants", "Smile Makeovers"],
    quality: 4.8,
    avgCostSavings: "70%",
    avgStayDuration: "7-14 days",
    languageSupport: "English widely spoken",
    popularTreatments: [
      { name: "Porcelain Veneers", cost: "$150-300 per tooth" },
      { name: "Zirconia Crowns", cost: "$200-400 per crown" },
      { name: "Full Smile Makeover", cost: "$2,000-5,000" }
    ],
    description: "Turkey has become a leading destination for dental tourism, offering world-class facilities, experienced dentists, and significant cost savings.",
    advantages: [
      "Highly skilled dentists trained internationally",
      "Modern dental clinics with advanced technology",
      "All-inclusive packages including accommodation",
      "EU-standard safety and hygiene protocols"
    ],
    icon: Globe,
    color: "red",
    flag: "🇹🇷"
  },
  {
    id: "mexico",
    name: "Mexico",
    cities: ["Cancun", "Mexico City", "Tijuana"],
    specialties: ["Implants", "Crowns", "Cosmetic Dentistry"],
    quality: 4.7,
    avgCostSavings: "65%",
    avgStayDuration: "5-10 days",
    languageSupport: "Spanish and English",
    popularTreatments: [
      { name: "Dental Implants", cost: "$800-1,500 per implant" },
      { name: "All-on-4 Implants", cost: "$8,000-15,000" },
      { name: "Veneers", cost: "$200-500 per veneer" }
    ],
    description: "Mexico offers excellent dental care with proximity to the US, making it convenient for American patients seeking quality treatment.",
    advantages: [
      "Short travel distance from US",
      "Highly qualified specialists",
      "Comprehensive dental packages",
      "Tourist-friendly infrastructure"
    ],
    icon: Globe,
    color: "green",
    flag: "🇲🇽"
  },
  {
    id: "thailand",
    name: "Thailand",
    cities: ["Bangkok", "Chiang Mai", "Phuket"],
    specialties: ["Cosmetic Dentistry", "Orthodontics", "General Dentistry"],
    quality: 4.6,
    avgCostSavings: "60%",
    avgStayDuration: "10-21 days",
    languageSupport: "English widely spoken",
    popularTreatments: [
      { name: "Smile Makeover", cost: "$3,000-8,000" },
      { name: "Braces/Invisalign", cost: "$1,500-3,000" },
      { name: "Teeth Whitening", cost: "$100-300" }
    ],
    description: "Thailand combines beautiful tourism destinations with excellent dental care, making it an ideal choice for dental vacations.",
    advantages: [
      "Advanced dental technology",
      "Tourist-friendly environment",
      "Highly skilled cosmetic dentists",
      "Cultural experience alongside treatment"
    ],
    icon: Globe,
    color: "blue",
    flag: "🇹🇭"
  },
  {
    id: "hungary",
    name: "Hungary",
    cities: ["Budapest", "Debrecen", "Szeged"],
    specialties: ["Veneers", "Crowns", "Dental Implants"],
    quality: 4.8,
    avgCostSavings: "50-60%",
    avgStayDuration: "7-14 days",
    languageSupport: "English and German widely spoken",
    popularTreatments: [
      { name: "Ceramic Veneers", cost: "$200-500 per veneer" },
      { name: "Zirconia Crowns", cost: "$300-600 per crown" },
      { name: "Natural Veneers", cost: "$180-400 per veneer" }
    ],
    description: "Hungary is renowned for dental tourism in Europe, offering EU-standard care with modern facilities and experienced practitioners.",
    advantages: [
      "EU-standard healthcare regulations",
      "Well-trained dental professionals",
      "Safe and reliable healthcare system",
      "Value for money treatment"
    ],
    icon: Globe,
    color: "purple",
    flag: "🇭🇺"
  },
  {
    id: "costa-rica",
    name: "Costa Rica",
    cities: ["San Jose", "Liberia", "Puntarenas"],
    specialties: ["Cosmetic Dentistry", "Implantology", "Oral Surgery"],
    quality: 4.5,
    avgCostSavings: "55%",
    avgStayDuration: "7-15 days",
    languageSupport: "Spanish and English",
    popularTreatments: [
      { name: "Smile Design", cost: "$3,000-7,000" },
      { name: "Implant Dentistry", cost: "$1,200-2,500 per implant" },
      { name: "Veneer Applications", cost: "$150-400 per veneer" }
    ],
    description: "Costa Rica offers quality dental care in a pristine environment, making it a unique choice for health-conscious patients.",
    advantages: [
      "Beautiful natural setting",
      "High-quality dental education system",
      "Modern dental facilities",
      "Eco-tourism opportunities"
    ],
    icon: Globe,
    color: "emerald",
    flag: "🇨🇷"
  }
];

const DestinationCard = ({ destination }) => {
  const IconComponent = destination.icon;
  
  return (
    <article className="glass-elevated p-8 rounded-2xl shadow-xl border border-gray-200/50 mb-8 hover:shadow-2xl transition-shadow">
      <header className="flex items-start gap-4 mb-6">
        <div className={`w-16 h-16 bg-${destination.color}-100 rounded-2xl flex items-center justify-center flex-shrink-0`}>
          <IconComponent size={32} className={`text-${destination.color}-600`} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl font-bold text-gray-900">{destination.name}</h2>
            <span className="text-3xl">{destination.flag}</span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              <Star size={16} className="text-yellow-500 fill-current" />
              <span className="font-semibold text-gray-700">{destination.quality}</span>
            </div>
            <span className="text-gray-500">•</span>
            <span className={`px-3 py-1 bg-${destination.color}-100 text-${destination.color}-700 text-sm font-medium rounded-all`}>
              Save {destination.avgCostSavings}
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">{destination.description}</p>
        </div>
      </header>

      <div className="grid md:grid-cols-3 gap-8 mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Popular Cities</h3>
          <div className="flex flex-wrap gap-2">
            {destination.cities.map((city, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                {city}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Specialties</h3>
          <ul className="space-y-1">
            {destination.specialties.map((specialty, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700 text-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                {specialty}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Treatment Costs</h3>
          <ul className="space-y-2">
            {destination.popularTreatments.map((treatment, index) => (
              <li key={index} className="text-gray-700 text-sm">
                <span className="font-medium">{treatment.name}:</span>
                <span className="ml-2">{treatment.cost}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Advantages</h3>
          <ul className="space-y-2">
            {destination.advantages.map((advantage, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700 text-sm">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                {advantage}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Clock size={16} className="text-gray-500" />
              <span className="font-semibold text-gray-900 text-sm">Typical Stay</span>
            </div>
            <p className="text-gray-700 text-sm">{destination.avgStayDuration}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={16} className="text-gray-500" />
              <span className="font-semibold text-gray-900 text-sm">Languages</span>
            </div>
            <p className="text-gray-700 text-sm">{destination.languageSupport}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default function DestinationsPage() {
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
        <header className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Plane size={16} />
            Dental Tourism Guide
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Top Dental Tourism <span className="text-blue-600">Destinations</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Explore the world's premier destinations for quality dental care. From Turkey's technological excellence 
            to Mexico's proximity advantages, discover where to find the best dental treatments with significant savings.
          </p>
        </header>

        {/* Destination Grid */}
        <section className="max-w-6xl mx-auto">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </section>

        {/* Comparison Table */}
        <section className="mt-16 max-w-6xl mx-auto">
          <div className="glass-elevated p-8 rounded-2xl shadow-xl border border-gray-200/50">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 pr-6 text-left font-semibold text-gray-900">Destination</th>
                    <th className="py-3 pr-6 text-left font-semibold text-gray-900">Quality Rating</th>
                    <th className="py-3 pr-6 text-left font-semibold text-gray-900">Cost Savings</th>
                    <th className="py-3 pr-6 text-left font-semibold text-gray-900">Typical Stay</th>
                    <th className="py-3 text-left font-semibold text-gray-900">Popular For</th>
                  </tr>
                </thead>
                <tbody>
                  {destinations.map((dest) => (
                    <tr key={dest.id} className="border-b border-gray-100">
                      <td className="py-4 pr-6">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{dest.flag}</span>
                          <span className="font-medium text-gray-900">{dest.name}</span>
                        </div>
                      </td>
                      <td className="py-4 pr-6">
                        <div className="flex items-center gap-1">
                          <Star size={14} className="text-yellow-500 fill-current" />
                          <span className="text-gray-700">{dest.quality}</span>
                        </div>
                      </td>
                      <td className="py-4 pr-6">
                        <span className="font-medium text-green-600">{dest.avgCostSavings}</span>
                      </td>
                      <td className="py-4 pr-6 text-gray-700">{dest.avgStayDuration}</td>
                      <td className="py-4 text-gray-700">{dest.specialties[0]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 max-w-4xl mx-auto">
          <div className="glass-elevated p-8 rounded-2xl shadow-xl border border-gray-200/50 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Find Clinics in Your Preferred Destination
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Ready to start your dental tourism journey? Browse certified dental professionals 
              in these top destinations and plan your treatment abroad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="btn-primary px-8 py-3"
              >
                Browse All Clinics
              </Link>
              <Link 
                href="/treatments"
                className="btn-secondary px-8 py-3"
              >
                Learn About Treatments
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
