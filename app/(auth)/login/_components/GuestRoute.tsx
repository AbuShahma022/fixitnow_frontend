"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useProfile } from "@/hooks/auth/useProfile";

interface GuestRouteProps {
  children: React.ReactNode;
}

export default function GuestRoute({
  children,
}: GuestRouteProps) {
  const router = useRouter();

  const { data, isLoading } = useProfile();

  const user = data?.data;

  useEffect(() => {
    if (user) {
      router.replace("/");
    }
  }, [user, router]);

  if (isLoading) {
    return null;
  }

  if (user) {
    return null;
  }

  return <>{children}</>;
}