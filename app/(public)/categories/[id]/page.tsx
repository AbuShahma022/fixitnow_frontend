import CategoryDetails from "./CategoryDetails";

interface CategoryDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CategoryDetailsPage({
  params,
}: CategoryDetailsPageProps) {
  const { id } = await params;

  return <CategoryDetails id={id} />;
}