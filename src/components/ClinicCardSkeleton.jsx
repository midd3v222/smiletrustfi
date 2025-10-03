export default function ClinicCardSkeleton() {
  return (
    <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
      <div className="flex justify-between items-start gap-4 animate-pulse">
        <div className="w-3/4 h-6 bg-gray-300 rounded"></div>
        <div className="w-1/4 h-6 bg-gray-300 rounded-full"></div>
      </div>
      <div className="flex items-center gap-2 mt-3 animate-pulse">
        <div className="w-4 h-4 bg-gray-300 rounded"></div>
        <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}
