import { Technician, TechnicianServiceCategory } from "./technician";

export type ServiceRequestStatus =
  | "PENDING"
  | "APPROVED"
  | "REJECTED";

export interface ServiceRequest {
  id: string;

  technicianProfileId: string;
  categoryId: string;

  requestedServiceName: string;
  description: string;

  status: ServiceRequestStatus;

  adminFeedback: string | null;

  createdAt: string;
  updatedAt: string;

  category: TechnicianServiceCategory;

  technicianProfile: Technician;
}

export interface CreateServiceRequestPayload {
  categoryId: string;

  requestedServiceName: string;

  description: string;
}

export interface ServiceRequestResponse {
  success: boolean;
  message: string;
  data: ServiceRequest;
}

export interface ServiceRequestsResponse {
  success: boolean;
  message: string;
  data: ServiceRequest[];
}