"use client";

import {
  ClipboardList,
  FolderTree,
  Users,
  Wrench,
} from "lucide-react";

import Container from "@/shared/container";

import { useAllUsers } from "@/hooks/admin/useAllUsers";
import { useAdminServiceRequests } from "@/hooks/admin/useAdminServiceRequests";
import { useCategories } from "@/hooks/useCategories";
import { useMasterServices } from "@/hooks/useMasterServices";


import AdminStatCard from "../_components/AdminStatCard";
import DashboardSkeleton from "@/hooks/admin/DashboardSkeleton";

export default function AdminDashboardPage() {
  const { data: usersData, isLoading: usersLoading } =
    useAllUsers();

  const {
    data: categoriesData,
    isLoading: categoriesLoading,
  } = useCategories();

  const {
    data: servicesData,
    isLoading: servicesLoading,
  } = useMasterServices();

  const {
    data: requestsData,
    isLoading: requestsLoading,
  } = useAdminServiceRequests();

  const users = usersData?.data ?? [];
  const categories = categoriesData ?? [];
  const services = servicesData ?? [];
  const requests = requestsData?.data ?? [];

  const totalTechnicians = users.filter(
    (user) => user.technicianProfile
  ).length;

  const pendingRequests = requests.filter(
    (request) => request.status === "PENDING"
  ).length;

  if (
    usersLoading ||
    categoriesLoading ||
    servicesLoading ||
    requestsLoading
  ) {
    return (
      <Container className="py-8">
        <DashboardSkeleton />
      </Container>
    );
  }

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
          value={users.length}
          icon={Users}
        />

        <AdminStatCard
          title="Technicians"
          value={totalTechnicians}
          icon={Wrench}
        />

        <AdminStatCard
          title="Categories"
          value={categories.length}
          icon={FolderTree}
        />

        <AdminStatCard
          title="Pending Requests"
          value={pendingRequests}
          icon={ClipboardList}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-lg border p-6">
          <h2 className="mb-4 text-xl font-semibold">
            Recent Users
          </h2>

          <div className="space-y-4">
            {users
              .slice()
              .sort(
                (a, b) =>
                  new Date(
                    b.createdAt
                  ).getTime() -
                  new Date(
                    a.createdAt
                  ).getTime()
              )
              .slice(0, 5)
              .map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between border-b pb-3 last:border-0"
                >
                  <div>
                    <p className="font-medium">
                      {user.name}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      {user.email}
                    </p>
                  </div>

                  <span className="text-sm">
                    {user.status}
                  </span>
                </div>
              ))}
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="mb-4 text-xl font-semibold">
            Recent Service Requests
          </h2>

          <div className="space-y-4">
            {requests
              .slice()
              .sort(
                (a, b) =>
                  new Date(
                    b.createdAt
                  ).getTime() -
                  new Date(
                    a.createdAt
                  ).getTime()
              )
              .slice(0, 5)
              .map((request) => (
                <div
                  key={request.id}
                  className="flex items-center justify-between border-b pb-3 last:border-0"
                >
                  <div>
                    <p className="font-medium">
                      {
                        request.requestedServiceName
                      }
                    </p>

                    <p className="text-sm text-muted-foreground">
                      {
                        request.category.name
                      }
                    </p>
                  </div>

                  <span className="text-sm">
                    {request.status}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Container>
  );
}