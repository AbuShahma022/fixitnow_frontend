"use client";

import { useMemo, useState } from "react";

import Container from "@/shared/container";
import SectionHeading from "@/shared/SectionHeading";

import { useCategories } from "@/hooks/useCategories";

import CategoryFilters from "../_components/categories/CategoryFilters";
import CategoryGrid from "../_components/categories/CategoryGrid";
import EmptyCategories from "../_components/categories/EmptyCategories";

import CategoriesSkeleton from "../_components/home/CategoriesSkeleton";


export default function CategoriesPage() {
  const [search, setSearch] = useState("");
 

  const {
    data: categories,
    isLoading,
    isError,
  } = useCategories();

  const filteredCategories = useMemo(() => {
    if (!categories) return [];

    return categories.filter((category) =>
      category.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [categories, search]);

  return (
    <section className="py-20">
      <Container className="space-y-10">
        <SectionHeading
          badge="Categories"
          title="Explore Home Service Categories"
          description="Browse all available categories and find the right home service for your needs."
          className="mx-auto max-w-3xl text-center"
        />

        <CategoryFilters
          search={search}
          onSearchChange={setSearch}
        />

        {isLoading && <CategoriesSkeleton />}

        {isError && (
          <div className="text-center text-red-500">
            Failed to load categories.
          </div>
        )}

        {!isLoading && !isError && (
          <>
            <p className="text-sm text-muted-foreground">
              {filteredCategories.length} categor
              {filteredCategories.length === 1 ? "y" : "ies"} found
            </p>

            {filteredCategories.length > 0 ? (
              <CategoryGrid
                categories={filteredCategories}
              />
            ) : (
              <EmptyCategories />
            )}
          </>
        )}
      </Container>
    </section>
  );
}