import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";

import { rejectServiceRequest } from "@/services/serviceRequest.service";

export const useRejectServiceRequest =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn:
        rejectServiceRequest,

      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey:
            QUERY_KEYS.ADMIN_SERVICE_REQUESTS,
        });

        queryClient.invalidateQueries({
          queryKey:
            QUERY_KEYS.ADMIN_SERVICE_REQUEST_DETAILS,
        });
      },
    });
  };