import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";

import { MasterService } from "@/types/service";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface ServiceCardProps {
  service: MasterService;
}

export default function ServiceCard({
  service,
}: ServiceCardProps) {
  return (
    <Card className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="space-y-4 pt-6">
        <div className="bg-primary/10 text-primary flex h-14 w-14 items-center justify-center rounded-xl">
          <Wrench className="size-7" />
        </div>

        <div>
          <Badge variant="secondary">
            {service.category.name}
          </Badge>

          <h3 className="mt-3 text-xl font-semibold">
            {service.name}
          </h3>

          <p className="text-muted-foreground mt-2 line-clamp-2">
            {service.description}
          </p>
        </div>
      </CardContent>

      <CardFooter>
        <Link
          href={`/services/${service.id}`}
          className="text-primary inline-flex items-center gap-2 text-sm font-medium"
        >
          View Details
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}