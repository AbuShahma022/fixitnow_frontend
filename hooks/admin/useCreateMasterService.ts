import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { createMasterService } from "@/services/masterService.service";


export const useCreateMasterService = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: createMasterService,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey:
          QUERY_KEYS.ADMIN_MASTER_SERVICES,
      });
    },
  });
};