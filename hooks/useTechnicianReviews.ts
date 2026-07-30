import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { getTechnicianReviews } from "@/services/review.service";

export const useTechnicianReviews = (technicianId: string) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.TECHNICIAN_REVIEWS, technicianId],
    queryFn: () => getTechnicianReviews(technicianId),
    enabled: !!technicianId,
  });
};