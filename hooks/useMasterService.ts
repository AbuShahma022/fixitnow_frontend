import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { getMasterServiceById } from "@/services/masterService.service";

export const useMasterService = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.MASTER_SERVICE, id],
    queryFn: () => getMasterServiceById(id),
    enabled: !!id,
  });
};