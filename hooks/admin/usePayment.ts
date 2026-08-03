import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";

import { getPaymentById } from "@/services/payment.service";

export const usePayment = (
  id: string
) => {
  return useQuery({
    queryKey: [
      ...QUERY_KEYS.PAYMENT_DETAILS,
      id,
    ],
    queryFn: () =>
      getPaymentById(id),
    enabled: !!id,
  });
};