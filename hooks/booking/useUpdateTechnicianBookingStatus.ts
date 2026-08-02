import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";

import { updateTechnicianBookingStatus } from "@/services/booking.service";

export const useUpdateTechnicianBookingStatus =
  () => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: ({
        id,
        action,
      }: {
        id: string;
        action:
          | "accept-booking"
          | "decline-booking"
          | "mark-booking-in-progress"
          | "complete-booking";
      }) =>
        updateTechnicianBookingStatus(
          id,
          action
        ),

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey:
            QUERY_KEYS.TECHNICIAN_BOOKINGS,
        });
      },
    });
  };