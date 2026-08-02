"use client";

import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
  createReviewSchema,
  CreateReviewFormValues,
} from "@/validations/review.validation";

import { useCreateReview } from "@/hooks/review/useCreateReview";

import StarRating from "@/shared/StarRating";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ReviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  bookingId: string;
}

export default function ReviewDialog({
  open,
  onOpenChange,
  bookingId,
}: ReviewDialogProps) {
  const { mutate, isPending } =
    useCreateReview();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } =
    useForm<CreateReviewFormValues>({
      resolver: zodResolver(
        createReviewSchema
      ),
      defaultValues: {
        bookingId,
        rating: 5,
        comment: "",
      },
    });

  useEffect(() => {
    if (open) {
      reset({
        bookingId,
        rating: 5,
        comment: "",
      });
    }
  }, [open, bookingId, reset]);

  const onSubmit = (
    values: CreateReviewFormValues
  ) => {
    mutate(values, {
      onSuccess: (response) => {
        toast.success(response.message);

        onOpenChange(false);
      },

      onError: (error: any) => {
        toast.error(
          error?.response?.data?.message ??
            "Failed to submit review."
        );
      },
    });
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            Leave a Review
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <div className="space-y-2">
            <Label>Rating</Label>

            <Controller
              control={control}
              name="rating"
              render={({ field }) => (
                <StarRating
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />

            {errors.rating && (
              <p className="text-sm text-destructive">
                {errors.rating.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Comment</Label>

            <Textarea
              rows={5}
              placeholder="Share your experience..."
              {...register("comment")}
            />

            {errors.comment && (
              <p className="text-sm text-destructive">
                {errors.comment.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isPending}
          >
            {isPending
              ? "Submitting..."
              : "Submit Review"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}