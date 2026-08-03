import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";

import { updateTechnicianProfile } from "@/services/technician.service";

export const useUpdateTechnicianProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTechnicianProfile,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.USER,
      });
    },
  });
};