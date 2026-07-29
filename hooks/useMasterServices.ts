import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { getAllMasterServices } from "@/services/masterService.service";

interface UseMasterServicesProps {
  search?: string;
  categoryId?: string;
}


export const useMasterServices = ({
  search,
  categoryId,
}: UseMasterServicesProps = {}) => {
  return useQuery({
    queryKey: [
      QUERY_KEYS.MASTER_SERVICES,
      search,
      categoryId,
    ],
    queryFn: () =>
      getAllMasterServices({
        search,
        categoryId,
      }),
  });
};