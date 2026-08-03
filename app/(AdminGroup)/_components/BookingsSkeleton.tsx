import { Skeleton } from "@/components/ui/skeleton";

export default function BookingsSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg border">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            {Array.from({ length: 8 }).map((_, index) => (
              <th key={index} className="p-4">
                <Skeleton className="h-5 w-20" />
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: 6 }).map((_, row) => (
            <tr key={row} className="border-b">
              {Array.from({ length: 8 }).map((_, col) => (
                <td key={col} className="p-4">
                  <Skeleton className="h-5 w-full" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}