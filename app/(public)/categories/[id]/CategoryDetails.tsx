"use client";

import Container from "@/shared/container";

import { useCategory } from "@/hooks/useCategory";
import { useMasterServices } from "@/hooks/useMasterServices";

import CategoryHero from "../../_components/category-details/CategoryHero";
import CategoryServices from "../../_components/category-details/CategoryServices";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import CategoryDetailsSkeleton from "../../_components/category-details/CategoryDetailsSkeleton";

interface CategoryDetailsProps {
  id: string;
}

export default function CategoryDetails({
  id,
}: CategoryDetailsProps) {
  const {
    data: category,
    isLoading: isCategoryLoading,
  } = useCategory(id);

  const {
    data: services,
    isLoading: isServicesLoading,
  } = useMasterServices({
    categoryId: id,
  });
if (isCategoryLoading || isServicesLoading) {
  return (
    <Container className="py-20">
      <CategoryDetailsSkeleton />
    </Container>
  );
}

  if (!category) {
    return <p>Category not found.</p>;
  }

  return (
    <Container className="space-y-10 py-20">
            <Button
      asChild
      variant="ghost"
      className="w-fit"
    >
      <Link href="/categories">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Categories
      </Link>
    </Button>
      <CategoryHero category={category} />

      <CategoryServices services={services ?? []} />
    </Container>
  );
}