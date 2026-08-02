"use client";

import { useState } from "react";

import Container from "@/shared/container";

import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";

import { useMyTechnicianServices } from "@/hooks/technician/useMyTechnicianServices";

import TechnicianServiceCard from "@/app/(DashboardGroup)/_components/technician/TechnicianServiceCard";
import TechnicianServicesSkeleton from "@/app/(DashboardGroup)/_components/technician/TechnicianServicesSkeleton";
import CreateTechnicianServiceDialog from "@/app/(DashboardGroup)/_components/technician/CreateTechnicianServiceDialog";
import EditTechnicianServiceDialog from "@/app/(DashboardGroup)/_components/technician/EditTechnicianServiceDialog";
import DeleteTechnicianServiceDialog from "@/app/(DashboardGroup)/_components/technician/DeleteTechnicianServiceDialog";

import { TechnicianService } from "@/types/technician";

export default function TechnicianServicesPage() {
  const [open, setOpen] = useState(false);

  const [editOpen, setEditOpen] =
    useState(false);

  const [deleteOpen, setDeleteOpen] =
    useState(false);

  const [
    selectedService,
    setSelectedService,
  ] = useState<TechnicianService | null>(
    null
  );

  const { data, isLoading } =
    useMyTechnicianServices();

  const services = data?.data ?? [];

  if (isLoading) {
    return (
      <Container className="py-8">
        <TechnicianServicesSkeleton />
      </Container>
    );
  }

  return (
    <Container className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            My Services
          </h1>

          <p className="mt-2 text-muted-foreground">
            Manage the services you offer to
            customers.
          </p>
        </div>

        <Button onClick={() => setOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Service
        </Button>
      </div>

      {services.length === 0 ? (
        <p className="py-12 text-center text-muted-foreground">
          No services added yet.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <TechnicianServiceCard
              key={service.id}
              service={service}
              onEdit={(service) => {
                setSelectedService(service);
                setEditOpen(true);
              }}
              onDelete={(service) => {
                setSelectedService(service);
                setDeleteOpen(true);
              }}
            />
          ))}
        </div>
      )}

      <CreateTechnicianServiceDialog
        open={open}
        onOpenChange={setOpen}
      />

      <EditTechnicianServiceDialog
        open={editOpen}
        onOpenChange={setEditOpen}
        service={selectedService}
      />

      <DeleteTechnicianServiceDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        service={selectedService}
      />
    </Container>
  );
}