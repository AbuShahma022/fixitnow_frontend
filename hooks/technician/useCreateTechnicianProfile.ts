import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";

import { createTechnicianProfile } from "@/services/technician.service";

export const useCreateTechnicianProfile =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn:
        createTechnicianProfile,

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: QUERY_KEYS.USER,
        });
      },
    });
  };