import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { login } from "@/services/auth.service";
import { getProfile } from "@/services/user.service";

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,

    onSuccess: async () => {
      await queryClient.fetchQuery({
        queryKey: QUERY_KEYS.USER,
        queryFn: getProfile,
      });
    },
  });
};