import { api } from "./axios";

import { MasterService, MasterServicesResponse } from "@/types/service";

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