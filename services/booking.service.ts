import { api } from "./axios";

import {
  CreateBookingPayload,
  CreateBookingResponse,
  MyBookingsResponse,
  TechnicianBookingsResponse,
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
export const getMyBookings = async (): Promise<MyBookingsResponse> => {
  const { data } =
    await api.get<MyBookingsResponse>(
      "/booking/get-my-bookings"
    );

  return data;
};

type TechnicianBookingAction =
  | "accept-booking"
  | "decline-booking"
  | "mark-booking-in-progress"
  | "complete-booking";


export const getTechnicianBookings =
  async (): Promise<TechnicianBookingsResponse> => {
    const { data } = await api.get<TechnicianBookingsResponse>(
      "/booking/get-technician-bookings"
    );

    return data;
  };

  export const updateTechnicianBookingStatus =
  async (
    id: string,
    action: TechnicianBookingAction
  ): Promise<CreateBookingResponse> => {
    const { data } =
      await api.patch<CreateBookingResponse>(
        `/booking/${action}/${id}`
      );

    return data;
  };