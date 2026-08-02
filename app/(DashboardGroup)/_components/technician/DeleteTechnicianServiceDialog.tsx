"use client";

import { toast } from "sonner";

import { useDeleteTechnicianService } from "@/hooks/technician/useDeleteTechnicianService";

import { TechnicianService } from "@/types/technician";

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

interface DeleteTechnicianServiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: TechnicianService | null;
}

export default function DeleteTechnicianServiceDialog({
  open,
  onOpenChange,
  service,
}: DeleteTechnicianServiceDialogProps) {
  const { mutate, isPending } =
    useDeleteTechnicianService();

  const handleDelete = () => {
    if (!service) return;

    mutate(service.id, {
      onSuccess: (response) => {
        toast.success(response.message);

        onOpenChange(false);
      },

      onError: (error: any) => {
        toast.error(
          error?.response?.data?.message ??
            "Failed to delete service."
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
            Delete Service
          </AlertDialogTitle>

          <AlertDialogDescription>
            Are you sure you want to delete{" "}
            <span className="font-semibold">
              {service?.service.name}
            </span>
            ? This action cannot be undone.
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