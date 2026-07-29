"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useCategories } from "@/hooks/useCategories";

interface Props {
  search: string;
  categoryId: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}

export default function ServiceFilters({
  search,
  categoryId,
  onSearchChange,
  onCategoryChange,
}: Props) {
  const { data: categories } = useCategories();

  return (
    <div className="mb-10 grid gap-4 md:grid-cols-2">
      <div className="relative">
        <Search className="text-muted-foreground absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />

        <Input
          placeholder="Search services..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      <Select
        value={categoryId}
        onValueChange={onCategoryChange}
      >
        <SelectTrigger>
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">
            All Categories
          </SelectItem>

          {categories?.map((category) => (
            <SelectItem
              key={category.id}
              value={category.id}
            >
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}