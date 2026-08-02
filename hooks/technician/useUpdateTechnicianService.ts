import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";

import { updateTechnicianService } from "@/services/technician.service";

import { UpdateTechnicianServicePayload } from "@/types/technician";

export const useUpdateTechnicianService =
  () => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: ({
        id,
        payload,
      }: {
        id: string;
        payload: UpdateTechnicianServicePayload;
      }) =>
        updateTechnicianService(
          id,
          payload
        ),

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey:
            QUERY_KEYS.TECHNICIAN_SERVICES,
        });
      },
    });
  };