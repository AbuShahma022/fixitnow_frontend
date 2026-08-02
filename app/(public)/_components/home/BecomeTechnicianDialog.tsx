"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
  createTechnicianProfileSchema,
  CreateTechnicianProfileFormValues,
} from "@/validations/technician-profile.validation";

import { useCreateTechnicianProfile } from "@/hooks/technician/useCreateTechnicianProfile";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface BecomeTechnicianDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function BecomeTechnicianDialog({
  open,
  onOpenChange,
}: BecomeTechnicianDialogProps) {
  const { mutate, isPending } =
    useCreateTechnicianProfile();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } =
    useForm<CreateTechnicianProfileFormValues>({
      resolver: zodResolver(
        createTechnicianProfileSchema
      ),
    });

  useEffect(() => {
    if (open) {
      reset({
        bio: "",
        experienceYears: 0,

        location: {
          country: "",
          division: "",
          district: "",
          area: "",
          postalCode: "",
        },
      });
    }
  }, [open, reset]);

  const onSubmit = (
    values: CreateTechnicianProfileFormValues
  ) => {
    mutate(values, {
      onSuccess: (response) => {
        toast.success(response.message);

        onOpenChange(false);
      },

      onError: (error: any) => {
        toast.error(
          error?.response?.data?.message ??
            "Failed to create technician profile."
        );
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Become a Technician</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>

            <Textarea
              id="bio"
              placeholder="Tell customers about yourself..."
              {...register("bio")}
            />

            {errors.bio && (
              <p className="text-sm text-destructive">{errors.bio.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="experienceYears">Experience (Years)</Label>

            <Input
              id="experienceYears"
              type="number"
              {...register("experienceYears", {
                valueAsNumber: true,
              })}
            />

            {errors.experienceYears && (
              <p className="text-sm text-destructive">
                {errors.experienceYears.message}
              </p>
            )}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Country</Label>

              <Input {...register("location.country")} />

              {errors.location?.country && (
                <p className="text-sm text-destructive">
                  {errors.location.country.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Division</Label>

              <Input {...register("location.division")} />

              {errors.location?.division && (
                <p className="text-sm text-destructive">
                  {errors.location.division.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>District</Label>

              <Input {...register("location.district")} />

              {errors.location?.district && (
                <p className="text-sm text-destructive">
                  {errors.location.district.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Area</Label>

              <Input {...register("location.area")} />

              {errors.location?.area && (
                <p className="text-sm text-destructive">
                  {errors.location.area.message}
                </p>
              )}
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label>Postal Code</Label>

              <Input {...register("location.postalCode")} />

              {errors.location?.postalCode && (
                <p className="text-sm text-destructive">
                  {errors.location.postalCode.message}
                </p>
              )}
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Creating..." : "Become Technician"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}