"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ThemeToggle from "./ThemeToggle";

export default function Header({ showBackButton = true }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {/* Main Header - Single Pill (when not scrolled) */}
        {!isScrolled && (
          <motion.header
            key="single-pill"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-2 left-2 right-2 sm:top-4 sm:left-4 sm:right-4 glass z-10 shadow-lg border border-gray-200/20 dark:border-gray-700/20 rounded-full"
          >
            <div className="container mx-auto px-3 py-2 sm:px-6 sm:py-3 flex justify-between items-center">
              <Link href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs sm:text-sm">ST</span>
                </div>
                <span className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-100">SmileTrust</span>
              </Link>

              <div className="flex items-center gap-2 sm:gap-4">
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300" role="navigation" aria-label="Main navigation">
                  <Link 
                    href="/treatments"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    Treatments
                  </Link>
                  <Link 
                    href="/destinations"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    Destinations
                  </Link>
                  <Link 
                    href="/blog"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    Blog
                  </Link>
                  <Link 
                    href="/about"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    About Us
                  </Link>
                </nav>

                {/* Theme Toggle */}
                <ThemeToggle />

                {/* GDPR Compliant (only on home page) */}
                {!showBackButton && (
                  <span className="hidden md:flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full"></span>
                    GDPR Compliant
                  </span>
                )}

                {/* Back Button (when not on home page) */}
                {showBackButton && (
                  <Link 
                    href="/"
                    className="hidden md:flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    <ArrowLeft size={16} />
                    <span className="hidden sm:inline">Back to Home</span>
                  </Link>
                )}

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-1.5 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </motion.header>
        )}

        {/* Split Header - Two Pills (when scrolled) */}
        {isScrolled && (
          <>
            {/* Left Pill - Logo and Text */}
            <motion.header
              key="left-pill"
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
              className="fixed top-2 left-2 sm:top-4 sm:left-4 glass z-10 shadow-lg border border-gray-200/20 dark:border-gray-700/20 rounded-full"
            >
              <div className="px-3 py-1.5 sm:px-4 sm:py-2 flex items-center">
                <Link href="/" className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">ST</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-100">SmileTrust</span>
                </Link>
              </div>
            </motion.header>

            {/* Right Pill - Hamburger Menu */}
            <motion.header
              key="right-pill"
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
              className="fixed top-2 right-2 sm:top-4 sm:right-4 glass z-10 shadow-lg border border-gray-200/20 dark:border-gray-700/20 rounded-full"
            >
              <div className="px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-2 sm:gap-3">
                {/* Theme Toggle */}
                <ThemeToggle />

                {/* Back Button (when not on home page) */}
                {showBackButton && (
                  <Link 
                    href="/"
                    className="hidden md:flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    <ArrowLeft size={14} />
                    <span className="hidden sm:inline text-xs">Back</span>
                  </Link>
                )}

                {/* Hamburger Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </motion.header>
          </>
        )}
      </AnimatePresence>

      {/* Navigation Menu (Hamburger Menu) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="glass-elevated border border-gray-200/20 dark:border-gray-700/20 rounded-2xl shadow-lg fixed top-16 right-2 sm:top-20 sm:right-4 z-20 w-auto min-w-fit"
          >
            <div className="px-4 py-3 space-y-3">
              <Link 
                href="/treatments"
                className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm whitespace-nowrap"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Treatments
              </Link>
              <Link 
                href="/destinations"
                className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm whitespace-nowrap"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Destinations
              </Link>
              <Link 
                href="/blog"
                className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm whitespace-nowrap"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/about"
                className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm whitespace-nowrap"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              {/* Only show GDPR in menu when not scrolled */}
              {!isScrolled && !showBackButton && (
                <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300 pt-2 border-t border-gray-200 dark:border-gray-700 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full"></span>
                  GDPR Compliant
                </div>
              )}
              {showBackButton && (
                <Link 
                  href="/"
                  className="block text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium pt-2 border-t border-gray-200 dark:border-gray-700 text-sm whitespace-nowrap"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ← Back to Home
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}