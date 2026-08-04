"use client";

import dayjs from "dayjs";
import { CreditCard, Receipt } from "lucide-react";
import Link from "next/link";

import Container from "@/shared/container";

import { useMyPayments } from "@/hooks/payment/useMyPayments";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PaymentHistorySkeleton from "../../_components/PaymentHistorySkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function PaymentHistoryPage() {
  const { data, isLoading } = useMyPayments();

  const payments = data?.data ?? [];

 if (isLoading) {
  return (
    <Container className="space-y-6 py-8">
      <div>
        <Skeleton className="h-9 w-60" />
        <Skeleton className="mt-2 h-5 w-72" />
      </div>

      <PaymentHistorySkeleton />
    </Container>
  );
}
  if (payments.length === 0) {
    return (
      <Container className="py-8">
        <Card>
          <CardContent className="flex flex-col items-center py-16">
            <Receipt className="mb-4 h-12 w-12 text-muted-foreground" />

            <h2 className="text-xl font-semibold">
              No Payments Yet
            </h2>

            <p className="mt-2 text-muted-foreground">
              Your payment history will appear here.
            </p>
          </CardContent>
        </Card>
      </Container>
    );
  }

  return (
    <Container className="space-y-6 py-8">
      <div>
        <h1 className="text-3xl font-bold">
          Payment History
        </h1>

        <p className="text-muted-foreground">
          View all your payments.
        </p>
      </div>

      <div className="space-y-4">
        {payments.map((payment) => (
          <Card key={payment.id}>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>
                  {
                    payment.booking.technicianService
                      .service.name
                  }
                </CardTitle>

                <p className="mt-1 text-sm text-muted-foreground">
                  Technician:{" "}
                  {
                    payment.booking.technicianService
                      .technicianProfile.user.name
                  }
                </p>
              </div>

              <Badge
                variant={
                  payment.status === "SUCCESS"
                    ? "default"
                    : "secondary"
                }
              >
                {payment.status}
              </Badge>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Amount
                  </p>

                  <p className="font-semibold">
                    ৳ {payment.amount}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Provider
                  </p>

                  <p>{payment.provider}</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Paid At
                  </p>

                  <p>
                    {payment.paidAt
                      ? dayjs(payment.paidAt).format(
                          "DD MMM YYYY"
                        )
                      : "-"}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Transaction
                  </p>

                  <p className="truncate">
                    {payment.transactionId ?? "-"}
                  </p>
                </div>
              </div>

              <Button asChild>
                <Link
                  href={`/booking/${payment.booking.id}`}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  View Booking
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}