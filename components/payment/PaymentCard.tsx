import dayjs from "dayjs";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Booking } from "@/types/booking";

interface PaymentCardProps {
  booking: Booking;
}

export default function PaymentCard({
  booking,
}: PaymentCardProps) {
  if (!booking.payment) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Payment Information
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="flex justify-between">
          <span className="text-muted-foreground">
            Status
          </span>

          <span className="font-medium">
            {booking.payment.status}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">
            Provider
          </span>

          <span className="font-medium">
            {booking.payment.provider}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">
            Amount
          </span>

          <span className="font-medium">
            ৳
            {Number(
              booking.payment.amount
            ).toLocaleString()}
          </span>
        </div>

        {booking.payment.paidAt && (
          <div className="flex justify-between">
            <span className="text-muted-foreground">
              Paid At
            </span>

            <span className="font-medium">
              {dayjs(
                booking.payment.paidAt
              ).format("DD MMM YYYY • hh:mm A")}
            </span>
          </div>
        )}

        <div>
          <p className="mb-2 text-muted-foreground">
            Transaction ID
          </p>

          <p className="break-all rounded-md bg-muted p-3 text-sm font-mono">
            {booking.payment.transactionId}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}