"use client";

import { useState } from "react";

import Container from "@/shared/container";

import { useAllPayments } from "@/hooks/admin/useAllPayments";

import { Payment } from "@/types/payment";
import PaymentsTable from "../../_components/PaymentsTable";
import PaymentDetailsDialog from "../../_components/PaymentDetailsDialog";
import PaymentsSkeleton from "../../_components/PaymentsSkeleton";


export default function PaymentsPage() {
  const { data, isLoading } =
    useAllPayments();

  const payments = data?.data ?? [];

  const [
    selectedPayment,
    setSelectedPayment,
  ] = useState<Payment | null>(
    null
  );

  const [detailsOpen, setDetailsOpen] =
    useState(false);

  if (isLoading) {
    return (
      <Container className="py-8">
        <PaymentsSkeleton/>
      </Container>
    );
  }

  return (
    <Container className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Payments
        </h1>

        <p className="mt-2 text-muted-foreground">
          View all platform payments.
        </p>
      </div>

      <PaymentsTable
        payments={payments}
        onView={(payment) => {
          setSelectedPayment(payment);
          setDetailsOpen(true);
        }}
      />

      <PaymentDetailsDialog
        payment={selectedPayment}
        open={detailsOpen}
        onOpenChange={setDetailsOpen}
      />
    </Container>
  );
}