import { z } from "zod";

export const createReviewSchema = z.object({
  bookingId: z.string().min(1),

  rating: z
    .number()
    .min(1, "Please select a rating.")
    .max(5),

  comment: z
    .string()
    .trim()
    .min(5, "Comment must be at least 5 characters.")
    .max(500, "Comment cannot exceed 500 characters."),
});

export type CreateReviewFormValues = z.infer<
  typeof createReviewSchema
>;