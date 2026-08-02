import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { getMyTechnicianServices } from "@/services/technician.service";

export const useMyTechnicianServices = () => {
  return useQuery({
    queryKey: QUERY_KEYS.TECHNICIAN_SERVICES,
    queryFn: getMyTechnicianServices,
  });
};