import { api } from "./axios";

import { TechniciansResponse } from "@/types/technician";

export const getAllTechnicians = async () => {
  const { data } = await api.get<TechniciansResponse>(
    "/technician-profile/get-all-technicians"
  );

  return data.data;
};