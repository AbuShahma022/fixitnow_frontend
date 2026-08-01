import { ApiResponse } from "./api";
import { Technician } from "./technician";

export type UserStatus = "ACTIVE" | "INACTIVE";

export type UserRoleType =
  | "CUSTOMER"
  | "TECHNICIAN"
  | "ADMIN";

export interface UserRole {
  id: string;
  userId: string;
  role: UserRoleType;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  profileImage: string | null;
  status: UserStatus;
  createdAt: string;
  updatedAt: string;
  role: UserRole[];
}



export interface ProfileUser extends User {
  technicianProfile: Technician | null;
}

export type ProfileResponse = ApiResponse<ProfileUser>;

export interface UpdateProfilePayload {
  name: string;
  phone?: string;
  profileImage?: string;
}