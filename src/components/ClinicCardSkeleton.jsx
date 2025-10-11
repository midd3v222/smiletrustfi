export default function ClinicCardSkeleton() {
  return (
    <div className="relative rounded-2xl border border-gray-200 dark:border-gray-700 p-2">
      <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-xl shadow border border-gray-100 dark:border-gray-600">
        <div className="flex justify-between items-start gap-3 mb-3 animate-pulse">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 sm:gap-3 mb-1.5">
              <div className="w-3/4 h-5 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="w-16 h-5 bg-gray-300 dark:bg-gray-600 rounded-md"></div>
            </div>
          </div>
          <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1">
            <div className="w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
            <div className="w-20 h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </div>
        </div>
        
        <div className="flex items-center gap-3 sm:gap-4 mb-2.5 animate-pulse">
          <div className="w-24 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="w-28 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
        
        <div className="flex items-start gap-2.5 sm:gap-3 mb-2.5 animate-pulse">
          <div className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded mt-0.5"></div>
          <div className="w-2/3 h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
        
        <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700 animate-pulse">
          <div className="w-32 h-8 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
