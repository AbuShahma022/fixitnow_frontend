import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { UpdateMasterServicePayload } from "@/types/service";
import { updateMasterService } from "@/services/masterService.service";



export const useUpdateMasterService = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: UpdateMasterServicePayload;
    }) =>
      updateMasterService(id, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey:
          QUERY_KEYS.ADMIN_MASTER_SERVICES,
      });

      queryClient.invalidateQueries({
        queryKey:
          QUERY_KEYS.MASTER_SERVICE_DETAILS,
      });
    },
  });
};