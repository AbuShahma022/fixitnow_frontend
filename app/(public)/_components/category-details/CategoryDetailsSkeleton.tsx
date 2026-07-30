import { Skeleton } from "@/components/ui/skeleton";

export default function CategoryDetailsSkeleton() {
  return (
    <div className="space-y-10">
      <Skeleton className="h-10 w-40" />

      <div className="space-y-6 rounded-xl border p-8">
        <Skeleton className="h-6 w-24" />

        <Skeleton className="h-12 w-80" />

        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-5/6" />

        <div className="grid gap-4 md:grid-cols-3">
          <Skeleton className="h-24 rounded-lg" />
          <Skeleton className="h-24 rounded-lg" />
          <Skeleton className="h-24 rounded-lg" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="space-y-4 rounded-xl border p-6"
          >
            <Skeleton className="h-12 w-12 rounded-lg" />
            <Skeleton className="h-6 w-2/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-10 w-36" />
          </div>
        ))}
      </div>
    </div>
  );
}