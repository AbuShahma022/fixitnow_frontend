import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { getBooking } from "@/services/booking.service";

export const useBooking = (id: string) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.BOOKING, id],
    queryFn: () => getBooking(id),
    enabled: !!id,
  });
};