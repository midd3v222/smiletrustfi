"use client";

import Link from "next/link";
import { ArrowLeft, Shield, Star, Users, Clock, Award, ChevronRight, Zap } from "lucide-react";
import { PageViewTracker } from "@/components/PageViewTracker";
import { TreatmentTracker } from "@/components/TreatmentTracker";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import { useState } from "react";


const treatments = [
  {
    id: "veneers",
    title: "Dental Veneers",
    description: "Thin ceramic shells that cover the front surface of teeth to improve appearance",
    procedure: "Minimally invasive procedure where custom-made ceramic shells are bonded to teeth",
    duration: "2-3 visits over 2-3 weeks",
    recoveryTime: "2-3 days for sensitivity",
    durability: "10-15 years with proper care",
    costRange: {
      usd: "$650-$1,300 per tooth",
      gbp: "£500-£1,000 per tooth",
      eur: "€600-€1,200 per tooth",
      turkey: "£250 per tooth (Turkey)"
    },
    bestFor: ["Discolored teeth", "Slight misalignment", "Gaps between teeth", "Worn teeth"],
    category: "Cosmetic Enhancement",
    icon: Star,
    color: "blue"
  },
  {
    id: "zirconia-crowns",
    title: "Zirconia Crowns",
    description: "Advanced ceramic crowns offering durability and natural appearance",
    procedure: "Complete tooth restoration with high-strength zirconia material",
    duration: "2 visits over 1-2 weeks",
    recoveryTime: "Immediate functionality",
    durability: "15-20 years",
    costRange: {
      usd: "$650-$1,300 per crown",
      gbp: "£500-£1,000 per crown",
      eur: "€600-€1,200 per crown",
      turkey: "£170-£250 per crown (Turkey)"
    },
    bestFor: ["Broken teeth", "Severe decay", "Root canal treatment", "Large fillings"],
    category: "Restoration",
    icon: Shield,
    color: "green"
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    description: "Permanent tooth replacement solution that preserves jawbone and restores natural function",
    procedure: "Surgical placement of titanium post into jawbone, followed by crown attachment after osseointegration",
    duration: "3-6 months (including healing)",
    recoveryTime: "1-2 weeks initial, 3-6 months osseointegration",
    durability: "Lifetime with proper care (95%+ success rate)",
    costRange: {
      usd: "$3,000-$8,000 per implant",
      gbp: "£2,500-£6,500 per implant",
      eur: "€2,800-€7,200 per implant",
      turkey: "£300-£1,000 per implant (Turkey)"
    },
    bestFor: ["Single missing tooth", "Multiple missing teeth", "Jawbone preservation", "Long-term solution"],
    category: "Permanent Solution",
    icon: Zap,
    color: "indigo"
  }
];

