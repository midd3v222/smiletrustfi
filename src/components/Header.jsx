"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Menu, X } from "lucide-react";

export default function Header({ showBackButton = true }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 glass z-10 shadow-lg border-b border-gray-200/20">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">ST</span>
          </div>
          <span className="heading-md text-gray-800">SmileTrust</span>
        </Link>

        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600" role="navigation" aria-label="Main navigation">
            <Link 
              href="/treatments"
              className="hover:text-blue-600 transition-colors font-medium"
            >
              Treatments
            </Link>
            <Link 
              href="/destinations"
              className="hover:text-blue-600 transition-colors font-medium"
            >
              Destinations
            </Link>
            <Link 
              href="/blog"
              className="hover:text-blue-600 transition-colors font-medium"
            >
              Blog
            </Link>
            <Link 
              href="/about"
              className="hover:text-blue-600 transition-colors font-medium"
            >
              About Us
            </Link>
          </nav>

          {/* GDPR Compliant (only on home page) */}
          {!showBackButton && (
            <span className="hidden md:flex items-center gap-1 text-sm text-gray-600">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              GDPR Compliant
            </span>
          )}

          {/* Back Button (when not on home page) */}
          {showBackButton && (
            <Link 
              href="/"
              className="hidden md:flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Back to Home</span>
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-elevated border-t border-gray-200/20">
          <div className="container mx-auto px-6 py-3 space-y-4">
            <Link 
              href="/treatments"
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Treatments
            </Link>
            <Link 
              href="/destinations"
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Destinations
            </Link>
            <Link 
              href="/blog"
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/about"
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <div className="flex items-center gap-2 text-sm text-gray-600 pt-2 border-t border-gray-200">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              GDPR Compliant
            </div>
            {showBackButton && (
              <Link 
                href="/"
                className="block text-blue-600 hover:text-blue-700 transition-colors font-medium pt-2 border-t border-gray-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ← Back to Home
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}