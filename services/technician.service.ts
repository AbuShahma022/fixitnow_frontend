import { api } from "./axios";

import { TechniciansResponse } from "@/types/technician";

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