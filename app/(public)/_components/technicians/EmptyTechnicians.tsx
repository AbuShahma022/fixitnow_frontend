import { Users } from "lucide-react";

export default function EmptyTechnicians() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-16 text-center">
      <div className="mb-4 rounded-full bg-muted p-4">
        <Users className="h-8 w-8 text-muted-foreground" />
      </div>

      <h3 className="text-xl font-semibold">
        No Technicians Found
      </h3>

      <p className="mt-2 max-w-md text-muted-foreground">
        Try changing your search or filters to find available technicians.
      </p>
    </div>
  );
}