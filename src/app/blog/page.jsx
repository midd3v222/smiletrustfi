"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, X, ArrowRight } from "lucide-react";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import { Tilt } from "../../../components/motion-primitives/tilt";

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
        <div class="bg-blue-50 dark:bg-blue-900/20 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800 dark:border-blue-800">
          <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 dark:text-gray-100 mb-4">Quick Summary: Veneer Costs 2025</h3>
          <div class="grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p class="font-semibold text-gray-900 dark:text-gray-100 dark:text-gray-100 mb-2">Most Expensive:</p>
              <p class="text-gray-700 dark:text-gray-300 dark:text-gray-300">🇬🇧 UK: £500 - £1,000 per tooth</p>
              <p class="text-gray-700 dark:text-gray-300 dark:text-gray-300">🇩🇪 Germany: €600 - €1,200 per tooth</p>
            </div>
            <div>
              <p class="font-semibold text-gray-900 dark:text-gray-100 dark:text-gray-100 mb-2">Most Affordable:</p>
              <p class="text-gray-700 dark:text-gray-300 dark:text-gray-300">🇹🇷 Turkey: £250 per tooth</p>
              <p class="text-gray-700 dark:text-gray-300 dark:text-gray-300">🇭🇺 Hungary: £160 - £400 per tooth</p>
            </div>
          </div>
          <div class="mt-4 pt-4 border-t border-blue-300 dark:border-blue-700">
            <p class="font-bold text-blue-900 dark:text-blue-100 dark:text-blue-100">💰 Potential Savings: 70-85% by traveling abroad</p>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">What Are Dental Veneers?</h2>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
          Dental veneers are thin, custom-made ceramic shells that are bonded to the front surface of your teeth to improve their appearance. They're one of the most popular cosmetic dental procedures worldwide, capable of transforming discolored, chipped, gapped, or misaligned teeth into a beautiful, natural-looking smile.
        </p>

        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Veneer Costs by Country (2025)</h2>
        
        <div class="space-y-4">
          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-3xl">🇹🇷</span>
              <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100">Turkey</h3>
              <span class="ml-auto px-3 py-1 bg-green-100 text-green-700 dark:text-green-300 text-sm font-medium rounded-full">
                Save 70%
              </span>
            </div>
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <p class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">£250</p>
                <p class="text-sm text-gray-600">per dental veneer</p>
              </div>
              <div>
                <p class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">£4,000</p>
                <p class="text-sm text-gray-600">full set (16 veneers)</p>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <p class="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Popular Cities:</strong> Istanbul, Antalya, Izmir</p>
              <p class="text-sm text-gray-700 dark:text-gray-300"><strong>Why Choose Turkey:</strong> World-class clinics, EU-standard materials, all-inclusive packages, highly experienced dentists</p>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-3xl">🇭🇺</span>
              <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100">Hungary</h3>
              <span class="ml-auto px-3 py-1 bg-green-100 text-green-700 dark:text-green-300 text-sm font-medium rounded-full">
                Save 75%
              </span>
            </div>
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <p class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">£160 - £400</p>
                <p class="text-sm text-gray-600">per porcelain veneer</p>
              </div>
              <div>
                <p class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">£2,560 - £6,400</p>
                <p class="text-sm text-gray-600">full set (16 veneers)</p>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <p class="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Popular Cities:</strong> Budapest, Debrecen, Szeged</p>
              <p class="text-sm text-gray-700 dark:text-gray-300"><strong>Why Choose Hungary:</strong> EU-standard care, short flight from UK, English-speaking dentists</p>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <div class="flex items-center gap-3 mb-3">
              <span class="text-3xl">🇺🇸</span>
              <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100">United States</h3>
              <span class="ml-auto px-3 py-1 bg-red-100 text-red-700 dark:text-red-300 text-sm font-medium rounded-full">
                Most Expensive
              </span>
            </div>
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <p class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">$1,000 - $2,500</p>
                <p class="text-sm text-gray-600">per porcelain veneer</p>
              </div>
              <div>
                <p class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">$16,000 - $40,000</p>
                <p class="text-sm text-gray-600">full set (16 veneers)</p>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">How to Save Money on Veneers</h2>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
          <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-4">💰 Top Money-Saving Tips:</h3>
          <ol class="space-y-3 text-gray-700 dark:text-gray-300">
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

        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Factors That Affect Veneer Costs</h2>
        <div class="space-y-4">
          <div class="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Material Quality</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-3">The type of ceramic material significantly impacts cost:</p>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <span class="text-blue-600 flex-shrink-0">•</span>
                <span><strong>E-max:</strong> Premium lithium disilicate ceramic - highest quality and cost</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-600 flex-shrink-0">•</span>
                <span><strong>Zirconia:</strong> Ultra-strong ceramic - excellent durability</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-600 flex-shrink-0">•</span>
                <span><strong>Composite:</strong> More affordable but less durable option</span>
              </li>
            </ul>
          </div>

          <div class="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Number of Veneers</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-3">Most clinics offer package discounts:</p>
            <div class="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Single Veneer:</p>
                <p class="text-gray-700 dark:text-gray-300">Highest per-tooth cost</p>
              </div>
              <div>
                <p class="font-semibold text-gray-900 dark:text-gray-100 mb-2">6+ Veneers:</p>
                <p class="text-gray-700 dark:text-gray-300">Package discounts available</p>
              </div>
              <div>
                <p class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Full Smile (16):</p>
                <p class="text-gray-700 dark:text-gray-300">Best value per tooth</p>
              </div>
              <div>
                <p class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Hollywood Smile:</p>
                <p class="text-gray-700 dark:text-gray-300">Complete transformation package</p>
              </div>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Clinic Location & Reputation</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-3">Location significantly impacts pricing:</p>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <span class="text-green-600 flex-shrink-0">✓</span>
                <span><strong>Major Cities:</strong> Higher costs but more experienced dentists</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-600 flex-shrink-0">✓</span>
                <span><strong>Tourist Areas:</strong> Premium pricing for convenience</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-600 flex-shrink-0">✓</span>
                <span><strong>Established Clinics:</strong> Higher prices reflect experience and quality</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">The Veneer Procedure: What to Expect</h2>
        <div class="space-y-4">
          <div class="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Step-by-Step Process</h3>
            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-gray-100">Initial Consultation</h4>
                  <p class="text-gray-700 dark:text-gray-300 text-sm">Digital scans, photos, treatment planning, and cost estimation</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-gray-100">Tooth Preparation</h4>
                  <p class="text-gray-700 dark:text-gray-300 text-sm">Minimal enamel removal (0.5mm) to create space for veneers</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-gray-100">Temporary Veneers</h4>
                  <p class="text-gray-700 dark:text-gray-300 text-sm">Protect prepared teeth while permanent veneers are crafted</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-gray-100">Final Fitting</h4>
                  <p class="text-gray-700 dark:text-gray-300 text-sm">Permanent veneers bonded with special dental cement</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Recovery & Aftercare</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border border-green-200 dark:border-green-800">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Immediate Aftercare</h3>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <span class="text-green-600 flex-shrink-0">✓</span>
                <span>Avoid hard foods for 24-48 hours</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-600 flex-shrink-0">✓</span>
                <span>Use soft-bristled toothbrush</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-600 flex-shrink-0">✓</span>
                <span>Follow dentist's cleaning instructions</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-600 flex-shrink-0">✓</span>
                <span>Attend follow-up appointments</span>
              </li>
            </ul>
          </div>

          <div class="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Long-term Maintenance</h3>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <span class="text-blue-600 flex-shrink-0">•</span>
                <span>Regular dental check-ups every 6 months</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-600 flex-shrink-0">•</span>
                <span>Professional cleaning twice yearly</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-600 flex-shrink-0">•</span>
                <span>Avoid excessive force (nail biting, ice chewing)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-600 flex-shrink-0">•</span>
                <span>Consider night guards if you grind teeth</span>
              </li>
            </ul>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Common Questions About Veneer Costs</h2>
        <div class="space-y-4">
          <div class="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-2">Q: Why are veneers so expensive?</h3>
            <p class="text-gray-700 dark:text-gray-300 text-sm">Veneers require skilled craftsmanship, high-quality materials, and precise laboratory work. Each veneer is custom-made to match your natural teeth perfectly.</p>
          </div>

          <div class="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-2">Q: Do insurance plans cover veneers?</h3>
            <p class="text-gray-700 dark:text-gray-300 text-sm">Most insurance plans consider veneers cosmetic and don't cover them. However, some plans may cover a portion if veneers are needed for structural reasons.</p>
          </div>

          <div class="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-2">Q: Are payment plans available?</h3>
            <p class="text-gray-700 dark:text-gray-300 text-sm">Many clinics offer financing options, payment plans, or work with third-party financing companies to make veneers more affordable.</p>
          </div>

          <div class="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-2">Q: How long do veneers last?</h3>
            <p class="text-gray-700 dark:text-gray-300 text-sm">With proper care, veneers typically last 10-15 years. Some high-quality veneers can last even longer with excellent maintenance.</p>
          </div>
        </div>

        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-800 mt-6">
          <div class="flex items-start gap-3">
            <span class="text-2xl">⚠️</span>
            <div>
              <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-2">Important Warning</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-3">
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

          <div class="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Clinic Availability</h3>
            <div class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <p><strong>Best Booking Times:</strong> Book 2-3 months in advance for popular clinics</p>
              <p><strong>Flexible Schedule:</strong> Mid-week appointments often have better availability</p>
              <p><strong>Multiple Visits:</strong> Plan for 5-7 days minimum for veneers, longer for implants</p>
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
        
        <div class="space-y-4">
          <div class="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Choose Veneers If:</h3>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
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

          <div class="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Choose Crowns If:</h3>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
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

        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Detailed Cost Comparison</h2>
        <div class="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th class="text-left py-3 px-2 font-semibold text-gray-900 dark:text-gray-100">Treatment</th>
                  <th class="text-right py-3 px-2 font-semibold text-gray-900 dark:text-gray-100">Turkey</th>
                  <th class="text-right py-3 px-2 font-semibold text-gray-900 dark:text-gray-100">UK</th>
                  <th class="text-right py-3 px-2 font-semibold text-gray-900 dark:text-gray-100">Savings</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td class="py-3 px-2 font-medium text-gray-900 dark:text-gray-100">Single Veneer</td>
                  <td class="py-3 px-2 text-right text-green-700 dark:text-green-300 font-semibold">£250</td>
                  <td class="py-3 px-2 text-right text-gray-700 dark:text-gray-300">£500-£1,000</td>
                  <td class="py-3 px-2 text-right text-green-700 dark:text-green-300 font-semibold">50-75%</td>
                </tr>
                <tr>
                  <td class="py-3 px-2 font-medium text-gray-900 dark:text-gray-100">Single Crown</td>
                  <td class="py-3 px-2 text-right text-green-700 dark:text-green-300 font-semibold">£170-£250</td>
                  <td class="py-3 px-2 text-right text-gray-700 dark:text-gray-300">£500-£1,000</td>
                  <td class="py-3 px-2 text-right text-green-700 dark:text-green-300 font-semibold">50-75%</td>
                </tr>
                <tr>
                  <td class="py-3 px-2 font-medium text-gray-900 dark:text-gray-100">6 Veneers</td>
                  <td class="py-3 px-2 text-right text-green-700 dark:text-green-300 font-semibold">£1,200</td>
                  <td class="py-3 px-2 text-right text-gray-700 dark:text-gray-300">£3,000-£6,000</td>
                  <td class="py-3 px-2 text-right text-green-700 dark:text-green-300 font-semibold">60-80%</td>
                </tr>
                <tr>
                  <td class="py-3 px-2 font-medium text-gray-900 dark:text-gray-100">Full Smile (16)</td>
                  <td class="py-3 px-2 text-right text-green-700 dark:text-green-300 font-semibold">£4,000</td>
                  <td class="py-3 px-2 text-right text-gray-700 dark:text-gray-300">£8,000-£16,000</td>
                  <td class="py-3 px-2 text-right text-green-700 dark:text-green-300 font-semibold">50-75%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">When to Choose Each Treatment</h2>
        <div class="space-y-6">
          <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Choose Veneers When:</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Cosmetic Issues:</h4>
                <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Stained or discolored teeth</li>
                  <li>• Minor chips or cracks</li>
                  <li>• Small gaps between teeth</li>
                  <li>• Slightly crooked teeth</li>
                  <li>• Worn or uneven teeth</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Tooth Condition:</h4>
                <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Teeth are structurally sound</li>
                  <li>• No major decay or damage</li>
                  <li>• Good gum health</li>
                  <li>• Adequate tooth structure</li>
                  <li>• No previous root canals</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
            <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Choose Crowns When:</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Structural Issues:</h4>
                <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Severely broken or cracked teeth</li>
                  <li>• Large fillings or decay</li>
                  <li>• Root canal treated teeth</li>
                  <li>• Weak or compromised teeth</li>
                  <li>• Teeth with extensive wear</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Functional Needs:</h4>
                <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Need maximum strength</li>
                  <li>• Heavy chewing forces</li>
                  <li>• Back teeth restoration</li>
                  <li>• Long-term durability priority</li>
                  <li>• Complete tooth protection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Procedure Comparison</h2>
        <div class="space-y-4">
          <div class="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Veneer Procedure Timeline</h3>
            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-gray-100">Day 1: Consultation</h4>
                  <p class="text-gray-700 dark:text-gray-300 text-sm">Digital scans, photos, treatment planning, and temporary veneers</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-gray-100">Day 2-3: Preparation</h4>
                  <p class="text-gray-700 dark:text-gray-300 text-sm">Tooth preparation and impressions for permanent veneers</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-gray-100">Day 5-6: Final Fitting</h4>
                  <p class="text-gray-700 dark:text-gray-300 text-sm">Permanent veneers bonded and adjusted</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Crown Procedure Timeline</h3>
            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <span class="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-gray-100">Day 1: Consultation</h4>
                  <p class="text-gray-700 dark:text-gray-300 text-sm">X-rays, examination, treatment planning, and temporary crown</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-gray-100">Day 2-3: Preparation</h4>
                  <p class="text-gray-700 dark:text-gray-300 text-sm">Tooth reshaping and impressions for permanent crown</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-gray-100">Day 5-6: Final Fitting</h4>
                  <p class="text-gray-700 dark:text-gray-300 text-sm">Permanent crown cemented and adjusted</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Long-term Considerations</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Veneer Maintenance</h3>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-700 dark:text-gray-300">Lifespan:</span>
                <span class="font-semibold text-gray-900 dark:text-gray-100">10-15 years</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-700 dark:text-gray-300">Replacement Cost:</span>
                <span class="font-semibold text-gray-900 dark:text-gray-100">£250 each</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-700 dark:text-gray-300">Maintenance:</span>
                <span class="font-semibold text-gray-900 dark:text-gray-100">Minimal</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-700 dark:text-gray-300">Risk Factors:</span>
                <span class="font-semibold text-gray-900 dark:text-gray-100">Chipping, staining</span>
              </div>
            </div>
          </div>

          <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border border-green-200 dark:border-green-800">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Crown Maintenance</h3>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-700 dark:text-gray-300">Lifespan:</span>
                <span class="font-semibold text-gray-900 dark:text-gray-100">15-20 years</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-700 dark:text-gray-300">Replacement Cost:</span>
                <span class="font-semibold text-gray-900 dark:text-gray-100">£170-£250 each</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-700 dark:text-gray-300">Maintenance:</span>
                <span class="font-semibold text-gray-900 dark:text-gray-100">Regular check-ups</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-700 dark:text-gray-300">Risk Factors:</span>
                <span class="font-semibold text-gray-900 dark:text-gray-100">Cracking, decay underneath</span>
              </div>
            </div>
          </div>
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
        <p class="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Dental tourism allows you to receive high-quality dental care abroad while saving up to 70%. Here's your complete guide to doing it safely and successfully.
        </p>

        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">Step 1: Choose Your Destination</h2>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-2">🇹🇷 Turkey</h3>
            <p class="text-sm text-gray-700 dark:text-gray-300 mb-2">Best for: Veneers, crowns</p>
            <p class="text-sm text-blue-600 font-semibold">Save: 70%</p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-2">🇲🇽 Mexico</h3>
            <p class="text-sm text-gray-700 dark:text-gray-300 mb-2">Best for: Close to USA</p>
            <p class="text-sm text-blue-600 font-semibold">Save: 65%</p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-2">🇹🇭 Thailand</h3>
            <p class="text-sm text-gray-700 dark:text-gray-300 mb-2">Best for: Vacation + dental</p>
            <p class="text-sm text-blue-600 font-semibold">Save: 60%</p>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Step 2: Find a Reputable Clinic</h2>
        <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
          <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Research Checklist:</h3>
          <ul class="space-y-2 text-gray-700 dark:text-gray-300">
            <li>✓ Read reviews on multiple platforms</li>
            <li>✓ Check certifications (JCI, ISO)</li>
            <li>✓ Verify dentist credentials</li>
            <li>✓ Request before/after photos</li>
            <li>✓ Schedule virtual consultation</li>
            <li>✓ Get detailed treatment plan</li>
            <li>✓ Confirm warranty terms</li>
          </ul>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Step 3: Plan Your Trip</h2>
        <div class="space-y-3">
          <div class="flex items-start gap-3">
            <span class="text-blue-600 text-2xl flex-shrink-0">💰</span>
            <div>
              <h4 class="font-semibold text-gray-900 dark:text-gray-100">Budget Planning</h4>
              <p class="text-gray-700 dark:text-gray-300 text-sm">Include: treatment, flights, accommodation, food, contingency fund</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-blue-600 text-2xl flex-shrink-0">⏱️</span>
            <div>
              <h4 class="font-semibold text-gray-900 dark:text-gray-100">Time Required</h4>
              <p class="text-gray-700 dark:text-gray-300 text-sm">Veneers: 5-7 days | Implants: 3-6 months (multiple trips)</p>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">What to Pack</h2>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-3">Documents:</h3>
            <ul class="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Passport & visa (if required)</li>
              <li>• Travel insurance documents</li>
              <li>• Dental records & X-rays</li>
              <li>• Clinic confirmation emails</li>
              <li>• Emergency contacts</li>
            </ul>
          </div>
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-3">Comfort Items:</h3>
            <ul class="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>• Pain relievers (approved by dentist)</li>
              <li>• Soft foods for recovery</li>
              <li>• Ice packs</li>
              <li>• Entertainment for downtime</li>
            </ul>
          </div>
        </div>

        <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800 mt-6">
          <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Success Tips</h3>
          <ul class="space-y-2 text-gray-700 dark:text-gray-300">
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
              <span class="font-semibold text-gray-900 dark:text-gray-100">Full Smile Makeover (16 veneers)</span>
              <span class="text-blue-600 font-bold">£4,000</span>
            </div>
            <div class="flex justify-between items-center py-3">
              <span class="font-semibold text-gray-900 dark:text-gray-100">Hotel (per night, 4-star)</span>
              <span class="text-blue-600 font-bold">£40 - £80</span>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Where to Stay</h2>
        <div class="space-y-3">
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Taksim Area</h3>
            <p class="text-sm text-gray-700 dark:text-gray-300">Modern, central, close to many clinics. Great restaurants and shopping.</p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Sisli/Mecidiyekoy</h3>
            <p class="text-sm text-gray-700 dark:text-gray-300">Business district, many clinics nearby, good metro connections.</p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Sultanahmet (Old City)</h3>
            <p class="text-sm text-gray-700 dark:text-gray-300">Historic area, tourist attractions, but farther from modern clinics.</p>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">7-Day Sample Itinerary</h2>
        <div class="space-y-2">
          <div class="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <span class="font-bold text-blue-600">Day 1:</span>
            <span class="text-gray-700 dark:text-gray-300">Arrive, check-in, rest from travel</span>
          </div>
          <div class="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <span class="font-bold text-blue-600">Day 2:</span>
            <span class="text-gray-700 dark:text-gray-300">Initial consultation, X-rays, treatment planning</span>
          </div>
          <div class="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <span class="font-bold text-blue-600">Day 3:</span>
            <span class="text-gray-700 dark:text-gray-300">Tooth preparation, temporary veneers</span>
          </div>
          <div class="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <span class="font-bold text-blue-600">Day 4-5:</span>
            <span class="text-gray-700 dark:text-gray-300">Sightseeing while lab creates permanent veneers</span>
          </div>
          <div class="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <span class="font-bold text-blue-600">Day 6:</span>
            <span class="text-gray-700 dark:text-gray-300">Final fitting and adjustments</span>
          </div>
          <div class="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <span class="font-bold text-blue-600">Day 7:</span>
            <span class="text-gray-700 dark:text-gray-300">Final check, fly home with new smile!</span>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Top-Rated Dental Clinics in Istanbul</h2>
        <div class="space-y-4">
          <div class="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Clinic Selection Criteria</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Quality Indicators:</h4>
                <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• International certifications (JCI, ISO)</li>
                  <li>• English-speaking staff</li>
                  <li>• Modern equipment & technology</li>
                  <li>• Experienced cosmetic dentists</li>
                  <li>• Positive patient reviews</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Service Features:</h4>
                <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Airport pickup service</li>
                  <li>• Hotel accommodation packages</li>
                  <li>• Virtual consultations</li>
                  <li>• Warranty on treatments</li>
                  <li>• Follow-up care support</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Popular Clinic Areas</h3>
            <div class="grid md:grid-cols-3 gap-4">
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Sisli District</h4>
                <p class="text-sm text-gray-700 dark:text-gray-300 mb-2">Modern business district with many high-end clinics</p>
                <ul class="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                  <li>• Close to metro stations</li>
                  <li>• Upscale shopping nearby</li>
                  <li>• International hotels</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Beyoglu/Taksim</h4>
                <p class="text-sm text-gray-700 dark:text-gray-300 mb-2">Central location with excellent transport links</p>
                <ul class="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                  <li>• Tourist-friendly area</li>
                  <li>• Many restaurants & cafes</li>
                  <li>• Easy airport access</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Kadikoy (Asian Side)</h4>
                <p class="text-sm text-gray-700 dark:text-gray-300 mb-2">Less crowded, more affordable options</p>
                <ul class="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                  <li>• Lower accommodation costs</li>
                  <li>• Local neighborhood feel</li>
                  <li>• Ferry connections</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Transportation & Getting Around</h2>
        <div class="space-y-4">
          <div class="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">From Airport to City</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Transportation Options:</h4>
                <div class="space-y-2 text-sm">
                  <div class="flex justify-between">
                    <span class="text-gray-700 dark:text-gray-300">Airport Taxi:</span>
                    <span class="font-semibold text-gray-900 dark:text-gray-100">£15-£25</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-700 dark:text-gray-300">Havaist Bus:</span>
                    <span class="font-semibold text-gray-900 dark:text-gray-100">£3-£5</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-700 dark:text-gray-300">Metro:</span>
                    <span class="font-semibold text-gray-900 dark:text-gray-100">£1-£2</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-700 dark:text-gray-300">Clinic Pickup:</span>
                    <span class="font-semibold text-gray-900 dark:text-gray-100">Often Free</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Travel Tips:</h4>
                <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Book airport pickup with clinic</li>
                  <li>• Download Istanbul transport apps</li>
                  <li>• Get Istanbul Tourist Pass</li>
                  <li>• Keep clinic address in Turkish</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border border-green-200 dark:border-green-800">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Getting Around Istanbul</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Public Transport:</h4>
                <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Metro: Fast and reliable</li>
                  <li>• Tram: Scenic city routes</li>
                  <li>• Ferry: Cross between continents</li>
                  <li>• Bus: Extensive network</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Costs:</h4>
                <div class="space-y-1 text-sm">
                  <div class="flex justify-between">
                    <span class="text-gray-700 dark:text-gray-300">Single Journey:</span>
                    <span class="font-semibold text-gray-900 dark:text-gray-100">£0.50-£1</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-700 dark:text-gray-300">Daily Pass:</span>
                    <span class="font-semibold text-gray-900 dark:text-gray-100">£3-£5</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-700 dark:text-gray-300">Weekly Pass:</span>
                    <span class="font-semibold text-gray-900 dark:text-gray-100">£15-£25</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Cultural Experience & Sightseeing</h2>
        <div class="space-y-4">
          <div class="bg-white dark:bg-gray-800 p-5 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Must-Visit Attractions</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Historic Sites:</h4>
                <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Hagia Sophia (free with treatment)</li>
                  <li>• Blue Mosque</li>
                  <li>• Topkapi Palace</li>
                  <li>• Grand Bazaar</li>
                  <li>• Basilica Cistern</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Modern Istanbul:</h4>
                <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Galata Tower</li>
                  <li>• Istiklal Street</li>
                  <li>• Bosphorus Cruise</li>
                  <li>• Princes' Islands</li>
                  <li>• Ortakoy Mosque</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Food & Dining</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Traditional Turkish Cuisine:</h4>
                <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Kebabs & grilled meats</li>
                  <li>• Fresh seafood</li>
                  <li>• Turkish breakfast</li>
                  <li>• Baklava & desserts</li>
                  <li>• Turkish tea & coffee</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Dining Costs:</h4>
                <div class="space-y-1 text-sm">
                  <div class="flex justify-between">
                    <span class="text-gray-700 dark:text-gray-300">Street Food:</span>
                    <span class="font-semibold text-gray-900 dark:text-gray-100">£2-£5</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-700 dark:text-gray-300">Restaurant Meal:</span>
                    <span class="font-semibold text-gray-900 dark:text-gray-100">£8-£15</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-700 dark:text-gray-300">Fine Dining:</span>
                    <span class="font-semibold text-gray-900 dark:text-gray-100">£20-£40</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8">Practical Tips for Dental Tourism in Istanbul</h2>
        <div class="space-y-4">
          <div class="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-xl border border-yellow-200 dark:border-yellow-800">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">Before You Go</h3>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <span class="text-yellow-600 flex-shrink-0">✓</span>
                <span>Book accommodation near your clinic for convenience</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-yellow-600 flex-shrink-0">✓</span>
                <span>Download offline maps and translation apps</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-yellow-600 flex-shrink-0">✓</span>
                <span>Inform your bank about international travel</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-yellow-600 flex-shrink-0">✓</span>
                <span>Pack comfortable clothes and soft foods</span>
              </li>
            </ul>
          </div>

          <div class="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border border-green-200 dark:border-green-800">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">During Your Stay</h3>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <span class="text-green-600 flex-shrink-0">✓</span>
                <span>Keep all treatment documents and receipts</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-600 flex-shrink-0">✓</span>
                <span>Take photos of your progress for reference</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-600 flex-shrink-0">✓</span>
                <span>Follow post-treatment care instructions carefully</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-600 flex-shrink-0">✓</span>
                <span>Enjoy the city but avoid strenuous activities</span>
              </li>
            </ul>
          </div>

          <div class="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 class="font-bold text-gray-900 dark:text-gray-100 mb-3">After Treatment</h3>
            <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <span class="text-blue-600 flex-shrink-0">✓</span>
                <span>Schedule follow-up virtual consultations</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-600 flex-shrink-0">✓</span>
                <span>Keep emergency contact numbers handy</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-600 flex-shrink-0">✓</span>
                <span>Maintain regular dental hygiene routine</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-600 flex-shrink-0">✓</span>
                <span>Consider annual check-ups in Turkey</span>
              </li>
            </ul>
          </div>
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
                  : "bg-white dark:bg-gray-800/90 hover:bg-blue-50 dark:bg-blue-900/20 text-gray-700 dark:text-gray-300 hover:text-blue-600 border border-gray-200 dark:border-gray-700 hover:border-blue-300"
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
              <Tilt key={post.id} className="h-full" rotationFactor={8}>
                <article
                  className="glass-elevated rounded-xl shadow-lg border border-gray-200 dark:border-gray-700/50 dark:border-gray-700/50 hover:shadow-xl transition-shadow overflow-hidden group cursor-pointer h-full"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 dark:text-blue-300 text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4 pt-4 border-t border-gray-200 dark:border-gray-700 dark:border-gray-700">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-300 font-medium text-sm group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </article>
              </Tilt>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 max-w-4xl mx-auto">
          <div className="glass-elevated p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700/50 dark:border-gray-700/50 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 dark:text-gray-100 mb-4">
              Ready to Find Your Perfect Dental Clinic?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 dark:text-gray-300 mb-6">
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
          <div className="bg-white dark:bg-gray-800 dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full my-8 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-800 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 dark:border-gray-700 p-6 flex items-start justify-between z-10">
              <div className="flex-1 pr-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 dark:text-blue-300 text-xs font-medium rounded-full inline-block mb-3">
                  {selectedPost.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 dark:text-gray-100 leading-tight">
                  {selectedPost.title}
                </h2>
                <div className="flex items-center gap-2 mt-3 text-sm text-gray-600 dark:text-gray-400">
                  <Clock size={14} />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <X size={24} className="text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedPost.fullContent }}
              />

              {/* CTA in Modal */}
              <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800 dark:border-blue-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 dark:text-gray-100 mb-3">
                  Ready to Find Your Dental Clinic?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 dark:text-gray-300 mb-4">
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
