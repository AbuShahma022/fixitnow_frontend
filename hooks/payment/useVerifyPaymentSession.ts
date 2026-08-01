import { useMutation } from "@tanstack/react-query";

import { verifyPaymentSession } from "@/services/payment.service";

export const useVerifyPaymentSession = () => {
  return useMutation({
    mutationFn: verifyPaymentSession,
  });
};