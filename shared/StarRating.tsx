"use client";

import { Star } from "lucide-react";
import clsx from "clsx";

interface StarRatingProps {
  value: number;
  onChange: (rating: number) => void;
  disabled?: boolean;
}

export default function StarRating({
  value,
  onChange,
  disabled = false,
}: StarRatingProps) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={disabled}
          onClick={() => onChange(star)}
          className="cursor-pointer disabled:cursor-not-allowed"
        >
          <Star
            className={clsx(
              "h-7 w-7 transition-colors",
              star <= value
                ? "fill-yellow-400 text-yellow-400"
                : "text-muted-foreground"
            )}
          />
        </button>
      ))}
    </div>
  );
}