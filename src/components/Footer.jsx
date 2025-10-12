import Link from "next/link";
import { MapPin, Mail, Phone, Globe, Shield, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                SmileTrust
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Professional smile visualization technology trusted by dental professionals worldwide for accurate smile previews and verified clinic recommendations.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Shield size={16} />
              <span>GDPR Compliant & Privacy Protected</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/treatments" 
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Treatment Options
                </Link>
              </li>
              <li>
                <Link 
                  href="/destinations" 
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Top Destinations
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Treatment Types */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">
              Treatments
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/treatments#veneers" 
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Veneers Specialist
                </Link>
              </li>
              <li>
                <Link 
                  href="/treatments#zirconia-crowns" 
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Zirconia Crowns
                </Link>
              </li>
              <li>
                <Link 
                  href="/treatments#smile-makeover" 
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Full Smile Makeover
                </Link>
              </li>
              <li>
                <Link 
                  href="/treatments#cosmetic-dentistry" 
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Cosmetic Dentistry
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/contact" 
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy" 
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq" 
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} SmileTrust. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Globe size={16} />
                <span>Global Dental Network</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart size={16} className="text-red-500" />
                <span>Made with care</span>
              </div>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400 dark:text-gray-500">
            <div className="flex items-center gap-1">
              <Shield size={12} />
              <span>Verified Clinics</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={12} />
              <span>Worldwide Coverage</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={12} />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone size={12} />
              <span>Emergency Contact</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
