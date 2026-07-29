import { Skeleton } from "@/components/ui/skeleton";

export default function TechniciansSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="space-y-4 rounded-xl border p-6"
        >
          <div className="flex justify-center">
            <Skeleton className="h-20 w-20 rounded-full" />
          </div>

          <Skeleton className="mx-auto h-6 w-36" />

          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />

          <Skeleton className="mx-auto h-5 w-28" />
          <Skeleton className="mx-auto h-5 w-32" />

          <Skeleton className="mx-auto h-4 w-24" />
        </div>
      ))}
    </div>
  );
}