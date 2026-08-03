import { z } from "zod";

export const createMasterServiceSchema =
  z.object({
    categoryId: z
      .string()
      .min(1, "Please select a category."),

    name: z
      .string()
      .trim()
      .min(
        2,
        "Service name must be at least 2 characters."
      ),

    description: z
      .string()
      .trim()
      .min(
        5,
        "Description must be at least 5 characters."
      ),
  });

export const updateMasterServiceSchema =
  z.object({
    categoryId: z
      .string()
      .min(1, "Please select a category.")
      .optional(),

    name: z
      .string()
      .trim()
      .min(
        2,
        "Service name must be at least 2 characters."
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

export type CreateMasterServiceFormValues =
  z.input<
    typeof createMasterServiceSchema
  >;

export type CreateMasterServiceSubmitValues =
  z.output<
    typeof createMasterServiceSchema
  >;

export type UpdateMasterServiceFormValues =
  z.input<
    typeof updateMasterServiceSchema
  >;

export type UpdateMasterServiceSubmitValues =
  z.output<
    typeof updateMasterServiceSchema
  >;