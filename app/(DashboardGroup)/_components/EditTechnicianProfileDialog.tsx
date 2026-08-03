"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
  createTechnicianProfileSchema,
  CreateTechnicianProfileFormValues,
} from "@/validations/technician-profile.validation";

import { Technician } from "@/types/technician";

import { useUpdateTechnicianProfile } from "@/hooks/technician/useUpdateTechnicianProfile";

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

interface EditTechnicianProfileDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  technician: Technician | null;
}

export default function EditTechnicianProfileDialog({
  open,
  onOpenChange,
  technician,
}: EditTechnicianProfileDialogProps) {
  const { mutate, isPending } =
    useUpdateTechnicianProfile();

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
    if (open && technician) {
      reset({
        bio: technician.bio ?? "",
        experienceYears:
          technician.experienceYears,
        location: {
          country:
            technician.location.country,
          division:
            technician.location.division,
          district:
            technician.location.district,
          area: technician.location.area,
          postalCode:
            technician.location
              .postalCode ?? "",
        },
      });
    }
  }, [open, technician, reset]);

  const onSubmit = (
    values: CreateTechnicianProfileFormValues
  ) => {
    if (!technician) return;

    mutate(values, {
      onSuccess: (response) => {
        toast.success(response.message);
        onOpenChange(false);
      },

      onError: (error: any) => {
        toast.error(
          error?.response?.data?.message ??
            "Failed to update technician profile."
        );
      },
    });
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            Edit Technician Profile
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <div className="space-y-2">
            <Label htmlFor="bio">
              Bio
            </Label>

            <Textarea
              id="bio"
              placeholder="Tell customers about yourself..."
              {...register("bio")}
            />

            {errors.bio && (
              <p className="text-sm text-destructive">
                {errors.bio.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="experienceYears">
              Experience (Years)
            </Label>

            <Input
              id="experienceYears"
              type="number"
              {...register(
                "experienceYears",
                {
                  valueAsNumber: true,
                }
              )}
            />

            {errors.experienceYears && (
              <p className="text-sm text-destructive">
                {
                  errors.experienceYears
                    .message
                }
              </p>
            )}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>
                Country
              </Label>

              <Input
                {...register(
                  "location.country"
                )}
              />

              {errors.location
                ?.country && (
                <p className="text-sm text-destructive">
                  {
                    errors.location
                      .country.message
                  }
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>
                Division
              </Label>

              <Input
                {...register(
                  "location.division"
                )}
              />

              {errors.location
                ?.division && (
                <p className="text-sm text-destructive">
                  {
                    errors.location
                      .division.message
                  }
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>
                District
              </Label>

              <Input
                {...register(
                  "location.district"
                )}
              />

              {errors.location
                ?.district && (
                <p className="text-sm text-destructive">
                  {
                    errors.location
                      .district.message
                  }
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Area</Label>

              <Input
                {...register(
                  "location.area"
                )}
              />

              {errors.location
                ?.area && (
                <p className="text-sm text-destructive">
                  {
                    errors.location
                      .area.message
                  }
                </p>
              )}
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label>
                Postal Code
              </Label>

              <Input
                {...register(
                  "location.postalCode"
                )}
              />

              {errors.location
                ?.postalCode && (
                <p className="text-sm text-destructive">
                  {
                    errors.location
                      .postalCode
                      .message
                  }
                </p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isPending}
          >
            {isPending
              ? "Saving..."
              : "Save Changes"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}