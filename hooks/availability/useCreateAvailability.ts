import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { createAvailability } from "@/services/availability.service";

export const useCreateAvailability = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createAvailability,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.AVAILABILITIES,
      });
    },
  });
};