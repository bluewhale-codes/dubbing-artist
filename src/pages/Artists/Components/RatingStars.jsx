import { Star } from "lucide-react";

export function RatingStars({ rating, reviewCount, size = "sm" }) {
  const starSize = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";
  const textSize = size === "sm" ? "text-xs" : "text-sm";

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${starSize} ${
              star <= Math.floor(rating)
                ? "fill-amber-400 text-amber-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>

      <span className={`${textSize} font-semibold text-gray-900`}>
        {rating.toFixed(1)}
      </span>

      <span className={`${textSize} text-gray-500`}>
        ({reviewCount.toLocaleString()})
      </span>
    </div>
  );
}