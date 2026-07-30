import TechnicianCard from "../home/TechnicianCard";

import { Technician } from "@/types/technician";

interface TechnicianGridProps {
  technicians: Technician[];
}

export default function TechnicianGrid({
  technicians,
}: TechnicianGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {technicians.map((technician) => (
        <TechnicianCard
          key={technician.id}
          technician={technician}
        />
      ))}
    </div>
  );
}