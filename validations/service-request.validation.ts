import { z } from "zod";

export const createServiceRequestSchema =
  z.object({
    categoryId: z
      .string()
      .min(1, "Please select a category."),

    requestedServiceName: z
      .string()
      .trim()
      .min(
        3,
        "Service name must be at least 3 characters."
      ),

    description: z
      .string()
      .trim()
      .min(
        10,
        "Description must be at least 10 characters."
      ),
  });

export type CreateServiceRequestFormValues =
  z.input<
    typeof createServiceRequestSchema
  >;

export type CreateServiceRequestSubmitValues =
  z.output<
    typeof createServiceRequestSchema
  >;