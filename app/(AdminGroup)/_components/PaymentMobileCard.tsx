import dayjs from "dayjs";
import { Eye } from "lucide-react";

import { Payment } from "@/types/payment";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

interface PaymentMobileCardProps {
  payment: Payment;
  onView: (payment: Payment) => void;
}

export default function PaymentMobileCard({
  payment,
  onView,
}: PaymentMobileCardProps) {
  return (
    <Card>
      <CardContent className="space-y-4 p-4">
        <div>
          <h3 className="font-semibold">
            {payment.booking.customer?.name ?? "-"}
          </h3>

          <p className="text-sm text-muted-foreground">
            {
              payment.booking
                .technicianService
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
                payment.booking
                  .technicianService
                  .service.name
              }
            </p>
          </div>

          <div>
            <p className="text-muted-foreground">
              Amount
            </p>

            <p className="font-medium">
              ৳{payment.amount}
            </p>
          </div>

          <div>
            <p className="text-muted-foreground">
              Provider
            </p>

            <p className="font-medium">
              {payment.provider}
            </p>
          </div>

          <div>
            <p className="text-muted-foreground">
              Paid At
            </p>

            <p className="font-medium">
              {payment.paidAt
                ? dayjs(payment.paidAt).format(
                    "DD MMM YYYY"
                  )
                : "-"}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Badge>{payment.status}</Badge>

          <Button
            size="sm"
            variant="outline"
            onClick={() => onView(payment)}
          >
            <Eye className="mr-2 h-4 w-4" />
            View
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}