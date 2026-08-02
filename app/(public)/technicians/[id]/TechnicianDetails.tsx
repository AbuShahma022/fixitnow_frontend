"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@/shared/container";
import { TechnicianService } from "@/types/technician";
import { useTechnician } from "@/hooks/useTechnician";
import { useTechnicianReviews } from "@/hooks/useTechnicianReviews";
import TechnicianHero from "../../_components/technician-details/TechnicianHero";
import TechnicianServices from "../../_components/technician-details/TechnicianServices";
import TechnicianAvailability from "../../_components/technician-details/TechnicianAvailability";
import TechnicianReviews from "../../_components/technician-details/TechnicianReviews";
import TechnicianDetailsSkeleton from "../../_components/technician-details/TechnicianDetailsSkeleton";
import BookingDialog from "@/components/booking/BookingDialog";
import { useProfile } from "@/hooks/auth/useProfile";

interface TechnicianDetailsProps {
  id: string;
}

export default function TechnicianDetails({
  id,
}: TechnicianDetailsProps) {
  const router = useRouter();

const { data } = useProfile();

const user = data?.data;


const [selectedService, setSelectedService] =
  useState<TechnicianService | null>(null);

const [bookingOpen, setBookingOpen] =
  useState(false);


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
        onBook={(service) => {
          if (!user) {
            router.push("/login");
            return;
          }

          setSelectedService(service);
          setBookingOpen(true);
        }}
      />
      <TechnicianAvailability
        availabilities={technician.availabilities ?? []}
      />

      <TechnicianReviews
        averageRating={reviewsData.averageRating}
        totalReviews={reviewsData.totalReviews}
        reviews={reviewsData.reviews}
      />
      <BookingDialog
        open={bookingOpen}
        onOpenChange={setBookingOpen}
        service={selectedService}
        availabilities={technician.availabilities ?? []}
      />
    </Container>
  );

  
}