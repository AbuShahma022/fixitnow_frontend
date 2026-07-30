import { Skeleton } from "@/components/ui/skeleton";

export default function TechnicianDetailsSkeleton() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <div className="rounded-xl border p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <Skeleton className="h-32 w-32 rounded-full" />

          <div className="flex-1 space-y-4">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-5 w-96 max-w-full" />

            <div className="flex flex-wrap gap-3">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-28" />
              <Skeleton className="h-5 w-24" />
            </div>

            <Skeleton className="h-10 w-36 rounded-md" />
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="space-y-6">
        <Skeleton className="h-8 w-56" />

        <div className="grid gap-6 md:grid-cols-2">
          {[1, 2].map((item) => (
            <div key={item} className="rounded-xl border p-6 space-y-4">
              <Skeleton className="h-6 w-44" />
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          ))}
        </div>
      </section>

      {/* Availability */}
      <section className="space-y-6">
        <Skeleton className="h-8 w-48" />

        {[1, 2].map((item) => (
          <div key={item} className="rounded-xl border p-6 space-y-4">
            <Skeleton className="h-6 w-32" />

            {[1, 2].map((slot) => (
              <div
                key={slot}
                className="flex items-center justify-between rounded-md border p-3"
              >
                <Skeleton className="h-5 w-48" />
                <Skeleton className="h-6 w-24 rounded-full" />
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* Reviews */}
      <section className="space-y-6">
        <Skeleton className="h-8 w-48" />

        <div className="grid gap-4 md:grid-cols-2">
          {[1, 2].map((item) => (
            <div key={item} className="rounded-xl border p-6">
              <Skeleton className="h-12 w-32" />
              <Skeleton className="mt-3 h-4 w-28" />
            </div>
          ))}
        </div>

        {[1, 2].map((item) => (
          <div key={item} className="rounded-xl border p-6 space-y-4">
            <div className="flex justify-between">
              <div className="space-y-2">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-24" />
              </div>

              <Skeleton className="h-6 w-12" />
            </div>

            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        ))}
      </section>
    </div>
  );
}