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
});

export type UpdateProfileFormValues =
  z.infer<typeof updateProfileSchema>;