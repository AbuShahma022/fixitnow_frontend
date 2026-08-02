import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { deleteTechnicianService } from "@/services/technician.service";

export const useDeleteTechnicianService =
  () => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: deleteTechnicianService,

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey:
            QUERY_KEYS.TECHNICIAN_SERVICES,
        });
      },
    });
  };