"use client";

import { useParams } from "next/navigation";
import { useTechnicians } from "@/hooks/useTechnicians";
import { useMasterService } from "@/hooks/useMasterService";
import Container from "@/shared/container";
import ServiceHero from "../../_components/service-details/ServiceHero";
import TechnicianList from "../../_components/service-details/TechnicianList";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import ServicesSkeleton from "../../_components/services/ServicesSkeleton";


export default function ServiceDetailsPage() {
  const params = useParams();

  const id = params.id as string;

  const {
    data: service,
    isLoading,
    isError,
  } = useMasterService(id);

  const {
  data: technicians,
  isLoading: isTechniciansLoading,
} = useTechnicians(
  {
    search: service?.name,
  },
  !!service
);

  if (isLoading) {
    return (
      <Container className="py-20">
          <ServicesSkeleton />
      </Container>
    );
  }

  if (isError || !service) {
    return (
      <Container className="py-20">
        Service not found.
      </Container>
    );
  }

  return (
    <Container className="py-20">
    <Button
  asChild
  variant="ghost"
  className="w-fit"
>
  <Link href="/services">
    <ArrowLeft className="mr-2 h-4 w-4" />
    Back to Services
  </Link>
</Button>
      <ServiceHero service={service} />
        <TechnicianList
      service={service}
      technicians={technicians ?? []}
      isLoading={isTechniciansLoading}
    />
     
    </Container>
  );
}