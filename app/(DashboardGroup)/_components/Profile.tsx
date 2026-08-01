"use client";

import Container from "@/shared/container";

import { useProfile } from "@/hooks/auth/useProfile";
import ProfileCard from "./ProfileCard";


export default function Profile() {
  const { data, isLoading, isError } = useProfile();

  if (isLoading) {
    return (
      <Container className="py-10">
        Loading...
      </Container>
    );
  }

  if (isError || !data) {
    return (
      <Container className="py-10">
        Failed to load profile.
      </Container>
    );
  }

  const user = data.data;

  return (
    <Container className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          My Profile
        </h1>

        <p className="text-muted-foreground">
          Manage your account information.
        </p>
      </div>

      <ProfileCard user={user} />
    </Container>
  );
}