import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function Banner({ title, subtitle, showBackButton = true }) {
  return (
    <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16">
      <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-blue-200 dark:border-blue-800">
        <Shield size={14} className="sm:w-4 sm:h-4" />
        Independent & Trustworthy
      </div>
      <h1 className="heading-hero text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">
        {title}
      </h1>
      <p className="text-body-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto px-2">
        {subtitle}
      </p>
    </div>
  );
}
