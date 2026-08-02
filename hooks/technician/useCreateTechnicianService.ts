import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { createTechnicianService } from "@/services/technician.service";

export const useCreateTechnicianService =
  () => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: createTechnicianService,

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey:
            QUERY_KEYS.TECHNICIAN_SERVICES,
        });
      },
    });
  };