'use client';

import  LoadingBrackets from '@/components/ui/loading-brackets';

export default function ProfileLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
      <div className="text-center">
        <div className="scale-75">
          <LoadingBrackets />
        </div>
        <p className="mt-4 text-green-400">Loading profile...</p>
      </div>
    </div>
  );
}
