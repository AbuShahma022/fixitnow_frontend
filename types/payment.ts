import { ApiResponse } from "./api";

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

export type PaymentHistoryResponse =
  ApiResponse<PaymentHistory[]>;