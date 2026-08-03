"use client";

import dayjs from "dayjs";

import { Payment } from "@/types/payment";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

interface PaymentDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  payment: Payment | null;
}

export default function PaymentDetailsDialog({
  open,
  onOpenChange,
  payment,
}: PaymentDetailsDialogProps) {
  if (!payment) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            Payment Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-8">
          {/* Payment */}

          <section className="space-y-4">
            <h3 className="text-lg font-semibold">
              Payment Information
            </h3>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm text-muted-foreground">
                  Amount
                </p>

                <p>৳{payment.amount}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Provider
                </p>

                <p>{payment.provider}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Status
                </p>

                <Badge>{payment.status}</Badge>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Paid At
                </p>

                <p>
                  {payment.paidAt
                    ? dayjs(payment.paidAt).format(
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
                  {payment.transactionId}
                </p>
              </div>

              <div className="md:col-span-2">
                <p className="text-sm text-muted-foreground">
                  Stripe Session ID
                </p>

                <p className="break-all">
                  {payment.stripeSessionId}
                </p>
              </div>
            </div>
          </section>

          {/* Booking */}

          <section className="space-y-4 border-t pt-6">
            <h3 className="text-lg font-semibold">
              Booking Information
            </h3>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm text-muted-foreground">
                  Booking Status
                </p>

                <Badge>
                  {payment.booking.status}
                </Badge>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Agreed Price
                </p>

                <p>
                  ৳{payment.booking.agreedPrice}
                </p>
              </div>

              <div className="md:col-span-2">
                <p className="text-sm text-muted-foreground">
                  Address
                </p>

                <p>{payment.booking.address}</p>
              </div>

              <div className="md:col-span-2">
                <p className="text-sm text-muted-foreground">
                  Problem Description
                </p>

                <p>
                  {payment.booking.problemDescription}
                </p>
              </div>
            </div>
          </section>

          {/* Customer */}

          <section className="space-y-4 border-t pt-6">
            <h3 className="text-lg font-semibold">
              Customer
            </h3>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm text-muted-foreground">
                  Name
                </p>

                <p>
                  {payment.booking.customer?.name}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Email
                </p>

                <p>
                  {payment.booking.customer?.email}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Phone
                </p>

                <p>
                  {payment.booking.customer?.phone ??
                    "Not Provided"}
                </p>
              </div>
            </div>
          </section>

          {/* Technician */}

          <section className="space-y-4 border-t pt-6">
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
                    payment.booking
                      .technicianService
                      .technicianProfile.user
                      .name
                  }
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Service
                </p>

                <p>
                  {
                    payment.booking
                      .technicianService.service
                      .name
                  }
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Category
                </p>

                <p>
                  {
                    payment.booking
                      .technicianService.service
                      .category.name
                  }
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Experience
                </p>

                <p>
                  {
                    payment.booking
                      .technicianService
                      .technicianProfile
                      .experienceYears
                  }{" "}
                  Years
                </p>
              </div>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}