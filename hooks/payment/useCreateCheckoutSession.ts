import { useMutation } from "@tanstack/react-query";

import { createCheckoutSession } from "@/services/payment.service";

export const useCreateCheckoutSession = () => {
  return useMutation({
    mutationFn: createCheckoutSession,
  });
};