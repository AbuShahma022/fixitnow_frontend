import CategoryCard from "@/app/(public)/_components/home/CategoryCard";

import { Category } from "@/types/category";

interface CategoryGridProps {
  categories: Category[];
}

export default function CategoryGrid({
  categories,
}: CategoryGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          category={category}
        />
      ))}
    </div>
  );
}