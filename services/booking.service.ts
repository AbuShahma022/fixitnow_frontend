import { api } from "./axios";

import {
  CreateBookingPayload,
  CreateBookingResponse,
} from "@/types/booking";

export const createBooking = async (
  payload: CreateBookingPayload
): Promise<CreateBookingResponse> => {
  const { data } =
    await api.post<CreateBookingResponse>(
      "/booking/create-booking",
      payload
    );

  return data;
};

export const getBooking = async (id: string) => {
  const { data } = await api.get(
    `/booking/get-my-booking-details/${id}`
  );

  return data;
};

export const cancelBooking = async (id: string) => {
  const { data } = await api.patch(
    `/booking/cancel-my-booking/${id}`
  );

  return data;
};