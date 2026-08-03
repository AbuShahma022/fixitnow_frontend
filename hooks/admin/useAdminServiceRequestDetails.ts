import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";

import { getAdminServiceRequestDetails } from "@/services/serviceRequest.service";

export const useAdminServiceRequestDetails = (
  id: string
) => {
  return useQuery({
    queryKey: [
      QUERY_KEYS.ADMIN_SERVICE_REQUEST_DETAILS,
      id,
    ],

    queryFn: () =>
      getAdminServiceRequestDetails(id),

    enabled: !!id,
  });
};