"use client";

import { useState } from "react";

import Container from "@/shared/container";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useMasterServices } from "@/hooks/useMasterServices";
import { MasterService } from "@/types/service";
import MasterServiceCard from "../masterservice/MasterServiceCard";
import CreateMasterServiceDialog from "../masterservice/CreateMasterServiceDialog";
import EditMasterServiceDialog from "../masterservice/EditMasterServiceDialog";
import DeleteMasterServiceDialog from "../masterservice/DeleteMasterServiceDialog";
import MasterServicesSkeleton from "../masterservice/MasterServicesSkeleton";





export default function MasterServicesPage() {
  const { data = [], isLoading } =
    useMasterServices();

  const [open, setOpen] =
    useState(false);

  const [editOpen, setEditOpen] =
    useState(false);

  const [deleteOpen, setDeleteOpen] =
    useState(false);

  const [
    selectedService,
    setSelectedService,
  ] = useState<MasterService | null>(
    null
  );

  if (isLoading) {
    return (
      <Container className="py-8">
        <MasterServicesSkeleton />
      </Container>
    );
  }

  return (
    <Container className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Master Services
          </h1>

          <p className="mt-2 text-muted-foreground">
            Manage platform services.
          </p>
        </div>

        <Button
          onClick={() => setOpen(true)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Service
        </Button>
      </div>

      {data.length === 0 ? (
        <p className="py-12 text-center text-muted-foreground">
          No services found.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {data.map((service) => (
            <MasterServiceCard
              key={service.id}
              service={service}
              onEdit={(service) => {
                setSelectedService(
                  service
                );

                setEditOpen(true);
              }}
              onDelete={(service) => {
                setSelectedService(
                  service
                );

                setDeleteOpen(true);
              }}
            />
          ))}
        </div>
      )}

      <CreateMasterServiceDialog
        open={open}
        onOpenChange={setOpen}
      />

      <EditMasterServiceDialog
        open={editOpen}
        onOpenChange={setEditOpen}
        service={selectedService}
      />

      <DeleteMasterServiceDialog
        open={deleteOpen}
        onOpenChange={
          setDeleteOpen
        }
        service={selectedService}
      />
    </Container>
  );
}