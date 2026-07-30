import { Skeleton } from "@/components/ui/skeleton";

export default function TechnicianGridSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="space-y-4 rounded-xl border p-6"
        >
          <Skeleton className="mx-auto h-24 w-24 rounded-full" />

          <Skeleton className="mx-auto h-6 w-40" />

          <Skeleton className="mx-auto h-4 w-28" />

          <Skeleton className="h-4 w-full" />

          <Skeleton className="h-10 w-full" />
        </div>
      ))}
    </div>
  );
}