import { z } from "zod";

export const createTechnicianProfileSchema =
  z.object({
    bio: z
      .string()
      .trim()
      .min(
        2,
        "Bio must be at least 2 characters."
      )
      .optional(),

    experienceYears: z
      .number()
      .int()
      .min(
        0,
        "Experience cannot be negative."
      ),

    location: z.object({
      country: z
        .string()
        .trim()
        .min(
          2,
          "Country is required."
        ),

      division: z
        .string()
        .trim()
        .min(
          2,
          "Division is required."
        ),

      district: z
        .string()
        .trim()
        .min(
          2,
          "District is required."
        ),

      area: z
        .string()
        .trim()
        .min(
          2,
          "Area is required."
        ),

      postalCode: z
        .string()
        .trim()
        .optional(),
    }),
  });

export type CreateTechnicianProfileFormValues =
  z.infer<
    typeof createTechnicianProfileSchema
  >;