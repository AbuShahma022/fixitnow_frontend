import dayjs from "dayjs";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent} from "@/components/ui/card";

import {Booking} from "@/types/booking";

interface BookingHeroProps {
  booking: Booking;
}

export default function BookingHero({booking}: BookingHeroProps) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Booking</p>

          <h1 className="text-3xl font-bold">
            {booking.technicianService.service.name}
          </h1>
          <span>
            Created on{" "}
            {dayjs(booking.createdAt).format("DD MMM YYYY • hh:mm A")}
          </span>
        </div>

        <Badge>{booking.status}</Badge>
      </CardContent>
    </Card>
  );
}
