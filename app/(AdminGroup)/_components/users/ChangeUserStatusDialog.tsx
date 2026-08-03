"use client";

import { toast } from "sonner";

import { ProfileUser } from "@/types/user";

import { useUpdateUserStatus } from "@/hooks/admin/useUpdateUserStatus";

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

interface ChangeUserStatusDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: ProfileUser | null;
}

export default function ChangeUserStatusDialog({
  open,
  onOpenChange,
  user,
}: ChangeUserStatusDialogProps) {
  const { mutate, isPending } =
    useUpdateUserStatus();

  if (!user) return null;

  const newStatus =
    user.status === "ACTIVE"
      ? "BLOCKED"
      : "ACTIVE";

  const handleSubmit = () => {
    mutate(
      {
        id: user.id,
        payload: {
          status: newStatus,
        },
      },
      {
        onSuccess: (response) => {
          toast.success(response.message);

          onOpenChange(false);
        },

        onError: (error: any) => {
          toast.error(
            error?.response?.data?.message ??
              "Failed to update user status."
          );
        },
      }
    );
  };

  return (
    <AlertDialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {newStatus === "BLOCKED"
              ? "Block User"
              : "Activate User"}
          </AlertDialogTitle>

          <AlertDialogDescription>
            Are you sure you want to{" "}
            <strong>
              {newStatus === "BLOCKED"
                ? "block"
                : "activate"}
            </strong>{" "}
            <strong>{user.name}</strong>?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            disabled={isPending}
          >
            {isPending
              ? "Saving..."
              : newStatus === "BLOCKED"
              ? "Block"
              : "Activate"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}