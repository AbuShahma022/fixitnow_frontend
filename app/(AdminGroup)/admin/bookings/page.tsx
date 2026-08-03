"use client";

import { useState } from "react";

import Container from "@/shared/container";

import { useAllBookings } from "@/hooks/admin/useAllBookings";

import { Booking } from "@/types/booking";
import BookingsTable from "../../_components/BookingsTable";
import BookingDetailsDialog from "../../_components/BookingDetailsDialog";
import BookingsSkeleton from "../../_components/BookingsSkeleton";

export default function BookingsPage() {
  const { data, isLoading } =
    useAllBookings();

  const bookings =
    data?.data ?? [];

  const [
    selectedBooking,
    setSelectedBooking,
  ] = useState<Booking | null>(
    null
  );

  const [
    detailsOpen,
    setDetailsOpen,
  ] = useState(false);

  if (isLoading) {
    return (
      <Container className="py-8">
        <BookingsSkeleton />
      </Container>
    );
  }

  return (
    <Container className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Bookings
        </h1>

        <p className="mt-2 text-muted-foreground">
          View all platform bookings.
        </p>
      </div>

      <BookingsTable
        bookings={bookings}
        onView={(booking) => {
          setSelectedBooking(
            booking
          );

          setDetailsOpen(true);
        }}
      />

      <BookingDetailsDialog
        booking={selectedBooking}
        open={detailsOpen}
        onOpenChange={
          setDetailsOpen
        }
      />
    </Container>
  );
}