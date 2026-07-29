"use client";
import Container from "@/shared/container";
import SectionHeading from "@/shared/SectionHeading";

import CategoryCard from "./CategoryCard";
import CategoriesSkeleton from "./CategoriesSkeleton";

import { useCategories } from "@/hooks/useCategories";


export default function PopularCategories() {
  const {
    data: categories,
    isLoading,
    isError,
  } = useCategories();

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          badge="Categories"
          title="Explore Home Service Categories"
          description="Browse a wide range of professional home services tailored to your needs."
          className="mx-auto max-w-3xl text-center"
        />

        <div className="mt-14">
          {isLoading && <CategoriesSkeleton />}

          {isError && (
            <div className="text-center text-red-500">
              Failed to load categories.
            </div>
          )}

          {!isLoading &&
            !isError &&
            categories &&
            categories.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {categories.map((category) => (
                  <CategoryCard
                    key={category.id}
                    category={category}
                  />
                ))}
              </div>
            )}

          {!isLoading &&
            !isError &&
            categories?.length === 0 && (
              <div className="text-muted-foreground text-center">
                No categories found.
              </div>
            )}
        </div>
      </Container>
    </section>
  );
}