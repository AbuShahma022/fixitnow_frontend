import dayjs from "dayjs";
import { Eye } from "lucide-react";

import { Booking } from "@/types/booking";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

interface BookingMobileCardProps {
  booking: Booking;
  onView: (booking: Booking) => void;
}

export default function BookingMobileCard({
  booking,
  onView,
}: BookingMobileCardProps) {
  return (
    <Card>
      <CardContent className="space-y-4 p-4">
        <div>
          <h3 className="font-semibold">
            {booking.customer?.name ?? "-"}
          </h3>

          <p className="text-sm text-muted-foreground">
            {
              booking.technicianService
                .technicianProfile.user.name
            }
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-muted-foreground">
              Service
            </p>

            <p className="font-medium">
              {
                booking.technicianService
                  .service.name
              }
            </p>
          </div>

          <div>
            <p className="text-muted-foreground">
              Price
            </p>

            <p className="font-medium">
              ৳{booking.agreedPrice}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Badge>
            {booking.status}
          </Badge>

          <Badge
            variant={
              booking.payment?.status ===
              "SUCCESS"
                ? "default"
                : "secondary"
            }
          >
            {booking.payment?.status ??
              "N/A"}
          </Badge>
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            {dayjs(
              booking.createdAt
            ).format("DD MMM YYYY")}
          </span>

          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              onView(booking)
            }
          >
            <Eye className="mr-2 h-4 w-4" />
            View
          </Button>
        </div>

            

      </CardContent>
    </Card>
  );
}