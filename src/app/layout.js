import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://smiletrust.com'),
  title: "Find Dental Clinics Near You | Compare Prices for Veneers, Crowns & Implants | SmileTrust",
  description: "Find and compare top-rated dental clinics worldwide for veneers, zirconia crowns, and dental implants. Save up to 85% with verified clinics in Turkey, Hungary, Poland & Croatia. Free AI smile preview, independent reviews, GDPR-compliant.",
  keywords: [
    "find dental clinics near me",
    "best dental clinics",
    "dental clinic finder",
    "compare dental clinic prices",
    "affordable veneers UK",
    "cheap veneers Turkey",
    "dental veneers cost UK",
    "zirconia crowns price UK",
    "dental tourism Europe",
    "dental clinics in Turkey",
    "dental clinics in Hungary", 
    "dental clinics in Poland",
    "dental clinics in Croatia",
    "Turkey dental prices UK",
    "Hungary dental tourism",
    "affordable dental implants UK",
    "cosmetic dentistry abroad",
    "dental treatment overseas",
    "smile makeover cost UK",
    "veneer dentist",
    "dental clinic reviews",
    "verified dental clinics",
    "GDPR compliant dental",
    "safe dental tourism",
    "dental vacation packages",
    "Istanbul dental clinics",
    "Antalya dentist",
    "Budapest dental care",
    "Turkey dental tourism UK"
  ],
  authors: [{ name: "SmileTrust Team" }],
  creator: "SmileTrust",
  publisher: "SmileTrust",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://smiletrust.com',
    siteName: 'SmileTrust',
    title: 'SmileTrust - Professional AI Smile Visualization Technology',
    description: 'Discover your smile transformation potential with advanced AI technology. Find verified dental professionals worldwide.',
    images: [
      {
        url: '/images/og-image-smile-visualization.jpg',
        width: 1200,
        height: 630,
        alt: 'SmileTrust AI Smile Visualization Technology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmileTrust - Professional AI Smile Visualization',
    description: 'Discover your smile transformation potential with advanced AI technology.',
    images: ['/images/twitter-card-smile-visualization.jpg'],
    creator: '@SmileTrust',
  },
  alternates: {
    canonical: 'https://smiletrust.com',
  },
  category: 'Healthcare',
  classification: 'Dental Technology',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="canonical" href="https://smiletrust.com" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "SmileTrust",
              "description": "Professional AI smile visualization technology and verified dental clinic finder",
              "url": "https://smiletrust.com",
              "telephone": "+1-800-SMILE-TRUST",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "medicalSpecialty": ["Cosmetic Dentistry", "Oral Surgery", "Prosthodontics"],
              "serviceType": "Dental Technology",
              "offers": [
                {
                  "@type": "MedicalProcedure",
                  "name": "AI Smile Visualization",
                  "description": "Advanced AI technology for smile transformation previews"
                },
                {
                  "@type": "MedicalProcedure", 
                  "name": "Veneer Procedures",
                  "description": "Porcelain veneers for cosmetic dental enhancement"
                },
                {
                  "@type": "MedicalProcedure",
                  "name": "Zirconia Crowns",
                  "description": "High-strength zirconia dental crowns"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "1250"
              }
            })
          }}
        />
        
        {/* Google Analytics - Replace with your GA4 Measurement ID */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: 'SmileTrust - Professional AI Smile Visualization Technology',
                    page_location: 'https://smiletrust.com'
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
