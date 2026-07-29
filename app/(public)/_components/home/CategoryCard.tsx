import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";

import { Category } from "@/types/category";

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function CategoryCard({
  category,
}: {
  category: Category;
}) {
  return (
    <Card className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="space-y-4 pt-6">
        <div className="bg-primary/10 text-primary flex h-14 w-14 items-center justify-center rounded-xl">
          <Wrench className="size-7" />
        </div>

        <div>
          <h3 className="text-xl font-semibold">
            {category.name}
          </h3>

          <p className="text-muted-foreground mt-2 line-clamp-2">
            {category.description}
          </p>
        </div>
      </CardContent>

      <CardFooter>
        <Link
          href={`/categories/${category.id}`}
          className="text-primary inline-flex items-center gap-2 text-sm font-medium"
        >
          Explore
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}