import {Badge} from "@/components/ui/badge";
import {Card, CardContent} from "@/components/ui/card";

import {MasterService} from "@/types/service";

interface ServiceHeroProps {
  service: MasterService;
}

export default function ServiceHero({service}: ServiceHeroProps) {
  return (
    <Card>
      <CardContent className="space-y-6 p-8">
        <div className="space-y-3">
          <Badge variant="secondary">{service.category.name}</Badge>

          <h1 className="text-4xl font-bold tracking-tight">{service.name}</h1>

          <p className="text-muted-foreground max-w-3xl text-lg">
            {service.description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border p-4">
            <p className="text-muted-foreground text-sm">Category</p>

            <p className="mt-1 font-semibold">{service.category.name}</p>
          </div>

          <div className="rounded-lg border p-4">
            <p className="text-muted-foreground text-sm">Status</p>

            <Badge
              variant={service.status === "ACTIVE" ? "default" : "secondary"}
              className="mt-2"
            >
              {service.status}
            </Badge>
          </div>

          <div className="rounded-lg border p-4">
            <p className="text-muted-foreground text-sm">Availability</p>

            <p className="mt-1 font-semibold text-green-600">Available</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
