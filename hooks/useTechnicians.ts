import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { getAllTechnicians } from "@/services/technician.service";

interface UseTechniciansProps {
  search?: string;
  district?: string;
  minRating?: number;
  minPrice?: number;
  maxPrice?: number;
}

export const useTechnicians = (
  {
    search,
    district,
    minRating,
    minPrice,
    maxPrice,
  }: UseTechniciansProps = {},
  enabled = true
) => {
  return useQuery({
    queryKey: [
      QUERY_KEYS.TECHNICIANS,
      search,
      district,
      minRating,
      minPrice,
      maxPrice,
    ],
    queryFn: () =>
      getAllTechnicians({
        search,
        district,
        minRating,
        minPrice,
        maxPrice,
      }),
    enabled,
  });
};