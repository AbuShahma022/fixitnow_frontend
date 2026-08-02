import { api } from "./axios";

import { CreateTechnicianProfilePayload,
   CreateTechnicianProfileResponse, 
   TechniciansResponse,
  CreateTechnicianServicePayload,
  TechnicianServiceResponse,
  TechnicianServicesResponse,
  UpdateTechnicianServicePayload,

 } from "@/types/technician";



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

export const getMyTechnicianServices =
  async (): Promise<TechnicianServicesResponse> => {
    const { data } =
      await api.get<TechnicianServicesResponse>(
        "/technician-service/get-my-services"
      );

    return data;
  };

  export const createTechnicianService =
  async (
    payload: CreateTechnicianServicePayload
  ): Promise<TechnicianServiceResponse> => {
    const { data } =
      await api.post<TechnicianServiceResponse>(
        "/technician-service/create-technician-service",
        payload
      );

    return data;
  };

  export const updateTechnicianService =
  async (
    id: string,
    payload: UpdateTechnicianServicePayload
  ): Promise<TechnicianServiceResponse> => {
    const { data } =
      await api.patch<TechnicianServiceResponse>(
        `/technician-service/update-my-service/${id}`,
        payload
      );

    return data;
  };

  export const deleteTechnicianService =
  async (
    id: string
  ): Promise<TechnicianServiceResponse> => {
    const { data } =
      await api.delete<TechnicianServiceResponse>(
        `/technician-service/delete-my-service/${id}`
      );

    return data;
  };
  