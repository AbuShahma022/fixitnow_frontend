"use client";

import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { useMasterServices } from "@/hooks/useMasterServices";
import Container from "@/shared/container";
import SectionHeading from "@/shared/SectionHeading";
import ServiceFilters from "../_components/services/ServiceFilters";
import ServicesSkeleton from "../_components/home/ServicesSkeleton";
import ServiceGrid from "../_components/services/ServiceGrid";
import EmptyServices from "../_components/services/EmptyServices";

export default function ServicesPage() {
  const [search, setSearch] = useState("");
  const [categoryId, setCategoryId] = useState("all");

const debouncedSearch = useDebounce(search);
  

  const {
    data: services,
    isLoading,
    isError,
  } = useMasterServices({
    search: debouncedSearch,
    categoryId: categoryId === "all" ? undefined : categoryId,
  });

  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          badge="Services"
          title="Explore Our Services"
          description="Browse all available home services and find the right solution for your needs."
          className="mx-auto max-w-3xl text-center"
        />

        <div className="mt-12">
          <ServiceFilters
            search={search}
            categoryId={categoryId}
            onSearchChange={setSearch}
            onCategoryChange={setCategoryId}
          />
        </div>

        <div className="mt-10">
          {isLoading && <ServicesSkeleton/>}

          {isError && (
            <p className="text-center text-red-500">
              Failed to load services.
            </p>
          )}

          {!isLoading &&
            !isError &&
            services &&
            services.length > 0 && (
              <ServiceGrid services={services} />
            )}

          {!isLoading &&
            !isError &&
            services?.length === 0 && (
              <EmptyServices />
            )}
        </div>
      </Container>
    </section>
  );
}