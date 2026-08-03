"use client";

import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import {
  updateMasterServiceSchema,
  UpdateMasterServiceFormValues,
  UpdateMasterServiceSubmitValues,
} from "@/validations/master-service.validation";



import { useUpdateMasterService } from "@/hooks/admin/useUpdateMasterService";
import { useCategories } from "@/hooks/useCategories";

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
import { MasterService } from "@/types/service";

interface EditMasterServiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: MasterService | null;
}

export default function EditMasterServiceDialog({
  open,
  onOpenChange,
  service,
}: EditMasterServiceDialogProps) {
  const { data: categories = [] } =
    useCategories();

  const { mutate, isPending } =
    useUpdateMasterService();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<
    UpdateMasterServiceFormValues,
    any,
    UpdateMasterServiceSubmitValues
  >({
    resolver: zodResolver(
      updateMasterServiceSchema
    ),
  });

  useEffect(() => {
    if (open && service) {
      reset({
        categoryId: service.categoryId,
        name: service.name,
        description: service.description,
      });
    }
  }, [open, service, reset]);

  if (!service) return null;

  const onSubmit = (
    values: UpdateMasterServiceSubmitValues
  ) => {
    const payload: UpdateMasterServiceSubmitValues =
      {};

    if (
      values.categoryId !==
      service.categoryId
    ) {
      payload.categoryId =
        values.categoryId;
    }

    if (
      values.name !== service.name
    ) {
      payload.name = values.name;
    }

    if (
      values.description !==
      service.description
    ) {
      payload.description =
        values.description;
    }

    if (
      Object.keys(payload).length ===
      0
    ) {
      toast.info(
        "No changes to save."
      );

      return;
    }

    mutate(
      {
        id: service.id,
        payload,
      },
      {
        onSuccess: (response) => {
          toast.success(
            response.message
          );

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
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            Edit Master Service
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(
            onSubmit
          )}
          className="space-y-5"
        >
          <div className="space-y-2">
            <Label>
              Category
            </Label>

            <select
              className="flex h-10 w-full rounded-md border bg-background px-3 text-sm"
              {...register("categoryId")}
            >
              <option value="">
                Select Category
              </option>

              {categories.map(
                (category) => (
                  <option
                    key={category.id}
                    value={category.id}
                  >
                    {category.name}
                  </option>
                )
              )}
            </select>

            {errors.categoryId && (
              <p className="text-sm text-destructive">
                {
                  errors.categoryId
                    .message
                }
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label>
              Service Name
            </Label>

            <Input
              {...register("name")}
            />

            {errors.name && (
              <p className="text-sm text-destructive">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label>
              Description
            </Label>

            <Textarea
              rows={4}
              {...register(
                "description"
              )}
            />

            {errors.description && (
              <p className="text-sm text-destructive">
                {
                  errors.description
                    .message
                }
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isPending}
          >
            {isPending
              ? "Updating..."
              : "Update Service"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}