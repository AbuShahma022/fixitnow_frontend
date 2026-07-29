"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";


import { Button } from "@/components/ui/button";

import TechnicianCard from "./TechnicianCard";
import TechniciansSkeleton from "./TechniciansSkeleton";

import { useTechnicians } from "@/hooks/useTechnicians";
import Container from "@/shared/container";
import SectionHeading from "@/shared/SectionHeading";

export default function TopTechnicians() {
  const {
    data: technicians,
    isLoading,
    isError,
  } = useTechnicians();

  const featuredTechnicians = technicians?.slice(0, 6);

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          badge="Technicians"
          title="Meet Our Trusted Professionals"
          description="Browse experienced and verified technicians ready to help with your home service needs."
          className="mx-auto max-w-3xl text-center"
        />

        <div className="mt-14">
          {isLoading && <TechniciansSkeleton />}

          {isError && (
            <p className="text-center text-red-500">
              Failed to load technicians.
            </p>
          )}

          {!isLoading &&
            !isError &&
            featuredTechnicians &&
            featuredTechnicians.length > 0 && (
              <>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {featuredTechnicians.map((technician) => (
                    <TechnicianCard
                      key={technician.id}
                      technician={technician}
                    />
                  ))}
                </div>

                <div className="mt-12 flex justify-center">
                  <Button asChild size="lg">
                    <Link href="/technicians">
                      View All Technicians
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </>
            )}

          {!isLoading &&
            !isError &&
            featuredTechnicians?.length === 0 && (
              <p className="text-muted-foreground text-center">
                No technicians found.
              </p>
            )}
        </div>
      </Container>
    </section>
  );
}