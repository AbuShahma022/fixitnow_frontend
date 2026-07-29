"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/shared/container";
import SectionHeading from "@/shared/SectionHeading";
import { Button } from "@/components/ui/button";

import ServiceCard from "./ServiceCard";
import ServicesSkeleton from "./ServicesSkeleton";

import { useMasterServices } from "@/hooks/useMasterServices";


export default function PopularServices() {
  const {
    data: services,
    isLoading,
    isError,
  } = useMasterServices();

  const featuredServices = services?.slice(0, 6);

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          badge="Popular Services"
          title="Discover Our Most Requested Services"
          description="Choose from a wide range of trusted home services provided by verified professionals."
          className="mx-auto max-w-3xl text-center"
        />

        <div className="mt-14">
          {isLoading && <ServicesSkeleton />}

          {isError && (
            <p className="text-center text-red-500">
              Failed to load services.
            </p>
          )}

          {!isLoading &&
            !isError &&
            featuredServices &&
            featuredServices.length > 0 && (
              <>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {featuredServices.map((service) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                    />
                  ))}
                </div>

                <div className="mt-12 flex justify-center">
                  <Button asChild size="lg">
                    <Link href="/services">
                      View All Services
                      <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>
              </>
            )}

          {!isLoading &&
            !isError &&
            featuredServices?.length === 0 && (
              <p className="text-muted-foreground text-center">
                No services found.
              </p>
            )}
        </div>
      </Container>
    </section>
  );
}