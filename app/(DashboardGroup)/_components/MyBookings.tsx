"use client";

import { useMyBookings } from "@/hooks/booking/useMyBookings";

import Container from "@/shared/container";
import BookingCard from "./BookingCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import BookingCardSkeleton from "./BookingCardSkeleton";

export default function MyBookings() {
  const { data, isLoading, isError } = useMyBookings();

 if (isLoading) {
  return (
    <Container className="space-y-6">
      <div>
        <Skeleton className="h-8 w-56" />
        <Skeleton className="mt-2 h-4 w-72" />
      </div>

      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <BookingCardSkeleton key={index} />
        ))}
      </div>
    </Container>
  );
}

  if (isError) {
    return (
      <Container>
        Failed to load bookings.
      </Container>
    );
  }

  const bookings = data?.data ?? [];

  return (
    <Container className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Bookings</h1>

        <p className="text-muted-foreground">
          Manage all your service bookings.
        </p>
      </div>

      {bookings.length === 0 ? (
       <Card>
  <CardContent className="py-16 text-center">
    <h3 className="text-xl font-semibold">
      No bookings yet
    </h3>

    <p className="mt-2 text-muted-foreground">
      You haven't booked any services yet.
    </p>

    <Button asChild className="mt-6">
      <Link href="/services">
        Browse Services
      </Link>
    </Button>
  </CardContent>
</Card>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
        </div>
      )}
    </Container>
  );
}