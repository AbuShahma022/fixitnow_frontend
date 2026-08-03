"use client";

import { useState } from "react";

import Container from "@/shared/container";

import { useAdminServiceRequests } from "@/hooks/admin/useAdminServiceRequests";

import AdminServiceRequestCard from "../../_components/AdminServiceRequestCard";
import AdminServiceRequestDetailsDialog from "../../_components/AdminServiceRequestDetailsDialog";

import { ServiceRequest } from "@/types/service-request";
import AdminServiceRequestsSkeleton from "../../_components/AdminServiceRequestsSkeleton";

export default function AdminServiceRequestsPage() {
  const {
    data,
    isLoading,
  } = useAdminServiceRequests();

  const requests = data?.data ?? [];

  const [
    selectedRequest,
    setSelectedRequest,
  ] = useState<ServiceRequest | null>(
    null
  );

  const [detailsOpen, setDetailsOpen] =
    useState(false);

 if (isLoading) {
  return (
    <Container className="py-8">
      <AdminServiceRequestsSkeleton />
    </Container>
  );
}

  return (
    <Container className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Service Requests
        </h1>

        <p className="mt-2 text-muted-foreground">
          Review technician requests for
          new services.
        </p>
      </div>

      {requests.length === 0 ? (
        <p className="py-12 text-center text-muted-foreground">
          No service requests found.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {requests.map((request) => (
            <AdminServiceRequestCard
              key={request.id}
              request={request}
              onView={(request) => {
                setSelectedRequest(request);
                setDetailsOpen(true);
              }}
            />
          ))}
        </div>
      )}

      <AdminServiceRequestDetailsDialog
        open={detailsOpen}
        onOpenChange={setDetailsOpen}
        requestId={selectedRequest?.id ?? null}
      />
    </Container>
  );
}