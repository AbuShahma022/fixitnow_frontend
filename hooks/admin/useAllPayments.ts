import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";

import { getAllPayments } from "@/services/payment.service";

export const useAllPayments = () => {
  return useQuery({
    queryKey: QUERY_KEYS.ADMIN_PAYMENTS,
    queryFn: getAllPayments,
  });
};