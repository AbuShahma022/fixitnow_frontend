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