import { api } from "./axios";
import { LoginPayload, LoginResponse } from "@/types/auth";

export const login = async (
  payload: LoginPayload
): Promise<LoginResponse> => {
  const { data } = await api.post<LoginResponse>(
    "/auth/login",
    payload
  );

  return data;
};

export const logout = async () => {
  const { data } = await api.post("/auth/logout");

  return data;
};
