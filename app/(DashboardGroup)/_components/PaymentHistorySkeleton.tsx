import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function PaymentHistorySkeleton() {
  return (
    <div className="space-y-6">
      {[1, 2, 3].map((item) => (
        <Card key={item}>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-2">
              <Skeleton className="h-5 w-44" />
              <Skeleton className="h-4 w-32" />
            </div>

            <Skeleton className="h-6 w-20 rounded-full" />
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((value) => (
                <div key={value} className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-5 w-28" />
                </div>
              ))}
            </div>

            <Skeleton className="h-10 w-40 rounded-md" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}