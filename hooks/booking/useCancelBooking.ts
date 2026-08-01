import { useMutation, useQueryClient } from "@tanstack/react-query";

import { cancelBooking } from "@/services/booking.service";

export const useCancelBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelBooking,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["booking"],
      });
    },
  });
};