

import { MasterService } from "@/types/service";
import ServiceCard from "../home/ServiceCard";

interface Props {
  services: MasterService[];
}

export default function ServiceGrid({
  services,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
        />
      ))}
    </div>
  );
}