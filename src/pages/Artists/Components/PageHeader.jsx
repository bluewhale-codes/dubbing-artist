import { Star } from 'lucide-react';

export function PageHeader() {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-3">Voice Over</h1>
      <p className="text-lg text-gray-600 mb-6">
        Find the perfect voice for your audio or video in any style, language, or accent.
      </p>
      
      {/* Rating Summary Bar */}
      <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-100">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900">5.0/5</span>
          <span className="text-gray-600">
            Average rating based on approx. <span className="font-semibold">1.5M reviews</span> in this category
          </span>
        </div>
      </div>
    </div>
  );
}
