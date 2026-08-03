import dayjs from "dayjs";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { ServiceRequest } from "@/types/service-request";

interface AdminServiceRequestCardProps {
  request: ServiceRequest;
  onView: (
    request: ServiceRequest
  ) => void;
}

export default function AdminServiceRequestCard({
  request,
  onView,
}: AdminServiceRequestCardProps) {
  return (
    <Card>
      <CardContent className="space-y-5 p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              {request.requestedServiceName}
            </h3>

            <p className="text-sm text-muted-foreground">
              {request.category.name}
            </p>
          </div>

          <Badge>
            {request.status}
          </Badge>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">
              Requested By
            </span>

            <span className="font-medium">
              {
                request.technicianProfile.user
                  .name
              }
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">
              Experience
            </span>

            <span className="font-medium">
              {
                request.technicianProfile
                  .experienceYears
              }{" "}
              Years
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">
              Requested
            </span>

            <span className="font-medium">
              {dayjs(
                request.createdAt
              ).format("DD MMM YYYY")}
            </span>
          </div>
        </div>

        <div className="line-clamp-2 text-sm text-muted-foreground">
          {request.description}
        </div>

        <div className="flex justify-end">
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              onView(request)
            }
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}