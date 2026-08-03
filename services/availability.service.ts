import { api } from "./axios";

import {
  CreateAvailabilityPayload,
  TechnicianAvailabilitiesResponse,
  TechnicianAvailabilityResponse,
  UpdateAvailabilityPayload,
} from "@/types/technician";

export const createAvailability = async (
  payload: CreateAvailabilityPayload
): Promise<TechnicianAvailabilityResponse> => {
  const { data } =
    await api.post<TechnicianAvailabilityResponse>(
      "/availiabilty/create-availability",
      payload
    );

  return data;
};

export const getMyAvailabilities =
  async (): Promise<TechnicianAvailabilitiesResponse> => {
    const { data } =
      await api.get<TechnicianAvailabilitiesResponse>(
        "/availiabilty/get-my-availabilities"
      );

    return data;
  };

export const updateAvailability = async ({
  id,
  payload,
}: {
  id: string;
  payload: UpdateAvailabilityPayload;
}): Promise<TechnicianAvailabilityResponse> => {
  const { data } =
    await api.patch<TechnicianAvailabilityResponse>(
      `/availiabilty/update-my-availability/${id}`,
      payload
    );

  return data;
};

export const deleteAvailability = async (
  id: string
): Promise<TechnicianAvailabilityResponse> => {
  const { data } =
    await api.delete<TechnicianAvailabilityResponse>(
      `/availiabilty/delete-my-availability/${id}`
    );

  return data;
};