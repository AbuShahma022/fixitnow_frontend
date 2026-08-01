"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

import { Loader2 } from "lucide-react";

import { useVerifyPaymentSession } from "@/hooks/payment/useVerifyPaymentSession";

export default function PaymentSuccess() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const sessionId = searchParams.get("session_id");

  const { mutate } = useVerifyPaymentSession();

  useEffect(() => {
    if (!sessionId) {
      router.replace("/");

      return;
    }

    mutate(sessionId, {
      onSuccess: (response) => {
        toast.success("Payment completed successfully.");

        router.replace(
          `/booking/${response.data.bookingId}`
        );
      },

      onError: () => {
        toast.error("Unable to verify payment.");

        router.replace("/");
      },
    });
  }, [sessionId, mutate, router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-8 w-8 animate-spin" />

        <p className="text-muted-foreground">
          Verifying your payment...
        </p>
      </div>
    </div>
  );
}