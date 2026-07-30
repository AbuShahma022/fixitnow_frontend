"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

interface CategoryFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export default function CategoryFilters({
  search,
  onSearchChange,
}: CategoryFiltersProps) {
  return (
    <div className="max-w-md">
      <div className="relative">
        <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />

        <Input
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search categories..."
          className="pl-10"
        />
      </div>
    </div>
  );
}