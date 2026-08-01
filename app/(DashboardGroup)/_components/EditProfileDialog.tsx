"use client";

import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  updateProfileSchema,
  UpdateProfileFormValues,
} from "@/validations/profile.validation";

import { ProfileUser } from "@/types/user";

import { useUpdateProfile } from "@/hooks/auth/useUpdateProfile";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EditProfileDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: ProfileUser;
}

export default function EditProfileDialog({
  open,
  onOpenChange,
  user,
}: EditProfileDialogProps) {
  const { mutate, isPending } = useUpdateProfile();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateProfileFormValues>({
    resolver: zodResolver(updateProfileSchema),
  });

  useEffect(() => {
    if (open) {
      reset({
        name: user.name,
        phone: user.phone ?? "",
        profileImage: user.profileImage ?? "",
      });
    }
  }, [open, user, reset]);

const onSubmit = (
  values: UpdateProfileFormValues
) => {
  const payload: Record<string, string> = {};

  if (values.name !== user.name) {
    payload.name = values.name;
  }

  if ((values.phone ?? "") !== (user.phone ?? "")) {
    payload.phone = values.phone ?? "";
  }

  if (
    values.profileImage &&
    values.profileImage !== (user.profileImage ?? "")
  ) {
    payload.profileImage = values.profileImage;
  }

  if (Object.keys(payload).length === 0) {
    toast.info("No changes to save.");
    return;
  }

  mutate(payload, {
    onSuccess: (response) => {
      toast.success(response.message);

      reset({
        name: response.data.name,
        phone: response.data.phone ?? "",
        profileImage: response.data.profileImage ?? "",
      });

      onOpenChange(false);
    },

    onError: (error: any) => {
      console.log(error.response?.data);

      toast.error(
        error?.response?.data?.message ??
          "Failed to update profile."
      );
    },
  });
};
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-2">
            <Label>Email</Label>

            <Input value={user.email} disabled />
          </div>

          {/* Name */}

          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>

            <Input id="name" {...register("name")} />

            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          {/* Phone */}

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>

            <Input
              id="phone"
              placeholder="Enter your phone number"
              {...register("phone")}
            />

            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>

          {/* Profile Image */}

          <div className="space-y-2">
            <Label htmlFor="profileImage">Profile Image URL</Label>

            <Input
              id="profileImage"
              placeholder="https://example.com/avatar.jpg"
              {...register("profileImage")}
            />
            {errors.profileImage && (
              <p className="text-sm text-destructive">
                {errors.profileImage.message}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Saving..." : "Save Changes"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}