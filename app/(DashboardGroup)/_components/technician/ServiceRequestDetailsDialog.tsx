"use client";

import dayjs from "dayjs";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {Skeleton} from "@/components/ui/skeleton";

import {Badge} from "@/components/ui/badge";

import {useServiceRequestDetails} from "@/hooks/service-request/useServiceRequestDetails";

interface ServiceRequestDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  requestId: string | null;
}

export default function ServiceRequestDetailsDialog({
  open,
  onOpenChange,
  requestId,
}: ServiceRequestDetailsDialogProps) {
  const {data, isLoading} = useServiceRequestDetails(requestId ?? "");

  const request = data?.data;

  if (!requestId) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Service Request Details</DialogTitle>
        </DialogHeader>

        {isLoading ? (
          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <Skeleton className="h-7 w-60" />

                <Skeleton className="h-5 w-32" />
              </div>

              <Skeleton className="h-6 w-20 rounded-full" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-28" />

              <Skeleton className="h-4 w-full" />

              <Skeleton className="h-4 w-full" />

              <Skeleton className="h-4 w-2/3" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-28" />

              <Skeleton className="h-5 w-44" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />

              <Skeleton className="h-16 w-full" />
            </div>
          </div>
        ) : request ? (
          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold">
                  {request.requestedServiceName}
                </h2>

                <p className="text-sm text-muted-foreground">
                  {request.category.name}
                </p>
              </div>

              <Badge>{request.status}</Badge>
            </div>

            <div>
              <p className="text-sm font-medium">Description</p>

              <p className="text-sm text-muted-foreground">
                {request.description}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium">Requested On</p>

              <p className="text-sm text-muted-foreground">
                {dayjs(request.createdAt).format("DD MMM YYYY • hh:mm A")}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium">Admin Feedback</p>

              <p className="text-sm text-muted-foreground">
                {request.adminFeedback ?? "Waiting for admin review."}
              </p>
            </div>
          </div>
        ) : (
          <p>Failed to load request.</p>
        )}
      </DialogContent>
    </Dialog>
  );
}
