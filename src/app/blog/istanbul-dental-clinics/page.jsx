"use client";

import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import Banner from "@/components/Banner";
import Header from "@/components/Header";

export default function IstanbulDentalClinicsPage() {
  return (
    <>
      <div className="min-h-screen w-full bg-grid-pattern relative">
        <Header />

        {/* Main Content */}
        <main className="container mx-auto px-4 sm:px-6 pt-24 pb-12">
          <Banner 
            title="Istanbul Dental Tourism Guide: Best Clinics & Travel Tips"
            subtitle="Why Istanbul is the #1 destination for dental tourism. Best clinics, costs, what to expect, and how to plan your trip."
          />

          {/* Back Button */}
          <div className="max-w-4xl mx-auto mb-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Link>
          </div>

          {/* Article Content */}
          <article className="max-w-4xl mx-auto">
            <div className="glass-elevated p-6 lg:p-8 rounded-2xl shadow-xl border border-gray-200/50">
              {/* Article Header */}
              <header className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full">
                    Destinations
                  </span>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Clock size={14} />
                    <span>9 min read</span>
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
                  Istanbul Dental Tourism Guide: Best Clinics & Travel Tips
                </h1>
              </header>

              {/* Article Body */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: `
                  <div class="space-y-6">
                    <p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                      Istanbul has emerged as the world's leading dental tourism destination, combining exceptional quality, affordable prices, and a rich cultural experience.
                    </p>

                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Why Choose Istanbul?</h2>
                    <div class="grid md:grid-cols-2 gap-4">
                      <div class="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-200 dark:border-blue-800">
                        <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Quality & Expertise</h3>
                        <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                          <li>• 500+ modern dental clinics</li>
                          <li>• Dentists trained internationally</li>
                          <li>• EU-standard equipment & materials</li>
                          <li>• English-speaking staff</li>
                        </ul>
                      </div>
                      <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border border-green-200 dark:border-green-800">
                        <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Convenience</h3>
                        <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                          <li>• Major international airport</li>
                          <li>• Direct flights from most countries</li>
                          <li>• Easy visa process</li>
                          <li>• Tourist-friendly infrastructure</li>
                        </ul>
                      </div>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Average Costs in Istanbul</h2>
                    <div class="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                      <div class="space-y-3">
                        <div class="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                          <span class="font-semibold text-gray-900 dark:text-gray-100">Dental Veneers (per tooth)</span>
                          <span class="text-blue-600 font-bold">£250</span>
                        </div>
                        <div class="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                          <span class="font-semibold text-gray-900 dark:text-gray-100">Zirconia Crowns (per crown)</span>
                          <span class="text-blue-600 font-bold">£170 - £250</span>
                        </div>
                        <div class="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                          <span class="font-semibold text-gray-900 dark:text-gray-100">Dental Implants (per implant)</span>
                          <span class="text-blue-600 font-bold">£300 - £1,000</span>
                        </div>
                        <div class="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                          <span class="font-semibold text-gray-900 dark:text-gray-100">Full Smile Makeover (16 veneers)</span>
                          <span class="text-blue-600 font-bold">£4,000</span>
                        </div>
                        <div class="flex justify-between items-center py-3">
                          <span class="font-semibold text-gray-900 dark:text-gray-100">All-on-4 Implants (per arch)</span>
                          <span class="text-blue-600 font-bold">£3,500 - £6,000</span>
                        </div>
                      </div>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Best Areas for Dental Clinics</h2>
                    <div class="space-y-4">
                      <div class="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Beşiktaş District</h3>
                        <div class="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Why Choose Beşiktaş:</h4>
                            <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                              <li>• Central location</li>
                              <li>• Modern clinics</li>
                              <li>• Easy access to hotels</li>
                              <li>• Tourist-friendly area</li>
                            </ul>
                          </div>
                          <div>
                            <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Nearby Attractions:</h4>
                            <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                              <li>• Bosphorus Bridge</li>
                              <li>• Dolmabahçe Palace</li>
                              <li>• Ortaköy Mosque</li>
                              <li>• Shopping centers</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Şişli District</h3>
                        <div class="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Why Choose Şişli:</h4>
                            <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                              <li>• Business district</li>
                              <li>• High-end clinics</li>
                              <li>• Excellent transport links</li>
                              <li>• International standards</li>
                            </ul>
                          </div>
                          <div>
                            <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Nearby Attractions:</h4>
                            <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                              <li>• Taksim Square</li>
                              <li>• İstiklal Street</li>
                              <li>• Galata Tower</li>
                              <li>• Modern shopping</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Kadıköy District (Asian Side)</h3>
                        <div class="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Why Choose Kadıköy:</h4>
                            <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                              <li>• Less crowded</li>
                              <li>• Affordable prices</li>
                              <li>• Quality clinics</li>
                              <li>• Local experience</li>
                            </ul>
                          </div>
                          <div>
                            <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Nearby Attractions:</h4>
                            <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                              <li>• Moda neighborhood</li>
                              <li>• Kadıköy Market</li>
                              <li>• Bosphorus views</li>
                              <li>• Local restaurants</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">How to Choose the Right Clinic</h2>
                    <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-800">
                      <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-4">✅ Essential Checklist:</h3>
                      <div class="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-3">Quality Indicators:</h4>
                          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                            <li class="flex items-start gap-2">
                              <span class="text-green-600 flex-shrink-0">✓</span>
                              <span>International certifications (JCI, ISO)</span>
                            </li>
                            <li class="flex items-start gap-2">
                              <span class="text-green-600 flex-shrink-0">✓</span>
                              <span>English-speaking staff</span>
                            </li>
                            <li class="flex items-start gap-2">
                              <span class="text-green-600 flex-shrink-0">✓</span>
                              <span>Before/after photos</span>
                            </li>
                            <li class="flex items-start gap-2">
                              <span class="text-green-600 flex-shrink-0">✓</span>
                              <span>Patient testimonials</span>
                            </li>
                            <li class="flex items-start gap-2">
                              <span class="text-green-600 flex-shrink-0">✓</span>
                              <span>Warranty on treatments</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-3">Red Flags to Avoid:</h4>
                          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                            <li class="flex items-start gap-2">
                              <span class="text-red-600 flex-shrink-0">⚠</span>
                              <span>Prices significantly below market rate</span>
                            </li>
                            <li class="flex items-start gap-2">
                              <span class="text-red-600 flex-shrink-0">⚠</span>
                              <span>No virtual consultation available</span>
                            </li>
                            <li class="flex items-start gap-2">
                              <span class="text-red-600 flex-shrink-0">⚠</span>
                              <span>Pressure to pay upfront</span>
                            </li>
                            <li class="flex items-start gap-2">
                              <span class="text-red-600 flex-shrink-0">⚠</span>
                              <span>Vague treatment plans</span>
                            </li>
                            <li class="flex items-start gap-2">
                              <span class="text-red-600 flex-shrink-0">⚠</span>
                              <span>Poor communication</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Travel & Accommodation Tips</h2>
                    <div class="grid md:grid-cols-2 gap-4">
                      <div class="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-200 dark:border-blue-800">
                        <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Getting to Istanbul</h3>
                        <div class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                          <div class="flex justify-between">
                            <span>Flight from UK:</span>
                            <span class="font-semibold">£200-£400</span>
                          </div>
                          <div class="flex justify-between">
                            <span>Flight from US:</span>
                            <span class="font-semibold">£400-£800</span>
                          </div>
                          <div class="flex justify-between">
                            <span>Flight from EU:</span>
                            <span class="font-semibold">£100-£300</span>
                          </div>
                          <div class="flex justify-between">
                            <span>Airport Transfer:</span>
                            <span class="font-semibold">£20-£40</span>
                          </div>
                        </div>
                      </div>

                      <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border border-green-200 dark:border-green-800">
                        <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Accommodation Options</h3>
                        <div class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                          <div class="flex justify-between">
                            <span>Budget Hotels:</span>
                            <span class="font-semibold">£30-£60/night</span>
                          </div>
                          <div class="flex justify-between">
                            <span>Mid-range Hotels:</span>
                            <span class="font-semibold">£60-£120/night</span>
                          </div>
                          <div class="flex justify-between">
                            <span>Luxury Hotels:</span>
                            <span class="font-semibold">£120-£300/night</span>
                          </div>
                          <div class="flex justify-between">
                            <span>Airbnb:</span>
                            <span class="font-semibold">£25-£100/night</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">What to Expect During Treatment</h2>
                    <div class="space-y-4">
                      <div class="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Day 1: Arrival & Consultation</h3>
                        <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                          <li>• Airport pickup (if arranged)</li>
                          <li>• Hotel check-in</li>
                          <li>• Initial consultation</li>
                          <li>• Digital scans and photos</li>
                          <li>• Treatment planning</li>
                        </ul>
                      </div>

                      <div class="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Day 2-3: Treatment</h3>
                        <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                          <li>• Tooth preparation</li>
                          <li>• Temporary restorations</li>
                          <li>• Laboratory work begins</li>
                          <li>• Follow-up appointments</li>
                        </ul>
                      </div>

                      <div class="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Day 4-5: Final Fitting</h3>
                        <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                          <li>• Permanent restorations</li>
                          <li>• Final adjustments</li>
                          <li>• Post-treatment instructions</li>
                          <li>• Follow-up care plan</li>
                        </ul>
                      </div>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Cultural Experience</h2>
                    <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                      <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-4">Must-See Attractions</h3>
                      <div class="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Historical Sites:</h4>
                          <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                            <li>• Hagia Sophia</li>
                            <li>• Blue Mosque</li>
                            <li>• Topkapi Palace</li>
                            <li>• Grand Bazaar</li>
                          </ul>
                        </div>
                        <div>
                          <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Modern Istanbul:</h4>
                          <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                            <li>• Galata Tower</li>
                            <li>• Bosphorus Cruise</li>
                            <li>• Taksim Square</li>
                            <li>• Shopping centers</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800 mt-6">
                      <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">💡 Bottom Line</h3>
                      <p class="text-gray-700 dark:text-gray-300 mb-4">
                        Istanbul offers the perfect combination of world-class dental care, affordable prices, and rich cultural experiences. With proper research and planning, you can achieve your dream smile while enjoying one of the world's most fascinating cities.
                      </p>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        <strong>Remember:</strong> Choose clinics with international certifications, English-speaking staff, and comprehensive warranties. Istanbul's best clinics welcome international patients and provide exceptional care.
                      </p>
                    </div>
                  </div>
                ` }}
              />

              {/* CTA Section */}
              <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  Ready to Find Your Dental Clinic?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Browse verified clinics in Istanbul and compare prices for your dental treatment.
                </p>
                <Link
                  href="/"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Find Clinics Now
                </Link>
              </div>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
