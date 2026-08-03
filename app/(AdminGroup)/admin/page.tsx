"use client";

import {
  Users,
  Wrench,
  ClipboardList,
  FolderTree,
} from "lucide-react";

import Container from "@/shared/container";

import AdminStatCard from "../_components/AdminStatCard";

export default function AdminDashboardPage() {
  return (
    <Container className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-muted-foreground">
          Welcome back. Here's a quick overview of the platform.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <AdminStatCard
          title="Total Users"
          value="--"
          icon={Users}
        />

        <AdminStatCard
          title="Master Services"
          value="--"
          icon={Wrench}
        />

        <AdminStatCard
          title="Categories"
          value="--"
          icon={FolderTree}
        />

        <AdminStatCard
          title="Pending Requests"
          value="--"
          icon={ClipboardList}
        />
      </div>
    </Container>
  );
}