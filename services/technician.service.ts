import { api } from "./axios";

import { CreateTechnicianProfilePayload, CreateTechnicianProfileResponse, TechniciansResponse } from "@/types/technician";

interface GetTechniciansParams {
  search?: string;
  district?: string;
  minRating?: number;
  minPrice?: number;
  maxPrice?: number;
}
export const getAllTechnicians = async (
  params?: GetTechniciansParams
) => {
  const { data } = await api.get<TechniciansResponse>(
    "/technician-profile/get-all-technicians",
    {
      params,
    }
  );

  return data.data;
};

export const getTechnicianById = async (id: string) => {
  const response = await api.get(`/technician-profile/${id}`);

  return response.data.data;
};

export const createTechnicianProfile = async (
  payload: CreateTechnicianProfilePayload
): Promise<CreateTechnicianProfileResponse> => {
  const { data } =
    await api.post<CreateTechnicianProfileResponse>(
      "/technician-profile/create-technician-profile",
      payload
    );

  return data;
};