"use client";

import { Shield, Eye, Lock, Globe, UserCheck, Database } from "lucide-react";
import Header from "../../components/Header";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-grid-pattern">
      <Header showBackButton={true} />
      
      <main className="container mx-auto px-4 sm:px-6 pt-28 pb-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
              <Shield size={24} className="text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100">
              Privacy Policy
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use SmileTrust services.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
            <Shield size={16} />
            <span>GDPR Compliant</span>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          {/* Last Updated */}
          <div className="glass-elevated p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50 mb-8">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Information We Collect */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                <Database size={16} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0">
                Information We Collect
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="glass-elevated p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Photos for AI Processing
                </h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
                  <li>Uploaded photos are processed temporarily for AI smile visualization</li>
                  <li>Photos are not stored permanently on our servers</li>
                  <li>Processing occurs in secure, encrypted environments</li>
                  <li>No facial recognition or biometric data extraction</li>
                </ul>
              </div>

              <div className="glass-elevated p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Location Data
                </h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
                  <li>Location data is used only with your explicit permission</li>
                  <li>Used to find nearby dental clinics and provide relevant recommendations</li>
                  <li>Location data is not stored or shared with third parties</li>
                  <li>You can revoke location access at any time through your browser settings</li>
                </ul>
              </div>

              <div className="glass-elevated p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Usage Analytics
                </h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
                  <li>Anonymous usage statistics to improve our services</li>
                  <li>Page views, feature usage, and performance metrics</li>
                  <li>No personal identification information is collected</li>
                  <li>Analytics data is aggregated and anonymized</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                <Eye size={16} className="text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0">
                How We Use Your Information
              </h2>
            </div>
            
            <div className="glass-elevated p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
              <ul className="text-gray-700 dark:text-gray-300 space-y-3 list-disc list-inside">
                <li><strong>AI Processing:</strong> Generate smile visualization previews from uploaded photos</li>
                <li><strong>Clinic Recommendations:</strong> Provide relevant dental clinic suggestions based on location and preferences</li>
                <li><strong>Service Improvement:</strong> Analyze usage patterns to enhance user experience and functionality</li>
                <li><strong>Communication:</strong> Respond to inquiries and provide customer support when requested</li>
                <li><strong>Legal Compliance:</strong> Comply with applicable laws and regulations</li>
              </ul>
            </div>
          </section>

          {/* Data Protection */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                <Lock size={16} className="text-red-600 dark:text-red-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0">
                Data Protection & Security
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="glass-elevated p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Security Measures
                </h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
                  <li>Industry-standard encryption for data transmission and storage</li>
                  <li>Secure cloud infrastructure with regular security audits</li>
                  <li>Access controls and authentication protocols</li>
                  <li>Regular security updates and vulnerability assessments</li>
                </ul>
              </div>

              <div className="glass-elevated p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Data Retention
                </h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
                  <li>Uploaded photos are processed and immediately deleted</li>
                  <li>No permanent storage of personal images or data</li>
                  <li>Analytics data is retained in anonymized form for service improvement</li>
                  <li>Location data is not stored beyond the current session</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center">
                <UserCheck size={16} className="text-yellow-600 dark:text-yellow-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0">
                Your Rights (GDPR)
              </h2>
            </div>
            
            <div className="glass-elevated p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Access & Portability
                  </h3>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
                    <li>Request access to your personal data</li>
                    <li>Receive data in a portable format</li>
                    <li>Verify how your data is being used</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Control & Deletion
                  </h3>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Object to processing of your data</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Third Party Services */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/20 rounded-full flex items-center justify-center">
                <Globe size={16} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0">
                Third-Party Services
              </h2>
            </div>
            
            <div className="glass-elevated p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We may use third-party services to enhance our platform:
              </p>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
                <li><strong>Google Analytics:</strong> Anonymous usage analytics (you can opt-out)</li>
                <li><strong>Cloud Infrastructure:</strong> Secure data processing and storage</li>
                <li><strong>Dental Clinic APIs:</strong> Clinic information and reviews</li>
                <li><strong>AI Processing:</strong> Smile visualization technology</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                All third-party services are carefully vetted for privacy compliance and security standards.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <div className="glass-elevated p-8 rounded-xl border border-gray-200/50 dark:border-gray-700/50 text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Questions About Privacy?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="btn-primary flex items-center gap-2"
                >
                  Contact Us
                </a>
                <a
                  href="/"
                  className="btn-secondary flex items-center gap-2"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
