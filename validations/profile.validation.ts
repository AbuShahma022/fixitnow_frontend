import { z } from "zod";

export const updateProfileSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters."),

  phone: z
    .string()
    .min(5, "Phone number is too short.")
    .optional()
    .or(z.literal("")),

  profileImage: z
    .string()
    .url("Please enter a valid image URL.")
    .optional()
    .or(z.literal("")),
    bio: z.string().trim().optional(),

experienceYears: z.coerce
  .number()
  .int()
  .min(0)
  .optional(),

location: z
  .object({
    country: z.string().trim(),
    division: z.string().trim(),
    district: z.string().trim(),
    area: z.string().trim(),
    postalCode: z.string().trim().optional(),
  })
  .optional(),



});

export type UpdateProfileFormValues =
  z.infer<typeof updateProfileSchema>;