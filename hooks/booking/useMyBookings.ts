import { useQuery } from "@tanstack/react-query";

import { getMyBookings } from "@/services/booking.service";

export const useMyBookings = () => {
  return useQuery({
    queryKey: ["my-bookings"],
    queryFn: getMyBookings,
  });
};