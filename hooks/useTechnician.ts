import { useQuery } from "@tanstack/react-query";

import { getTechnicianById } from "@/services/technician.service";
import { QUERY_KEYS } from "@/constants/queryKeys";

export const useTechnician = (id: string) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.TECHNICIAN, id],
    queryFn: () => getTechnicianById(id),
    enabled: !!id,
  });
};