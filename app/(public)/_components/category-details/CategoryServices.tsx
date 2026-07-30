import SectionHeading from "@/shared/SectionHeading";



import { MasterService } from "@/types/service";
import ServiceCard from "../home/ServiceCard";
import EmptyServices from "./EmptyServices";

interface CategoryServicesProps {
  services: MasterService[];
}

export default function CategoryServices({
  services,
}: CategoryServicesProps) {
 if (!services.length) {
  return <EmptyServices />;
}

  return (
    <section className="space-y-8">
      <SectionHeading
        badge="Services"
        title="Available Services"
        description={`${services.length} service${
          services.length !== 1 ? "s" : ""
        } available in this category.`}
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}
      </div>
    </section>
  );
}