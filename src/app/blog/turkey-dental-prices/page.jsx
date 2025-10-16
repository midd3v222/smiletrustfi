"use client";

import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import Banner from "@/components/Banner";
import Header from "@/components/Header";

export default function TurkeyDentalPricesPage() {
  return (
    <>
      <div className="min-h-screen w-full bg-grid-pattern relative">
        <Header />

        {/* Main Content */}
        <main className="container mx-auto px-4 sm:px-6 pt-24 pb-12">
          <Banner 
            title="Turkey Dental Prices: Complete Cost Breakdown [2025]"
            subtitle="Everything you need to know about dental treatment costs in Turkey for UK/EU patients. Veneers, crowns, implants, and full smile makeovers with real clinic prices."
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
                    <span>10 min read</span>
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
                  Turkey Dental Prices: Complete Cost Breakdown [2025]
                </h1>
              </header>

              {/* Article Body */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: `
                  <div class="space-y-6">
                    <p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                      Turkey has become Europe's leading destination for dental tourism, offering exceptional quality at 70-85% lower costs than UK private dental care.
                    </p>

                    <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                      <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Quick Price Overview</h3>
                      <div class="space-y-3">
                        <div class="flex justify-between items-center py-2 border-b border-blue-200 dark:border-blue-800">
                          <span class="font-semibold text-gray-900 dark:text-gray-100">Dental Veneers</span>
                          <span class="text-blue-700 dark:text-blue-300 font-bold">£250 per tooth</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-blue-200 dark:border-blue-800">
                          <span class="font-semibold text-gray-900 dark:text-gray-100">Zirconia Crowns</span>
                          <span class="text-blue-700 dark:text-blue-300 font-bold">£170 - £250 per crown</span>
                        </div>
                        <div class="flex justify-between items-center py-2 border-b border-blue-200 dark:border-blue-800">
                          <span class="font-semibold text-gray-900 dark:text-gray-100">Dental Implants</span>
                          <span class="text-blue-700 dark:text-blue-300 font-bold">£300 - £1,000 per implant</span>
                        </div>
                        <div class="flex justify-between items-center py-2">
                          <span class="font-semibold text-gray-900 dark:text-gray-100">Full Smile Makeover</span>
                          <span class="text-blue-700 dark:text-blue-300 font-bold">£1,600 - £4,000</span>
                        </div>
                      </div>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Why Turkey for Dental Work?</h2>
                    <div class="space-y-3">
                      <div class="flex items-start gap-3">
                        <span class="text-green-600 text-xl">✓</span>
                        <div>
                          <h4 class="font-semibold text-gray-900 dark:text-gray-100">Highly Skilled Dentists</h4>
                          <p class="text-gray-700 dark:text-gray-300 text-sm">Many Turkish dentists train internationally and have decades of experience with cosmetic procedures.</p>
                        </div>
                      </div>
                      <div class="flex items-start gap-3">
                        <span class="text-green-600 text-xl">✓</span>
                        <div>
                          <h4 class="font-semibold text-gray-900 dark:text-gray-100">Modern Facilities</h4>
                          <p class="text-gray-700 dark:text-gray-300 text-sm">State-of-the-art equipment and EU-standard safety protocols in major cities.</p>
                        </div>
                      </div>
                      <div class="flex items-start gap-3">
                        <span class="text-green-600 text-xl">✓</span>
                        <div>
                          <h4 class="font-semibold text-gray-900 dark:text-gray-100">All-Inclusive Packages</h4>
                          <p class="text-gray-700 dark:text-gray-300 text-sm">Many clinics offer packages including accommodation, airport transfers, and follow-up care.</p>
                        </div>
                      </div>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Popular Cities for Dental Tourism</h2>
                    <div class="grid md:grid-cols-3 gap-4">
                      <div class="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-2">Istanbul</h3>
                        <p class="text-sm text-gray-700 dark:text-gray-300">Largest city, most clinics, easy international access</p>
                      </div>
                      <div class="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-2">Antalya</h3>
                        <p class="text-sm text-gray-700 dark:text-gray-300">Beach resort city, combine treatment with vacation</p>
                      </div>
                      <div class="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-2">Izmir</h3>
                        <p class="text-sm text-gray-700 dark:text-gray-300">Coastal city, excellent medical facilities</p>
                      </div>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Detailed Treatment Costs in Turkey</h2>
                    <div class="space-y-6">
                      <div class="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Dental Veneers - Complete Breakdown</h3>
                        <div class="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-3">Cost Structure:</h4>
                            <div class="space-y-2 text-sm">
                              <div class="flex justify-between">
                                <span class="text-gray-700 dark:text-gray-300">Single Veneer:</span>
                                <span class="font-semibold text-gray-900 dark:text-gray-100">£250</span>
                              </div>
                              <div class="flex justify-between">
                                <span class="text-gray-700 dark:text-gray-300">6 Veneers Package:</span>
                                <span class="font-semibold text-gray-900 dark:text-gray-100">£1,200</span>
                              </div>
                              <div class="flex justify-between">
                                <span class="text-gray-700 dark:text-gray-300">Full Smile (16):</span>
                                <span class="font-semibold text-gray-900 dark:text-gray-100">£4,000</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-3">What's Included:</h4>
                            <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                              <li>• Initial consultation & digital scans</li>
                              <li>• Tooth preparation</li>
                              <li>• Temporary veneers</li>
                              <li>• Permanent veneers (E-max/Zirconia)</li>
                              <li>• Final fitting & adjustments</li>
                              <li>• 1-year warranty</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Zirconia Crowns - Complete Breakdown</h3>
                        <div class="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-3">Cost Structure:</h4>
                            <div class="space-y-2 text-sm">
                              <div class="flex justify-between">
                                <span class="text-gray-700 dark:text-gray-300">Single Crown:</span>
                                <span class="font-semibold text-gray-900 dark:text-gray-100">£170-£250</span>
                              </div>
                              <div class="flex justify-between">
                                <span class="text-gray-700 dark:text-gray-300">Multiple Crowns:</span>
                                <span class="font-semibold text-gray-900 dark:text-gray-100">Package discounts</span>
                              </div>
                              <div class="flex justify-between">
                                <span class="text-gray-700 dark:text-gray-300">Full Mouth (28):</span>
                                <span class="font-semibold text-gray-900 dark:text-gray-100">£3,500-£5,000</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-3">Material Options:</h4>
                            <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                              <li>• <strong>Zirconia:</strong> £170-£250 (strongest)</li>
                              <li>• <strong>E-max:</strong> £240-£320 (most aesthetic)</li>
                              <li>• <strong>Porcelain:</strong> £120-£200 (traditional)</li>
                              <li>• <strong>PFM:</strong> £100-£180 (metal-based)</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div class="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Dental Implants - Complete Breakdown</h3>
                        <div class="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-3">Cost Structure:</h4>
                            <div class="space-y-2 text-sm">
                              <div class="flex justify-between">
                                <span class="text-gray-700 dark:text-gray-300">Single Implant:</span>
                                <span class="font-semibold text-gray-900 dark:text-gray-100">£300-£1,000</span>
                              </div>
                              <div class="flex justify-between">
                                <span class="text-gray-700 dark:text-gray-300">Implant + Crown:</span>
                                <span class="font-semibold text-gray-900 dark:text-gray-100">£470-£1,250</span>
                              </div>
                              <div class="flex justify-between">
                                <span class="text-gray-700 dark:text-gray-300">All-on-4 (per arch):</span>
                                <span class="font-semibold text-gray-900 dark:text-gray-100">£3,500-£6,000</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-3">Brand Options:</h4>
                            <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                              <li>• <strong>Straumann:</strong> £800-£1,000 (premium)</li>
                              <li>• <strong>Nobel Biocare:</strong> £600-£800 (reliable)</li>
                              <li>• <strong>Osstem:</strong> £300-£500 (budget)</li>
                              <li>• <strong>Local Brands:</strong> £200-£400 (basic)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Additional Costs to Consider</h2>
                    <div class="grid md:grid-cols-2 gap-4">
                      <div class="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-200 dark:border-blue-800">
                        <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Travel & Accommodation</h3>
                        <div class="space-y-2 text-sm">
                          <div class="flex justify-between">
                            <span class="text-gray-700 dark:text-gray-300">Flight (UK-Turkey):</span>
                            <span class="font-semibold text-gray-900 dark:text-gray-100">£200-£400</span>
                          </div>
                          <div class="flex justify-between">
                            <span class="text-gray-700 dark:text-gray-300">Hotel (7 nights):</span>
                            <span class="font-semibold text-gray-900 dark:text-gray-100">£280-£560</span>
                          </div>
                          <div class="flex justify-between">
                            <span class="text-gray-700 dark:text-gray-300">Airport Transfers:</span>
                            <span class="font-semibold text-gray-900 dark:text-gray-100">£20-£40</span>
                          </div>
                          <div class="flex justify-between">
                            <span class="text-gray-700 dark:text-gray-300">Food & Activities:</span>
                            <span class="font-semibold text-gray-900 dark:text-gray-100">£200-£400</span>
                          </div>
                        </div>
                      </div>

                      <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border border-green-200 dark:border-green-800">
                        <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Medical & Follow-up</h3>
                        <div class="space-y-2 text-sm">
                          <div class="flex justify-between">
                            <span class="text-gray-700 dark:text-gray-300">Pre-treatment X-rays:</span>
                            <span class="font-semibold text-gray-900 dark:text-gray-100">£50-£100</span>
                          </div>
                          <div class="flex justify-between">
                            <span class="text-gray-700 dark:text-gray-300">Post-treatment Check:</span>
                            <span class="font-semibold text-gray-900 dark:text-gray-100">£100-£200</span>
                          </div>
                          <div class="flex justify-between">
                            <span class="text-gray-700 dark:text-gray-300">Travel Insurance:</span>
                            <span class="font-semibold text-gray-900 dark:text-gray-100">£50-£100</span>
                          </div>
                          <div class="flex justify-between">
                            <span class="text-gray-700 dark:text-gray-300">Emergency Fund:</span>
                            <span class="font-semibold text-gray-900 dark:text-gray-100">£200-£500</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Best Time to Visit Turkey for Dental Work</h2>
                    <div class="space-y-4">
                      <div class="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Seasonal Considerations</h3>
                        <div class="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Peak Season (June-August)</h4>
                            <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                              <li>• Higher hotel prices</li>
                              <li>• More tourists</li>
                              <li>• Hot weather</li>
                              <li>• Longer wait times</li>
                            </ul>
                          </div>
                          <div>
                            <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Shoulder Season (April-May, Sep-Oct)</h4>
                            <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                              <li>• Moderate prices</li>
                              <li>• Pleasant weather</li>
                              <li>• Less crowded</li>
                              <li>• Better availability</li>
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

                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Total Cost Comparison</h2>
                    <div class="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                      <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Full Smile Makeover (16 Veneers)</h3>
                      <div class="space-y-4">
                        <div class="grid md:grid-cols-3 gap-4">
                          <div class="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                            <h4 class="font-bold text-gray-900 dark:text-gray-100 mb-2">UK Private</h4>
                            <p class="text-2xl font-bold text-red-600">£8,000-£16,000</p>
                            <p class="text-sm text-gray-600">Treatment only</p>
                          </div>
                          <div class="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                            <h4 class="font-bold text-gray-900 dark:text-gray-100 mb-2">Turkey</h4>
                            <p class="text-2xl font-bold text-green-600">£4,000-£5,000</p>
                            <p class="text-sm text-gray-600">Treatment + travel</p>
                          </div>
                          <div class="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <h4 class="font-bold text-gray-900 dark:text-gray-100 mb-2">Savings</h4>
                            <p class="text-2xl font-bold text-blue-600">70-85%</p>
                            <p class="text-sm text-gray-600">Total cost reduction</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800 mt-6">
                      <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">💡 Bottom Line</h3>
                      <p class="text-gray-700 dark:text-gray-300 mb-4">
                        Turkey offers exceptional value for dental treatments, with savings of 70-85% compared to UK private care. The combination of skilled dentists, modern facilities, and competitive pricing makes Turkey the top choice for dental tourism.
                      </p>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        <strong>Remember:</strong> Always research clinics thoroughly, get multiple quotes, and ensure they have proper certifications and warranties before booking.
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
                  Browse verified clinics and compare prices for your dental treatment in Turkey.
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
