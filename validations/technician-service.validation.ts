import { z } from "zod";

export const createTechnicianServiceSchema =
  z.object({
    serviceId: z
      .string()
      .min(1, "Please select a service."),

    price: z.coerce
      .number()
      .min(1, "Price must be greater than 0."),

    description: z
      .string()
      .trim()
      .optional(),
  });

export type CreateTechnicianServiceFormValues =
  z.input<
    typeof createTechnicianServiceSchema
  >;


export type CreateTechnicianServiceSubmitValues =
  z.output<typeof createTechnicianServiceSchema>;