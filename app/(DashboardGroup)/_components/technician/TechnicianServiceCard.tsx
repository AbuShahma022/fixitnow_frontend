import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { TechnicianService } from "@/types/technician";

interface TechnicianServiceCardProps {
  service: TechnicianService;
  onEdit: (
    service: TechnicianService
  ) => void;
  onDelete: (service: TechnicianService) => void;
}

export default function TechnicianServiceCard({
  service,
    onEdit,
      onDelete,
}: TechnicianServiceCardProps) {
  return (
    <Card>
      <CardContent className="space-y-5 p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">{service.service.name}</h3>

            <p className="text-sm text-muted-foreground">
              {service.service.category.name}
            </p>
          </div>

          <Badge>{service.status}</Badge>
        </div>

        {service.description && (
          <p className="text-sm text-muted-foreground">{service.description}</p>
        )}

        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-primary">
            ৳{Number(service.price).toLocaleString()}
          </span>

          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={() => onEdit(service)}>
              Edit
            </Button>

            <Button
              size="sm"
              variant="destructive"
              onClick={() => onDelete(service)}
            >
              Delete
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}