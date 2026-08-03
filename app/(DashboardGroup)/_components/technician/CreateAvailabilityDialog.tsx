"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { useCreateAvailability } from "@/hooks/availability/useCreateAvailability";

import {
  availabilitySchema,
  AvailabilityFormValues,
  AvailabilitySubmitValues,
} from "@/validations/availability.validation";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CreateAvailabilityDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CreateAvailabilityDialog({
  open,
  onOpenChange,
}: CreateAvailabilityDialogProps) {
  const { mutate, isPending } =
    useCreateAvailability();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<
    AvailabilityFormValues,
    any,
    AvailabilitySubmitValues
  >({
    resolver: zodResolver(
      availabilitySchema
    ),
  });

  useEffect(() => {
    if (open) {
      reset({
        dayOfWeek: "MONDAY",
        startTime: "",
        endTime: "",
      });
    }
  }, [open, reset]);

  const onSubmit = (
    values: AvailabilitySubmitValues
  ) => {
    mutate(values, {
      onSuccess: (response) => {
        toast.success(response.message);

        reset();
        onOpenChange(false);
      },

      onError: (error: any) => {
        toast.error(
          error?.response?.data?.message ??
            "Failed to create availability."
        );
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Add Availability</DialogTitle>
        </DialogHeader>

        {/* Form  */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-2">
            <Label>Day of Week</Label>

            <Select
              defaultValue="MONDAY"
              onValueChange={(value) =>
                setValue(
                  "dayOfWeek",
                  value as AvailabilitySubmitValues["dayOfWeek"],
                  {
                    shouldValidate: true,
                  },
                )
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="MONDAY">Monday</SelectItem>

                <SelectItem value="TUESDAY">Tuesday</SelectItem>

                <SelectItem value="WEDNESDAY">Wednesday</SelectItem>

                <SelectItem value="THURSDAY">Thursday</SelectItem>

                <SelectItem value="FRIDAY">Friday</SelectItem>

                <SelectItem value="SATURDAY">Saturday</SelectItem>

                <SelectItem value="SUNDAY">Sunday</SelectItem>
              </SelectContent>
            </Select>

            {errors.dayOfWeek && (
              <p className="text-sm text-destructive">
                {errors.dayOfWeek.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Start Time</Label>

            <Input type="time" {...register("startTime")} />

            {errors.startTime && (
              <p className="text-sm text-destructive">
                {errors.startTime.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label>End Time</Label>

            <Input type="time" {...register("endTime")} />

            {errors.endTime && (
              <p className="text-sm text-destructive">
                {errors.endTime.message}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Creating..." : "Create Availability"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}