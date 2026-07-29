import { Skeleton } from "@/components/ui/skeleton";

export default function ServicesSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="space-y-4 rounded-xl border p-6"
        >
          <Skeleton className="h-14 w-14 rounded-xl" />

          <Skeleton className="h-6 w-32" />

          <Skeleton className="h-6 w-44" />

          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />

          <Skeleton className="mt-4 h-4 w-24" />
        </div>
      ))}
    </div>
  );
}