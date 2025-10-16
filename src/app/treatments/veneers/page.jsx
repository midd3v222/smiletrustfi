"use client";

import Link from "next/link";
import { ArrowLeft, Star, Clock, Shield, Zap } from "lucide-react";
import Banner from "@/components/Banner";
import Header from "@/components/Header";

export default function VeneersPage() {
  return (
    <div className="min-h-screen w-full bg-grid-pattern relative">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 pt-24 pb-12">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/treatments"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Treatments
          </Link>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Star size={32} className="text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2 leading-tight">
                Dental Veneers
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                  Cosmetic Enhancement
                </span>
              </div>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Thin ceramic shells that cover the front surface of teeth to improve appearance
              </p>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto">
          <div className="glass-elevated p-6 lg:p-8 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">What Are Veneers? A Complete Guide to Transforming Your Smile</h2>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mb-6">
                <p className="text-blue-800 dark:text-blue-200 text-sm font-medium mb-2">Meta Description:</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  Thinking about veneers? Learn what they are, the smile problems they solve (stains, gaps, chips), the types available, and the procedure.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Introduction: The Path to Your Perfect Smile</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                For many people, a radiant, confident smile feels like a dream. Stains from coffee or tea, a small chip from an accident, or natural gaps and misalignments can make you feel self-conscious. In the world of cosmetic dentistry, few treatments are as effective and transformative as dental veneers.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Often called the "secret" behind the flawless smiles of celebrities, veneers are now more accessible than ever. But what exactly are they, and could they be the right solution for you?
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                This comprehensive guide will walk you through everything you need to know about dental veneers, from the problems they solve to the procedure itself.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">What Exactly Are Dental Veneers?</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Think of a dental veneer as a very thin, custom-made shell that is bonded to the front surface of a tooth to improve its appearance. They are meticulously designed to match the shape and color of your surrounding teeth, creating a completely natural look.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">What Smile Problems Can Veneers Fix?</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Veneers are incredibly versatile and can correct a wide range of cosmetic imperfections, often at the same time. They are an ideal solution for:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Severe Stains & Discoloration:</strong>
                    <span className="text-gray-700 dark:text-gray-300"> For deep stains that don't respond to teeth whitening (like those from tetracycline medication or excessive fluoride), veneers can provide a permanently white and bright smile.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Chipped, Worn, or Broken Teeth:</strong>
                    <span className="text-gray-700 dark:text-gray-300"> Veneers can instantly cover up minor chips and cracks, restoring a tooth to its original, healthy appearance.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Gaps & Minor Spacing Issues:</strong>
                    <span className="text-gray-700 dark:text-gray-300"> Veneers can be crafted to be slightly wider than the natural teeth, effectively closing small gaps (diastemas) without the need for braces.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Irregularly Shaped or Slightly Misaligned Teeth:</strong>
                    <span className="text-gray-700 dark:text-gray-300"> If you have teeth that are misshapen, too small, or slightly crooked, veneers can create a straight, uniform, and symmetrical smile.</span>
                  </div>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">The Veneers Procedure: A Step-by-Step Overview</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Getting veneers is a precise and straightforward process.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">1. Consultation & Smile Design</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    You will discuss your goals with your dentist. They will examine your teeth and may take X-rays and impressions. This is where you design the shape, size, and shade of your new smile.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">2. Tooth Preparation</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    The dentist removes a very thin layer of enamel (about 0.5mm) from the front of the tooth. This makes room for the veneer so it sits flush with your other teeth.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">3. Impressions</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    An impression or digital scan of your prepared teeth is taken and sent to a dental lab where your custom veneers will be fabricated. You will be fitted with temporary veneers to wear in the meantime.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">4. Final Bonding</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Once your permanent veneers are ready (usually in 1-2 weeks), you'll return to the clinic. The dentist will check the fit and color before permanently bonding them to your teeth with a special cement and curing light.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Treatment Details</h3>
              <div className="grid lg:grid-cols-2 gap-6 mb-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Procedure Details</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                      Minimally invasive procedure where custom-made ceramic shells are bonded to teeth
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock size={16} className="text-gray-500 dark:text-gray-400" />
                        <span className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Duration</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">2-3 visits over 2-3 weeks</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Star size={16} className="text-gray-500 dark:text-gray-400" />
                        <span className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Recovery</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">2-3 days for sensitivity</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield size={16} className="text-gray-500 dark:text-gray-400" />
                      <span className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Durability</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">10-15 years with proper care</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Ideal For</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-base">
                      <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span>Discolored teeth</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-base">
                      <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span>Slight misalignment</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-base">
                      <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span>Gaps between teeth</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-base">
                      <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span>Worn teeth</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mb-6">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 text-sm mb-3">Cost Range:</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-800 dark:text-blue-200 text-sm">USD:</span>
                    <span className="text-blue-800 dark:text-blue-200 text-sm font-medium">$650-$1,300 per tooth</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-800 dark:text-blue-200 text-sm">GBP:</span>
                    <span className="text-blue-800 dark:text-blue-200 text-sm font-medium">£500-£1,000 per tooth</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-800 dark:text-blue-200 text-sm">EUR:</span>
                    <span className="text-blue-800 dark:text-blue-200 text-sm font-medium">€600-€1,200 per tooth</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-blue-200 dark:border-blue-800 pt-2 mt-2">
                    <span className="text-green-700 dark:text-green-300 text-sm font-semibold">Turkey:</span>
                    <span className="text-green-700 dark:text-green-300 text-sm font-semibold">£250 per tooth</span>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Conclusion: A Lasting Investment in Your Confidence</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Dental veneers are more than just a cosmetic fix; they are a durable and effective way to achieve the smile you've always wanted. Whether you're looking to correct a single flawed tooth or undergo a complete smile transformation, veneers offer a predictable and beautiful result.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                By discussing your goals with a qualified cosmetic dentist, you can decide if veneers are the right investment to restore your smile and boost your confidence for years to come.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">Ready to design your new smile?</h4>
                <p className="text-blue-800 dark:text-blue-200 mb-4">
                  A consultation is the first step towards your smile transformation. Let us connect you with expert cosmetic dentists who can assess your needs and show you what's possible.
                </p>
                <div className="flex justify-center">
                  <Link 
                    href="/"
                    className="btn-primary text-center px-6 py-3 text-sm font-medium"
                  >
                    Explore Our Partner Dental Clinics
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="mt-12 max-w-4xl mx-auto">
          <div className="glass-elevated p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700/50 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Find certified dental professionals who specialize in veneers and cosmetic dentistry.
            </p>
            <Link
              href="/"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3"
            >
              Find Dental Clinics
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
