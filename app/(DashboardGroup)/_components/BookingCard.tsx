import Link from "next/link";
import dayjs from "dayjs";

import { Booking } from "@/types/booking";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

interface BookingCardProps {
  booking: Booking;
}

export default function BookingCard({
  booking,
}: BookingCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-semibold">
              {booking.technicianService.service.name}
            </h3>

            <p className="text-sm text-muted-foreground">
              Technician:{" "}
              {
                booking.technicianService
                  .technicianProfile.user.name
              }
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Badge>
              {booking.status}
            </Badge>

            <span className="text-sm text-muted-foreground">
              ৳
              {Number(
                booking.agreedPrice
              ).toLocaleString()}
            </span>

            <span className="text-sm text-muted-foreground">
              {dayjs(
                booking.createdAt
              ).format("DD MMM YYYY")}
            </span>
          </div>
        </div>

        <Button asChild>
          <Link href={`/booking/${booking.id}`}>
            View Details
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}