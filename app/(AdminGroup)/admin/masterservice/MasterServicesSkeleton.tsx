import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function MasterServicesSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {Array.from({ length: 4 }).map(
        (_, index) => (
          <Card key={index}>
            <CardContent className="space-y-5 p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <Skeleton className="h-6 w-44" />

                  <Skeleton className="h-4 w-28" />
                </div>

                <Skeleton className="h-6 w-20 rounded-full" />
              </div>

              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />

                <Skeleton className="h-4 w-5/6" />
              </div>

              <Skeleton className="h-4 w-32" />

              <div className="flex justify-end gap-2">
                <Skeleton className="h-9 w-20 rounded-md" />

                <Skeleton className="h-9 w-20 rounded-md" />
              </div>
            </CardContent>
          </Card>
        )
      )}
    </div>
  );
}