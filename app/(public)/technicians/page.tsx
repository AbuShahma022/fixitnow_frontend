"use client";

import { useMemo, useState } from "react";

import Container from "@/shared/container";
import SectionHeading from "@/shared/SectionHeading";

import { useDebounce } from "@/hooks/useDebounce";
import { useTechnicians } from "@/hooks/useTechnicians";

import TechnicianFilters from "../_components/technicians/TechnicianFilters";
import TechnicianGrid from "../_components/technicians/TechnicianGrid";
import TechnicianGridSkeleton from "../_components/technicians/TechnicianGridSkeleton";
import EmptyTechnicians from "../_components/technicians/EmptyTechnicians";

export default function TechniciansPage() {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading } = useTechnicians({
    search: debouncedSearch,
  });

  const technicians = useMemo(() => data ?? [], [data]);

  return (
    <Container className="space-y-10 py-20">
      <SectionHeading
        badge="Technicians"
        title="Find Skilled Technicians"
        description="Browse experienced technicians for home services."
      />

      <TechnicianFilters
        search={search}
        onSearchChange={setSearch}
      />

      {isLoading ? (
        <TechnicianGridSkeleton />
      ) : technicians.length === 0 ? (
        <EmptyTechnicians />
      ) : (
        <TechnicianGrid technicians={technicians} />
      )}
    </Container>
  );
}