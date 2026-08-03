import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { getMyServiceRequests } from "@/services/serviceRequest.service";

export const useMyServiceRequests = () => {
  return useQuery({
    queryKey: QUERY_KEYS.SERVICE_REQUESTS,
    queryFn: getMyServiceRequests,
  });
};