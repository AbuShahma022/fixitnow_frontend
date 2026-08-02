"use client";

import Container from "@/shared/container";

import { useTechnicianBookings } from "@/hooks/booking/useTechnicianBookings";
import { CheckCircle2, ClipboardList, Clock3, LayoutDashboard } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function TechnicianDashboardPage() {
  const { data, isLoading } =useTechnicianBookings();

  const bookings = data?.data ?? [];
  const totalBookings = bookings.length;

const requestedBookings = bookings.filter(
  (booking) => booking.status === "REQUESTED"
).length;

const acceptedBookings = bookings.filter(
  (booking) => booking.status === "ACCEPTED"
).length;

const completedBookings = bookings.filter(
  (booking) => booking.status === "COMPLETED"
).length;

const cards = [
  {
    title: "Total Bookings",
    value: totalBookings,
    icon: ClipboardList,
  },
  {
    title: "Requested",
    value: requestedBookings,
    icon: Clock3,
  },
  {
    title: "Accepted",
    value: acceptedBookings,
    icon: CheckCircle2,
  },
  {
    title: "Completed",
    value: completedBookings,
    icon: LayoutDashboard,
  },
];

  if (isLoading) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Technician Dashboard
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage your bookings and services.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
  {cards.map((card) => {
    const Icon = card.icon;

    return (
      <Card key={card.title}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <CardTitle className="text-sm font-medium">
            {card.title}
          </CardTitle>

          <Icon className="h-5 w-5 text-muted-foreground" />
        </CardHeader>

        <CardContent>
          <p className="text-3xl font-bold">
            {card.value}
          </p>
        </CardContent>
      </Card>
    );
  })}
</div>
    </Container>
  );
}