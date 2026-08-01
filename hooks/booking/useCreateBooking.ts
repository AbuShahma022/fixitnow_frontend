import { useMutation } from "@tanstack/react-query";

import { createBooking } from "@/services/booking.service";

export const useCreateBooking = () => {
  return useMutation({
    mutationFn: createBooking,
  });
};