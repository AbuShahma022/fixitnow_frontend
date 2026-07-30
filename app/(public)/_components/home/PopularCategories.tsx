"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/shared/container";
import SectionHeading from "@/shared/SectionHeading";

import CategoryCard from "./CategoryCard";
import CategoriesSkeleton from "./CategoriesSkeleton";

import { useCategories } from "@/hooks/useCategories";

import { Button } from "@/components/ui/button";

export default function PopularCategories() {
  const {
    data: categories,
    isLoading,
    isError,
  } = useCategories();

  const displayedCategories = categories?.slice(0, 3);

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
              <>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {displayedCategories?.map((category) => (
                    <CategoryCard
                      key={category.id}
                      category={category}
                    />
                  ))}
                </div>

                <div className="mt-10 flex justify-center">
                  <Button asChild size="lg">
                    <Link href="/categories">
                      View All Categories
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </>
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