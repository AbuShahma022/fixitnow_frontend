import { useQuery } from "@tanstack/react-query";

import { getCategoryById } from "@/services/category.service";

export const useCategory = (id: string) => {
  return useQuery({
    queryKey: ["category", id],
    queryFn: () => getCategoryById(id),
    enabled: !!id,
  });
};