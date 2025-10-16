"use client";

import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import Banner from "@/components/Banner";
import Header from "@/components/Header";

export default function VeneersVsCrownsPage() {
  return (
    <>
      <div className="min-h-screen w-full bg-grid-pattern relative">
        <Header />

        {/* Main Content */}
        <main className="container mx-auto px-4 sm:px-6 pt-24 pb-12">
          <Banner 
            title="Veneers vs Crowns: Which Treatment is Right for You?"
            subtitle="Compare porcelain veneers and zirconia crowns. Learn about costs, durability, procedures, and which option is best for your smile goals."
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
                    Treatment Guides
                  </span>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Clock size={14} />
                    <span>6 min read</span>
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
                  Veneers vs Crowns: Which Treatment is Right for You?
                </h1>
              </header>

              {/* Article Body */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: `
                  <div class="space-y-6">
                    <p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                      Both veneers and crowns can transform your smile, but they serve different purposes. Here's how to choose the right one.
                    </p>

                    <div class="grid md:grid-cols-2 gap-6">
                      <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                        <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Dental Veneers</h3>
                        <div class="space-y-3 text-sm">
                          <div>
                            <span class="font-semibold text-gray-900 dark:text-gray-100">What they are:</span>
                            <p class="text-gray-700 dark:text-gray-300">Thin shells covering only the front of teeth</p>
                          </div>
                          <div>
                            <span class="font-semibold text-gray-900 dark:text-gray-100">Best for:</span>
                            <p class="text-gray-700 dark:text-gray-300">Cosmetic improvements, discoloration, minor chips</p>
                          </div>
                          <div>
                            <span class="font-semibold text-gray-900 dark:text-gray-100">Cost:</span>
                            <p class="text-gray-700 dark:text-gray-300">£250 (Turkey) | £500-1,000 (UK)</p>
                          </div>
                          <div>
                            <span class="font-semibold text-gray-900 dark:text-gray-100">Durability:</span>
                            <p class="text-gray-700 dark:text-gray-300">10-15 years with proper care</p>
                          </div>
                          <div>
                            <span class="font-semibold text-gray-900 dark:text-gray-100">Tooth removal:</span>
                            <p class="text-gray-700 dark:text-gray-300">Minimal (0.5mm of enamel)</p>
                          </div>
                        </div>
                      </div>

                      <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                        <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Zirconia Crowns</h3>
                        <div class="space-y-3 text-sm">
                          <div>
                            <span class="font-semibold text-gray-900 dark:text-gray-100">What they are:</span>
                            <p class="text-gray-700 dark:text-gray-300">Complete caps covering entire tooth</p>
                          </div>
                          <div>
                            <span class="font-semibold text-gray-900 dark:text-gray-100">Best for:</span>
                            <p class="text-gray-700 dark:text-gray-300">Broken teeth, large fillings, root canals</p>
                          </div>
                          <div>
                            <span class="font-semibold text-gray-900 dark:text-gray-100">Cost:</span>
                            <p class="text-gray-700 dark:text-gray-300">£170-250 (Turkey) | £500-1,000 (UK)</p>
                          </div>
                          <div>
                            <span class="font-semibold text-gray-900 dark:text-gray-100">Durability:</span>
                            <p class="text-gray-700 dark:text-gray-300">15-20 years, very strong</p>
                          </div>
                          <div>
                            <span class="font-semibold text-gray-900 dark:text-gray-100">Tooth removal:</span>
                            <p class="text-gray-700 dark:text-gray-300">More substantial (all around tooth)</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Decision Guide</h2>
                    <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-800">
                      <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-4">Choose Veneers If:</h3>
                      <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                        <li class="flex items-start gap-2">
                          <span class="text-blue-600 flex-shrink-0">•</span>
                          <span>Your teeth are healthy but cosmetically imperfect</span>
                        </li>
                        <li class="flex items-start gap-2">
                          <span class="text-blue-600 flex-shrink-0">•</span>
                          <span>You want to preserve as much natural tooth as possible</span>
                        </li>
                        <li class="flex items-start gap-2">
                          <span class="text-blue-600 flex-shrink-0">•</span>
                          <span>You have minor chips, gaps, or discoloration</span>
                        </li>
                        <li class="flex items-start gap-2">
                          <span class="text-blue-600 flex-shrink-0">•</span>
                          <span>You want a Hollywood smile makeover</span>
                        </li>
                      </ul>
                    </div>

                    <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                      <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-4">Choose Crowns If:</h3>
                      <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                        <li class="flex items-start gap-2">
                          <span class="text-green-600 flex-shrink-0">•</span>
                          <span>Your tooth is broken or severely damaged</span>
                        </li>
                        <li class="flex items-start gap-2">
                          <span class="text-green-600 flex-shrink-0">•</span>
                          <span>You've had a root canal treatment</span>
                        </li>
                        <li class="flex items-start gap-2">
                          <span class="text-green-600 flex-shrink-0">•</span>
                          <span>You have large fillings that need protection</span>
                        </li>
                        <li class="flex items-start gap-2">
                          <span class="text-green-600 flex-shrink-0">•</span>
                          <span>You need maximum strength and durability</span>
                        </li>
                      </ul>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Cost Comparison</h2>
                    <div class="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                      <div class="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Veneers</h3>
                          <div class="space-y-2 text-sm">
                            <div class="flex justify-between">
                              <span class="text-gray-700 dark:text-gray-300">Turkey:</span>
                              <span class="font-semibold text-gray-900 dark:text-gray-100">£250 per tooth</span>
                            </div>
                            <div class="flex justify-between">
                              <span class="text-gray-700 dark:text-gray-300">UK:</span>
                              <span class="font-semibold text-gray-900 dark:text-gray-100">£500-1,000 per tooth</span>
                            </div>
                            <div class="flex justify-between">
                              <span class="text-gray-700 dark:text-gray-300">Full Smile (16):</span>
                              <span class="font-semibold text-gray-900 dark:text-gray-100">£4,000-16,000</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Crowns</h3>
                          <div class="space-y-2 text-sm">
                            <div class="flex justify-between">
                              <span class="text-gray-700 dark:text-gray-300">Turkey:</span>
                              <span class="font-semibold text-gray-900 dark:text-gray-100">£170-250 per crown</span>
                            </div>
                            <div class="flex justify-between">
                              <span class="text-gray-700 dark:text-gray-300">UK:</span>
                              <span class="font-semibold text-gray-900 dark:text-gray-100">£500-1,000 per crown</span>
                            </div>
                            <div class="flex justify-between">
                              <span class="text-gray-700 dark:text-gray-300">Full Mouth (28):</span>
                              <span class="font-semibold text-gray-900 dark:text-gray-100">£4,760-28,000</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Procedure Comparison</h2>
                    <div class="space-y-4">
                      <div class="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Veneer Procedure</h3>
                        <div class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                          <p><strong>Step 1:</strong> Consultation and digital scans</p>
                          <p><strong>Step 2:</strong> Minimal tooth preparation (0.5mm enamel removal)</p>
                          <p><strong>Step 3:</strong> Temporary veneers placed</p>
                          <p><strong>Step 4:</strong> Permanent veneers bonded (1-2 weeks later)</p>
                          <p><strong>Total Time:</strong> 2-3 visits over 2-3 weeks</p>
                        </div>
                      </div>

                      <div class="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                        <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Crown Procedure</h3>
                        <div class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                          <p><strong>Step 1:</strong> Consultation and X-rays</p>
                          <p><strong>Step 2:</strong> Tooth preparation (more substantial removal)</p>
                          <p><strong>Step 3:</strong> Temporary crown placed</p>
                          <p><strong>Step 4:</strong> Permanent crown cemented (1-2 weeks later)</p>
                          <p><strong>Total Time:</strong> 2-3 visits over 2-3 weeks</p>
                        </div>
                      </div>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Durability & Maintenance</h2>
                    <div class="grid md:grid-cols-2 gap-4">
                      <div class="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-200 dark:border-blue-800">
                        <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Veneers</h3>
                        <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                          <li>• Last 10-15 years with proper care</li>
                          <li>• Can chip if subjected to excessive force</li>
                          <li>• Require regular dental check-ups</li>
                          <li>• May need replacement over time</li>
                          <li>• Avoid hard foods and nail biting</li>
                        </ul>
                      </div>

                      <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border border-green-200 dark:border-green-800">
                        <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Crowns</h3>
                        <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                          <li>• Last 15-20 years, very durable</li>
                          <li>• Extremely strong, rarely break</li>
                          <li>• Require regular dental check-ups</li>
                          <li>• May need replacement due to wear</li>
                          <li>• Can handle normal chewing forces</li>
                        </ul>
                      </div>
                    </div>

                    <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800 mt-6">
                      <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">💡 Bottom Line</h3>
                      <p class="text-gray-700 dark:text-gray-300 mb-4">
                        Veneers are perfect for cosmetic improvements with minimal tooth removal, while crowns are ideal for structural restoration and maximum durability. Both offer excellent results when chosen appropriately for your specific needs.
                      </p>
                      <p class="text-sm text-gray-600 dark:text-gray-400">
                        <strong>Remember:</strong> Consult with a qualified dentist to determine which option is best for your specific case. Many patients benefit from a combination of both treatments.
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
                  Browse verified clinics and compare prices for your dental treatment.
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
