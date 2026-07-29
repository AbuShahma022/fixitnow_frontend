import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { getAllMasterServices } from "@/services/masterService.service";

export const useMasterServices = () => {
  return useQuery({
    queryKey: QUERY_KEYS.MASTER_SERVICES,
    queryFn: getAllMasterServices,
  });
};