import { api } from "./axios";
import { ProfileResponse, UpdateProfilePayload } from "@/types/user";

export const getProfile = async () => {
  const { data } = await api.get<ProfileResponse>("/user/me");

  return data;
};

export const updateProfile = async (
  payload: UpdateProfilePayload
): Promise<ProfileResponse> => {
  const { data } =
    await api.patch<ProfileResponse>(
      "/user/me",
      payload
    );

  return data;
};