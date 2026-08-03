"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { useUpdateAvailability } from "@/hooks/availability/useUpdateAvailability";

import {
  availabilitySchema,
  AvailabilityFormValues,
  AvailabilitySubmitValues,
} from "@/validations/availability.validation";

import { TechnicianAvailability } from "@/types/technician";

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

interface EditAvailabilityDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  availability: TechnicianAvailability | null;
}

export default function EditAvailabilityDialog({
  open,
  onOpenChange,
  availability,
}: EditAvailabilityDialogProps) {
  const { mutate, isPending } =
    useUpdateAvailability();

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
    if (availability) {
      reset({
        dayOfWeek: availability.dayOfWeek,
        startTime: availability.startTime,
        endTime: availability.endTime,
      });
    }
  }, [availability, reset]);

  const onSubmit = (
    values: AvailabilitySubmitValues
  ) => {
    if (!availability) return;

    mutate(
      {
        id: availability.id,
        payload: values,
      },
      {
        onSuccess: (response) => {
          toast.success(response.message);

          onOpenChange(false);
        },

        onError: (error: any) => {
          toast.error(
            error?.response?.data?.message ??
              "Failed to update availability."
          );
        },
      }
    );
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            Edit Availability
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <div className="space-y-2">
            <Label>Day of Week</Label>

            <Select
              defaultValue={
                availability?.dayOfWeek
              }
              onValueChange={(value) =>
                setValue(
                  "dayOfWeek",
                  value as AvailabilitySubmitValues["dayOfWeek"],
                  {
                    shouldValidate: true,
                  }
                )
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="MONDAY">
                  Monday
                </SelectItem>

                <SelectItem value="TUESDAY">
                  Tuesday
                </SelectItem>

                <SelectItem value="WEDNESDAY">
                  Wednesday
                </SelectItem>

                <SelectItem value="THURSDAY">
                  Thursday
                </SelectItem>

                <SelectItem value="FRIDAY">
                  Friday
                </SelectItem>

                <SelectItem value="SATURDAY">
                  Saturday
                </SelectItem>

                <SelectItem value="SUNDAY">
                  Sunday
                </SelectItem>
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

            <Input
              type="time"
              {...register("startTime")}
            />

            {errors.startTime && (
              <p className="text-sm text-destructive">
                {errors.startTime.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label>End Time</Label>

            <Input
              type="time"
              {...register("endTime")}
            />

            {errors.endTime && (
              <p className="text-sm text-destructive">
                {errors.endTime.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isPending}
          >
            {isPending
              ? "Updating..."
              : "Update Availability"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}