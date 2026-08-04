"use client";

import { useState } from "react";

import Container from "@/shared/container";

import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";

import { useMyAvailabilities } from "@/hooks/availability/useMyAvailabilities";

import { TechnicianAvailability } from "@/types/technician";
import AvailabilityCard from "@/app/(DashboardGroup)/_components/technician/AvailabilityCard";
import CreateAvailabilityDialog from "@/app/(DashboardGroup)/_components/technician/CreateAvailabilityDialog";
import EditAvailabilityDialog from "@/app/(DashboardGroup)/_components/technician/EditAvailabilityDialog";
import DeleteAvailabilityDialog from "@/app/(DashboardGroup)/_components/technician/DeleteAvailabilityDialog";
import AvailabilitySkeleton from "@/app/(DashboardGroup)/_components/technician/AvailabilitySkeleton";

export default function TechnicianAvailabilityPage() {
  const [open, setOpen] = useState(false);

  const [editOpen, setEditOpen] =
    useState(false);

  const [deleteOpen, setDeleteOpen] =
    useState(false);

  const [
    selectedAvailability,
    setSelectedAvailability,
  ] = useState<TechnicianAvailability | null>(
    null
  );

  const { data, isLoading } =
    useMyAvailabilities();

  const availabilities =
    data?.data ?? [];

  if (isLoading) {
    return (
      <Container className="py-8">
        {/* Skeleton comes next */}
        <AvailabilitySkeleton />
      </Container>
    );
  }

  return (
    <Container className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Availability</h1>

          <p className="mt-2 text-muted-foreground">
            Manage your available working schedule.
          </p>
        </div>

        <Button onClick={() => setOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Availability
        </Button>
      </div>

      {availabilities.length === 0 ? (
        <p className="py-12 text-center text-muted-foreground">
          No availability added yet.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {availabilities.map((availability) => (
            <AvailabilityCard
              key={availability.id}
              availability={availability}
              onEdit={(availability) => {
                setSelectedAvailability(availability);
                setEditOpen(true);
              }}
              onDelete={(availability) => {
                setSelectedAvailability(availability);
                setDeleteOpen(true);
              }}
            />
          ))}
        </div>
      )}

      <CreateAvailabilityDialog open={open} onOpenChange={setOpen} />

      <EditAvailabilityDialog
        open={editOpen}
        onOpenChange={setEditOpen}
        availability={selectedAvailability}
      />

      <DeleteAvailabilityDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        availability={selectedAvailability}
      />
    </Container>
  );
}