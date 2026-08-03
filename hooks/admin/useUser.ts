import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";

import { getUserById } from "@/services/user.service";

export const useUser = (id: string) => {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.USER_DETAILS,
      id,
    ],
    queryFn: () => getUserById(id),
    enabled: !!id,
  });
};