/* eslint-disable @next/next/no-img-element */
import { Camera } from "lucide-react";

export default function ResultDisplay({
  originalImage,
  generatedImage,
  onReset,
}) {
  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2">
            Before
          </h3>
          <img
            src={URL.createObjectURL(originalImage)}
            alt="Original smile"
            className="rounded-lg shadow-md aspect-square object-cover"
          />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">
            After ✨
          </h3>
          <img
            src={generatedImage}
            alt="AI generated smile"
            className="rounded-lg shadow-md aspect-square object-cover"
          />
        </div>
      </div>
      <button
        onClick={onReset}
        className="bg-gray-200 text-gray-700 dark:bg-slate-700 dark:text-gray-200 font-bold py-3 px-6 rounded-full hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors flex items-center gap-2"
      >
        <Camera size={20} /> Upload Another Photo
      </button>
    </div>
  );
}
