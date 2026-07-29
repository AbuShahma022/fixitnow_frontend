import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { getAllTechnicians } from "@/services/technician.service";

export const useTechnicians = () => {
  return useQuery({
    queryKey: QUERY_KEYS.TECHNICIANS,
    queryFn: getAllTechnicians,
  });
};