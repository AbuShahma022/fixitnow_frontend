import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";

import { getServiceRequestDetails } from "@/services/serviceRequest.service";

export const useServiceRequestDetails = (
  id: string
) => {
  return useQuery({
    queryKey: [
      QUERY_KEYS.SERVICE_REQUESTS,
      id,
    ],

    queryFn: () =>
      getServiceRequestDetails(id),

    enabled: !!id,
  });
};