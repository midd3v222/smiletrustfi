"use client";

import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import Banner from "@/components/Banner";
import Header from "@/components/Header";

export default function IsDentalTourismSafePage() {
  return (
    <>
      <div className="min-h-screen w-full bg-grid-pattern relative">
        <Header />

        {/* Main Content */}
        <main className="container mx-auto px-4 sm:px-6 pt-24 pb-12">
          <Banner 
            title="Is Dental Tourism Safe? Red Flags to Watch For"
            subtitle="Learn how to identify trustworthy dental clinics abroad and avoid scams. Expert checklist for safe dental tourism."
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
                    Safety & Tips
                  </span>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Clock size={14} />
                    <span>7 min read</span>
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
                  Is Dental Tourism Safe? Red Flags to Watch For
                </h1>
              </header>

              {/* Article Body */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: `
                  <div class="space-y-6">
                    <p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                      Dental tourism can be extremely safe when done right. Here's how to protect yourself and ensure quality care.
                    </p>

                    <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
                      <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">✅ What to Look For (Safe Clinic Indicators)</h3>
                      <ul class="space-y-3">
                        <li class="flex items-start gap-3">
                          <span class="text-green-600 text-xl flex-shrink-0">✓</span>
                          <div>
                            <span class="font-semibold text-gray-900 dark:text-gray-100">International Certifications:</span>
                            <span class="text-gray-700 dark:text-gray-300"> JCI, ISO, or similar accreditations</span>
                          </div>
                        </li>
                        <li class="flex items-start gap-3">
                          <span class="text-green-600 text-xl flex-shrink-0">✓</span>
                          <div>
                            <span class="font-semibold text-gray-900 dark:text-gray-100">Verified Reviews:</span>
                            <span class="text-gray-700 dark:text-gray-300"> Multiple sources with detailed feedback</span>
                          </div>
                        </li>
                        <li class="flex items-start gap-3">
                          <span class="text-green-600 text-xl flex-shrink-0">✓</span>
                          <div>
                            <span class="font-semibold text-gray-900 dark:text-gray-100">Clear Communication:</span>
                            <span class="text-gray-700 dark:text-gray-300"> English-speaking staff, detailed treatment plans</span>
                          </div>
                        </li>
                        <li class="flex items-start gap-3">
                          <span class="text-green-600 text-xl flex-shrink-0">✓</span>
                          <div>
                            <span class="font-semibold text-gray-900 dark:text-gray-100">Warranty/Guarantee:</span>
                            <span class="text-gray-700 dark:text-gray-300"> Reputable clinics offer warranties on their work</span>
                          </div>
                        </li>
                        <li class="flex items-start gap-3">
                          <span class="text-green-600 text-xl flex-shrink-0">✓</span>
                          <div>
                            <span class="font-semibold text-gray-900 dark:text-gray-100">Transparent Pricing:</span>
                            <span class="text-gray-700 dark:text-gray-300"> No hidden fees, everything in writing</span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div class="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800">
                      <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">🚩 Red Flags (Warning Signs)</h3>
                      <ul class="space-y-3">
                        <li class="flex items-start gap-3">
                          <span class="text-red-600 dark:text-red-400 text-xl flex-shrink-0">⚠</span>
                          <div>
                            <span class="font-semibold text-gray-900 dark:text-gray-100">Prices Too Good to Be True:</span>
                            <span class="text-gray-700 dark:text-gray-300"> Extremely low prices may indicate low-quality materials</span>
                          </div>
                        </li>
                        <li class="flex items-start gap-3">
                          <span class="text-red-600 dark:text-red-400 text-xl flex-shrink-0">⚠</span>
                          <div>
                            <span class="font-semibold text-gray-900 dark:text-gray-100">No Reviews or Only Perfect Reviews:</span>
                            <span class="text-gray-700 dark:text-gray-300"> Genuine clinics have mixed but mostly positive feedback</span>
                          </div>
                        </li>
                        <li class="flex items-start gap-3">
                          <span class="text-red-600 dark:text-red-400 text-xl flex-shrink-0">⚠</span>
                          <div>
                            <span class="font-semibold text-gray-900 dark:text-gray-100">Pressure Tactics:</span>
                            <span class="text-gray-700 dark:text-gray-300"> "Limited time offers" or rushing you to decide</span>
                          </div>
                        </li>
                        <li class="flex items-start gap-3">
                          <span class="text-red-600 dark:text-red-400 text-xl flex-shrink-0">⚠</span>
                          <div>
                            <span class="font-semibold text-gray-900 dark:text-gray-100">Poor Communication:</span>
                            <span class="text-gray-700 dark:text-gray-300"> Language barriers, vague answers, no clear treatment plan</span>
                          </div>
                        </li>
                        <li class="flex items-start gap-3">
                          <span class="text-red-600 dark:text-red-400 text-xl flex-shrink-0">⚠</span>
                          <div>
                            <span class="font-semibold text-gray-900 dark:text-gray-100">No Physical Address:</span>
                            <span class="text-gray-700 dark:text-gray-300"> Legitimate clinics have verifiable locations</span>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Pre-Trip Checklist</h2>
                    <div class="space-y-3">
                      <div class="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                        <input type="checkbox" class="w-5 h-5 text-blue-600" disabled />
                        <span class="text-gray-700 dark:text-gray-300">Research clinic's certifications and credentials</span>
                      </div>
                      <div class="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                        <input type="checkbox" class="w-5 h-5 text-blue-600" disabled />
                        <span class="text-gray-700 dark:text-gray-300">Read multiple reviews from different sources</span>
                      </div>
                      <div class="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                        <input type="checkbox" class="w-5 h-5 text-blue-600" disabled />
                        <span class="text-gray-700 dark:text-gray-300">Get detailed treatment plan in writing</span>
                      </div>
                      <div class="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                        <input type="checkbox" class="w-5 h-5 text-blue-600" disabled />
                        <span class="text-gray-700 dark:text-gray-300">Verify warranty/guarantee terms</span>
                      </div>
                      <div class="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                        <input type="checkbox" class="w-5 h-5 text-blue-600" disabled />
                        <span class="text-gray-700 dark:text-gray-300">Confirm materials brands they use (e.g., eMax, Straumann)</span>
                      </div>
                      <div class="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                        <input type="checkbox" class="w-5 h-5 text-blue-600" disabled />
                        <span class="text-gray-700 dark:text-gray-300">Check travel insurance covers dental tourism</span>
                      </div>
                    </div>

                    <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800 mt-6">
                      <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">💡 Pro Tip</h3>
                      <p class="text-gray-700 dark:text-gray-300">
                        Schedule a virtual consultation before booking travel. Reputable clinics will gladly video call to discuss your case, show you their facility, and answer questions. This is a great way to assess professionalism and communication quality.
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
