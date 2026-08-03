"use client";

import { getBookingById } from "@/services/booking.service";
import { useQuery } from "@tanstack/react-query";



export const useBooking = (
  id: string,
  enabled = true
) => {
  return useQuery({
    queryKey: ["booking", id],
    queryFn: () => getBookingById(id),
    enabled,
  });
};