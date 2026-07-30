import { MasterService } from "@/types/service";
import { Technician } from "@/types/technician";

import TechnicianServiceCard from "./TechnicianServiceCard";
import SectionHeading from "@/shared/SectionHeading";
import EmptyTechnicians from "./EmptyTechnicians";
import TechnicianListSkeleton from "./ServiceDetailsSkeleton";


interface TechnicianListProps {
  service: MasterService;
  technicians: Technician[];
  isLoading: boolean;
}

export default function TechnicianList({
  service,
  technicians,
  isLoading,
}: TechnicianListProps) {
  if (isLoading) {
  return <TechnicianListSkeleton/>;
}

  if (!technicians.length) {
  return <EmptyTechnicians />;
}

  return (
    <section className="space-y-8">
      <SectionHeading
        badge="Technicians"
        title="Available Technicians"
        description={`${technicians.length} technician${
          technicians.length !== 1 ? "s" : ""
        } available for ${service.name}.`}
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {technicians.map((technician) => (
          <TechnicianServiceCard
            key={technician.id}
            technician={technician}
            service={service}
          />
        ))}
      </div>
    </section>
  );
}