import { ApiResponse } from "./api";

export interface ReviewCustomer {
  id: string;
  name: string;
}

export interface ReviewBooking {
  id: string;
  customer: ReviewCustomer;
}

export interface Review {
  id: string;
  rating: number;
  comment: string;
  createdAt: string;
  booking: ReviewBooking;
}

export interface TechnicianReviewsResponse {
  success: boolean;
  message: string;
  data: {
    averageRating: number;
    totalReviews: number;
    reviews: Review[];
  };
}

export interface CreateReviewPayload {
  bookingId: string;
  rating: number;
  comment: string;
}

export interface CreateReview extends Review {
  bookingId: string;
  updatedAt: string;
}

export type CreateReviewResponse =
  ApiResponse<CreateReview>;