"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, X, ArrowRight } from "lucide-react";
import Banner from "@/components/Banner";
import Header from "@/components/Header";

// Full blog post content with complete articles
const blogPostsData = [
  {
    id: "veneers-cost-guide-2025",
    title: "How Much Do Veneers Cost in 2025? Complete Price Guide by Country",
    excerpt: "Comprehensive breakdown of veneer costs worldwide. Compare prices in Turkey, Mexico, Thailand, USA, UK, and more. See real savings.",
    readTime: "8 min read",
    category: "Cost Guides",
    fullContent: `
      <div class="space-y-6">
        <div class="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <h3 class="text-xl font-bold text-gray-900 mb-4">Quick Summary: Veneer Costs 2025</h3>
          <div class="grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p class="font-semibold text-gray-900 mb-2">Most Expensive:</p>
              <p class="text-gray-700">🇬🇧 UK: £800 - £2,000 per tooth</p>
              <p class="text-gray-700">🇩🇪 Germany: €1,200 - €2,500 per tooth</p>
            </div>
            <div>
              <p class="font-semibold text-gray-900 mb-2">Most Affordable:</p>
              <p class="text-gray-700">🇹🇷 Turkey: £120 - £240 per tooth</p>
              <p class="text-gray-700">🇭🇺 Hungary: £160 - £400 per tooth</p>
            </div>
          </div>
          <div class="mt-4 pt-4 border-t border-blue-300">
            <p class="font-bold text-blue-900">💰 Potential Savings: 70-85% by traveling abroad</p>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8">What Are Porcelain Veneers?</h2>
        <p class="text-gray-700 leading-relaxed">
          Porcelain veneers are thin, custom-made ceramic shells that are bonded to the front surface of your teeth to improve their appearance. They're one of the most popular cosmetic dental procedures worldwide, capable of transforming discolored, chipped, gapped, or misaligned teeth into a beautiful, natural-looking smile.
        </p>

        <h2 class="text-2xl font-bold text-gray-900 mt-8">Veneer Costs by Country (2025)</h2>
        
        <div class="space-y-4">
          <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-3xl">🇹🇷</span>
              <h3 class="text-xl font-bold text-gray-900">Turkey</h3>
              <span class="ml-auto px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                Save 70%
              </span>
            </div>
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <p class="text-2xl font-bold text-gray-900 mb-1">£120 - £240</p>
                <p class="text-sm text-gray-600">per porcelain veneer</p>
              </div>
              <div>
                <p class="text-2xl font-bold text-gray-900 mb-1">£1,920 - £3,840</p>
                <p class="text-sm text-gray-600">full set (16 veneers)</p>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t border-gray-200">
              <p class="text-sm text-gray-700 mb-2"><strong>Popular Cities:</strong> Istanbul, Antalya, Izmir</p>
              <p class="text-sm text-gray-700"><strong>Why Choose Turkey:</strong> World-class clinics, EU-standard materials, all-inclusive packages, highly experienced dentists</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-3xl">🇭🇺</span>
              <h3 class="text-xl font-bold text-gray-900">Hungary</h3>
              <span class="ml-auto px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                Save 75%
              </span>
            </div>
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <p class="text-2xl font-bold text-gray-900 mb-1">£160 - £400</p>
                <p class="text-sm text-gray-600">per porcelain veneer</p>
              </div>
              <div>
                <p class="text-2xl font-bold text-gray-900 mb-1">£2,560 - £6,400</p>
                <p class="text-sm text-gray-600">full set (16 veneers)</p>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t border-gray-200">
              <p class="text-sm text-gray-700 mb-2"><strong>Popular Cities:</strong> Budapest, Debrecen, Szeged</p>
              <p class="text-sm text-gray-700"><strong>Why Choose Hungary:</strong> EU-standard care, short flight from UK, English-speaking dentists</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-3xl">🇺🇸</span>
              <h3 class="text-xl font-bold text-gray-900">United States</h3>
              <span class="ml-auto px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full">
                Most Expensive
              </span>
            </div>
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <p class="text-2xl font-bold text-gray-900 mb-1">$1,000 - $2,500</p>
                <p class="text-sm text-gray-600">per porcelain veneer</p>
              </div>
              <div>
                <p class="text-2xl font-bold text-gray-900 mb-1">$16,000 - $40,000</p>
                <p class="text-sm text-gray-600">full set (16 veneers)</p>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8">How to Save Money on Veneers</h2>
        <div class="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <h3 class="font-bold text-gray-900 mb-4">💰 Top Money-Saving Tips:</h3>
          <ol class="space-y-3 text-gray-700">
            <li class="flex items-start gap-2">
              <span class="font-bold text-blue-600">1.</span>
              <span><strong>Consider Dental Tourism:</strong> Save 60-70% by traveling to Turkey, Mexico, or Thailand for the same quality.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="font-bold text-blue-600">2.</span>
              <span><strong>Get Multiple Veneers:</strong> Many clinics offer package discounts for 6+ veneers.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="font-bold text-blue-600">3.</span>
              <span><strong>Compare Quotes:</strong> Get quotes from 3-5 clinics to find the best price without compromising quality.</span>
            </li>
          </ol>
        </div>

        <div class="bg-yellow-50 p-6 rounded-xl border border-yellow-200 mt-6">
          <div class="flex items-start gap-3">
            <span class="text-2xl">⚠️</span>
            <div>
              <h3 class="font-bold text-gray-900 mb-2">Important Warning</h3>
              <p class="text-gray-700 mb-3">
                While dental tourism offers significant savings, <strong>quality should never be compromised</strong>. Always verify clinic credentials, read reviews, and ensure they use quality materials.
              </p>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "turkey-dental-prices",
    title: "Turkey Dental Prices: Complete Cost Breakdown [2025]",
    excerpt: "Everything you need to know about dental treatment costs in Turkey for UK/EU patients. Veneers, crowns, implants, and full smile makeovers with real clinic prices.",
    readTime: "10 min read",
    category: "Destinations",
    fullContent: `
      <div class="space-y-6">
        <p class="text-xl text-gray-700 leading-relaxed">
          Turkey has become Europe's leading destination for dental tourism, offering exceptional quality at 70-85% lower costs than UK private dental care.
        </p>

        <div class="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <h3 class="text-xl font-bold text-gray-900 mb-4">Quick Price Overview</h3>
          <div class="space-y-3">
            <div class="flex justify-between items-center py-2 border-b border-blue-200">
              <span class="font-semibold text-gray-900">Porcelain Veneers</span>
              <span class="text-blue-700 font-bold">£120 - £240 per tooth</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-blue-200">
              <span class="font-semibold text-gray-900">Zirconia Crowns</span>
              <span class="text-blue-700 font-bold">£160 - £320 per crown</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-blue-200">
              <span class="font-semibold text-gray-900">Dental Implants</span>
              <span class="text-blue-700 font-bold">£400 - £640 per implant</span>
            </div>
            <div class="flex justify-between items-center py-2">
              <span class="font-semibold text-gray-900">Full Smile Makeover</span>
              <span class="text-blue-700 font-bold">£1,600 - £4,000</span>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8">Why Turkey for Dental Work?</h2>
        <div class="space-y-3">
          <div class="flex items-start gap-3">
            <span class="text-green-600 text-xl">✓</span>
            <div>
              <h4 class="font-semibold text-gray-900">Highly Skilled Dentists</h4>
              <p class="text-gray-700 text-sm">Many Turkish dentists train internationally and have decades of experience with cosmetic procedures.</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-green-600 text-xl">✓</span>
            <div>
              <h4 class="font-semibold text-gray-900">Modern Facilities</h4>
              <p class="text-gray-700 text-sm">State-of-the-art equipment and EU-standard safety protocols in major cities.</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-green-600 text-xl">✓</span>
            <div>
              <h4 class="font-semibold text-gray-900">All-Inclusive Packages</h4>
              <p class="text-gray-700 text-sm">Many clinics offer packages including accommodation, airport transfers, and follow-up care.</p>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8">Popular Cities for Dental Tourism</h2>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h3 class="font-bold text-gray-900 mb-2">Istanbul</h3>
            <p class="text-sm text-gray-700">Largest city, most clinics, easy international access</p>
          </div>
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h3 class="font-bold text-gray-900 mb-2">Antalya</h3>
            <p class="text-sm text-gray-700">Beach resort city, combine treatment with vacation</p>
          </div>
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h3 class="font-bold text-gray-900 mb-2">Izmir</h3>
            <p class="text-sm text-gray-700">Coastal city, excellent medical facilities</p>
          </div>
        </div>

        <div class="bg-green-50 p-6 rounded-xl border border-green-200 mt-6">
          <h3 class="font-bold text-gray-900 mb-3">Real Patient Savings Example</h3>
          <p class="text-gray-700 mb-4">James from London needed 10 veneers:</p>
          <div class="space-y-2">
            <div class="flex justify-between">
              <span class="text-gray-700">UK Private Quote:</span>
              <span class="font-bold text-gray-900">£14,000</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-700">Turkey Quote + Travel:</span>
              <span class="font-bold text-gray-900">£3,200</span>
            </div>
            <div class="flex justify-between pt-3 border-t border-green-300">
              <span class="font-bold text-green-900">Total Savings:</span>
              <span class="text-2xl font-bold text-green-700">£10,800</span>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "is-dental-tourism-safe",
    title: "Is Dental Tourism Safe? Red Flags to Watch For",
    excerpt: "Learn how to identify trustworthy dental clinics abroad and avoid scams. Expert checklist for safe dental tourism.",
    readTime: "7 min read",
    category: "Safety & Tips",
    fullContent: `
      <div class="space-y-6">
        <p class="text-xl text-gray-700 leading-relaxed">
          Dental tourism can be extremely safe when done right. Here's how to protect yourself and ensure quality care.
        </p>

        <div class="bg-green-50 p-6 rounded-xl border border-green-200">
          <h3 class="text-xl font-bold text-gray-900 mb-4">✅ What to Look For (Safe Clinic Indicators)</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <span class="text-green-600 text-xl flex-shrink-0">✓</span>
              <div>
                <span class="font-semibold text-gray-900">International Certifications:</span>
                <span class="text-gray-700"> JCI, ISO, or similar accreditations</span>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-green-600 text-xl flex-shrink-0">✓</span>
              <div>
                <span class="font-semibold text-gray-900">Verified Reviews:</span>
                <span class="text-gray-700"> Multiple sources with detailed feedback</span>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-green-600 text-xl flex-shrink-0">✓</span>
              <div>
                <span class="font-semibold text-gray-900">Clear Communication:</span>
                <span class="text-gray-700"> English-speaking staff, detailed treatment plans</span>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-green-600 text-xl flex-shrink-0">✓</span>
              <div>
                <span class="font-semibold text-gray-900">Warranty/Guarantee:</span>
                <span class="text-gray-700"> Reputable clinics offer warranties on their work</span>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-green-600 text-xl flex-shrink-0">✓</span>
              <div>
                <span class="font-semibold text-gray-900">Transparent Pricing:</span>
                <span class="text-gray-700"> No hidden fees, everything in writing</span>
              </div>
            </li>
          </ul>
        </div>

        <div class="bg-red-50 p-6 rounded-xl border border-red-200">
          <h3 class="text-xl font-bold text-gray-900 mb-4">🚩 Red Flags (Warning Signs)</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <span class="text-red-600 text-xl flex-shrink-0">⚠</span>
              <div>
                <span class="font-semibold text-gray-900">Prices Too Good to Be True:</span>
                <span class="text-gray-700"> Extremely low prices may indicate low-quality materials</span>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-red-600 text-xl flex-shrink-0">⚠</span>
              <div>
                <span class="font-semibold text-gray-900">No Reviews or Only Perfect Reviews:</span>
                <span class="text-gray-700"> Genuine clinics have mixed but mostly positive feedback</span>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-red-600 text-xl flex-shrink-0">⚠</span>
              <div>
                <span class="font-semibold text-gray-900">Pressure Tactics:</span>
                <span class="text-gray-700"> "Limited time offers" or rushing you to decide</span>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-red-600 text-xl flex-shrink-0">⚠</span>
              <div>
                <span class="font-semibold text-gray-900">Poor Communication:</span>
                <span class="text-gray-700"> Language barriers, vague answers, no clear treatment plan</span>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-red-600 text-xl flex-shrink-0">⚠</span>
              <div>
                <span class="font-semibold text-gray-900">No Physical Address:</span>
                <span class="text-gray-700"> Legitimate clinics have verifiable locations</span>
              </div>
            </li>
          </ul>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8">Pre-Trip Checklist</h2>
        <div class="space-y-3">
          <div class="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
            <input type="checkbox" class="w-5 h-5 text-blue-600" disabled />
            <span class="text-gray-700">Research clinic's certifications and credentials</span>
          </div>
          <div class="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
            <input type="checkbox" class="w-5 h-5 text-blue-600" disabled />
            <span class="text-gray-700">Read multiple reviews from different sources</span>
          </div>
          <div class="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
            <input type="checkbox" class="w-5 h-5 text-blue-600" disabled />
            <span class="text-gray-700">Get detailed treatment plan in writing</span>
          </div>
          <div class="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
            <input type="checkbox" class="w-5 h-5 text-blue-600" disabled />
            <span class="text-gray-700">Verify warranty/guarantee terms</span>
          </div>
          <div class="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
            <input type="checkbox" class="w-5 h-5 text-blue-600" disabled />
            <span class="text-gray-700">Confirm materials brands they use (e.g., eMax, Straumann)</span>
          </div>
          <div class="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
            <input type="checkbox" class="w-5 h-5 text-blue-600" disabled />
            <span class="text-gray-700">Check travel insurance covers dental tourism</span>
          </div>
        </div>

        <div class="bg-blue-50 p-6 rounded-xl border border-blue-200 mt-6">
          <h3 class="font-bold text-gray-900 mb-3">💡 Pro Tip</h3>
          <p class="text-gray-700">
            Schedule a virtual consultation before booking travel. Reputable clinics will gladly video call to discuss your case, show you their facility, and answer questions. This is a great way to assess professionalism and communication quality.
          </p>
        </div>
      </div>
    `
  },
  {
    id: "veneers-vs-crowns",
    title: "Veneers vs Crowns: Which Treatment is Right for You?",
    excerpt: "Compare porcelain veneers and zirconia crowns. Learn about costs, durability, procedures, and which option is best for your smile goals.",
    readTime: "6 min read",
    category: "Treatment Guides",
    fullContent: `
      <div class="space-y-6">
        <p class="text-xl text-gray-700 leading-relaxed">
          Both veneers and crowns can transform your smile, but they serve different purposes. Here's how to choose the right one.
        </p>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Porcelain Veneers</h3>
            <div class="space-y-3 text-sm">
              <div>
                <span class="font-semibold text-gray-900">What they are:</span>
                <p class="text-gray-700">Thin shells covering only the front of teeth</p>
              </div>
              <div>
                <span class="font-semibold text-gray-900">Best for:</span>
                <p class="text-gray-700">Cosmetic improvements, discoloration, minor chips</p>
              </div>
              <div>
                <span class="font-semibold text-gray-900">Cost:</span>
                <p class="text-gray-700">$150-300 (Turkey) | $1,000-2,500 (USA)</p>
              </div>
              <div>
                <span class="font-semibold text-gray-900">Durability:</span>
                <p class="text-gray-700">10-15 years with proper care</p>
              </div>
              <div>
                <span class="font-semibold text-gray-900">Tooth removal:</span>
                <p class="text-gray-700">Minimal (0.5mm of enamel)</p>
              </div>
            </div>
          </div>

          <div class="bg-green-50 p-6 rounded-xl border border-green-200">
            <h3 class="text-xl font-bold text-gray-900 mb-4">Zirconia Crowns</h3>
            <div class="space-y-3 text-sm">
              <div>
                <span class="font-semibold text-gray-900">What they are:</span>
                <p class="text-gray-700">Complete caps covering entire tooth</p>
              </div>
              <div>
                <span class="font-semibold text-gray-900">Best for:</span>
                <p class="text-gray-700">Broken teeth, large fillings, root canals</p>
              </div>
              <div>
                <span class="font-semibold text-gray-900">Cost:</span>
                <p class="text-gray-700">$200-400 (Turkey) | $1,200-3,000 (USA)</p>
              </div>
              <div>
                <span class="font-semibold text-gray-900">Durability:</span>
                <p class="text-gray-700">15-20 years, very strong</p>
              </div>
              <div>
                <span class="font-semibold text-gray-900">Tooth removal:</span>
                <p class="text-gray-700">More substantial (all around tooth)</p>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8">Decision Guide</h2>
        
        <div class="space-y-4">
          <div class="bg-white p-5 rounded-xl border border-gray-200">
            <h3 class="font-bold text-gray-900 mb-3">Choose Veneers If:</h3>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start gap-2">
                <span class="text-blue-600 flex-shrink-0">★</span>
                <span>Your teeth are structurally sound (no decay or damage)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-600 flex-shrink-0">★</span>
                <span>You want cosmetic improvements (color, shape, minor alignment)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-600 flex-shrink-0">★</span>
                <span>You prefer less invasive treatment</span>
              </li>
            </ul>
          </div>

          <div class="bg-white p-5 rounded-xl border border-gray-200">
            <h3 class="font-bold text-gray-900 mb-3">Choose Crowns If:</h3>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start gap-2">
                <span class="text-green-600 flex-shrink-0">★</span>
                <span>Your teeth are broken, cracked, or heavily damaged</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-600 flex-shrink-0">★</span>
                <span>You've had root canal treatment</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-600 flex-shrink-0">★</span>
                <span>You need stronger, more durable restoration</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="bg-purple-50 p-6 rounded-xl border border-purple-200 mt-6">
          <h3 class="font-bold text-gray-900 mb-3">💡 Can You Combine Both?</h3>
          <p class="text-gray-700">
            Yes! Many smile makeovers use both treatments. For example, you might get veneers on your visible front teeth for aesthetics, and crowns on molars that need structural support. Your dentist will recommend the best combination for your needs.
          </p>
        </div>
      </div>
    `
  },
  {
    id: "dental-tourism-guide",
    title: "Dental Tourism Guide: Everything You Need to Know in 2025",
    excerpt: "Complete guide to dental tourism including choosing destinations, finding clinics, planning travel, and ensuring quality care abroad.",
    readTime: "12 min read",
    category: "Guides",
    fullContent: `
      <div class="space-y-6">
        <p class="text-xl text-gray-700 leading-relaxed">
          Dental tourism allows you to receive high-quality dental care abroad while saving up to 70%. Here's your complete guide to doing it safely and successfully.
        </p>

        <h2 class="text-2xl font-bold text-gray-900">Step 1: Choose Your Destination</h2>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h3 class="font-bold text-gray-900 mb-2">🇹🇷 Turkey</h3>
            <p class="text-sm text-gray-700 mb-2">Best for: Veneers, crowns</p>
            <p class="text-sm text-blue-600 font-semibold">Save: 70%</p>
          </div>
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h3 class="font-bold text-gray-900 mb-2">🇲🇽 Mexico</h3>
            <p class="text-sm text-gray-700 mb-2">Best for: Close to USA</p>
            <p class="text-sm text-blue-600 font-semibold">Save: 65%</p>
          </div>
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h3 class="font-bold text-gray-900 mb-2">🇹🇭 Thailand</h3>
            <p class="text-sm text-gray-700 mb-2">Best for: Vacation + dental</p>
            <p class="text-sm text-blue-600 font-semibold">Save: 60%</p>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8">Step 2: Find a Reputable Clinic</h2>
        <div class="bg-blue-50 p-6 rounded-xl border border-blue-200">
          <h3 class="font-bold text-gray-900 mb-3">Research Checklist:</h3>
          <ul class="space-y-2 text-gray-700">
            <li>✓ Read reviews on multiple platforms</li>
            <li>✓ Check certifications (JCI, ISO)</li>
            <li>✓ Verify dentist credentials</li>
            <li>✓ Request before/after photos</li>
            <li>✓ Schedule virtual consultation</li>
            <li>✓ Get detailed treatment plan</li>
            <li>✓ Confirm warranty terms</li>
          </ul>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8">Step 3: Plan Your Trip</h2>
        <div class="space-y-3">
          <div class="flex items-start gap-3">
            <span class="text-blue-600 text-2xl flex-shrink-0">💰</span>
            <div>
              <h4 class="font-semibold text-gray-900">Budget Planning</h4>
              <p class="text-gray-700 text-sm">Include: treatment, flights, accommodation, food, contingency fund</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-blue-600 text-2xl flex-shrink-0">⏱️</span>
            <div>
              <h4 class="font-semibold text-gray-900">Time Required</h4>
              <p class="text-gray-700 text-sm">Veneers: 5-7 days | Implants: 3-6 months (multiple trips)</p>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8">What to Pack</h2>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h3 class="font-semibold text-gray-900 mb-3">Documents:</h3>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Passport & visa (if required)</li>
              <li>• Travel insurance documents</li>
              <li>• Dental records & X-rays</li>
              <li>• Clinic confirmation emails</li>
              <li>• Emergency contacts</li>
            </ul>
          </div>
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h3 class="font-semibold text-gray-900 mb-3">Comfort Items:</h3>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Pain relievers (approved by dentist)</li>
              <li>• Soft foods for recovery</li>
              <li>• Ice packs</li>
              <li>• Entertainment for downtime</li>
            </ul>
          </div>
        </div>

        <div class="bg-green-50 p-6 rounded-xl border border-green-200 mt-6">
          <h3 class="font-bold text-gray-900 mb-3">Success Tips</h3>
          <ul class="space-y-2 text-gray-700">
            <li>✓ Arrive 1 day early to recover from travel before treatment</li>
            <li>✓ Stay in clinic-recommended accommodation nearby</li>
            <li>✓ Keep all treatment documentation for follow-up care</li>
            <li>✓ Get written post-treatment care instructions</li>
            <li>✓ Schedule follow-up virtual consultations</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: "istanbul-dental-clinics",
    title: "Istanbul Dental Tourism Guide: Best Clinics & Travel Tips",
    excerpt: "Why Istanbul is the #1 destination for dental tourism. Best clinics, costs, what to expect, and how to plan your trip.",
    readTime: "9 min read",
    category: "Destinations",
    fullContent: `
      <div class="space-y-6">
        <p class="text-xl text-gray-700 leading-relaxed">
          Istanbul has emerged as the world's leading dental tourism destination, combining exceptional quality, affordable prices, and a rich cultural experience.
        </p>

        <h2 class="text-2xl font-bold text-gray-900">Why Choose Istanbul?</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-blue-50 p-5 rounded-xl border border-blue-200">
            <h3 class="font-bold text-gray-900 mb-3">Quality & Expertise</h3>
            <ul class="space-y-2 text-sm text-gray-700">
              <li>• 500+ modern dental clinics</li>
              <li>• Dentists trained internationally</li>
              <li>• EU-standard equipment & materials</li>
              <li>• English-speaking staff</li>
            </ul>
          </div>
          <div class="bg-green-50 p-5 rounded-xl border border-green-200">
            <h3 class="font-bold text-gray-900 mb-3">Convenience</h3>
            <ul class="space-y-2 text-sm text-gray-700">
              <li>• Major international airport</li>
              <li>• Direct flights from most countries</li>
              <li>• Easy visa process</li>
              <li>• Tourist-friendly infrastructure</li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8">Average Costs in Istanbul</h2>
        <div class="bg-white p-6 rounded-xl border border-gray-200">
          <div class="space-y-3">
            <div class="flex justify-between items-center py-3 border-b border-gray-200">
              <span class="font-semibold text-gray-900">E-max Veneers (per tooth)</span>
              <span class="text-blue-600 font-bold">£160 - £240</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-gray-200">
              <span class="font-semibold text-gray-900">Zirconia Crowns (per crown)</span>
              <span class="text-blue-600 font-bold">£200 - £320</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-gray-200">
              <span class="font-semibold text-gray-900">Full Smile Makeover (16 veneers)</span>
              <span class="text-blue-600 font-bold">£2,560 - £3,840</span>
            </div>
            <div class="flex justify-between items-center py-3">
              <span class="font-semibold text-gray-900">Hotel (per night, 4-star)</span>
              <span class="text-blue-600 font-bold">£40 - £80</span>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8">Where to Stay</h2>
        <div class="space-y-3">
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h3 class="font-semibold text-gray-900 mb-2">Taksim Area</h3>
            <p class="text-sm text-gray-700">Modern, central, close to many clinics. Great restaurants and shopping.</p>
          </div>
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h3 class="font-semibold text-gray-900 mb-2">Sisli/Mecidiyekoy</h3>
            <p class="text-sm text-gray-700">Business district, many clinics nearby, good metro connections.</p>
          </div>
          <div class="bg-white p-4 rounded-lg border border-gray-200">
            <h3 class="font-semibold text-gray-900 mb-2">Sultanahmet (Old City)</h3>
            <p class="text-sm text-gray-700">Historic area, tourist attractions, but farther from modern clinics.</p>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 mt-8">7-Day Sample Itinerary</h2>
        <div class="space-y-2">
          <div class="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
            <span class="font-bold text-blue-600">Day 1:</span>
            <span class="text-gray-700">Arrive, check-in, rest from travel</span>
          </div>
          <div class="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
            <span class="font-bold text-blue-600">Day 2:</span>
            <span class="text-gray-700">Initial consultation, X-rays, treatment planning</span>
          </div>
          <div class="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
            <span class="font-bold text-blue-600">Day 3:</span>
            <span class="text-gray-700">Tooth preparation, temporary veneers</span>
          </div>
          <div class="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
            <span class="font-bold text-blue-600">Day 4-5:</span>
            <span class="text-gray-700">Sightseeing while lab creates permanent veneers</span>
          </div>
          <div class="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
            <span class="font-bold text-blue-600">Day 6:</span>
            <span class="text-gray-700">Final fitting and adjustments</span>
          </div>
          <div class="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
            <span class="font-bold text-blue-600">Day 7:</span>
            <span class="text-gray-700">Final check, fly home with new smile!</span>
          </div>
        </div>

        <div class="bg-purple-50 p-6 rounded-xl border border-purple-200 mt-6">
          <h3 class="font-bold text-gray-900 mb-3">Istanbul Travel Tips</h3>
          <ul class="space-y-2 text-gray-700 text-sm">
            <li>✓ Get Istanbul Tourist Pass for free public transport</li>
            <li>✓ Most clinics offer free airport pickup</li>
            <li>✓ Turkish Lira (TRY) - USD/EUR widely accepted</li>
            <li>✓ SIM card available at airport for data/calls</li>
            <li>✓ Visit during shoulder season (Apr-May, Sep-Oct) for better weather</li>
          </ul>
        </div>
      </div>
    `
  }
];

// Category list
const categories = [
  "All",
  "Cost Guides",
  "Destinations",
  "Safety & Tips",
  "Treatment Guides",
  "Guides",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);

  // Filter posts by category
  const filteredPosts = selectedCategory === "All"
    ? blogPostsData
    : blogPostsData.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen w-full bg-grid-pattern relative">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 pt-24 pb-12">
        <Banner 
          title={
            <>
              Dental Tourism <span className="text-blue-600">Blog & Resources</span>
            </>
          }
          subtitle="Expert guides, cost comparisons, and real patient stories to help you make informed decisions about dental care abroad."
        />

        {/* Categories */}
        <nav className="flex flex-wrap justify-center gap-3 mb-12" aria-label="Blog categories">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white/90 hover:bg-blue-50 text-gray-700 hover:text-blue-600 border border-gray-200 hover:border-blue-300"
              }`}
            >
              {category}
            </button>
          ))}
        </nav>

        {/* Blog Grid */}
        <section className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="glass-elevated rounded-xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-shadow overflow-hidden group cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight size={16} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 max-w-4xl mx-auto">
          <div className="glass-elevated p-8 rounded-2xl shadow-xl border border-gray-200/50 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Find Your Perfect Dental Clinic?
            </h2>
            <p className="text-gray-700 mb-6">
              Browse verified clinics worldwide and compare prices for veneers, crowns, and implants.
            </p>
            <Link 
              href="/"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3"
            >
              Browse Dental Clinics
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      {/* Modal for Blog Post */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-8 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-start justify-between z-10">
              <div className="flex-1 pr-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full inline-block mb-3">
                  {selectedPost.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  {selectedPost.title}
                </h2>
                <div className="flex items-center gap-2 mt-3 text-sm text-gray-600">
                  <Clock size={14} />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedPost.fullContent }}
              />

              {/* CTA in Modal */}
              <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Ready to Find Your Dental Clinic?
                </h3>
                <p className="text-gray-700 mb-4">
                  Browse verified clinics and compare prices for your treatment.
                </p>
                <Link 
                  href="/"
                  className="btn-primary inline-flex items-center gap-2"
                  onClick={() => setSelectedPost(null)}
                >
                  Find Clinics Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
