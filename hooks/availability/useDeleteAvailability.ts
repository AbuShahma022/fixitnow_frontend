import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { deleteAvailability } from "@/services/availability.service";

export const useDeleteAvailability = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteAvailability,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.AVAILABILITIES,
      });
    },
  });
};