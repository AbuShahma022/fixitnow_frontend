import { MessageSquare, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import SectionHeading from "@/shared/SectionHeading";

import { Review } from "@/types/review";

import EmptyReviews from "./EmptyReviews";
import ReviewCard from "./ReviewCard";

interface TechnicianReviewsProps {
  averageRating: number;
  totalReviews: number;
  reviews: Review[];
}

export default function TechnicianReviews({
  averageRating,
  totalReviews,
  reviews,
}: TechnicianReviewsProps) {
  return (
    <section className="space-y-6">
      <SectionHeading
        badge="Reviews"
        title="Customer Reviews"
        description="See what customers say about this technician."
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <Star className="h-10 w-10 fill-yellow-400 text-yellow-400" />

            <div>
              <p className="text-3xl font-bold">
                {averageRating.toFixed(1)}
              </p>

              <p className="text-sm text-muted-foreground">
                Average Rating
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <MessageSquare className="h-10 w-10 text-primary" />

            <div>
              <p className="text-3xl font-bold">
                {totalReviews}
              </p>

              <p className="text-sm text-muted-foreground">
                Total Reviews
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {reviews.length === 0 ? (
        <EmptyReviews />
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
            />
          ))}
        </div>
      )}
    </section>
  );
}