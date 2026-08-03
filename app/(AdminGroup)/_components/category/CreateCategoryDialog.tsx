"use client";

import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import {
  createCategorySchema,
  CreateCategoryFormValues,
  CreateCategorySubmitValues,
} from "@/validations/category.validation";

import { useCreateCategory } from "@/hooks/admin/useCreateCategory";

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

interface CreateCategoryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CreateCategoryDialog({
  open,
  onOpenChange,
}: CreateCategoryDialogProps) {
  const { mutate, isPending } =
    useCreateCategory();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<
    CreateCategoryFormValues,
    any,
    CreateCategorySubmitValues
  >({
    resolver: zodResolver(
      createCategorySchema
    ),
  });

  useEffect(() => {
    if (open) {
      reset({
        name: "",
        description: "",
      });
    }
  }, [open, reset]);

  const onSubmit = (
    values: CreateCategorySubmitValues
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
            "Failed to create category."
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
            Create Category
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <div className="space-y-2">
            <Label htmlFor="name">
              Category Name
            </Label>

            <Input
              id="name"
              placeholder="Electrical"
              {...register("name")}
            />

            {errors.name && (
              <p className="text-sm text-destructive">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">
              Description
            </Label>

            <Textarea
              id="description"
              rows={4}
              placeholder="Describe this category..."
              {...register("description")}
            />

            {errors.description && (
              <p className="text-sm text-destructive">
                {errors.description.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isPending}
          >
            {isPending
              ? "Creating..."
              : "Create Category"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}