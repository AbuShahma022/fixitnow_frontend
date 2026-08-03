import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { deleteMasterService } from "@/services/masterService.service";



export const useDeleteMasterService = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: deleteMasterService,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey:
          QUERY_KEYS.ADMIN_MASTER_SERVICES,
      });
    },
  });
};