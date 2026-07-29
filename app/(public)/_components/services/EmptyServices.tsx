import { SearchX } from "lucide-react";

export default function EmptyServices() {
  return (
    <div className="flex flex-col items-center py-20">
      <SearchX className="text-muted-foreground h-14 w-14" />

      <h3 className="mt-4 text-2xl font-semibold">
        No Services Found
      </h3>

      <p className="text-muted-foreground mt-2">
        Try changing your search or category filter.
      </p>
    </div>
  );
}