"use client";

import { ReactNode } from "react";
import {  useRouter } from "next/navigation";
import { useEffect } from "react";

import DashboardSidebar from "../_components/DashboardSidebar";
import DashboardHeader from "../_components/DashboardHeader";

import { useProfile } from "@/hooks/auth/useProfile";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const router = useRouter();

  const { data, isLoading, isError } =
    useProfile();

  useEffect(() => {
    if (!isLoading && isError) {
      router.replace("/login");
    }
  }, [isLoading, isError, router]);

  if (isLoading) {
    return null;
  }

  if (isError) {
    return null;
  }

  const user = data?.data;

  const isAdmin = user?.role.some(
    (role) => role.role === "ADMIN"
  );

  if (isAdmin) {
   router.replace("/not-found");
  }

  return (
    <div className="flex min-h-[calc(100vh-80px)]">
      <DashboardSidebar />

      <main className="flex-1 p-6">
        <DashboardHeader />
        {children}
      </main>
    </div>
  );
}