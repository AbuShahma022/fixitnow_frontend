import dayjs from "dayjs";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { ServiceRequest } from "@/types/service-request";

interface ServiceRequestCardProps {
  request: ServiceRequest;
  onView: (request: ServiceRequest) => void;
}

export default function ServiceRequestCard({
  request,
  onView,
}: ServiceRequestCardProps) {
  const badgeVariant =
    request.status === "APPROVED"
      ? "default"
      : request.status === "REJECTED"
      ? "destructive"
      : "secondary";

  return (
    <Card>
      <CardContent className="space-y-5 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">
              {request.requestedServiceName}
            </h3>

            <p className="text-sm text-muted-foreground">
              {request.category.name}
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              Requested{" "}
              {dayjs(request.createdAt).format(
                "DD MMM YYYY"
              )}
            </p>
          </div>

          <Badge variant={badgeVariant}>
            {request.status}
          </Badge>
        </div>

        <p className="line-clamp-3 text-sm text-muted-foreground">
          {request.description}
        </p>

        <div className="flex justify-end">
          <Button
            size="sm"
            variant="outline"
            onClick={() => onView(request)}
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}