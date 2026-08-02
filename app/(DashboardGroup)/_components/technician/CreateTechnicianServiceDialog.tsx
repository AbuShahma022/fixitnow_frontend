"use client";
import { z } from "zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { useMasterServices } from "@/hooks/useMasterServices";
import { useCreateTechnicianService } from "@/hooks/technician/useCreateTechnicianService";

import {
  createTechnicianServiceSchema,
  CreateTechnicianServiceFormValues,
  CreateTechnicianServiceSubmitValues,
} from "@/validations/technician-service.validation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CreateTechnicianServiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CreateTechnicianServiceDialog({
  open,
  onOpenChange,
}: CreateTechnicianServiceDialogProps) {
  const { data: masterServices = [] } =
    useMasterServices();

  const { mutate, isPending } =
    useCreateTechnicianService();
const {
  register,
  handleSubmit,
  reset,
  setValue,
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
    if (open) {
      reset({
        serviceId: "",
        price: 0,
        description: "",
      });
    }
  }, [open, reset]);

  const onSubmit = (
    values:  CreateTechnicianServiceSubmitValues
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
            "Failed to create service."
        );
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Add Service</DialogTitle>
        </DialogHeader>

        {/* Form comes next */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-2">
            <Label>Service</Label>

            <Select onValueChange={(value) => setValue("serviceId", value,{
              shouldValidate: true
            })}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>

              <SelectContent className="max-h-72">
                {masterServices.map((service) => (
                  <SelectItem key={service.id} value={service.id}>
                    {service.name}  ({service.category.name})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {errors.serviceId && (
              <p className="text-sm text-destructive">
                {errors.serviceId.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Price</Label>

            <Input type="number" {...register("price")} />

            {errors.price && (
              <p className="text-sm text-destructive">{errors.price.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Description</Label>

            <Textarea rows={4} {...register("description")} />

            {errors.description && (
              <p className="text-sm text-destructive">
                {errors.description.message}
              </p>
            )}
          </div>

          <Button className="w-full" disabled={isPending} type="submit">
            {isPending ? "Creating..." : "Create Service"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}