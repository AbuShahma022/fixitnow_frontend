import { api } from "./axios";

export const getTechnicianReviews = async (technicianId: string) => {
  const response = await api.get(
    `/reviews/get-technician-reviews/${technicianId}`
  );

  return response.data.data;
};