import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";

import { createCategory } from "@/services/category.service";

export const useCreateCategory = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: createCategory,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey:
          QUERY_KEYS.ADMIN_CATEGORIES,
      });
    },
  });
};