import { api } from "./axios";

import { MasterServicesResponse } from "@/types/service";

export const getAllMasterServices = async () => {
  const { data } = await api.get<MasterServicesResponse>(
    "/master-service/get-all-services"
  );

  return data.data;
};