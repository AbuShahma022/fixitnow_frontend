import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export default function ServiceRequestsSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <Card key={index}>
          <CardContent className="space-y-5 p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <Skeleton className="h-6 w-56" />

                <Skeleton className="h-4 w-28" />

                <Skeleton className="h-4 w-40" />
              </div>

              <Skeleton className="h-6 w-20 rounded-full" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />

              <Skeleton className="h-4 w-full" />

              <Skeleton className="h-4 w-3/4" />
            </div>

            <div className="flex justify-end">
              <Skeleton className="h-9 w-28 rounded-md" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}