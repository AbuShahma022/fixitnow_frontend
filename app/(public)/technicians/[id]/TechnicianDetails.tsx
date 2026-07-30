"use client";

import Container from "@/shared/container";

import { useTechnician } from "@/hooks/useTechnician";
import { useTechnicianReviews } from "@/hooks/useTechnicianReviews";
import TechnicianHero from "../../_components/technician-details/TechnicianHero";
import TechnicianServices from "../../_components/technician-details/TechnicianServices";
import TechnicianAvailability from "../../_components/technician-details/TechnicianAvailability";

interface TechnicianDetailsProps {
  id: string;
}

export default function TechnicianDetails({
  id,
}: TechnicianDetailsProps) {
  const {
    data: technician,
    isLoading: isTechnicianLoading,
  } = useTechnician(id);

  const {
    data: reviews,
    isLoading: isReviewsLoading,
  } = useTechnicianReviews(id);

  if (isTechnicianLoading || isReviewsLoading) {
    return (
      <Container className="py-20">
        Loading...
      </Container>
    );
  }

  if (!technician) {
    return (
      <Container className="py-20">
        Technician not found.
      </Container>
    );
  }

  return (
    <Container className="space-y-10 py-20">
     <TechnicianHero technician={technician} />
     <TechnicianServices
  services={technician.technicianServices ?? []}
/>

<TechnicianAvailability
  availabilities={technician.availabilities ?? []}
/>
    </Container>
  );
}