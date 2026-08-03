import dayjs from "dayjs";



import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { MasterService } from "@/types/service";

interface MasterServiceCardProps {
  service: MasterService;

  onEdit: (
    service: MasterService
  ) => void;

  onDelete: (
    service: MasterService
  ) => void;
}

export default function MasterServiceCard({
  service,
  onEdit,
  onDelete,
}: MasterServiceCardProps) {
  return (
    <Card>
      <CardContent className="space-y-5 p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              {service.name}
            </h3>

            <p className="text-sm text-muted-foreground">
              {service.category.name}
            </p>
          </div>

          <Badge>
            {service.status}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground">
          {service.description}
        </p>

        <div className="text-sm text-muted-foreground">
          Created{" "}
          {dayjs(service.createdAt).format(
            "DD MMM YYYY"
          )}
        </div>

        <div className="flex justify-end gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              onEdit(service)
            }
          >
            Edit
          </Button>

          <Button
            size="sm"
            variant="destructive"
            onClick={() =>
              onDelete(service)
            }
          >
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}