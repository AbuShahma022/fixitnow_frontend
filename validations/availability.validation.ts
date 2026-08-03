import { z } from "zod";

export const availabilitySchema = z
  .object({
    dayOfWeek: z.enum([
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
      "SUNDAY",
    ]),

    startTime: z.string().min(1, "Start time is required."),

    endTime: z.string().min(1, "End time is required."),
  })
  .refine(
    (data) => data.startTime < data.endTime,
    {
      message:
        "End time must be after start time.",
      path: ["endTime"],
    }
  );

export type AvailabilityFormValues =
  z.input<typeof availabilitySchema>;

export type AvailabilitySubmitValues =
  z.output<typeof availabilitySchema>;