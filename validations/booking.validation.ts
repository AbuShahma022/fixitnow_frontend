import { z } from "zod";

export const createBookingSchema = z.object({
  technicianServiceId: z.string().min(1),
  availabilityId: z.string().min(1),

  address: z
    .string()
    .min(10, "Address must be at least 10 characters."),

  problemDescription: z
    .string()
    .min(10, "Please describe your problem.")
    .max(500, "Problem description is too long."),
});

export type CreateBookingFormValues = z.infer<
  typeof createBookingSchema
>;