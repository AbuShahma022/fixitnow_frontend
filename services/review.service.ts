import { CreateReviewPayload, CreateReviewResponse } from "@/types/review";
import { api } from "./axios";

export const getTechnicianReviews = async (technicianId: string) => {
  const response = await api.get(
    `/reviews/get-technician-reviews/${technicianId}`
  );

  return response.data.data;
};

export const createReview = async (
  payload: CreateReviewPayload
): Promise<CreateReviewResponse> => {
  const { data } =
    await api.post<CreateReviewResponse>(
      "/reviews/create-review",
      payload
    );

  return data;
};