import dayjs from "dayjs";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import { TechnicianAvailability } from "@/types/technician";

interface AvailabilityCardProps {
  availability: TechnicianAvailability;
  onEdit: (
    availability: TechnicianAvailability
  ) => void;
  onDelete: (
    availability: TechnicianAvailability
  ) => void;
}

export default function AvailabilityCard({
  availability,
  onEdit,
  onDelete,
}: AvailabilityCardProps) {
  return (
    <Card>
      <CardContent className="space-y-5 p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              {availability.dayOfWeek}
            </h3>

            <p className="text-sm text-muted-foreground">
              {availability.startTime} -{" "}
              {availability.endTime}
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              Created{" "}
              {dayjs(
                availability.createdAt
              ).format("DD MMM YYYY")}
            </p>
          </div>

          <Badge>
            {availability.status}
          </Badge>
        </div>

        <div className="flex justify-end gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              onEdit(availability)
            }
          >
            Edit
          </Button>

          <Button
            size="sm"
            variant="destructive"
            onClick={() =>
              onDelete(availability)
            }
          >
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}