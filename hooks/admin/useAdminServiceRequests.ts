import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { getAllServiceRequests } from "@/services/serviceRequest.service";

export const useAdminServiceRequests = () => {
  return useQuery({
    queryKey:
      QUERY_KEYS.ADMIN_SERVICE_REQUESTS,

    queryFn: getAllServiceRequests,
  });
};