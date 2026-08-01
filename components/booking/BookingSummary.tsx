import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(utc);
dayjs.extend(customParseFormat);

import {MapPin, Wrench, Clock, Banknote} from "lucide-react";

import {Booking} from "@/types/booking";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

interface BookingSummaryProps {
  booking: Booking;
}

export default function BookingSummary({booking}: BookingSummaryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Booking Information</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="flex items-start gap-3">
          <Wrench className="mt-1 h-5 w-5 text-primary" />

          <div>
            <p className="font-medium">Service</p>

            <p className="text-muted-foreground">
              {booking.technicianService.service.name}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Clock className="mt-1 h-5 w-5 text-primary" />

          <div>
            <p className="font-medium">Availability</p>

            <p className="text-muted-foreground">
              {booking.availability.dayOfWeek} •{" "}
              {dayjs(booking.availability.startTime, "HH:mm").format("hh:mm A")}
              {" - "}
              {dayjs(booking.availability.endTime, "HH:mm").format("hh:mm A")}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="mt-1 h-5 w-5 text-primary" />

          <div>
            <p className="font-medium">Address</p>

            <p className="text-muted-foreground">{booking.address}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Banknote className="mt-1 h-5 w-5 text-primary" />

          <div>
            <p className="font-medium">Agreed Price</p>

            <p className="text-muted-foreground">
              ৳{Number(booking.agreedPrice).toLocaleString()}
            </p>
          </div>
        </div>

        <div>
          <p className="mb-2 font-medium">Problem Description</p>

          <p className="rounded-md bg-muted p-4 text-muted-foreground">
            {booking.problemDescription}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
