export default function LoadingSpinner({ text = "Our AI is working its magic..." }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-600 font-medium">{text}</p>
    </div>
  );
}