import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";

import { getAllUsers } from "@/services/user.service";

export const useAllUsers = () => {
  return useQuery({
    queryKey: QUERY_KEYS.ADMIN_USERS,
    queryFn: getAllUsers,
  });
};