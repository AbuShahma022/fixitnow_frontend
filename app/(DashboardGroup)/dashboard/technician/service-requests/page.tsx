"use client";

import { useState } from "react";

import Container from "@/shared/container";

import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";

import { useMyServiceRequests } from "@/hooks/service-request/useMyServiceRequests";

import { ServiceRequest } from "@/types/service-request";
import ServiceRequestCard from "@/app/(DashboardGroup)/_components/technician/ServiceRequestCard";
import ServiceRequestDetailsDialog from "@/app/(DashboardGroup)/_components/technician/ServiceRequestDetailsDialog";
import CreateServiceRequestDialog from "@/app/(DashboardGroup)/_components/technician/CreateServiceRequestDialog";
import ServiceRequestsSkeleton from "@/app/(DashboardGroup)/_components/technician/ServiceRequestsSkeleton";
export default function ServiceRequestsPage() {
  const [open, setOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] =useState(false);

  const [selectedRequest, setSelectedRequest] =
    useState<ServiceRequest | null>(null);

  const { data, isLoading } =
    useMyServiceRequests();

  const requests = data?.data ?? [];

 if (isLoading) {
  return (
    <Container className="py-8">
      <ServiceRequestsSkeleton />
    </Container>
  );
}

  return (
    <Container className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Service Requests</h1>

          <p className="mt-2 text-muted-foreground">
            Request new services that are currently unavailable.
          </p>
        </div>

        <Button onClick={() => setOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Request Service
        </Button>
      </div>

      {requests.length === 0 ? (
        <p className="py-12 text-center text-muted-foreground">
          No service requests yet.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {/* Cards go here */}
          {requests.map((request) => (
            <ServiceRequestCard
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

      {/* Create Dialog */}
      <CreateServiceRequestDialog open={open} onOpenChange={setOpen} />
      {/* Details Dialog */}
      <ServiceRequestDetailsDialog
        open={detailsOpen}
        onOpenChange={setDetailsOpen}
        requestId={selectedRequest?.id ?? null}
      />
    </Container>
  );
}