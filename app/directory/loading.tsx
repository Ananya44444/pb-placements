'use client';
import LoadingBrackets from '@/components/ui/loading-brackets';

export default function DirectoryLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
      <div className="text-center">
        <LoadingBrackets />
        <p className="mt-4 text-green-400">Loading directory...</p>
      </div>
    </div>
  );
}
