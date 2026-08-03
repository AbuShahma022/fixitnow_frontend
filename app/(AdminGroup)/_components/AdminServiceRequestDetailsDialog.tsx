"use client";
import {useState} from "react";
import dayjs from "dayjs";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {Skeleton} from "@/components/ui/skeleton";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";

import {useAdminServiceRequestDetails} from "@/hooks/admin/useAdminServiceRequestDetails";
import {useApproveServiceRequest} from "@/hooks/admin/useApproveServiceRequest";

import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";

import {useRejectServiceRequest} from "@/hooks/admin/useRejectServiceRequest";
import {toast} from "sonner";

interface AdminServiceRequestDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  requestId: string | null;
}

export default function AdminServiceRequestDetailsDialog({
  open,
  onOpenChange,
  requestId,
}: AdminServiceRequestDetailsDialogProps) {
  const {data, isLoading} = useAdminServiceRequestDetails(requestId ?? "");

  const {mutate: approve, isPending} = useApproveServiceRequest();

  const {mutate: reject, isPending: rejectPending} = useRejectServiceRequest();

  const [showReject, setShowReject] = useState(false);

  const [feedback, setFeedback] = useState("");

  const request = data?.data;

  if (!requestId) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Service Request Details</DialogTitle>
        </DialogHeader>

        {isLoading ? (
          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <Skeleton className="h-7 w-64" />

                <Skeleton className="h-5 w-36" />
              </div>

              <Skeleton className="h-6 w-20 rounded-full" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {Array.from({length: 4}).map((_, index) => (
                <div key={index} className="space-y-2">
                  <Skeleton className="h-4 w-24" />

                  <Skeleton className="h-5 w-40" />
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-28" />

              <Skeleton className="h-4 w-full" />

              <Skeleton className="h-4 w-full" />

              <Skeleton className="h-4 w-3/4" />
            </div>

            <div className="space-y-2">
              <Skeleton className="h-4 w-20" />

              <Skeleton className="h-5 w-64" />
            </div>

            <div className="flex justify-end gap-3">
              <Skeleton className="h-10 w-28 rounded-md" />

              <Skeleton className="h-10 w-28 rounded-md" />
            </div>
          </div>
        ) : request ? (
          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold">
                  {request.requestedServiceName}
                </h2>

                <p className="text-muted-foreground">{request.category.name}</p>
              </div>

              <Badge>{request.status}</Badge>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm text-muted-foreground">Technician</p>

                <p className="font-medium">
                  {request.technicianProfile.user.name}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Email</p>

                <p className="font-medium">
                  {request.technicianProfile.user.email}
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Experience</p>

                <p className="font-medium">
                  {request.technicianProfile.experienceYears} Years
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Requested On</p>

                <p className="font-medium">
                  {dayjs(request.createdAt).format("DD MMM YYYY")}
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Description</p>

              <p>{request.description}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Location</p>

              <p>
                {request.technicianProfile.location.area},{" "}
                {request.technicianProfile.location.district},{" "}
                {request.technicianProfile.location.division}
              </p>
            </div>

            {request.adminFeedback && (
              <div>
                <p className="text-sm text-muted-foreground">Admin Feedback</p>

                <p>{request.adminFeedback}</p>
              </div>
            )}

            {request.status === "PENDING" && (
              <div className="flex justify-end gap-3">
                <Button
                  onClick={() =>
                    approve(request.id, {
                      onSuccess: (response) => {
                        toast.success(response.message);

                        onOpenChange(false);
                      },
                    })
                  }
                  disabled={isPending}
                >
                  Approve
                </Button>

                <Button
                  variant="destructive"
                  onClick={() => setShowReject(!showReject)}
                >
                  Reject
                </Button>

                {showReject && (
                  <div className="space-y-4 rounded-lg border p-4">
                    <div className="space-y-2">
                      <Label>Rejection Feedback</Label>

                      <Textarea
                        rows={4}
                        placeholder="Explain why this request is being rejected..."
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button
                        variant="destructive"
                        disabled={rejectPending || feedback.trim().length === 0}
                        onClick={() =>
                          reject(
                            {
                              id: request.id,
                              adminFeedback: feedback,
                            },
                            {
                              onSuccess: (response) => {
                                toast.success(response.message);

                                setShowReject(false);

                                setFeedback("");

                                onOpenChange(false);
                              },

                              onError: (error: any) => {
                                toast.error(
                                  error?.response?.data?.message ??
                                    "Failed to reject request.",
                                );
                              },
                            },
                          )
                        }
                      >
                        {rejectPending ? "Rejecting..." : "Reject Request"}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <p>Failed to load request.</p>
        )}
      </DialogContent>
    </Dialog>
  );
}
