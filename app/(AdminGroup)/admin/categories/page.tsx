"use client";

import { useState } from "react";

import Container from "@/shared/container";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useCategories } from "@/hooks/useCategories";

import { Category } from "@/types/category";
import CategoryCard from "../../_components/category/CategoryCard";
import CreateCategoryDialog from "../../_components/category/CreateCategoryDialog";
import EditCategoryDialog from "../../_components/category/EditCategoryDialog";
import DeleteCategoryDialog from "../../_components/category/DeleteCategoryDialog";
import CategoriesSkeleton from "../../_components/category/CategoriesSkeleton";



export default function CategoriesPage() {
  const { data, isLoading } =
    useCategories();

  const categories = data ?? [];

  const [open, setOpen] =
    useState(false);

  const [editOpen, setEditOpen] =
    useState(false);

  const [
    deleteOpen,
    setDeleteOpen,
  ] = useState(false);

  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState<Category | null>(
    null
  );

  if (isLoading) {
    return (
      <Container className="py-8">
        <CategoriesSkeleton />
      </Container>
    );
  }

  return (
    <Container className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Categories
          </h1>

          <p className="mt-2 text-muted-foreground">
            Manage service categories.
          </p>
        </div>

        <Button
          onClick={() => setOpen(true)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Category
        </Button>
      </div>

      {categories.length === 0 ? (
        <p className="py-12 text-center text-muted-foreground">
          No categories found.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onEdit={(category) => {
                setSelectedCategory(
                  category
                );

                setEditOpen(true);
              }}
              onDelete={(
                category
              ) => {
                setSelectedCategory(
                  category
                );

                setDeleteOpen(true);
              }}
            />
          ))}
        </div>
      )}

      <CreateCategoryDialog
        open={open}
        onOpenChange={setOpen}
      />

      <EditCategoryDialog
        open={editOpen}
        onOpenChange={setEditOpen}
        category={selectedCategory}
      />

      <DeleteCategoryDialog
        open={deleteOpen}
        onOpenChange={
          setDeleteOpen
        }
        category={selectedCategory}
      />
    </Container>
  );
}