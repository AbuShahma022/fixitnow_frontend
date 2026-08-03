import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { getMyAvailabilities } from "@/services/availability.service";

export const useMyAvailabilities = () => {
  return useQuery({
    queryKey: QUERY_KEYS.AVAILABILITIES,
    queryFn: getMyAvailabilities,
  });
};