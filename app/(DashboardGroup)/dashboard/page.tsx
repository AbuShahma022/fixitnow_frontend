"use client";
import {
  LayoutDashboard,
  ClipboardList,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import Container from "@/shared/container";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useMyBookings } from "@/hooks/booking/useMyBookings";



export default function DashboardPage() {
    const { data, isLoading } = useMyBookings();

const bookings = data?.data ?? [];


  const totalBookings = bookings.length;

  const activeBookings = bookings.filter(
    (booking) =>
      booking.status === "REQUESTED" ||
      booking.status === "ACCEPTED"
  ).length;

  const completedBookings = bookings.filter(
    (booking) => booking.status === "COMPLETED"
  ).length;

  const pendingPayments = bookings.filter(
    (booking) => booking.payment === null
  ).length;

  const cards = [
    {
      title: "Total Bookings",
      value: totalBookings,
      icon: ClipboardList,
    },
    {
      title: "Active Bookings",
      value: activeBookings,
      icon: Clock3,
    },
    {
      title: "Completed",
      value: completedBookings,
      icon: CheckCircle2,
    },
    {
      title: "Pending Payment",
      value: pendingPayments,
      icon: LayoutDashboard,
    },
  ];


  return (
    <Container className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-muted-foreground">
          Welcome back! Here's an overview of your account.
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