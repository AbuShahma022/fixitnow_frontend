"use client";

import { toast } from "sonner";

import { useDeleteAvailability } from "@/hooks/availability/useDeleteAvailability";

import { TechnicianAvailability } from "@/types/technician";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface DeleteAvailabilityDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  availability: TechnicianAvailability | null;
}

export default function DeleteAvailabilityDialog({
  open,
  onOpenChange,
  availability,
}: DeleteAvailabilityDialogProps) {
  const { mutate, isPending } =
    useDeleteAvailability();

  const handleDelete = () => {
    if (!availability) return;

    mutate(availability.id, {
      onSuccess: (response) => {
        toast.success(response.message);

        onOpenChange(false);
      },

      onError: (error: any) => {
        toast.error(
          error?.response?.data?.message ??
            "Failed to delete availability."
        );
      },
    });
  };

  return (
    <AlertDialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Delete Availability
          </AlertDialogTitle>

          <AlertDialogDescription>
            Are you sure you want to delete
            this availability?
            <br />
            <span className="font-semibold">
              {availability?.dayOfWeek} •{" "}
              {availability?.startTime} -{" "}
              {availability?.endTime}
            </span>
            <br />
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel
            disabled={isPending}
          >
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={handleDelete}
            disabled={isPending}
          >
            {isPending
              ? "Deleting..."
              : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}