"use client";

import { Mail, Clock, Construction, ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
import Header from "../../components/Header";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-grid-pattern">
      <Header showBackButton={true} />
      
      <main className="container mx-auto px-4 sm:px-6 pt-28 pb-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
              <Construction size={24} className="text-orange-600 dark:text-orange-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100">
              Contact Us
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're currently building our contact system to better serve you.
          </p>
        </div>

        {/* Work in Progress Section */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-elevated p-8 md:p-12 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 text-center">
            {/* Construction Icon */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
                <Construction size={40} className="text-orange-600 dark:text-orange-400" />
              </div>
            </div>

            {/* Main Message */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Contact System Under Construction
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              We're currently enhancing our contact infrastructure to provide you with the best possible support experience. 
              Our team is working hard to implement a comprehensive contact system that will include multiple communication channels.
            </p>

            {/* What's Coming */}
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-8 border border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
                What's Coming Soon
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <Mail size={20} className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-blue-900 dark:text-blue-100">Email Support</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-200">Direct email communication for inquiries and support</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-blue-900 dark:text-blue-100">Live Chat</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-200">Real-time chat support during business hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Construction size={20} className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-blue-900 dark:text-blue-100">Help Center</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-200">Comprehensive knowledge base and tutorials</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={20} className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-blue-900 dark:text-blue-100">Feedback System</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-200">Easy way to share suggestions and report issues</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Alternatives */}
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 mb-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                In the Meantime
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                While we're building our contact system, here are some ways you can get help:
              </p>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Check our FAQ:</strong> Many common questions are answered in our comprehensive FAQ section.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Browse our services:</strong> Explore our AI smile visualization and clinic finder features.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Read our policies:</strong> Review our Privacy Policy and Terms of Service for detailed information.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/faq"
                className="btn-primary flex items-center gap-2"
              >
                <Mail size={20} />
                Visit FAQ
              </Link>
              <Link
                href="/"
                className="btn-secondary flex items-center gap-2"
              >
                <Home size={20} />
                Back to Home
              </Link>
            </div>

            {/* Timeline */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <Clock size={16} className="inline mr-1" />
                Expected completion: Coming soon
              </p>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/faq" className="group">
              <div className="glass-elevated p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-200 text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">FAQ</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Find answers to common questions</p>
              </div>
            </Link>

            <Link href="/privacy" className="group">
              <div className="glass-elevated p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-200 text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Construction size={24} className="text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Privacy Policy</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Learn about our data practices</p>
              </div>
            </Link>

            <Link href="/terms" className="group">
              <div className="glass-elevated p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-200 text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <ArrowLeft size={24} className="text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Terms of Service</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Read our usage terms</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
