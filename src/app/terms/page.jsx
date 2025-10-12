"use client";

import { FileText, Scale, AlertTriangle, Shield, Users, Globe } from "lucide-react";
import Header from "../../components/Header";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-grid-pattern">
      <Header showBackButton={true} />
      
      <main className="container mx-auto px-4 sm:px-6 pt-28 pb-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
              <FileText size={24} className="text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100">
              Terms of Service
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using SmileTrust services. By using our platform, you agree to be bound by these terms.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          {/* Last Updated */}
          <div className="glass-elevated p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50 mb-8">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Acceptance of Terms */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                <Scale size={16} className="text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0">
                Acceptance of Terms
              </h2>
            </div>
            
            <div className="glass-elevated p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                By accessing and using SmileTrust ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
                <li>You must be at least 18 years old to use our services</li>
                <li>You agree to use the service only for lawful purposes</li>
                <li>You are responsible for ensuring your use complies with local laws</li>
                <li>We reserve the right to modify these terms at any time</li>
              </ul>
            </div>
          </section>

          {/* Service Description */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                <Users size={16} className="text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0">
                Service Description
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="glass-elevated p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  AI Smile Visualization
                </h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
                  <li>Provides AI-generated previews of potential smile transformations</li>
                  <li>Results are for informational purposes only and not medical advice</li>
                  <li>Actual results may vary from AI previews</li>
                  <li>Service is provided "as is" without warranties</li>
                </ul>
              </div>

              <div className="glass-elevated p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Dental Clinic Finder
                </h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
                  <li>Provides information about verified dental clinics worldwide</li>
                  <li>Clinic information is provided for informational purposes</li>
                  <li>We do not endorse or guarantee any specific clinic</li>
                  <li>Users are responsible for verifying clinic credentials and services</li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center">
                <AlertTriangle size={16} className="text-yellow-600 dark:text-yellow-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0">
                User Responsibilities
              </h2>
            </div>
            
            <div className="glass-elevated p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Appropriate Use
                  </h3>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
                    <li>Upload only photos you own or have permission to use</li>
                    <li>Do not upload inappropriate, offensive, or illegal content</li>
                    <li>Respect intellectual property rights</li>
                    <li>Do not attempt to reverse engineer or hack our systems</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Medical Disclaimer
                  </h3>
                  <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
                    <li>Our AI previews are not medical advice or diagnoses</li>
                    <li>Always consult qualified dental professionals for treatment decisions</li>
                    <li>AI results are estimates and actual outcomes may differ</li>
                    <li>We are not responsible for treatment decisions based on our previews</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                <Shield size={16} className="text-red-600 dark:text-red-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0">
                Limitation of Liability
              </h2>
            </div>
            
            <div className="glass-elevated p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                SmileTrust provides its services on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied, regarding the use or results of our services.
              </p>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
                <li>We are not liable for any direct, indirect, incidental, or consequential damages</li>
                <li>We do not guarantee the accuracy of AI-generated previews</li>
                <li>We are not responsible for clinic quality, treatment outcomes, or patient satisfaction</li>
                <li>Users assume all risks associated with dental tourism and treatment decisions</li>
                <li>Our liability is limited to the maximum extent permitted by law</li>
              </ul>
            </div>
          </section>

          {/* International Use */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/20 rounded-full flex items-center justify-center">
                <Globe size={16} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0">
                International Use
              </h2>
            </div>
            
            <div className="glass-elevated p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                SmileTrust provides information about dental clinics worldwide. Users engaging in international dental tourism should:
              </p>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
                <li>Research destination countries and their healthcare regulations</li>
                <li>Obtain appropriate travel and medical insurance</li>
                <li>Verify clinic credentials and certifications independently</li>
                <li>Understand local laws and regulations</li>
                <li>Consider language barriers and cultural differences</li>
                <li>Plan for follow-up care and potential complications</li>
              </ul>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
                <FileText size={16} className="text-orange-600 dark:text-orange-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0">
                Intellectual Property
              </h2>
            </div>
            
            <div className="glass-elevated p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Our Content
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    All content on SmileTrust, including text, graphics, logos, and software, is the property of SmileTrust and is protected by copyright and other intellectual property laws.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    User Content
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    By uploading photos, you grant us a limited license to process them for our services. You retain ownership of your photos, and we do not claim any rights to them.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <AlertTriangle size={16} className="text-gray-600 dark:text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0">
                Termination
              </h2>
            </div>
            
            <div className="glass-elevated p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any reason, including breach of these terms.
              </p>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 list-disc list-inside">
                <li>Users may stop using our services at any time</li>
                <li>We may discontinue services with reasonable notice</li>
                <li>Termination does not affect liability or obligations incurred before termination</li>
                <li>Provisions that should survive termination will remain in effect</li>
              </ul>
            </div>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <div className="glass-elevated p-6 rounded-xl border border-gray-200/50 dark:border-gray-700/50">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Governing Law
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                These terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms or use of our services shall be resolved through appropriate legal channels.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <div className="glass-elevated p-8 rounded-xl border border-gray-200/50 dark:border-gray-700/50 text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Questions About These Terms?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                If you have any questions about these Terms of Service, please contact us for clarification.
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
