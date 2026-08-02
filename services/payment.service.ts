import { api } from "./axios";

export const createCheckoutSession = async (
  bookingId: string
) => {
  const { data } = await api.post(
    "/payment/create-checkout-session",
    {
      bookingId,
    }
  );

  return data;
};

export const verifyPaymentSession = async (
  sessionId: string
) => {
  const { data } = await api.get(
    `/payment/verify-session?session_id=${sessionId}`
  );

  return data;
};

import { PaymentHistoryResponse } from "@/types/payment";

export const getMyPayments = async () => {
  const { data } =
    await api.get<PaymentHistoryResponse>(
      "/payment/get-my-payments"
    );

  return data;
};