import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";

import { approveServiceRequest } from "@/services/serviceRequest.service";

export const useApproveServiceRequest =
  () => {
    const queryClient =
      useQueryClient();

    return useMutation({
      mutationFn:
        approveServiceRequest,

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