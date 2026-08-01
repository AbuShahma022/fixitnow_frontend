import {CreditCard, TriangleAlert} from "lucide-react";

import {Booking} from "@/types/booking";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {toast} from "sonner";

import {useCancelBooking} from "@/hooks/booking/useCancelBooking";
import {useCreateCheckoutSession} from "@/hooks/payment/useCreateCheckoutSession";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface BookingActionsProps {
  booking: Booking;
}

export default function BookingActions({booking}: BookingActionsProps) {
  const {mutate, isPending} = useCreateCheckoutSession();
  const {mutate: cancelBooking, isPending: isCancelling} = useCancelBooking();
  const handlePayment = () => {
    mutate(booking.id, {
      onSuccess: (response) => {
        window.location.href = response.data.checkoutUrl;
      },

      onError: (error: any) => {
        toast.error(
          error?.response?.data?.message ?? "Unable to start payment.",
        );
      },
    });
  };

  const handleCancelBooking = () => {
    cancelBooking(booking.id, {
      onSuccess: (response) => {
        toast.success(response.message);
      },

      onError: (error: any) => {
        toast.error(
          error?.response?.data?.message ?? "Unable to cancel booking.",
        );
      },
    });
  };
  const canPay = !booking.payment;

  const canCancel = booking.status === "REQUESTED";

  if (!canPay && !canCancel) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Booking Actions</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {canPay && (
          <div className="rounded-lg border p-4">
            <div className="flex items-start gap-3">
              <CreditCard className="mt-0.5 h-5 w-5 text-primary" />

              <div className="flex-1">
                <h3 className="font-medium">Payment</h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Complete your payment to confirm your booking and reserve your
                  selected service.
                </p>

                <Button
                  className="mt-4"
                  onClick={handlePayment}
                  disabled={isPending}
                >
                  {isPending ? "Redirecting..." : "Pay with Stripe"}
                </Button>
              </div>
            </div>
          </div>
        )}

        {canCancel && (
          <div className="rounded-lg border p-4">
            <div className="flex items-start gap-3">
              <TriangleAlert className="mt-0.5 h-5 w-5 text-muted-foreground" />

              <div className="flex-1">
                <h3 className="font-medium">Cancellation</h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  You can cancel this booking until the technician accepts your
                  request.
                </p>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" className="mt-4">
                      Cancel Booking
                    </Button>
                  </AlertDialogTrigger>

                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Cancel Booking?</AlertDialogTitle>

                      <AlertDialogDescription>
                        This action cannot be undone. Your booking request will
                        be cancelled.
                      </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                      <AlertDialogCancel>Keep Booking</AlertDialogCancel>

                      <AlertDialogAction
                        onClick={handleCancelBooking}
                        disabled={isCancelling}
                      >
                        {isCancelling ? "Cancelling..." : "Yes, Cancel"}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
