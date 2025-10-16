"use client";

import Link from "next/link";
import { ArrowLeft, Zap, Clock, Star, Shield } from "lucide-react";
import Banner from "@/components/Banner";
import Header from "@/components/Header";

export default function DentalImplantsPage() {
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
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Zap size={32} className="text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2 leading-tight">
                Dental Implants
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 text-sm font-medium rounded-full">
                  Permanent Solution
                </span>
              </div>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Permanent tooth replacement solution that preserves jawbone and restores natural function
              </p>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto">
          <div className="glass-elevated p-6 lg:p-8 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Why Choose Dental Implants? A Guide to the Best Long-Term Solution for Missing Teeth</h2>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mb-6">
                <p className="text-blue-800 dark:text-blue-200 text-sm font-medium mb-2">Meta Description:</p>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  Comparing dental implants vs. dentures or bridges? Understand the key benefits of implants, from jawbone preservation to lifetime durability. Make an informed choice for your smile.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Introduction: More Than Just Filling a Gap</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Losing a tooth can affect everything from your confidence to your ability to enjoy your favorite foods. When it comes to replacing a missing tooth, you have several options, but they are not all created equal. For decades, dentures and bridges have been the go-to solutions. Today, however, there is a clear gold standard recommended by dental professionals worldwide: the dental implant.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Choosing a tooth replacement is a major decision—an investment in your health, function, and future smile. So, why do dentists and patients consistently choose implants?
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">First, What Are the Options? A Quick Overview</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Dentures:</strong>
                    <span className="text-gray-700 dark:text-gray-300"> A removable appliance that replaces a full or partial set of teeth. They rest on the gums and are held in place by suction or adhesives.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Dental Bridges:</strong>
                    <span className="text-gray-700 dark:text-gray-300"> A fixed solution that "bridges" a gap by anchoring a false tooth (a pontic) to the healthy teeth on either side. This requires shaping down the adjacent teeth to fit crowns over them.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Dental Implants:</strong>
                    <span className="text-gray-700 dark:text-gray-300"> A permanent solution that replaces the entire tooth structure, from root to crown. A small titanium post is surgically placed into the jawbone, acting as an artificial root. A crown is then attached to this post.</span>
                  </div>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">5 Key Benefits of Choosing Dental Implants</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                While dentures and bridges can fill a gap, dental implants offer profound advantages that protect and enhance your long-term oral health.
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">1. They Preserve Your Jawbone and Facial Structure</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    This is arguably the most important and least-known benefit. When you lose a tooth, the jawbone in that area is no longer stimulated by the root. Your body begins to resorb the bone, leading to a sunken, aged appearance over time.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                      <span className="text-gray-700 dark:text-gray-300"><strong>Dental Implants:</strong> The titanium post fuses directly with your jawbone in a process called osseointegration. This provides the stimulation needed to keep the bone strong and healthy, preserving your natural facial structure.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 dark:text-red-400 font-bold">✗</span>
                      <span className="text-gray-700 dark:text-gray-300"><strong>Dentures & Bridges:</strong> These options only sit on top of the gums. They do nothing to stop underlying bone loss.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">2. Unmatched Longevity and Durability</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    A dental implant is designed to be a permanent solution.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                      <span className="text-gray-700 dark:text-gray-300"><strong>Dental Implants:</strong> With proper care (the same brushing and flossing you do for natural teeth), an implant can last a lifetime. The success rate for modern dental implants is consistently reported to be above 95%.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 dark:text-red-400 font-bold">✗</span>
                      <span className="text-gray-700 dark:text-gray-300"><strong>Dentures & Bridges:</strong> These typically need to be replaced every 5 to 15 years due to wear and tear or changes in the shape of your jaw. These recurring replacement costs can add up significantly over time.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">3. They Don't Harm Your Healthy Teeth</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    Your healthy teeth should be left alone. A dental implant is a standalone solution that doesn't rely on other teeth for support.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                      <span className="text-gray-700 dark:text-gray-300"><strong>Dental Implants:</strong> An implant is placed directly into the gap without affecting any neighboring teeth. This preserves the integrity of your healthy, natural tooth structure.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 dark:text-red-400 font-bold">✗</span>
                      <span className="text-gray-700 dark:text-gray-300"><strong>Dental Bridges:</strong> To place a bridge, the dentist must permanently grind down two often perfectly healthy teeth to fit the anchoring crowns. This makes these teeth more vulnerable to future decay and problems.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">4. They Feel and Function Just Like Natural Teeth</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    Because an implant is anchored securely in your jawbone, it offers unparalleled stability and comfort.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                      <span className="text-gray-700 dark:text-gray-300"><strong>Dental Implants:</strong> You can eat whatever you want with confidence—no slipping, clicking, or embarrassing moments. The chewing power is restored to that of a natural tooth, and because it doesn't cover the palate, your sense of taste is unaffected.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 dark:text-red-400 font-bold">✗</span>
                      <span className="text-gray-700 dark:text-gray-300"><strong>Dentures:</strong> Often require adhesives, can slip while talking or eating, and may require you to avoid certain hard or sticky foods.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">5. Superior Aesthetics and Easier Maintenance</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    Dental implants are the most natural-looking replacement option available.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                      <span className="text-gray-700 dark:text-gray-300"><strong>Dental Implants:</strong> Each implant crown is custom-crafted to match the color, size, and shape of your surrounding teeth, making it virtually indistinguishable from a natural tooth. You simply brush and floss it as you would any other tooth.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 dark:text-red-400 font-bold">✗</span>
                      <span className="text-gray-700 dark:text-gray-300"><strong>Dentures & Bridges:</strong> While modern options look good, they can sometimes appear bulky. Dentures require special cleaning and removal at night, and cleaning under a bridge can be difficult, creating potential hygiene issues.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">At a Glance: Implants vs. Bridges vs. Dentures</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-900 dark:text-gray-100">Feature</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-indigo-700 dark:text-indigo-300">Dental Implants</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-900 dark:text-gray-100">Dental Bridges</th>
                      <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-900 dark:text-gray-100">Dentures</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium text-gray-900 dark:text-gray-100">Longevity</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-indigo-700 dark:text-indigo-300 font-semibold">Lifetime Potential</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">5-15 Years</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">5-10 Years</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium text-gray-900 dark:text-gray-100">Jawbone Health</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-indigo-700 dark:text-indigo-300 font-semibold">Preserves Bone</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">No Protection</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">No Protection</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium text-gray-900 dark:text-gray-100">Impact on Other Teeth</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-indigo-700 dark:text-indigo-300 font-semibold">None</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Requires grinding healthy teeth</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Can cause wear on adjacent teeth</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium text-gray-900 dark:text-gray-100">Functionality</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-indigo-700 dark:text-indigo-300 font-semibold">Like a Natural Tooth</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Good</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Reduced Chewing Power</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium text-gray-900 dark:text-gray-100">Maintenance</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-indigo-700 dark:text-indigo-300 font-semibold">Normal Brushing/Flossing</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Special cleaning required</td>
                      <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Daily removal and cleaning</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Treatment Details</h3>
              <div className="grid lg:grid-cols-2 gap-6 mb-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Procedure Details</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                      Surgical placement of titanium post into jawbone, followed by crown attachment after osseointegration
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock size={16} className="text-gray-500 dark:text-gray-400" />
                        <span className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Duration</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">3-6 months (including healing)</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Star size={16} className="text-gray-500 dark:text-gray-400" />
                        <span className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Recovery</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">1-2 weeks initial, 3-6 months osseointegration</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield size={16} className="text-gray-500 dark:text-gray-400" />
                      <span className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Durability</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">Lifetime with proper care (95%+ success rate)</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Ideal For</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-base">
                      <div className="w-2 h-2 bg-indigo-500 dark:bg-indigo-400 rounded-full flex-shrink-0"></div>
                      <span>Single missing tooth</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-base">
                      <div className="w-2 h-2 bg-indigo-500 dark:bg-indigo-400 rounded-full flex-shrink-0"></div>
                      <span>Multiple missing teeth</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-base">
                      <div className="w-2 h-2 bg-indigo-500 dark:bg-indigo-400 rounded-full flex-shrink-0"></div>
                      <span>Jawbone preservation</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-base">
                      <div className="w-2 h-2 bg-indigo-500 dark:bg-indigo-400 rounded-full flex-shrink-0"></div>
                      <span>Long-term solution</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mb-6">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 text-sm mb-3">Cost Range:</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-800 dark:text-blue-200 text-sm">USD:</span>
                    <span className="text-blue-800 dark:text-blue-200 text-sm font-medium">$3,000-$8,000 per implant</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-800 dark:text-blue-200 text-sm">GBP:</span>
                    <span className="text-blue-800 dark:text-blue-200 text-sm font-medium">£2,500-£6,500 per implant</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-800 dark:text-blue-200 text-sm">EUR:</span>
                    <span className="text-blue-800 dark:text-blue-200 text-sm font-medium">€2,800-€7,200 per implant</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-blue-200 dark:border-blue-800 pt-2 mt-2">
                    <span className="text-green-700 dark:text-green-300 text-sm font-semibold">Turkey:</span>
                    <span className="text-green-700 dark:text-green-300 text-sm font-semibold">£300-£1,000 per implant</span>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Conclusion: An Investment in Your Future Health</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                While traditional dentures and bridges may seem appealing due to a lower initial cost, dental implants represent a superior long-term investment. They are the only solution that addresses both the cosmetic issue of the missing tooth and the critical underlying issue of bone health.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                By protecting your jaw, preserving your healthy teeth, and providing a lifetime of reliable function, dental implants are not just a replacement—they are a restoration of your natural smile.
              </p>

              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <h4 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-4">Are you ready to learn if dental implants are the right solution for you?</h4>
                <p className="text-indigo-800 dark:text-indigo-200 mb-4">
                  The journey to a restored smile starts with expert advice. Let us connect you with leading local and international clinics that can provide a personalized assessment.
                </p>
                <div className="flex justify-center">
                  <Link 
                    href="/"
                    className="btn-primary text-center px-6 py-3 text-sm font-medium"
                  >
                    Explore Our Vetted Dental Clinics
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
              Ready to Restore Your Missing Tooth?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Find certified dental professionals who specialize in dental implants and restorative dentistry.
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
