import { Camera } from "lucide-react";

export default function ResultDisplay({
  originalImage,
  generatedImage,
  onReset,
}) {
  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Before Image */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Before</h3>
            <div className="w-full rounded-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
              <img
                src={URL.createObjectURL(originalImage)}
                alt="Original smile"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
          {/* After Image */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">After</h3>
            <div className="w-full rounded-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
              <img
                src={generatedImage}
                alt="AI generated smile"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
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
