import Container from "@/shared/container";

import { useCategory } from "@/hooks/useCategory";
import { useMasterServices } from "@/hooks/useMasterServices";
import CategoryHero from "../../_components/category-details/CategoryHero";
import CategoryServices from "../../_components/category-details/CategoryServices";

interface CategoryDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CategoryDetailsPage({
  params,
}: CategoryDetailsPageProps) {
  return <CategoryDetails id={(await params).id} />;
}

"use client";

function CategoryDetails({
  id,
}: {
  id: string;
}) {
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
    return <p>Loading...</p>;
  }

  if (!category) {
    return <p>Category not found.</p>;
  }

  return (
    <Container className="py-20">
    <CategoryHero category={category} />
    <CategoryServices services={services ?? []} />
    </Container>
  );
}