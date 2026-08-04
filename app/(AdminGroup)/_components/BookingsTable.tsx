import dayjs from "dayjs";

import { Eye } from "lucide-react";

import { Booking } from "@/types/booking";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BookingMobileCard from "./BookingMobileCard";

interface BookingsTableProps {
  bookings: Booking[];

  onView: (booking: Booking) => void;
}

export default function BookingsTable({
  bookings,
  onView,
}: BookingsTableProps) {
  return (
    <>
    <div className="hidden overflow-x-auto rounded-lg border md:block">
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
              Price
            </th>

            <th className="px-4 py-3 text-left">
              Status
            </th>

            <th className="px-4 py-3 text-left">
              Payment
            </th>

            <th className="px-4 py-3 text-left">
              Date
            </th>

            <th className="px-4 py-3 text-right">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking) => (
            <tr
              key={booking.id}
              className="border-t"
            >
              <td className="px-4 py-4 font-medium">
                {booking.customer?.name ?? "-"}
              </td>

              <td className="px-4 py-4">
                {
                  booking.technicianService
                    .technicianProfile.user.name
                }
              </td>

              <td className="px-4 py-4">
                {
                  booking.technicianService
                    .service.name
                }
              </td>

              <td className="px-4 py-4">
                ৳{booking.agreedPrice}
              </td>

              <td className="px-4 py-4">
                <Badge>
                  {booking.status}
                </Badge>
              </td>

              <td className="px-4 py-4">
                <Badge
                  variant={
                    booking.payment
                      ?.status ===
                    "SUCCESS"
                      ? "default"
                      : "secondary"
                  }
                >
                  {booking.payment
                    ?.status ?? "N/A"}
                </Badge>
              </td>

              <td className="px-4 py-4">
                {dayjs(
                  booking.createdAt
                ).format("DD MMM YYYY")}
              </td>

              <td className="px-4 py-4">
                <div className="flex justify-end">
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile */}
  <div className="space-y-4 md:hidden">
    {bookings.map((booking) => (
      <BookingMobileCard
        key={booking.id}
        booking={booking}
        onView={onView}
      />
    ))}
  </div>

</>


  );
}