import { api } from "./axios";

import { MasterService, MasterServicesResponse ,  MasterServiceResponse,
  CreateMasterServicePayload,
  UpdateMasterServicePayload,} from "@/types/service";

interface GetServicesParams {
  search?: string;
  categoryId?: string;
}

export const getAllMasterServices = async (
  params?: GetServicesParams
) => {
  const { data } = await api.get<MasterServicesResponse>(
    "/master-service/get-all-services",
    {
      params,
    }
  );

  return data.data;
};

export const getMasterServiceById = async (
  id: string
) => {
  const { data } = await api.get<{
    success: boolean;
    message: string;
    data: MasterService;
  }>(`/master-service/${id}`);

  return data.data;
};

export const createMasterService = async (
  payload: CreateMasterServicePayload
): Promise<MasterServiceResponse> => {
  const { data } =
    await api.post<MasterServiceResponse>(
      "/master-service/create-service",
      payload
    );

  return data;
};

export const updateMasterService = async (
  id: string,
  payload: UpdateMasterServicePayload
): Promise<MasterServiceResponse> => {
  const { data } =
    await api.patch<MasterServiceResponse>(
      `/master-service/update-service/${id}`,
      payload
    );

  return data;
};

export const deleteMasterService = async (
  id: string
): Promise<MasterServiceResponse> => {
  const { data } =
    await api.delete<MasterServiceResponse>(
      `/master-service/delete-service/${id}`
    );

  return data;
};