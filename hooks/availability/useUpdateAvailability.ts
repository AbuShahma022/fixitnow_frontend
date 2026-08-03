import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { updateAvailability } from "@/services/availability.service";

export const useUpdateAvailability = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateAvailability,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.AVAILABILITIES,
      });
    },
  });
};