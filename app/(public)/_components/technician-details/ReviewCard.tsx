import dayjs from "dayjs";
import { Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { Review } from "@/types/review";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card>
      <CardContent className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">
              {review.booking.customer.name}
            </h3>

            <p className="text-sm text-muted-foreground">
              {dayjs(review.createdAt).format("DD MMM YYYY")}
            </p>
          </div>

          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

            <span className="font-medium">
              {review.rating}
            </span>
          </div>
        </div>

        {review.comment && (
          <p className="text-muted-foreground">
            {review.comment}
          </p>
        )}
      </CardContent>
    </Card>
  );
}