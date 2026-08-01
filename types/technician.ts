import { Location } from "./location";
import { User } from "./user";

export interface TechnicianRole {
  id: string;
  userId: string;
  role: "CUSTOMER" | "TECHNICIAN" | "ADMIN";
  createdAt: string;
}


export interface TechnicianServiceCategory {
  id: string;
  name: string;
  description: string | null;
  icon: string | null;
  status: "ACTIVE" | "INACTIVE";
  createdAt: string;
  updatedAt: string;
}

export interface TechnicianMasterService {
  id: string;
  categoryId: string;
  name: string;
  description: string | null;
  status: "ACTIVE" | "INACTIVE";
  createdAt: string;
  updatedAt: string;

  category: TechnicianServiceCategory;
}

export interface TechnicianService {
  id: string;
  technicianProfileId: string;
  serviceId: string;
  price: string;
  description: string | null;
  status: "ACTIVE" | "INACTIVE";
  createdAt: string;
  updatedAt: string;

  service: TechnicianMasterService;
  technicianProfile: Technician;
}

export interface TechnicianAvailability {
  id: string;
  technicianProfileId: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  status: "AVAILABLE" | "UNAVAILABLE";
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

  user: User;
  location: Location;

  technicianServices?: TechnicianService[];
  availabilities?: TechnicianAvailability[];
}

export interface TechniciansResponse {
  success: boolean;
  message: string;
  data: Technician[];
}