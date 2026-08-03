"use client";

import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import {
  createMasterServiceSchema,
  CreateMasterServiceFormValues,
  CreateMasterServiceSubmitValues,
} from "@/validations/master-service.validation";

import { useCreateMasterService } from "@/hooks/admin/useCreateMasterService";
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

interface CreateMasterServiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CreateMasterServiceDialog({
  open,
  onOpenChange,
}: CreateMasterServiceDialogProps) {
  const { data: categories = [] } =
    useCategories();

  const { mutate, isPending } =
    useCreateMasterService();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<
    CreateMasterServiceFormValues,
    any,
    CreateMasterServiceSubmitValues
  >({
    resolver: zodResolver(
      createMasterServiceSchema
    ),
  });

  useEffect(() => {
    if (open) {
      reset({
        categoryId: "",
        name: "",
        description: "",
      });
    }
  }, [open, reset]);

  const onSubmit = (
    values: CreateMasterServiceSubmitValues
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
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            Create Master Service
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
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
              placeholder="Fan Installation"
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
            className="w-full"
            type="submit"
            disabled={isPending}
          >
            {isPending
              ? "Creating..."
              : "Create Service"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}