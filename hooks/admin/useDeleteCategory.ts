import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";

import { deleteCategory } from "@/services/category.service";

export const useDeleteCategory = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: deleteCategory,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey:
          QUERY_KEYS.ADMIN_CATEGORIES,
      });
    },
  });
};