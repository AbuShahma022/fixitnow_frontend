"use client";

import Container from "@/shared/container";

import { useBooking } from "@/hooks/booking/useBooking";
import BookingHero from "./BookingHero";
import BookingSummary from "./BookingSummary";
import BookingActions from "./BookingActions";
import BookingDetailsSkeleton from "./BookingDetailsSkeleton";
import PaymentCard from "../payment/PaymentCard";

interface BookingDetailsProps {
  id: string;
}

export default function BookingDetails({
  id,
}: BookingDetailsProps) {
  const {
    data,
    isLoading,
    isError,
  } = useBooking(id);

  if (isLoading) {
    return (
      <Container className="py-20">
        <BookingDetailsSkeleton/>
      </Container>
    );
  }

  if (isError || !data) {
    return (
      <Container className="py-20">
        Booking not found.
      </Container>
    );
  }

  const booking = data.data;

  return (
    <Container className="py-20">
     <BookingHero booking={booking} />
     <BookingSummary booking={booking} />
     <BookingActions booking={booking} />
     <PaymentCard booking={booking} />
    </Container>
  );
}