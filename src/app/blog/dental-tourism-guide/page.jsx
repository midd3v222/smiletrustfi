"use client";

import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import Banner from "@/components/Banner";
import Header from "@/components/Header";

export default function DentalTourismGuidePage() {
  return (
    <>
      <div className="min-h-screen w-full bg-grid-pattern relative">
        <Header />

        {/* Main Content */}
        <main className="container mx-auto px-4 sm:px-6 pt-24 pb-12">
          <Banner 
            title="Complete Dental Tourism Guide: Everything You Need to Know"
            subtitle="Your comprehensive guide to dental tourism. Learn about destinations, costs, safety, and how to plan your dental trip abroad."
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
                    Guides
                  </span>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Clock size={14} />
                    <span>12 min read</span>
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
                  Complete Dental Tourism Guide: Everything You Need to Know
                </h1>
              </header>

              {/* Article Body */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: `
                  <div class="space-y-6">
                    <p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                      Dental tourism has become a popular way to access high-quality dental care at a fraction of the cost. This comprehensive guide covers everything you need to know about traveling abroad for dental treatment.
                    </p>

                    <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                      <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">What is Dental Tourism?</h3>
                      <p class="text-gray-700 dark:text-gray-300 mb-4">
                        Dental tourism involves traveling to another country to receive dental treatment, typically to save money while maintaining quality care. Popular destinations include Turkey, Mexico, Thailand, Hungary, and Costa Rica.
                      </p>
                      <div class="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Benefits:</h4>
                          <ul class="space-y-1 text-gray-700 dark:text-gray-300">
                            <li>• 60-85% cost savings</li>
                            <li>• High-quality care</li>
                            <li>• Modern facilities</li>
                            <li>• Experienced dentists</li>
                            <li>• Combine with vacation</li>
                          </ul>
                        </div>
                        <div>
                          <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Considerations:</h4>
                          <ul class="space-y-1 text-gray-700 dark:text-gray-300">
                            <li>• Travel costs</li>
                            <li>• Language barriers</li>
                            <li>• Follow-up care</li>
                            <li>• Legal protections</li>
                            <li>• Quality variations</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Top Dental Tourism Destinations</h2>
                    <div class="space-y-4">
                      <div class="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                        <div class="flex items-center gap-3 mb-3">
                          <span class="text-3xl">🇹🇷</span>
                          <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100">Turkey</h3>
                          <span class="ml-auto px-3 py-1 bg-green-100 text-green-700 dark:text-green-300 text-sm font-medium rounded-full">
                            #1 Destination
                          </span>
                        </div>
                        <div class="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Why Choose Turkey:</h4>
                            <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                              <li>• EU-standard facilities</li>
                              <li>• Highly skilled dentists</li>
                              <li>• Modern technology</li>
                              <li>• All-inclusive packages</li>
                              <li>• English-speaking staff</li>
                            </ul>
                          </div>
                          <div>
                            <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Popular Cities:</h4>
                            <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                              <li>• Istanbul (largest city)</li>
                              <li>• Antalya (beach resort)</li>
                              <li>• Izmir (coastal city)</li>
                              <li>• Ankara (capital)</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                        <div class="flex items-center gap-3 mb-3">
                          <span class="text-3xl">🇲🇽</span>
                          <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100">Mexico</h3>
                          <span class="ml-auto px-3 py-1 bg-blue-100 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                            Close to US
                          </span>
                        </div>
                        <div class="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Why Choose Mexico:</h4>
                            <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                              <li>• Close to US/Canada</li>
                              <li>• Affordable prices</li>
                              <li>• Experienced dentists</li>
                              <li>• Tourist-friendly</li>
                              <li>• Easy travel</li>
                            </ul>
                          </div>
                          <div>
                            <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Popular Cities:</h4>
                            <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                              <li>• Tijuana (border city)</li>
                              <li>• Cancun (resort city)</li>
                              <li>• Mexico City (capital)</li>
                              <li>• Guadalajara (cultural)</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                        <div class="flex items-center gap-3 mb-3">
                          <span class="text-3xl">🇹🇭</span>
                          <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100">Thailand</h3>
                          <span class="ml-auto px-3 py-1 bg-purple-100 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-full">
                            Luxury Option
                          </span>
                        </div>
                        <div class="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Why Choose Thailand:</h4>
                            <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                              <li>• Luxury facilities</li>
                              <li>• Highly trained dentists</li>
                              <li>• Modern technology</li>
                              <li>• Tourist infrastructure</li>
                              <li>• English proficiency</li>
                            </ul>
                          </div>
                          <div>
                            <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Popular Cities:</h4>
                            <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                              <li>• Bangkok (capital)</li>
                              <li>• Phuket (island)</li>
                              <li>• Chiang Mai (northern)</li>
                              <li>• Pattaya (beach)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Cost Comparison by Destination</h2>
                    <div class="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                      <div class="overflow-x-auto">
                        <table class="w-full text-sm">
                          <thead>
                            <tr class="border-b border-gray-200 dark:border-gray-700">
                              <th class="text-left py-3 font-semibold text-gray-900 dark:text-gray-100">Treatment</th>
                              <th class="text-center py-3 font-semibold text-gray-900 dark:text-gray-100">Turkey</th>
                              <th class="text-center py-3 font-semibold text-gray-900 dark:text-gray-100">Mexico</th>
                              <th class="text-center py-3 font-semibold text-gray-900 dark:text-gray-100">Thailand</th>
                              <th class="text-center py-3 font-semibold text-gray-900 dark:text-gray-100">UK/US</th>
                            </tr>
                          </thead>
                          <tbody class="space-y-2">
                            <tr class="border-b border-gray-100 dark:border-gray-800">
                              <td class="py-3 text-gray-700 dark:text-gray-300">Dental Veneers</td>
                              <td class="py-3 text-center font-semibold text-green-600">£250</td>
                              <td class="py-3 text-center font-semibold text-green-600">£300</td>
                              <td class="py-3 text-center font-semibold text-green-600">£400</td>
                              <td class="py-3 text-center font-semibold text-red-600">£500-1,000</td>
                            </tr>
                            <tr class="border-b border-gray-100 dark:border-gray-800">
                              <td class="py-3 text-gray-700 dark:text-gray-300">Zirconia Crowns</td>
                              <td class="py-3 text-center font-semibold text-green-600">£170-250</td>
                              <td class="py-3 text-center font-semibold text-green-600">£200-300</td>
                              <td class="py-3 text-center font-semibold text-green-600">£300-400</td>
                              <td class="py-3 text-center font-semibold text-red-600">£500-1,000</td>
                            </tr>
                            <tr class="border-b border-gray-100 dark:border-gray-800">
                              <td class="py-3 text-gray-700 dark:text-gray-300">Dental Implants</td>
                              <td class="py-3 text-center font-semibold text-green-600">£300-1,000</td>
                              <td class="py-3 text-center font-semibold text-green-600">£400-1,200</td>
                              <td class="py-3 text-center font-semibold text-green-600">£500-1,500</td>
                              <td class="py-3 text-center font-semibold text-red-600">£1,500-3,000</td>
                            </tr>
                            <tr>
                              <td class="py-3 text-gray-700 dark:text-gray-300">Full Smile Makeover</td>
                              <td class="py-3 text-center font-semibold text-green-600">£4,000</td>
                              <td class="py-3 text-center font-semibold text-green-600">£5,000</td>
                              <td class="py-3 text-center font-semibold text-green-600">£6,000</td>
                              <td class="py-3 text-center font-semibold text-red-600">£8,000-16,000</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Planning Your Dental Trip</h2>
                    <div class="space-y-4">
                      <div class="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-200 dark:border-blue-800">
                        <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Pre-Trip Planning (2-3 months before)</h3>
                        <div class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                          <div class="flex items-start gap-2">
                            <span class="text-blue-600 flex-shrink-0">1.</span>
                            <span>Research clinics and read reviews</span>
                          </div>
                          <div class="flex items-start gap-2">
                            <span class="text-blue-600 flex-shrink-0">2.</span>
                            <span>Schedule virtual consultations</span>
                          </div>
                          <div class="flex items-start gap-2">
                            <span class="text-blue-600 flex-shrink-0">3.</span>
                            <span>Get detailed treatment plans and quotes</span>
                          </div>
                          <div class="flex items-start gap-2">
                            <span class="text-blue-600 flex-shrink-0">4.</span>
                            <span>Book flights and accommodation</span>
                          </div>
                          <div class="flex items-start gap-2">
                            <span class="text-blue-600 flex-shrink-0">5.</span>
                            <span>Purchase travel insurance</span>
                          </div>
                        </div>
                      </div>

                      <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border border-green-200 dark:border-green-800">
                        <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">During Your Trip</h3>
                        <div class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                          <div class="flex items-start gap-2">
                            <span class="text-green-600 flex-shrink-0">•</span>
                            <span>Arrive 1-2 days before treatment</span>
                          </div>
                          <div class="flex items-start gap-2">
                            <span class="text-green-600 flex-shrink-0">•</span>
                            <span>Follow pre-treatment instructions</span>
                          </div>
                          <div class="flex items-start gap-2">
                            <span class="text-green-600 flex-shrink-0">•</span>
                            <span>Ask questions and clarify everything</span>
                          </div>
                          <div class="flex items-start gap-2">
                            <span class="text-green-600 flex-shrink-0">•</span>
                            <span>Take photos of your treatment</span>
                          </div>
                          <div class="flex items-start gap-2">
                            <span class="text-green-600 flex-shrink-0">•</span>
                            <span>Get written treatment records</span>
                          </div>
                        </div>
                      </div>

                      <div class="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-xl border border-yellow-200 dark:border-yellow-800">
                        <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Post-Treatment Care</h3>
                        <div class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                          <div class="flex items-start gap-2">
                            <span class="text-yellow-600 flex-shrink-0">•</span>
                            <span>Follow post-treatment instructions</span>
                          </div>
                          <div class="flex items-start gap-2">
                            <span class="text-yellow-600 flex-shrink-0">•</span>
                            <span>Schedule follow-up appointments</span>
                          </div>
                          <div class="flex items-start gap-2">
                            <span class="text-yellow-600 flex-shrink-0">•</span>
                            <span>Maintain regular dental hygiene</span>
                          </div>
                          <div class="flex items-start gap-2">
                            <span class="text-yellow-600 flex-shrink-0">•</span>
                            <span>Keep all treatment records</span>
                          </div>
                          <div class="flex items-start gap-2">
                            <span class="text-yellow-600 flex-shrink-0">•</span>
                            <span>Contact clinic if issues arise</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Safety Considerations</h2>
                    <div class="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
                      <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-4">Red Flags to Avoid</h3>
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
                        <li class="flex items-start gap-2">
                          <span class="text-red-600 flex-shrink-0">⚠</span>
                          <span>No physical address</span>
                        </li>
                      </ul>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Travel Tips</h2>
                    <div class="grid md:grid-cols-2 gap-4">
                      <div class="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Before You Go</h3>
                        <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                          <li>• Check visa requirements</li>
                          <li>• Get travel insurance</li>
                          <li>• Learn basic local phrases</li>
                          <li>• Download translation apps</li>
                          <li>• Research local customs</li>
                          <li>• Check weather conditions</li>
                        </ul>
                      </div>

                      <div class="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">During Your Stay</h3>
                        <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                          <li>• Stay hydrated</li>
                          <li>• Follow dietary restrictions</li>
                          <li>• Take prescribed medications</li>
                          <li>• Avoid strenuous activities</li>
                          <li>• Keep emergency contacts handy</li>
                          <li>• Document everything</li>
                        </ul>
                      </div>
                    </div>

                    <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800 mt-6">
                      <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">💡 Bottom Line</h3>
                      <p class="text-gray-700 dark:text-gray-300 mb-4">
                        Dental tourism can save you thousands while providing excellent care. The key is thorough research, choosing reputable clinics, and proper planning. With the right approach, you can achieve your dream smile at a fraction of the cost.
                      </p>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        <strong>Remember:</strong> Quality clinics welcome your questions and provide transparent information. If a clinic is evasive or pressures you, that's a red flag to look elsewhere.
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
                  Browse verified clinics and compare prices for your dental treatment abroad.
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
