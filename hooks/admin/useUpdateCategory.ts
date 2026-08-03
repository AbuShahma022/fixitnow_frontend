import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";

import { updateCategory } from "@/services/category.service";
import { UpdateCategoryPayload } from "@/types/category";

export const useUpdateCategory = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: UpdateCategoryPayload;
    }) =>
      updateCategory(id, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey:
          QUERY_KEYS.ADMIN_CATEGORIES,
      });

      queryClient.invalidateQueries({
        queryKey:
          QUERY_KEYS.CATEGORY_DETAILS,
      });
    },
  });
};