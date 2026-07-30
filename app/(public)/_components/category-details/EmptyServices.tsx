import { Wrench } from "lucide-react";

export default function EmptyServices() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-16 text-center">
      <div className="mb-4 rounded-full bg-muted p-4">
        <Wrench className="h-8 w-8 text-muted-foreground" />
      </div>

      <h3 className="text-xl font-semibold">
        No Services Available
      </h3>

      <p className="mt-2 max-w-md text-muted-foreground">
        There are currently no services available in this category.
      </p>
    </div>
  );
}