const TreatmentListItem = ({ treatment }) => {
  const IconComponent = treatment.icon;
  
  return (
    <Link href={`/treatments/${treatment.id}`}>
      <div className="w-full p-4 rounded-lg text-left transition-all duration-200 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 cursor-pointer">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 bg-${treatment.color}-100 dark:bg-${treatment.color}-900/20 rounded-lg flex items-center justify-center flex-shrink-0`}>
          <IconComponent size={20} className={`text-${treatment.color}-600 dark:text-${treatment.color}-400`} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1">{treatment.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-xs line-clamp-2">{treatment.description}</p>
        </div>
        <ChevronRight size={16} className="text-gray-400 transition-transform" />
      </div>
      </div>
    </Link>
  );
};

const ZirconiaCrownsArticle = () => {
  return (
    <article className="h-full overflow-y-auto">
      <TreatmentTracker treatmentId="zirconia-crowns" />
      <div className="glass-elevated p-6 lg:p-8 rounded-2xl shadow-xl border border-gray-200/50">
        <header className="flex items-start gap-4 mb-8">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Shield size={32} className="text-green-600 dark:text-green-400" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Zirconia Crowns</h2>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-sm font-medium rounded-full">
                Restoration
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Advanced ceramic crowns offering durability and natural appearance
            </p>
          </div>
        </header>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">What Are Zirconia Crowns? 5 Benefits for a Strong and Natural Smile</h3>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mb-6">
            <p className="text-blue-800 dark:text-blue-200 text-sm font-medium mb-2">Meta Description:</p>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              Need a dental crown? Discover why zirconia crowns are a top choice for strength, durability, and aesthetics. Compare zirconia vs. PFM and other materials.
            </p>
          </div>

          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Introduction: The Modern Choice for Restoring Your Teeth</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            If you have a severely damaged, decayed, or cracked tooth, a dental crown is often the best way to restore its shape, size, and strength. For years, the choice of materials was limited, often forcing a compromise between strength and aesthetics. Today, modern dentistry has a solution that offers the best of both worlds: the zirconia crown.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Zirconia has revolutionized restorative dentistry. It's a high-tech ceramic that provides the power to withstand heavy chewing forces while offering a natural, metal-free appearance.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            So, when your dentist recommends a crown, why is zirconia a name you should know? Here are the five key benefits of choosing this advanced material.
          </p>

          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">What is Zirconia? The "Ceramic Steel" of Dentistry</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Zirconia is short for zirconium dioxide, a white powdered ceramic that is renowned for its incredible strength and biocompatibility. Its properties are so reliable that it's used in medical applications like artificial joints. In dentistry, it's milled from a solid block using advanced CAD/CAM (computer-aided design/manufacturing) technology to create a perfectly fitting and incredibly durable crown.
          </p>

          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">5 Key Benefits of Choosing Zirconia Crowns</h4>

          <div className="space-y-6 mb-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h5 className="text-md font-semibold text-gray-900 dark:text-gray-100 mb-2">1. Exceptional Strength and Durability</h5>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                Zirconia is the strongest of all ceramic crown materials. It is significantly more durable than porcelain and can withstand the immense bite forces of the back teeth (molars) without fracturing.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded border border-green-200 dark:border-green-800">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Benefit:</strong> Zirconia crowns are highly resistant to chipping, cracking, and wear, making them an excellent long-term investment for any tooth in your mouth.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h5 className="text-md font-semibold text-gray-900 dark:text-gray-100 mb-2">2. Superior Aesthetics and a Natural Look</h5>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                One of the biggest drawbacks of traditional Porcelain-Fused-to-Metal (PFM) crowns is the ugly dark grey line that can appear at the gumline. Zirconia eliminates this problem entirely.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded border border-green-200 dark:border-green-800">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Benefit:</strong> Being 100% metal-free, zirconia crowns offer a much more natural appearance. Modern translucent zirconia can be color-matched to your existing teeth, mimicking the light-reflecting properties of natural enamel for a seamless blend.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h5 className="text-md font-semibold text-gray-900 dark:text-gray-100 mb-2">3. 100% Biocompatible and Hypoallergenic</h5>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                Your body's health is paramount. Zirconia is highly biocompatible, meaning it is extremely unlikely to cause any inflammation or allergic reaction in the surrounding gum tissue.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded border border-green-200 dark:border-green-800">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Benefit:</strong> For patients with metal allergies or sensitivities, zirconia is the safest and most tissue-friendly option available, promoting healthy gums around the crowned tooth.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h5 className="text-md font-semibold text-gray-900 dark:text-gray-100 mb-2">4. A Better, More Conservative Fit</h5>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                Because of its incredible strength, a zirconia crown can be milled to be much thinner than other crowns. This has a direct benefit for your natural tooth.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded border border-green-200 dark:border-green-800">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Benefit:</strong> A thinner crown means your dentist needs to remove less of your natural tooth structure during the preparation phase. Preserving more of your healthy tooth is always the primary goal in dentistry.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h5 className="text-md font-semibold text-gray-900 dark:text-gray-100 mb-2">5. Long-Term Resistance to Stains</h5>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                Unlike some other dental materials, zirconia is a non-porous ceramic.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded border border-green-200 dark:border-green-800">
                <p className="text-green-800 dark:text-green-200 text-sm">
                  <strong>Benefit:</strong> It is highly resistant to staining from coffee, tea, wine, and nicotine, helping your restored tooth maintain its beautiful white shade for years to come.
                </p>
              </div>
            </div>
          </div>

          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">How Zirconia Compares to Other Materials</h4>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-900 dark:text-gray-100">Feature</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-green-700 dark:text-green-300">Zirconia Crowns</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-900 dark:text-gray-100">PFM (Metal-Based) Crowns</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-900 dark:text-gray-100">E-Max (All-Ceramic) Crowns</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium text-gray-900 dark:text-gray-100">Strength</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-700 dark:text-green-300 font-semibold">Highest</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Very High</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Good</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium text-gray-900 dark:text-gray-100">Aesthetics</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-700 dark:text-green-300 font-semibold">Very Good to Excellent</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Good (but with metal line risk)</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Excellent (most translucent)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium text-gray-900 dark:text-gray-100">Biocompatibility</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-700 dark:text-green-300 font-semibold">Excellent (metal-free)</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Fair (risk of metal allergy)</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Excellent (metal-free)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium text-gray-900 dark:text-gray-100">Ideal Use</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-green-700 dark:text-green-300 font-semibold">Any tooth, especially molars</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Back teeth</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Front teeth</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Conclusion: The All-Around Winner for Modern Restorations</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Zirconia crowns represent a perfect synergy of strength and beauty. They offer the durability to handle the toughest jobs in the back of your mouth and the aesthetics to blend flawlessly with the teeth in your smile line.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            When you need a crown, you no longer have to compromise. By choosing zirconia, you are opting for a modern, metal-free, and highly durable solution that is built to look great and last for many years.
          </p>

          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800 mb-6">
            <h4 className="font-semibold text-green-900 dark:text-green-100 text-sm mb-3">Cost Range:</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-green-800 dark:text-green-200 text-sm">USD:</span>
                <span className="text-green-800 dark:text-green-200 text-sm font-medium">$650-$1,300 per crown</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-green-800 dark:text-green-200 text-sm">GBP:</span>
                <span className="text-green-800 dark:text-green-200 text-sm font-medium">£500-£1,000 per crown</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-green-800 dark:text-green-200 text-sm">EUR:</span>
                <span className="text-green-800 dark:text-green-200 text-sm font-medium">€600-€1,200 per crown</span>
              </div>
              <div className="flex justify-between items-center border-t border-green-200 dark:border-green-800 pt-2 mt-2">
                <span className="text-green-700 dark:text-green-300 text-sm font-semibold">Turkey Zirconia:</span>
                <span className="text-green-700 dark:text-green-300 text-sm font-semibold">£170-£250 per crown</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-green-700 dark:text-green-300 text-sm">Turkey E-max:</span>
                <span className="text-green-700 dark:text-green-300 text-sm">£240-£320 per crown</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-green-700 dark:text-green-300 text-sm">Turkey Porcelain:</span>
                <span className="text-green-700 dark:text-green-300 text-sm">£120-£200 per crown</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">Need to restore a damaged tooth? A strong, beautiful smile is within reach.</h4>
            <p className="text-green-800 dark:text-green-200 mb-4">
              Find out if a zirconia crown is the right solution for you. Let us help you find a top-rated clinic that uses the latest in dental technology.
            </p>
            <div className="flex justify-center">
              <Link 
                href="/"
                className="btn-primary text-center px-6 py-3 text-sm font-medium"
              >
                View Our Recommended Dental Clinics
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const VeneersArticle = () => {
  return (
    <article className="h-full overflow-y-auto">
      <TreatmentTracker treatmentId="veneers" />
      <div className="glass-elevated p-6 lg:p-8 rounded-2xl shadow-xl border border-gray-200/50">
        <header className="flex items-start gap-4 mb-8">
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Star size={32} className="text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Dental Veneers</h2>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                Cosmetic Enhancement
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Thin ceramic shells that cover the front surface of teeth to improve appearance
            </p>
          </div>
        </header>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">What Are Veneers? A Complete Guide to Transforming Your Smile</h3>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mb-6">
            <p className="text-blue-800 dark:text-blue-200 text-sm font-medium mb-2">Meta Description:</p>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              Thinking about veneers? Learn what they are, the smile problems they solve (stains, gaps, chips), the types available, and the procedure.
            </p>
          </div>

          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Introduction: The Path to Your Perfect Smile</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            For many people, a radiant, confident smile feels like a dream. Stains from coffee or tea, a small chip from an accident, or natural gaps and misalignments can make you feel self-conscious. In the world of cosmetic dentistry, few treatments are as effective and transformative as dental veneers.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Often called the "secret" behind the flawless smiles of celebrities, veneers are now more accessible than ever. But what exactly are they, and could they be the right solution for you?
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            This comprehensive guide will walk you through everything you need to know about dental veneers, from the problems they solve to the procedure itself.
          </p>

          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">What Exactly Are Dental Veneers?</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Think of a dental veneer as a very thin, custom-made shell that is bonded to the front surface of a tooth to improve its appearance. They are meticulously designed to match the shape and color of your surrounding teeth, creating a completely natural look.
          </p>

          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">What Smile Problems Can Veneers Fix?</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Veneers are incredibly versatile and can correct a wide range of cosmetic imperfections, often at the same time. They are an ideal solution for:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong className="text-gray-900 dark:text-gray-100">Severe Stains & Discoloration:</strong>
                <span className="text-gray-700 dark:text-gray-300"> For deep stains that don't respond to teeth whitening (like those from tetracycline medication or excessive fluoride), veneers can provide a permanently white and bright smile.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong className="text-gray-900 dark:text-gray-100">Chipped, Worn, or Broken Teeth:</strong>
                <span className="text-gray-700 dark:text-gray-300"> Veneers can instantly cover up minor chips and cracks, restoring a tooth to its original, healthy appearance.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong className="text-gray-900 dark:text-gray-100">Gaps & Minor Spacing Issues:</strong>
                <span className="text-gray-700 dark:text-gray-300"> Veneers can be crafted to be slightly wider than the natural teeth, effectively closing small gaps (diastemas) without the need for braces.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong className="text-gray-900 dark:text-gray-100">Irregularly Shaped or Slightly Misaligned Teeth:</strong>
                <span className="text-gray-700 dark:text-gray-300"> If you have teeth that are misshapen, too small, or slightly crooked, veneers can create a straight, uniform, and symmetrical smile.</span>
              </div>
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">The Veneers Procedure: A Step-by-Step Overview</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Getting veneers is a precise and straightforward process.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h5 className="text-md font-semibold text-gray-900 dark:text-gray-100 mb-2">1. Consultation & Smile Design</h5>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                You will discuss your goals with your dentist. They will examine your teeth and may take X-rays and impressions. This is where you design the shape, size, and shade of your new smile.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h5 className="text-md font-semibold text-gray-900 dark:text-gray-100 mb-2">2. Tooth Preparation</h5>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                The dentist removes a very thin layer of enamel (about 0.5mm) from the front of the tooth. This makes room for the veneer so it sits flush with your other teeth.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h5 className="text-md font-semibold text-gray-900 dark:text-gray-100 mb-2">3. Impressions</h5>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                An impression or digital scan of your prepared teeth is taken and sent to a dental lab where your custom veneers will be fabricated. You will be fitted with temporary veneers to wear in the meantime.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h5 className="text-md font-semibold text-gray-900 dark:text-gray-100 mb-2">4. Final Bonding</h5>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Once your permanent veneers are ready (usually in 1-2 weeks), you'll return to the clinic. The dentist will check the fit and color before permanently bonding them to your teeth with a special cement and curing light.
              </p>
            </div>
          </div>

          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Conclusion: A Lasting Investment in Your Confidence</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Dental veneers are more than just a cosmetic fix; they are a durable and effective way to achieve the smile you've always wanted. Whether you're looking to correct a single flawed tooth or undergo a complete smile transformation, veneers offer a predictable and beautiful result.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            By discussing your goals with a qualified cosmetic dentist, you can decide if veneers are the right investment to restore your smile and boost your confidence for years to come.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mb-6">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 text-sm mb-3">Cost Range:</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-blue-800 dark:text-blue-200 text-sm">USD:</span>
                <span className="text-blue-800 dark:text-blue-200 text-sm font-medium">$650-$1,300 per tooth</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-800 dark:text-blue-200 text-sm">GBP:</span>
                <span className="text-blue-800 dark:text-blue-200 text-sm font-medium">£500-£1,000 per tooth</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-800 dark:text-blue-200 text-sm">EUR:</span>
                <span className="text-blue-800 dark:text-blue-200 text-sm font-medium">€600-€1,200 per tooth</span>
              </div>
              <div className="flex justify-between items-center border-t border-blue-200 dark:border-blue-800 pt-2 mt-2">
                <span className="text-green-700 dark:text-green-300 text-sm font-semibold">Turkey:</span>
                <span className="text-green-700 dark:text-green-300 text-sm font-semibold">£250 per tooth</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">Ready to design your new smile?</h4>
            <p className="text-blue-800 dark:text-blue-200 mb-4">
              A consultation is the first step towards your smile transformation. Let us connect you with expert cosmetic dentists who can assess your needs and show you what's possible.
            </p>
            <div className="flex justify-center">
              <Link 
                href="/"
                className="btn-primary text-center px-6 py-3 text-sm font-medium"
              >
                Explore Our Partner Dental Clinics
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const DentalImplantsArticle = () => {
  return (
    <article className="h-full overflow-y-auto">
      <TreatmentTracker treatmentId="dental-implants" />
      <div className="glass-elevated p-6 lg:p-8 rounded-2xl shadow-xl border border-gray-200/50">
        <header className="flex items-start gap-4 mb-8">
          <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/20 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Zap size={32} className="text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Dental Implants</h2>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 text-sm font-medium rounded-full">
                Permanent Solution
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Permanent tooth replacement solution that preserves jawbone and restores natural function
            </p>
          </div>
        </header>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Why Choose Dental Implants? A Guide to the Best Long-Term Solution for Missing Teeth</h3>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mb-6">
            <p className="text-blue-800 dark:text-blue-200 text-sm font-medium mb-2">Meta Description:</p>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              Comparing dental implants vs. dentures or bridges? Understand the key benefits of implants, from jawbone preservation to lifetime durability. Make an informed choice for your smile.
            </p>
          </div>

          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Introduction: More Than Just Filling a Gap</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Losing a tooth can affect everything from your confidence to your ability to enjoy your favorite foods. When it comes to replacing a missing tooth, you have several options, but they are not all created equal. For decades, dentures and bridges have been the go-to solutions. Today, however, there is a clear gold standard recommended by dental professionals worldwide: the dental implant.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Choosing a tooth replacement is a major decision—an investment in your health, function, and future smile. So, why do dentists and patients consistently choose implants?
          </p>

          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">First, What Are the Options? A Quick Overview</h4>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong className="text-gray-900 dark:text-gray-100">Dentures:</strong>
                <span className="text-gray-700 dark:text-gray-300"> A removable appliance that replaces a full or partial set of teeth. They rest on the gums and are held in place by suction or adhesives.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong className="text-gray-900 dark:text-gray-100">Dental Bridges:</strong>
                <span className="text-gray-700 dark:text-gray-300"> A fixed solution that "bridges" a gap by anchoring a false tooth (a pontic) to the healthy teeth on either side. This requires shaping down the adjacent teeth to fit crowns over them.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <strong className="text-gray-900 dark:text-gray-100">Dental Implants:</strong>
                <span className="text-gray-700 dark:text-gray-300"> A permanent solution that replaces the entire tooth structure, from root to crown. A small titanium post is surgically placed into the jawbone, acting as an artificial root. A crown is then attached to this post.</span>
              </div>
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">5 Key Benefits of Choosing Dental Implants</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            While dentures and bridges can fill a gap, dental implants offer profound advantages that protect and enhance your long-term oral health.
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h5 className="text-md font-semibold text-gray-900 dark:text-gray-100 mb-2">1. They Preserve Your Jawbone and Facial Structure</h5>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                This is arguably the most important and least-known benefit. When you lose a tooth, the jawbone in that area is no longer stimulated by the root. Your body begins to resorb the bone, leading to a sunken, aged appearance over time.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>Dental Implants:</strong> The titanium post fuses directly with your jawbone in a process called osseointegration. This provides the stimulation needed to keep the bone strong and healthy, preserving your natural facial structure.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 font-bold">✗</span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>Dentures & Bridges:</strong> These options only sit on top of the gums. They do nothing to stop underlying bone loss.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h5 className="text-md font-semibold text-gray-900 dark:text-gray-100 mb-2">2. Unmatched Longevity and Durability</h5>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                A dental implant is designed to be a permanent solution.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>Dental Implants:</strong> With proper care (the same brushing and flossing you do for natural teeth), an implant can last a lifetime. The success rate for modern dental implants is consistently reported to be above 95%.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 font-bold">✗</span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>Dentures & Bridges:</strong> These typically need to be replaced every 5 to 15 years due to wear and tear or changes in the shape of your jaw. These recurring replacement costs can add up significantly over time.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h5 className="text-md font-semibold text-gray-900 dark:text-gray-100 mb-2">3. They Don't Harm Your Healthy Teeth</h5>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                Your healthy teeth should be left alone. A dental implant is a standalone solution that doesn't rely on other teeth for support.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>Dental Implants:</strong> An implant is placed directly into the gap without affecting any neighboring teeth. This preserves the integrity of your healthy, natural tooth structure.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 font-bold">✗</span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>Dental Bridges:</strong> To place a bridge, the dentist must permanently grind down two often perfectly healthy teeth to fit the anchoring crowns. This makes these teeth more vulnerable to future decay and problems.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h5 className="text-md font-semibold text-gray-900 dark:text-gray-100 mb-2">4. They Feel and Function Just Like Natural Teeth</h5>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                Because an implant is anchored securely in your jawbone, it offers unparalleled stability and comfort.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>Dental Implants:</strong> You can eat whatever you want with confidence—no slipping, clicking, or embarrassing moments. The chewing power is restored to that of a natural tooth, and because it doesn't cover the palate, your sense of taste is unaffected.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 font-bold">✗</span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>Dentures:</strong> Often require adhesives, can slip while talking or eating, and may require you to avoid certain hard or sticky foods.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h5 className="text-md font-semibold text-gray-900 dark:text-gray-100 mb-2">5. Superior Aesthetics and Easier Maintenance</h5>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                Dental implants are the most natural-looking replacement option available.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>Dental Implants:</strong> Each implant crown is custom-crafted to match the color, size, and shape of your surrounding teeth, making it virtually indistinguishable from a natural tooth. You simply brush and floss it as you would any other tooth.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 font-bold">✗</span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>Dentures & Bridges:</strong> While modern options look good, they can sometimes appear bulky. Dentures require special cleaning and removal at night, and cleaning under a bridge can be difficult, creating potential hygiene issues.</span>
                </li>
              </ul>
            </div>
          </div>

          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">At a Glance: Implants vs. Bridges vs. Dentures</h4>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-900 dark:text-gray-100">Feature</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-indigo-700 dark:text-indigo-300">Dental Implants</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-900 dark:text-gray-100">Dental Bridges</th>
                  <th className="border border-gray-300 dark:border-gray-600 p-3 text-left font-semibold text-gray-900 dark:text-gray-100">Dentures</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium text-gray-900 dark:text-gray-100">Longevity</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-indigo-700 dark:text-indigo-300 font-semibold">Lifetime Potential</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">5-15 Years</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">5-10 Years</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium text-gray-900 dark:text-gray-100">Jawbone Health</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-indigo-700 dark:text-indigo-300 font-semibold">Preserves Bone</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">No Protection</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">No Protection</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium text-gray-900 dark:text-gray-100">Impact on Other Teeth</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-indigo-700 dark:text-indigo-300 font-semibold">None</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Requires grinding healthy teeth</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Can cause wear on adjacent teeth</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium text-gray-900 dark:text-gray-100">Functionality</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-indigo-700 dark:text-indigo-300 font-semibold">Like a Natural Tooth</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Good</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Reduced Chewing Power</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium text-gray-900 dark:text-gray-100">Maintenance</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-indigo-700 dark:text-indigo-300 font-semibold">Normal Brushing/Flossing</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Special cleaning required</td>
                  <td className="border border-gray-300 dark:border-gray-600 p-3 text-gray-700 dark:text-gray-300">Daily removal and cleaning</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Conclusion: An Investment in Your Future Health</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            While traditional dentures and bridges may seem appealing due to a lower initial cost, dental implants represent a superior long-term investment. They are the only solution that addresses both the cosmetic issue of the missing tooth and the critical underlying issue of bone health.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            By protecting your jaw, preserving your healthy teeth, and providing a lifetime of reliable function, dental implants are not just a replacement—they are a restoration of your natural smile.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 mb-6">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 text-sm mb-3">Cost Range:</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-blue-800 dark:text-blue-200 text-sm">USD:</span>
                <span className="text-blue-800 dark:text-blue-200 text-sm font-medium">$3,000-$8,000 per implant</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-800 dark:text-blue-200 text-sm">GBP:</span>
                <span className="text-blue-800 dark:text-blue-200 text-sm font-medium">£2,500-£6,500 per implant</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-blue-800 dark:text-blue-200 text-sm">EUR:</span>
                <span className="text-blue-800 dark:text-blue-200 text-sm font-medium">€2,800-€7,200 per implant</span>
              </div>
              <div className="flex justify-between items-center border-t border-blue-200 dark:border-blue-800 pt-2 mt-2">
                <span className="text-green-700 dark:text-green-300 text-sm font-semibold">Turkey:</span>
                <span className="text-green-700 dark:text-green-300 text-sm font-semibold">£300-£1,000 per implant</span>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800">
            <h4 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-4">Are you ready to learn if dental implants are the right solution for you?</h4>
            <p className="text-indigo-800 dark:text-indigo-200 mb-4">
              The journey to a restored smile starts with expert advice. Let us connect you with leading local and international clinics that can provide a personalized assessment.
            </p>
            <div className="flex justify-center">
              <Link 
                href="/"
                className="btn-primary text-center px-6 py-3 text-sm font-medium"
              >
                Explore Our Vetted Dental Clinics
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const TreatmentArticle = ({ treatment }) => {
  if (!treatment) {
    return (
      <div className="flex items-center justify-center h-full text-center">
        <div className="text-gray-500 dark:text-gray-400">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
            <Star size={24} className="text-gray-400" />
          </div>
          <h3 className="text-lg font-medium mb-2">Select a Treatment</h3>
          <p className="text-sm">Choose a treatment from the list to view detailed information</p>
        </div>
      </div>
    );
  }

  // Render specialized article for dental implants
  if (treatment.id === "dental-implants") {
    return <DentalImplantsArticle />;
  }

  // Render specialized article for zirconia crowns
  if (treatment.id === "zirconia-crowns") {
    return <ZirconiaCrownsArticle />;
  }

  // Render specialized article for veneers
  if (treatment.id === "veneers") {
    return <VeneersArticle />;
  }

  const IconComponent = treatment.icon;
  
  return (
    <article className="h-full overflow-y-auto">
      <TreatmentTracker treatmentId={treatment.id} />
      <div className="glass-elevated p-6 lg:p-8 rounded-2xl shadow-xl border border-gray-200/50">
        <header className="flex items-start gap-4 mb-6">
          <div className={`w-16 h-16 bg-${treatment.color}-100 dark:bg-${treatment.color}-900/20 rounded-2xl flex items-center justify-center flex-shrink-0`}>
            <IconComponent size={32} className={`text-${treatment.color}-600 dark:text-${treatment.color}-400`} />
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">{treatment.title}</h2>
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-3 py-1 bg-${treatment.color}-100 dark:bg-${treatment.color}-900/20 text-${treatment.color}-700 dark:text-${treatment.color}-300 text-sm font-medium rounded-full`}>
                {treatment.category}
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{treatment.description}</p>
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Procedure Details</h3>
              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">{treatment.procedure}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={16} className="text-gray-500 dark:text-gray-400" />
                  <span className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Duration</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{treatment.duration}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Star size={16} className="text-gray-500 dark:text-gray-400" />
                  <span className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Recovery</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{treatment.recoveryTime}</p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Shield size={16} className="text-gray-500 dark:text-gray-400" />
                <span className="font-semibold text-gray-900 dark:text-gray-100 text-sm">Durability</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{treatment.durability}</p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 text-sm mb-3">Cost Range:</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-blue-800 dark:text-blue-200 text-sm">USD:</span>
                  <span className="text-blue-800 dark:text-blue-200 text-sm font-medium">{treatment.costRange.usd}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-800 dark:text-blue-200 text-sm">GBP:</span>
                  <span className="text-blue-800 dark:text-blue-200 text-sm font-medium">{treatment.costRange.gbp}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-800 dark:text-blue-200 text-sm">EUR:</span>
                  <span className="text-blue-800 dark:text-blue-200 text-sm font-medium">{treatment.costRange.eur}</span>
                </div>
                <div className="flex justify-between items-center border-t border-blue-200 dark:border-blue-800 pt-2 mt-2">
                  <span className="text-green-700 dark:text-green-300 text-sm font-semibold">Turkey:</span>
                  <span className="text-green-700 dark:text-green-300 text-sm font-semibold">{treatment.costRange.turkey}</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Ideal For</h3>
            <ul className="space-y-3">
              {treatment.bestFor.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-base">
                  <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default function TreatmentsPage() {
  return (
    <>
      <PageViewTracker pageName="treatments" />
      <div className="min-h-screen w-full bg-grid-pattern relative">
        <Header />

        {/* Main Content */}
        <main className="container mx-auto px-4 sm:px-6 pt-24 pb-12">
          <Banner 
            title={
              <>
                Dental Treatment <span className="text-blue-600">Options & Procedures</span>
              </>
            }
            subtitle="Discover detailed information about cosmetic dental treatments including porcelain veneers, zirconia crowns, and complete smile makeovers. Learn about procedures, costs, recovery, and find the right treatment for your needs."
          />

          {/* Treatment Layout */}
          <div className="max-w-7xl mx-auto mt-8">
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Left Sidebar - Treatment List */}
              <div className="lg:col-span-1">
                <div className="glass-elevated p-6 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">Available Treatments</h2>
                  <div className="space-y-3">
                    {treatments.map((treatment) => (
                      <TreatmentListItem
                        key={treatment.id}
                        treatment={treatment}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Call to Action */}
              <div className="lg:col-span-2">
                <div className="glass-elevated p-6 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 h-[600px] lg:h-[700px] flex items-center justify-center">
                  <div className="text-center max-w-md">
                    <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Zap size={32} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                      Explore Treatment Details
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      Click on any treatment above to learn about procedures, costs, recovery time, and what to expect.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Detailed procedure information</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Cost breakdowns and comparisons</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Recovery timeline and care tips</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Before and after expectations</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Price Comparison Section */}
          <section className="mt-8 sm:mt-12 lg:mt-16 max-w-6xl mx-auto">
            <div className="glass-elevated p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6 text-center">
                International Price Comparison
              </h2>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 text-center mb-6 sm:mb-8 leading-relaxed px-2">
                Compare treatment costs across different countries and discover significant savings opportunities
                while maintaining high-quality care standards.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm sm:text-base">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-2 font-semibold text-gray-900 dark:text-gray-100">Treatment</th>
                      <th className="text-right py-3 px-2 font-semibold text-gray-900 dark:text-gray-100">UK/US</th>
                      <th className="text-right py-3 px-2 font-semibold text-gray-900 dark:text-gray-100">Turkey</th>
                      <th className="text-right py-3 px-2 font-semibold text-gray-900 dark:text-gray-100">Mexico</th>
                      <th className="text-right py-3 px-2 font-semibold text-gray-900 dark:text-gray-100">India</th>
                      <th className="text-right py-3 px-2 font-semibold text-green-700 dark:text-green-300">Savings</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    <tr>
                      <td className="py-3 px-2 font-medium text-gray-900 dark:text-gray-100">Dental Veneers (per tooth)</td>
                      <td className="py-3 px-2 text-right text-gray-700 dark:text-gray-300">£500-£1,000</td>
                      <td className="py-3 px-2 text-right text-green-700 dark:text-green-300 font-semibold">£250</td>
                      <td className="py-3 px-2 text-right text-gray-700 dark:text-gray-300">$500-$900</td>
                      <td className="py-3 px-2 text-right text-gray-700 dark:text-gray-300">$300-$600</td>
                      <td className="py-3 px-2 text-right text-green-700 dark:text-green-300 font-semibold">Up to 75%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-medium text-gray-900 dark:text-gray-100">Zirconia Crowns (per crown)</td>
                      <td className="py-3 px-2 text-right text-gray-700 dark:text-gray-300">£500-£1,000</td>
                      <td className="py-3 px-2 text-right text-green-700 dark:text-green-300 font-semibold">£170-£250</td>
                      <td className="py-3 px-2 text-right text-gray-700 dark:text-gray-300">$600-$1,200</td>
                      <td className="py-3 px-2 text-right text-gray-700 dark:text-gray-300">$400-$800</td>
                      <td className="py-3 px-2 text-right text-green-700 dark:text-green-300 font-semibold">Up to 75%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-medium text-gray-900 dark:text-gray-100">Dental Implants (per implant)</td>
                      <td className="py-3 px-2 text-right text-gray-700 dark:text-gray-300">£2,500-£6,500</td>
                      <td className="py-3 px-2 text-right text-green-700 dark:text-green-300 font-semibold">£300-£1,000</td>
                      <td className="py-3 px-2 text-right text-gray-700 dark:text-gray-300">$1,000-$2,500</td>
                      <td className="py-3 px-2 text-right text-gray-700 dark:text-gray-300">$600-$1,800</td>
                      <td className="py-3 px-2 text-right text-green-700 dark:text-green-300 font-semibold">Up to 85%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">Why Choose Medical Tourism?</h3>
                <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                  <li>• Significant cost savings without compromising quality</li>
                  <li>• Internationally certified dental professionals</li>
                  <li>• Modern facilities with advanced technology</li>
                  <li>• Comprehensive treatment packages including accommodation</li>
                  <li>• Opportunity to combine treatment with vacation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Additional Resources */}
          <section className="mt-8 sm:mt-12 lg:mt-16 max-w-4xl mx-auto">
            <div className="glass-elevated p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6 text-center">
                Find Certified Dental Professionals
              </h2>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 text-center mb-6 sm:mb-8 leading-relaxed px-2">
                Ready to start your smile transformation? Connect with trusted dental professionals who specialize in
                cosmetic dentistry and have extensive experience with these treatments.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link 
                  href="/"
                  className="btn-primary text-center px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base"
                >
                  View Dental Professionals
                </Link>
                <Link 
                  href="/destinations"
                  className="btn-secondary text-center px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base"
                >
                  Browse Popular Destinations
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
