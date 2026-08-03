import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ProfileSkeleton() {
  return (
    <Card>
      <CardHeader className="border-b pb-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <Skeleton className="h-24 w-24 rounded-full" />

          <div className="flex-1 space-y-3">
            <Skeleton className="h-7 w-52" />

            <Skeleton className="h-5 w-72" />

            <div className="flex gap-2">
              <Skeleton className="h-6 w-24 rounded-full" />

              <Skeleton className="h-6 w-28 rounded-full" />
            </div>
          </div>

          <Skeleton className="h-10 w-40 rounded-md" />
        </div>
      </CardHeader>

      <CardContent className="grid gap-8 py-8 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="flex items-start gap-3"
          >
            <Skeleton className="mt-1 h-5 w-5 rounded-full" />

            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />

              <Skeleton className="h-5 w-40" />
            </div>
          </div>
        ))}

        <div className="md:col-span-2 pt-2">
          <Skeleton className="h-6 w-52" />
        </div>

        <div>
          <Skeleton className="h-4 w-24" />

          <Skeleton className="mt-2 h-5 w-28" />
        </div>

        <div>
          <Skeleton className="h-4 w-20" />

          <Skeleton className="mt-2 h-5 w-32" />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Skeleton className="h-4 w-16" />

          <Skeleton className="h-16 w-full" />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Skeleton className="h-4 w-20" />

          <Skeleton className="h-5 w-3/4" />
        </div>
      </CardContent>
    </Card>
  );
}