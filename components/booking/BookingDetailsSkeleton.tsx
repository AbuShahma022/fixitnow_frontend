import { Skeleton } from "@/components/ui/skeleton";

export default function BookingDetailsSkeleton() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="rounded-xl border p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-5 w-56" />
          </div>

          <Skeleton className="h-8 w-28 rounded-full" />
        </div>
      </div>

      {/* Summary */}
      <div className="rounded-xl border p-6 space-y-6">
        <Skeleton className="h-7 w-48" />

        <div className="space-y-5">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-24 w-full" />
        </div>
      </div>

      {/* Actions */}
      <div className="rounded-xl border p-6 space-y-6">
        <Skeleton className="h-7 w-40" />

        <Skeleton className="h-28 w-full rounded-lg" />

        <Skeleton className="h-28 w-full rounded-lg" />
      </div>
    </div>
  );
}