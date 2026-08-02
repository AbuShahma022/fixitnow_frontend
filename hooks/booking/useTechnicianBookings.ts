import { useQuery } from "@tanstack/react-query";

import { getTechnicianBookings } from "@/services/booking.service";

export const useTechnicianBookings = () => {
  return useQuery({
    queryKey: ["technician-bookings"],
    queryFn: getTechnicianBookings,
  });
};