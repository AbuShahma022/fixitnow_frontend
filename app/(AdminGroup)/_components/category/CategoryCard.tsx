import dayjs from "dayjs";

import { Category } from "@/types/category";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

interface CategoryCardProps {
  category: Category;

  onEdit: (
    category: Category
  ) => void;

  onDelete: (
    category: Category
  ) => void;
}

export default function CategoryCard({
  category,
  onEdit,
  onDelete,
}: CategoryCardProps) {
  return (
    <Card>
      <CardContent className="space-y-5 p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              {category.name}
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              {category.description}
            </p>
          </div>

          <Badge>
            {category.status}
          </Badge>
        </div>

        <div className="text-sm text-muted-foreground">
          Created{" "}
          {dayjs(category.createdAt).format(
            "DD MMM YYYY"
          )}
        </div>

        <div className="flex justify-end gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              onEdit(category)
            }
          >
            Edit
          </Button>

          <Button
            size="sm"
            variant="destructive"
            onClick={() =>
              onDelete(category)
            }
          >
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}