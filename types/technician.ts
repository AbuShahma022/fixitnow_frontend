export interface TechnicianRole {
  id: string;
  userId: string;
  role: "CUSTOMER" | "TECHNICIAN" | "ADMIN";
  createdAt: string;
}

export interface TechnicianUser {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  profileImage: string | null;
  status: "ACTIVE" | "INACTIVE";
  createdAt: string;
  updatedAt: string;
  role: TechnicianRole[];
}

export interface TechnicianLocation {
  id: string;
  country: string;
  division: string;
  district: string;
  area: string;
  postalCode: string;
  createdAt: string;
  updatedAt: string;
}

export interface Technician {
  id: string;
  userId: string;
  locationId: string;
  bio: string;
  experienceYears: number;
  averageRating: number;
  totalReviews: number;
  createdAt: string;
  updatedAt: string;

  user: TechnicianUser;
  location: TechnicianLocation;
}

export interface TechniciansResponse {
  success: boolean;
  message: string;
  data: Technician[];
}