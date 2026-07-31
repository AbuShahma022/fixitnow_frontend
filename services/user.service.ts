import { api } from "./axios";
import { ProfileResponse } from "@/types/user";

export const getProfile = async () => {
  const { data } = await api.get<ProfileResponse>("/user/me");

  return data;
};