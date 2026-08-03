import { z } from "zod";

export const createCategorySchema =
  z.object({
    name: z
      .string()
      .trim()
      .min(
        2,
        "Category name must be at least 2 characters."
      ),

    description: z
      .string()
      .trim()
      .min(
        5,
        "Description must be at least 5 characters."
      ),
  });

export const updateCategorySchema =
  z.object({
    name: z
      .string()
      .trim()
      .min(
        2,
        "Category name must be at least 2 characters."
      )
      .optional(),

    description: z
      .string()
      .trim()
      .min(
        5,
        "Description must be at least 5 characters."
      )
      .optional(),
  });

export type CreateCategoryFormValues =
  z.input<typeof createCategorySchema>;

export type CreateCategorySubmitValues =
  z.output<typeof createCategorySchema>;

export type UpdateCategoryFormValues =
  z.input<typeof updateCategorySchema>;

export type UpdateCategorySubmitValues =
  z.output<typeof updateCategorySchema>;