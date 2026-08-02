import dayjs from "dayjs";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { useUpdateTechnicianBookingStatus } from "@/hooks/booking/useUpdateTechnicianBookingStatus";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Booking } from "@/types/booking";

interface TechnicianBookingCardProps {
  booking: Booking;
}

export default function TechnicianBookingCard({
  booking,
}: TechnicianBookingCardProps) {
    const { mutate, isPending } =useUpdateTechnicianBookingStatus();
    const handleAction = (
  action:
    | "accept-booking"
    | "decline-booking"
    | "mark-booking-in-progress"
    | "complete-booking"
) => {
  mutate(
    {
      id: booking.id,
      action,
    },
    {
      onSuccess: (response) => {
        toast.success(response.message);
      },

      onError: (error: any) => {
        toast.error(
          error?.response?.data?.message ??
            "Something went wrong."
        );
      },
    }
  );
};
  return (
    <Card>
      <CardContent className="space-y-5 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">{booking.customer?.name}</h3>

            <p className="text-sm text-muted-foreground">
              {booking.technicianService.service.name}
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              {dayjs(booking.createdAt).format("DD MMM YYYY")}
            </p>
          </div>

          <Badge>{booking.status}</Badge>
        </div>

        <div>
          <p className="text-sm font-medium">Address</p>

          <p className="text-sm text-muted-foreground">{booking.address}</p>
        </div>

        <div>
          <p className="text-sm font-medium">Problem</p>

          <p className="text-sm text-muted-foreground">
            {booking.problemDescription}
          </p>
        </div>

        <div className="flex items-center justify-between gap-3">
          <span className="font-semibold text-primary">
            ৳{Number(booking.agreedPrice).toLocaleString()}
          </span>

          <div className="flex gap-2">
            {booking.status === "REQUESTED" && (
              <>
                <Button
                  size="sm"
                  disabled={isPending}
                  onClick={() => handleAction("accept-booking")}
                >
                  Accept
                </Button>

                <Button
                  size="sm"
                  variant="destructive"
                  disabled={isPending}
                  onClick={() => handleAction("decline-booking")}
                >
                  Decline
                </Button>
              </>
            )}

            {booking.status === "ACCEPTED" && (
              <Button
                size="sm"
                disabled={isPending}
                onClick={() => handleAction("mark-booking-in-progress")}
              >
                Start Work
              </Button>
            )}

            {booking.status === "IN_PROGRESS" && (
              <Button
                size="sm"
                disabled={isPending}
                onClick={() => handleAction("complete-booking")}
              >
                Complete
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}