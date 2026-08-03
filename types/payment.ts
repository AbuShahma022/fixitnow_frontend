import { ApiResponse } from "./api";
import { Booking } from "./booking";

export interface PaymentHistory {
  id: string;
  bookingId: string;
  transactionId: string | null;
  stripeSessionId: string;
  amount: string;
  provider: "STRIPE";
  status: "PENDING" | "SUCCESS" | "FAILED";
  paidAt: string | null;
  createdAt: string;
  updatedAt: string;

  booking: {
    id: string;
    status: string;

    technicianService: {
      service: {
        name: string;
      };

      technicianProfile: {
        user: {
          name: string;
        };
      };
    };
  };
}

export interface Payment extends PaymentHistory {
  booking: Booking;
}

export interface PaymentResponse {
  success: boolean;
  message: string;
  data: Payment;
}

export interface PaymentsResponse {
  success: boolean;
  message: string;
  data: Payment[];
}

export type PaymentHistoryResponse =
  ApiResponse<PaymentHistory[]>;