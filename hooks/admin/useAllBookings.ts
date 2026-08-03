"use client";

import { getAllBookings } from "@/services/booking.service";
import { useQuery } from "@tanstack/react-query";



export const useAllBookings = () => {
  return useQuery({
    queryKey: ["admin-bookings"],
    queryFn: getAllBookings,
  });
};