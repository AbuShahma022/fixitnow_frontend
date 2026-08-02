import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { createReview } from "@/services/review.service";

export const useCreateReview = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createReview,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.BOOKING,
      });
    },
  });
};