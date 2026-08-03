import { api } from "./axios";
import { ProfileResponse, UpdateProfilePayload ,  UsersResponse,
  UserResponse,
  UpdateUserStatusPayload,} from "@/types/user";

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

export const getAllUsers = async (): Promise<UsersResponse> => {
  const { data } = await api.get<UsersResponse>(
    "/user/getalluser"
  );

  return data;
};

export const getUserById = async (
  id: string
): Promise<UserResponse> => {
  const { data } = await api.get<UserResponse>(
    `/user/${id}`
  );

  return data;
};

export const updateUserStatus = async (
  id: string,
  payload: UpdateUserStatusPayload
): Promise<UserResponse> => {
  const { data } = await api.patch<UserResponse>(
    `/user/${id}/status`,
    payload
  );

  return data;
};