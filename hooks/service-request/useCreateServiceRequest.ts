import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";

import { createServiceRequest } from "@/services/serviceRequest.service";

export const useCreateServiceRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createServiceRequest,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.SERVICE_REQUESTS,
      });
    },
  });
};