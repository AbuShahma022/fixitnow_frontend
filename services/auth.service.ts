import { api } from "./axios";
import { LoginPayload, LoginResponse, RegisterPayload,RegisterResponse, } from "@/types/auth";


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

export const register = async (
  payload: RegisterPayload
): Promise<RegisterResponse> => {
  const { data } = await api.post<RegisterResponse>(
    "/user/register",
    payload
  );

  return data;
};