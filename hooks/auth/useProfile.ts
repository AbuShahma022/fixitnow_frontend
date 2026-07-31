import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { getProfile } from "@/services/user.service";

export const useProfile = () => {
  return useQuery({
    queryKey: QUERY_KEYS.USER,
    queryFn: getProfile,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
};