import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { logout } from "@/services/auth.service";

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,

    onSuccess: async() => {
       await queryClient.cancelQueries({
    queryKey: QUERY_KEYS.USER,
  });

  queryClient.setQueryData(
    QUERY_KEYS.USER,
    undefined
  );

  queryClient.removeQueries({
    queryKey: QUERY_KEYS.USER,
  });
    },
  });
};