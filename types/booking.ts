import {
  TechnicianAvailability,
  TechnicianService,
  
} from "./technician";
import type { Review } from "./review";
export type BookingStatus =
    | "REQUESTED"
  | "ACCEPTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "DECLINED"
  | "CANCELLED";
export interface CreateBookingPayload {
  technicianServiceId: string;
  availabilityId: string;
  address: string;
  problemDescription: string;
}

export interface BookingCustomer {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  profileImage: string | null;
  status: "ACTIVE" | "BLOCKED";
  
  createdAt: string;
  updatedAt: string;
}

export interface Booking {
  id: string;
  customerId: string;
  technicianServiceId: string;
  availabilityId: string;

  address: string;
  problemDescription: string;

  agreedPrice: string;

  status: BookingStatus;

  createdAt: string;
  updatedAt: string;
  customer?: BookingCustomer;

  technicianService: TechnicianService;
  availability: TechnicianAvailability;
    payment: Payment | null;
  review: Review | null;
}

export interface CreateBookingResponse {
  success: boolean;
  message: string;
  data: Booking;
}

export interface Payment {
  id: string;
  bookingId: string;
  transactionId: string;
  stripeSessionId: string;
  amount: string;
  provider: "STRIPE";
  status: "PENDING" | "SUCCESS" | "FAILED";
  paidAt: string | null;
  createdAt: string;
  updatedAt: string;
}


export interface MyBookingsResponse {
  success: boolean;
  message: string;
  data: Booking[];
}

export interface TechnicianBookingsResponse {
  success: boolean;
  message: string;
  data: Booking[];
}