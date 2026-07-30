import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/shared/SectionHeading";

import { TechnicianService } from "@/types/technician";

interface TechnicianServicesProps {
  services: TechnicianService[];
}

export default function TechnicianServices({
  services,
}: TechnicianServicesProps) {
  const activeServices = services.filter(
    (service) => service.status === "ACTIVE"
  );

  return (
    <section className="space-y-6">
      <SectionHeading
        badge="Services"
        title="Services Offered"
        description="Professional services currently offered by this technician."
      />

      {activeServices.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            No active services available.
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {activeServices.map((item) => (
            <Card key={item.id}>
              <CardContent className="space-y-4 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-lg">
                      {item.service.name}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {item.service.category.name}
                    </p>
                  </div>

                  <Badge>
                    ৳{Number(item.price).toLocaleString()}
                  </Badge>
                </div>

                {item.description && (
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}