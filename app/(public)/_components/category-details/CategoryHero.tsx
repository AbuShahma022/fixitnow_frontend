import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import { Category } from "@/types/category";

interface CategoryHeroProps {
  category: Category;
}

export default function CategoryHero({
  category,
}: CategoryHeroProps) {
  return (
    <Card>
      <CardContent className="space-y-8 p-8 md:p-10">
        <Badge variant="secondary">
          Category
        </Badge>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            {category.name}
          </h1>

          <p className="text-muted-foreground max-w-2xl leading-8">
            {category.description}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">
              Category
            </p>

            <p className="mt-1 font-semibold">
              {category.name}
            </p>
          </div>

          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">
              Status
            </p>

            <p className="mt-1 font-semibold text-green-600">
              {category.status}
            </p>
          </div>

          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">
              Services
            </p>

            <p className="mt-1 font-semibold">
              Available
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}