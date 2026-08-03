"use client";

import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import {
  updateCategorySchema,
  UpdateCategoryFormValues,
  UpdateCategorySubmitValues,
} from "@/validations/category.validation";

import { Category } from "@/types/category";

import { useUpdateCategory } from "@/hooks/admin/useUpdateCategory";

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

interface EditCategoryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  category: Category | null;
}

export default function EditCategoryDialog({
  open,
  onOpenChange,
  category,
}: EditCategoryDialogProps) {
  const { mutate, isPending } =
    useUpdateCategory();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<
    UpdateCategoryFormValues,
    any,
    UpdateCategorySubmitValues
  >({
    resolver: zodResolver(
      updateCategorySchema
    ),
  });

  useEffect(() => {
    if (open && category) {
      reset({
        name: category.name,
        description:
          category.description,
      });
    }
  }, [open, category, reset]);

  if (!category) return null;

  const onSubmit = (
    values: UpdateCategorySubmitValues
  ) => {
    const payload: UpdateCategorySubmitValues =
      {};

    if (values.name !== category.name) {
      payload.name = values.name;
    }

    if (
      values.description !==
      category.description
    ) {
      payload.description =
        values.description;
    }

    if (
      Object.keys(payload).length === 0
    ) {
      toast.info(
        "No changes to save."
      );

      return;
    }

    mutate(
      {
        id: category.id,
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
              "Failed to update category."
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
            Edit Category
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(
            onSubmit
          )}
          className="space-y-5"
        >
          <div className="space-y-2">
            <Label>Name</Label>

            <Input
              {...register("name")}
            />

            {errors.name && (
              <p className="text-sm text-destructive">
                {
                  errors.name
                    .message
                }
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
                  errors
                    .description
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
              : "Update Category"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}