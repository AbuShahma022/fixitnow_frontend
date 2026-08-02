"use client";

import Container from "@/shared/container";

import { useTechnicianBookings } from "@/hooks/booking/useTechnicianBookings";
import TechnicianBookingCard from "@/app/(DashboardGroup)/_components/technician/TechnicianBookingCard";

export default function TechnicianBookingsPage() {
  const { data, isLoading } =
    useTechnicianBookings();

  const bookings = data?.data ?? [];

  if (isLoading) {
    return (
      <Container>
        Loading...
      </Container>
    );
  }

  return (
    <Container className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Technician Bookings
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage all booking requests assigned to you.
        </p>
      </div>
      {bookings.length === 0 ? (
  <p className="text-center text-muted-foreground py-12">
    No bookings found.
  </p>
) : (
  <div className="space-y-6">
    {bookings.map((booking) => (
      <TechnicianBookingCard
        key={booking.id}
        booking={booking}
      />
    ))}
  </div>
)}
    </Container>
  );
}