"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { useCategories } from "@/hooks/useCategories";
import { useCreateServiceRequest } from "@/hooks/service-request/useCreateServiceRequest";

import {
  createServiceRequestSchema,
  CreateServiceRequestFormValues,
  CreateServiceRequestSubmitValues,
} from "@/validations/service-request.validation";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CreateServiceRequestDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CreateServiceRequestDialog({
  open,
  onOpenChange,
}: CreateServiceRequestDialogProps) {
  const { data: categories = [] } =
    useCategories();

  const { mutate, isPending } =
    useCreateServiceRequest();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<
    CreateServiceRequestFormValues,
    any,
    CreateServiceRequestSubmitValues
  >({
    resolver: zodResolver(
      createServiceRequestSchema
    ),
  });

  useEffect(() => {
    if (open) {
      reset({
        categoryId: "",
        requestedServiceName: "",
        description: "",
      });
    }
  }, [open, reset]);

  const onSubmit = (
    values: CreateServiceRequestSubmitValues
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
            "Failed to create request."
        );
      },
    });
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            Request New Service
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <div className="space-y-2">
            <Label>Category</Label>

            <Select
              onValueChange={(value) =>
                setValue(
                  "categoryId",
                  value,
                  {
                    shouldValidate: true,
                  }
                )
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>

              <SelectContent>
                {categories.map((category) => (
                  <SelectItem
                    key={category.id}
                    value={category.id}
                  >
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {errors.categoryId && (
              <p className="text-sm text-destructive">
                {errors.categoryId.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label>
              Requested Service Name
            </Label>

            <Input
              placeholder="Solar Panel Installation"
              {...register(
                "requestedServiceName"
              )}
            />

            {errors.requestedServiceName && (
              <p className="text-sm text-destructive">
                {
                  errors
                    .requestedServiceName
                    .message
                }
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Description</Label>

            <Textarea
              rows={5}
              placeholder="Describe the service you want the admin to add..."
              {...register("description")}
            />

            {errors.description && (
              <p className="text-sm text-destructive">
                {errors.description.message}
              </p>
            )}
          </div>

          <Button
            className="w-full"
            disabled={isPending}
          >
            {isPending
              ? "Submitting..."
              : "Submit Request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}