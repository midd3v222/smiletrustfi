import BeforeAfterComparison from "./BeforeAfterComparison";
import { Camera } from "lucide-react";

export default function ResultDisplay({
  originalImage,
  generatedImage,
  onReset,
}) {
  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="w-full max-w-md">
        <BeforeAfterComparison
          beforeImage={URL.createObjectURL(originalImage)}
          afterImage={generatedImage}
          beforeAlt="Original smile"
          afterAlt="AI generated smile"
          className="aspect-square"
        />
      </div>
      <button
        onClick={onReset}
        className="bg-gray-200 text-gray-700 dark:bg-slate-700 dark:text-gray-200 btn-text py-3 px-6 rounded-full hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors flex items-center gap-2"
      >
        <Camera size={20} /> Upload Another Photo
      </button>
    </div>
  );
}
