import {
  TechnicianAvailability,
  TechnicianService,
  
} from "./technician";
export type BookingStatus =
  | "REQUESTED"
  | "ACCEPTED"
  | "COMPLETED"
  | "CANCELLED";

export interface CreateBookingPayload {
  technicianServiceId: string;
  availabilityId: string;
  address: string;
  problemDescription: string;
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

export interface Review {
  id: string;
  bookingId: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
}

export interface MyBookingsResponse {
  success: boolean;
  message: string;
  data: Booking[];
}