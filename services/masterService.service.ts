import { api } from "./axios";

import { MasterServicesResponse } from "@/types/service";

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