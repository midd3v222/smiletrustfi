"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import Banner from "@/components/Banner";
import Header from "@/components/Header";

export default function IsTurkeySafeBlogPost() {
  return (
    <div className="min-h-screen w-full bg-grid-pattern relative">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 pt-24 pb-12">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
              Safety & Tips
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
            Is Turkey Safe for Dental Treatments? Complete Safety Guide 2025
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>January 15, 2025</span>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <span>SmileTrust Team</span>
            </div>
          </div>

          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Turkey has become the world's leading destination for dental tourism, but safety concerns are natural. Here's everything you need to know about dental safety in Turkey.
          </p>
        </header>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto">
          <div className="glass-elevated p-6 lg:p-8 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="prose prose-lg max-w-none">
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">✅ Quick Answer: Yes, Turkey is Safe for Dental Treatments</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  When you choose the right clinic, Turkey offers world-class dental care with EU-standard safety protocols, internationally trained dentists, and modern facilities.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">500+</div>
                    <div className="text-gray-700 dark:text-gray-300">Modern Clinics</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-gray-700 dark:text-gray-300">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">EU</div>
                    <div className="text-gray-700 dark:text-gray-300">Standards</div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-6">Why Turkey is Safe for Dental Work</h2>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3">1. International Standards & Certifications</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Quality Certifications:</h4>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li>• JCI (Joint Commission International) accreditation</li>
                        <li>• ISO 9001:2015 quality management</li>
                        <li>• CE marking for medical devices</li>
                        <li>• Turkish Dental Association membership</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Safety Protocols:</h4>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li>• Sterilization standards (autoclave)</li>
                        <li>• Single-use instruments</li>
                        <li>• Cross-infection prevention</li>
                        <li>• Regular equipment maintenance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3">2. Highly Qualified Dentists</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Education & Training:</h4>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li>• 6-year dental degree program</li>
                        <li>• International training (Germany, USA, UK)</li>
                        <li>• Continuous education requirements</li>
                        <li>• Specialization in cosmetic dentistry</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Experience:</h4>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li>• 10+ years average experience</li>
                        <li>• Thousands of successful cases</li>
                        <li>• International patient focus</li>
                        <li>• English-speaking staff</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3">3. Modern Technology & Materials</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Equipment:</h4>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li>• Digital X-rays (low radiation)</li>
                        <li>• 3D imaging technology</li>
                        <li>• CAD/CAM systems</li>
                        <li>• Laser dentistry options</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Materials:</h4>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li>• E-max lithium disilicate</li>
                        <li>• Straumann implants</li>
                        <li>• Nobel Biocare systems</li>
                        <li>• EU-approved materials only</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-6">How to Choose a Safe Clinic in Turkey</h2>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800 mb-8">
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">✅ Safety Checklist - What to Look For:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Clinic Credentials:</h4>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 flex-shrink-0">✓</span>
                        <span>International certifications (JCI, ISO)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 flex-shrink-0">✓</span>
                        <span>Physical address you can verify</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 flex-shrink-0">✓</span>
                        <span>English-speaking staff</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 flex-shrink-0">✓</span>
                        <span>Clear treatment plans in writing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 flex-shrink-0">✓</span>
                        <span>Transparent pricing (no hidden fees)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Quality Indicators:</h4>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 flex-shrink-0">✓</span>
                        <span>Before/after photos of real patients</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 flex-shrink-0">✓</span>
                        <span>Verified reviews on multiple platforms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 flex-shrink-0">✓</span>
                        <span>Warranty on treatments (1-2 years)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 flex-shrink-0">✓</span>
                        <span>Virtual consultation available</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600 flex-shrink-0">✓</span>
                        <span>Follow-up care support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-6">Red Flags to Avoid</h2>
              
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border border-red-200 dark:border-red-800 mb-8">
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">🚩 Warning Signs - Avoid These Clinics:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Pricing Red Flags:</h4>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 flex-shrink-0">⚠</span>
                        <span>Prices significantly below market rate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 flex-shrink-0">⚠</span>
                        <span>"Limited time offers" pressure tactics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 flex-shrink-0">⚠</span>
                        <span>Hidden fees not disclosed upfront</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 flex-shrink-0">⚠</span>
                        <span>Requiring full payment before consultation</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Communication Red Flags:</h4>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 flex-shrink-0">⚠</span>
                        <span>Poor English communication</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 flex-shrink-0">⚠</span>
                        <span>Vague answers to specific questions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 flex-shrink-0">⚠</span>
                        <span>No virtual consultation available</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-600 flex-shrink-0">⚠</span>
                        <span>Rushing you to make decisions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-6">Safety Statistics & Success Rates</h2>
              
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">Treatment Success Rate</div>
                  <div className="text-xs text-gray-500 mt-1">Based on international standards</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">Certified Clinics</div>
                  <div className="text-xs text-gray-500 mt-1">With international accreditations</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">1M+</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">International Patients</div>
                  <div className="text-xs text-gray-500 mt-1">Treated successfully</div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800 mt-8">
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3">💡 Bottom Line</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Turkey is safe for dental treatments when you choose the right clinic. The key is thorough research, verification of credentials, and clear communication. With proper due diligence, you can receive world-class dental care at a fraction of Western costs.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Remember:</strong> Quality clinics welcome your questions and provide transparent information. If a clinic is evasive or pressures you, that's a red flag to look elsewhere.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="mt-12 max-w-4xl mx-auto">
          <div className="glass-elevated p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700/50 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Ready to Find Your Perfect Dental Clinic?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Browse verified clinics worldwide and compare prices for veneers, crowns, and implants.
            </p>
            <Link
              href="/"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3"
            >
              Browse Dental Clinics
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
