"use client";

import { toast } from "sonner";



import { useDeleteMasterService } from "@/hooks/admin/useDeleteMasterService";

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
import { MasterService } from "@/types/service";

interface DeleteMasterServiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: MasterService | null;
}

export default function DeleteMasterServiceDialog({
  open,
  onOpenChange,
  service,
}: DeleteMasterServiceDialogProps) {
  const { mutate, isPending } =
    useDeleteMasterService();

  if (!service) return null;

  const handleDelete = () => {
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
            Delete Master Service
          </AlertDialogTitle>

          <AlertDialogDescription>
            Are you sure you want to delete{" "}
            <strong>{service.name}</strong>?
            <br />
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={(e) => {
              e.preventDefault();
              handleDelete();
            }}
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