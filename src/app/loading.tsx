export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1A1A1A]">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
        <p className="text-gray-300 font-medium">Loading...</p>
      </div>
    </div>
  );
}
