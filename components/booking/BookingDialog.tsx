"use client";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
dayjs.extend(utc);
import { TechnicianAvailability, TechnicianService } from "@/types/technician";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
  createBookingSchema,
  CreateBookingFormValues,
} from "@/validations/booking.validation";

import { useCreateBooking } from "@/hooks/booking/useCreateBooking";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: TechnicianService | null;
  availabilities: TechnicianAvailability[];
}

export default function BookingDialog({
  open,
  onOpenChange,
  service,
  availabilities,
}: BookingDialogProps) {
    const router = useRouter();

const { mutate, isPending } = useCreateBooking();

const {
  register,
  handleSubmit,
  reset,
  setValue,
  formState: { errors },
} = useForm<CreateBookingFormValues>({
  resolver: zodResolver(createBookingSchema),
  defaultValues: {
    technicianServiceId: "",
    availabilityId: "",
    address: "",
    problemDescription: "",
  },
});

useEffect(() => {
  if (service) {
    setValue("technicianServiceId", service.id);
  }
}, [service, setValue]);

const onSubmit = (values: CreateBookingFormValues) => {
  mutate(values, {
    onSuccess: (response) => {
      toast.success(response.message);

      reset();

      onOpenChange(false);

      router.push(`/booking/${response.data.id}`);
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
          "Booking failed."
      );
    },
  });
};

useEffect(() => {
  if (!open) {
    reset();
  }
}, [open, reset]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Create Booking</DialogTitle>
        </DialogHeader>

        <form  onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Service */}
          <div className="space-y-2">
            <Label>Service</Label>

            <Input value={service?.service.name ?? ""} disabled />
          </div>

          {/* Availability */}
          {/* Availability */}
<div className="space-y-2">
  <Label>Availability</Label>

  <Select
    onValueChange={(value) =>
      setValue("availabilityId", value, {
        shouldValidate: true,
      })
    }
  >
    <SelectTrigger className="w-full">
      <SelectValue placeholder="Select Availability" />
    </SelectTrigger>

    <SelectContent>
      {availabilities
        .filter(
          (item) => item.status === "AVAILABLE"
        )
        .map((item) => (
          <SelectItem
            key={item.id}
            value={item.id}
              className="cursor-pointer"
          >
            
            {item.dayOfWeek.charAt(0) +
              item.dayOfWeek
                .slice(1)
                .toLowerCase()}{" "}
            •{" "}
            {dayjs
              .utc(item.startTime)
              .format("hh:mm A")}{" "}
            -{" "}
            {dayjs
              .utc(item.endTime)
              .format("hh:mm A")}
          </SelectItem>
        ))}
    </SelectContent>
  </Select>

  {errors.availabilityId && (
    <p className="text-sm text-destructive">
      {errors.availabilityId.message}
    </p>
  )}
</div>
          {/* Address */}
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>

            <Input
              id="address"
              placeholder="House #12, Road #5, Dhaka"
              {...register("address")}
            />

            {errors.address && (
              <p className="text-sm text-destructive">
                {errors.address.message}
              </p>
            )}
          </div>

          {/* Problem */}
          <div className="space-y-2">
            <Label htmlFor="problemDescription">Problem Description</Label>

            <Textarea
              id="problemDescription"
              rows={5}
              placeholder="Describe your problem..."
              {...register("problemDescription")}
            />

            {errors.problemDescription && (
              <p className="text-sm text-destructive">
                {errors.problemDescription.message}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Creating Booking..." : "Create Booking"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}