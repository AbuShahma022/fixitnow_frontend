"use client";

import { useState } from "react";
import dayjs from "dayjs";
import { Star, MessageSquarePlus } from "lucide-react";

import { Booking } from "@/types/booking";

import ReviewDialog from "./ReviewDialog";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BookingReviewProps {
  booking: Booking;
}

export default function BookingReview({
  booking,
}: BookingReviewProps) {
  const [open, setOpen] = useState(false);

  if (booking.status !== "COMPLETED") {
    return null;
  }

  if (booking.review) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Your Review</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-5 w-5 ${
                  star <= booking.review!.rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>

          <p className="text-muted-foreground">
            {booking.review.comment}
          </p>

          <p className="text-sm text-muted-foreground">
            Reviewed on{" "}
            {dayjs(booking.review.createdAt).format(
              "DD MMM YYYY"
            )}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Leave a Review</CardTitle>
        </CardHeader>

        <CardContent className="flex items-center justify-between gap-6">
          <div>
            <p className="font-medium">
              How was your experience?
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Share your feedback to help other customers.
            </p>
          </div>

          <Button onClick={() => setOpen(true)}>
            <MessageSquarePlus className="mr-2 h-4 w-4" />
            Leave Review
          </Button>
        </CardContent>
      </Card>

      <ReviewDialog
        open={open}
        onOpenChange={setOpen}
        bookingId={booking.id}
      />
    </>
  );
}