"use client";

import { ReactNode } from "react";
import { useProfile } from "@/hooks/auth/useProfile";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Container from "@/shared/container";

import AdminSidebar from "../_components/AdminSidebar";
import AdminNavbar from "../_components/AdminNavbar";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({
  children,
}: AdminLayoutProps) {
    const router = useRouter();

const { data, isLoading } = useProfile();

const isAdmin =
  data?.data.role.length === 1 &&
  data.data.role[0].role === "ADMIN";

useEffect(() => {
  if (!isLoading && !isAdmin) {
    router.replace("/not-found");
  }
}, [isLoading, isAdmin, router]);

if (isLoading) {
  return (
    <Container className="py-10">
      Loading...
    </Container>
  );
}

if (!isAdmin) {
  return null;
}

  return (
    <div className="min-h-screen bg-muted/30">
      <AdminNavbar />

      <div className="mx-auto flex max-w-7xl">
        <AdminSidebar />

        <main className="min-h-[calc(100vh-64px)] flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}