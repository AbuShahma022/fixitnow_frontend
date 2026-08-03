import dayjs from "dayjs";

import { Eye } from "lucide-react";

import { Payment } from "@/types/payment";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PaymentsTableProps {
  payments: Payment[];

  onView: (payment: Payment) => void;
}

export default function PaymentsTable({
  payments,
  onView,
}: PaymentsTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full text-sm">
        <thead className="bg-muted">
          <tr>
            <th className="px-4 py-3 text-left">
              Customer
            </th>

            <th className="px-4 py-3 text-left">
              Technician
            </th>

            <th className="px-4 py-3 text-left">
              Service
            </th>

            <th className="px-4 py-3 text-left">
              Amount
            </th>

            <th className="px-4 py-3 text-left">
              Provider
            </th>

            <th className="px-4 py-3 text-left">
              Status
            </th>

            <th className="px-4 py-3 text-left">
              Paid At
            </th>

            <th className="px-4 py-3 text-right">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {payments.map((payment) => (
            <tr
              key={payment.id}
              className="border-t"
            >
              <td className="px-4 py-4 font-medium">
                {payment.booking.customer?.name}
              </td>

              <td className="px-4 py-4">
                {
                  payment.booking
                    .technicianService
                    .technicianProfile.user.name
                }
              </td>

              <td className="px-4 py-4">
                {
                  payment.booking
                    .technicianService
                    .service.name
                }
              </td>

              <td className="px-4 py-4">
                ৳{payment.amount}
              </td>

              <td className="px-4 py-4">
                {payment.provider}
              </td>

              <td className="px-4 py-4">
                <Badge>
                  {payment.status}
                </Badge>
              </td>

              <td className="px-4 py-4">
                {payment.paidAt
                  ? dayjs(payment.paidAt).format(
                      "DD MMM YYYY"
                    )
                  : "-"}
              </td>

              <td className="px-4 py-4">
                <div className="flex justify-end">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      onView(payment)
                    }
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    View
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}