"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, Shield, Camera, MapPin, Globe } from "lucide-react";
import Header from "../../components/Header";

const faqData = [
  {
    category: "AI Smile Visualization",
    icon: Camera,
    questions: [
      {
        question: "How accurate is the AI smile visualization?",
        answer: "Our AI technology provides highly accurate smile previews based on advanced machine learning algorithms trained on thousands of professional dental transformations. While the preview gives you a realistic expectation, actual results may vary based on individual anatomy and treatment approach."
      },
      {
        question: "Is the AI preview free to use?",
        answer: "Yes, our AI smile visualization is completely free with no registration required. You can upload your photo and get an instant preview of potential smile transformations."
      },
      {
        question: "What types of treatments can I preview?",
        answer: "You can preview veneers, zirconia crowns, and full smile makeovers. Our AI analyzes your current smile and shows potential improvements for each treatment type."
      },
      {
        question: "How long does it take to generate a preview?",
        answer: "The AI generates your smile preview in just a few seconds after you upload your photo. The process is designed to be fast and efficient."
      },
      {
        question: "Can I trust the AI preview results?",
        answer: "Our AI provides realistic expectations based on professional dental standards. However, it's important to consult with qualified dental professionals for actual treatment planning and personalized advice."
      }
    ]
  },
  {
    category: "Dental Clinic Finder",
    icon: MapPin,
    questions: [
      {
        question: "How do you verify dental clinics?",
        answer: "We verify clinics through multiple criteria including professional certifications, patient reviews, treatment outcomes, and compliance with international dental standards. All listed clinics undergo rigorous verification processes."
      },
      {
        question: "Are the clinic prices accurate?",
        answer: "We provide estimated price ranges based on current market data and clinic information. Actual prices may vary based on individual treatment needs, complexity, and current promotions. Always confirm pricing directly with the clinic."
      },
      {
        question: "Can I book appointments through SmileTrust?",
        answer: "Currently, we provide clinic information and direct contact details. You'll need to contact clinics directly to book appointments. We're working on integrated booking features for the future."
      },
      {
        question: "Do you recommend specific clinics?",
        answer: "We provide unbiased information about verified clinics. Our recommendations are based on factors like ratings, reviews, location, and treatment specialization. The final choice is always yours."
      },
      {
        question: "What if I have a bad experience with a recommended clinic?",
        answer: "We take patient feedback seriously. If you have concerns about a clinic we've recommended, please contact us immediately. We continuously monitor clinic performance and update our recommendations accordingly."
      }
    ]
  },
  {
    category: "Privacy & Security",
    icon: Shield,
    questions: [
      {
        question: "Is my photo data secure?",
        answer: "Yes, we take privacy seriously. Your uploaded photos are processed securely and are not stored permanently on our servers. We use industry-standard encryption and follow GDPR compliance guidelines."
      },
      {
        question: "Do you share my information with clinics?",
        answer: "No, we do not share your personal information or photos with dental clinics without your explicit consent. Your privacy is protected throughout the process."
      },
      {
        question: "Can I delete my data?",
        answer: "Yes, you have full control over your data. Since we don't require registration, your photos are automatically processed and not stored. If you have any concerns about data handling, please contact us."
      },
      {
        question: "Are you GDPR compliant?",
        answer: "Yes, we are fully GDPR compliant. We follow European data protection regulations and implement appropriate security measures to protect user privacy and data."
      },
      {
        question: "What information do you collect?",
        answer: "We collect minimal information necessary for our services: uploaded photos for AI processing (temporarily), location data for clinic recommendations (with permission), and basic usage analytics. No personal identification is required."
      }
    ]
  },
  {
    category: "International Dental Tourism",
    icon: Globe,
    questions: [
      {
        question: "Which countries do you cover?",
        answer: "We focus on popular dental tourism destinations including Turkey, Hungary, Poland, Croatia, Mexico, Costa Rica, and Thailand. These countries offer high-quality dental care at competitive prices."
      },
      {
        question: "How much can I save on dental treatment abroad?",
        answer: "Savings vary by treatment and destination, but patients typically save 50-85% compared to domestic prices. For example, veneers that cost $1,000-1,500 per tooth domestically may cost $200-400 per tooth in popular destinations."
      },
      {
        question: "Is dental tourism safe?",
        answer: "Dental tourism can be safe when choosing verified, accredited clinics. We only recommend clinics that meet international standards and have proven track records. Always research thoroughly and consider travel insurance."
      },
      {
        question: "What about language barriers?",
        answer: "Many international clinics have English-speaking staff and translators available. We provide clinic contact information so you can inquire about language support before booking."
      },
      {
        question: "Should I get travel insurance for dental tourism?",
        answer: "Yes, we recommend comprehensive travel insurance that covers medical emergencies. This provides peace of mind and financial protection during your dental tourism trip."
      }
    ]
  }
];

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-between"
      >
        <span className="font-semibold text-gray-900 dark:text-gray-100 pr-4">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp size={20} className="text-gray-500 dark:text-gray-400 flex-shrink-0" />
        ) : (
          <ChevronDown size={20} className="text-gray-500 dark:text-gray-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen bg-grid-pattern">
      <Header showBackButton={true} />
      
      <main className="container mx-auto px-4 sm:px-6 pt-28 pb-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
              <HelpCircle size={24} className="text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100">
              Frequently Asked Questions
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our AI smile visualization technology, 
            dental clinic finder, and international dental tourism services.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto space-y-12">
          {faqData.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <section key={category.category} className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                    <IconComponent size={20} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {category.category}
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {category.questions.map((item, questionIndex) => (
                    <FAQItem
                      key={questionIndex}
                      question={item.question}
                      answer={item.answer}
                      isOpen={openItems[`${categoryIndex}-${questionIndex}`]}
                      onToggle={() => toggleItem(categoryIndex, questionIndex)}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="glass-elevated p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Can't find the answer you're looking for? We're here to help!
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
        </div>
      </main>
    </div>
  );
}
