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