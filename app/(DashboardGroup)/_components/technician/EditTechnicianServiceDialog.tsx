"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { TechnicianService } from "@/types/technician";

import {
  createTechnicianServiceSchema,
  CreateTechnicianServiceFormValues,
  CreateTechnicianServiceSubmitValues,
} from "@/validations/technician-service.validation";

import { useUpdateTechnicianService } from "@/hooks/technician/useUpdateTechnicianService";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface EditTechnicianServiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: TechnicianService | null;
}

export default function EditTechnicianServiceDialog({
  open,
  onOpenChange,
  service,
}: EditTechnicianServiceDialogProps) {
  const { mutate, isPending } =
    useUpdateTechnicianService();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<
    CreateTechnicianServiceFormValues,
    any,
    CreateTechnicianServiceSubmitValues
  >({
    resolver: zodResolver(
      createTechnicianServiceSchema
    ),
  });

  useEffect(() => {
    if (service) {
      reset({
        serviceId: service.serviceId,
        price: Number(service.price),
        description:
          service.description ?? "",
      });
    }
  }, [service, reset]);

  const onSubmit = (
    values: CreateTechnicianServiceSubmitValues
  ) => {
    if (!service) return;

    mutate(
      {
        id: service.id,
        payload: {
          price: values.price,
          description:
            values.description,
        },
      },
      {
        onSuccess: (response) => {
          toast.success(response.message);

          onOpenChange(false);
        },

        onError: (error: any) => {
          toast.error(
            error?.response?.data
              ?.message ??
              "Failed to update service."
          );
        },
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit Service</DialogTitle>
        </DialogHeader>

        {/* Form comes next */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium">Service</label>

            <div className="rounded-md border bg-muted px-3 py-2 text-sm">
              {service?.service.name}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Price</label>

            <Input type="number" {...register("price")} />

            {errors.price && (
              <p className="text-sm text-destructive">{errors.price.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Description</label>

            <Textarea rows={4} {...register("description")} />

            {errors.description && (
              <p className="text-sm text-destructive">
                {errors.description.message}
              </p>
            )}
          </div>

          <Button className="w-full" type="submit" disabled={isPending}>
            {isPending ? "Updating..." : "Update Service"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}