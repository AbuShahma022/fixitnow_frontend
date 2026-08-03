"use client";

import dayjs from "dayjs";

import { Booking } from "@/types/booking";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Badge } from "@/components/ui/badge";

interface BookingDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  booking: Booking | null;
}

export default function BookingDetailsDialog({
  open,
  onOpenChange,
  booking,
}: BookingDetailsDialogProps) {
  if (!booking) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            Booking Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-8">

          {/* Booking */}

          <section className="space-y-3">
            <h3 className="text-lg font-semibold">
              Booking Information
            </h3>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm text-muted-foreground">
                  Booking ID
                </p>

                <p>{booking.id}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Status
                </p>

                <Badge>{booking.status}</Badge>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Address
                </p>

                <p>{booking.address}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Agreed Price
                </p>

                <p>৳{booking.agreedPrice}</p>
              </div>

              <div className="md:col-span-2">
                <p className="text-sm text-muted-foreground">
                  Problem
                </p>

                <p>{booking.problemDescription}</p>
              </div>
            </div>
          </section>

          {/* Customer */}

          <section className="space-y-3 border-t pt-6">
            <h3 className="text-lg font-semibold">
              Customer
            </h3>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm text-muted-foreground">
                  Name
                </p>

                <p>{booking.customer?.name}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Email
                </p>

                <p>{booking.customer?.email}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Phone
                </p>

                <p>
                  {booking.customer?.phone ??
                    "Not Provided"}
                </p>
              </div>
            </div>
          </section>

          {/* Technician */}

          <section className="space-y-3 border-t pt-6">
            <h3 className="text-lg font-semibold">
              Technician
            </h3>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm text-muted-foreground">
                  Name
                </p>

                <p>
                  {
                    booking.technicianService
                      .technicianProfile.user
                      .name
                  }
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Experience
                </p>

                <p>
                  {
                    booking.technicianService
                      .technicianProfile
                      .experienceYears
                  }{" "}
                  Years
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Rating
                </p>

                <p>
                  {
                    booking.technicianService
                      .technicianProfile
                      .averageRating
                  }
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Reviews
                </p>

                <p>
                  {
                    booking.technicianService
                      .technicianProfile
                      .totalReviews
                  }
                </p>
              </div>
            </div>
          </section>

          {/* Service */}

          <section className="space-y-3 border-t pt-6">
            <h3 className="text-lg font-semibold">
              Service
            </h3>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm text-muted-foreground">
                  Category
                </p>

                <p>
                  {
                    booking.technicianService
                      .service.category.name
                  }
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Service
                </p>

                <p>
                  {
                    booking.technicianService
                      .service.name
                  }
                </p>
              </div>

              <div className="md:col-span-2">
                <p className="text-sm text-muted-foreground">
                  Description
                </p>

                <p>
                  {
                    booking.technicianService
                      .description
                  }
                </p>
              </div>
            </div>
          </section>

          {/* Availability */}

          <section className="space-y-3 border-t pt-6">
            <h3 className="text-lg font-semibold">
              Availability
            </h3>

            <p>
              {booking.availability.dayOfWeek} •{" "}
              {booking.availability.startTime} -
              {booking.availability.endTime}
            </p>
          </section>

          {/* Payment */}

          <section className="space-y-3 border-t pt-6">
            <h3 className="text-lg font-semibold">
              Payment
            </h3>

            {booking.payment ? (
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Provider
                  </p>

                  <p>{booking.payment.provider}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Status
                  </p>

                  <Badge>
                    {booking.payment.status}
                  </Badge>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Amount
                  </p>

                  <p>
                    ৳{booking.payment.amount}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Paid At
                  </p>

                  <p>
                    {booking.payment.paidAt
                      ? dayjs(
                          booking.payment
                            .paidAt
                        ).format(
                          "DD MMM YYYY HH:mm"
                        )
                      : "Not Paid"}
                  </p>
                </div>

                <div className="md:col-span-2">
                  <p className="text-sm text-muted-foreground">
                    Transaction ID
                  </p>

                  <p className="break-all">
                    {
                      booking.payment
                        .transactionId
                    }
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-muted-foreground">
                No payment found.
              </p>
            )}
          </section>

          {/* Review */}

          <section className="space-y-3 border-t pt-6">
            <h3 className="text-lg font-semibold">
              Review
            </h3>

            {booking.review ? (
              <>
                <p>
                  ⭐ {booking.review.rating}/5
                </p>

                <p>{booking.review.comment}</p>
              </>
            ) : (
              <p className="text-muted-foreground">
                No review yet.
              </p>
            )}
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}