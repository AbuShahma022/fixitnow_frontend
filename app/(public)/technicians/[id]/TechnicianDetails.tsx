"use client";

import Container from "@/shared/container";

import { useTechnician } from "@/hooks/useTechnician";
import { useTechnicianReviews } from "@/hooks/useTechnicianReviews";
import TechnicianHero from "../../_components/technician-details/TechnicianHero";
import TechnicianServices from "../../_components/technician-details/TechnicianServices";
import TechnicianAvailability from "../../_components/technician-details/TechnicianAvailability";
import TechnicianReviews from "../../_components/technician-details/TechnicianReviews";
import TechnicianDetailsSkeleton from "../../_components/technician-details/TechnicianDetailsSkeleton";

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
  data: reviewsData,
  isLoading: isReviewsLoading,
} = useTechnicianReviews(id);
if (isTechnicianLoading || isReviewsLoading) {
  return (
    <Container className="py-20">
      <TechnicianDetailsSkeleton />
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

<TechnicianReviews
  averageRating={reviewsData.averageRating}
  totalReviews={reviewsData.totalReviews}
  reviews={reviewsData.reviews}
/>
    </Container>
  );
}