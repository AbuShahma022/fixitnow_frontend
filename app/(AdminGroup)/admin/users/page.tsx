"use client";

import { useState } from "react";

import Container from "@/shared/container";

import { useAllUsers } from "@/hooks/admin/useAllUsers";

import { ProfileUser } from "@/types/user";
import UsersTable from "../../_components/users/UsersTable";
import UserDetailsDialog from "../../_components/users/UserDetailsDialog";
import UsersSkeleton from "../../_components/users/UsersSkeleton";
import ChangeUserStatusDialog from "../../_components/users/ChangeUserStatusDialog";


export default function UsersPage() {
  const { data, isLoading } =
    useAllUsers();

  const users = data?.data ?? [];

  const [
    selectedUser,
    setSelectedUser,
  ] = useState<ProfileUser | null>(
    null
  );

  const [detailsOpen, setDetailsOpen] =
    useState(false);

  const [statusOpen, setStatusOpen] =
    useState(false);

  if (isLoading) {
    return (
      <Container className="py-8">
        <UsersSkeleton />
      </Container>
    );
  }

  return (
    <Container className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Users
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage platform users.
        </p>
      </div>

      <UsersTable
        users={users}
        onView={(user) => {
          setSelectedUser(user);
          setDetailsOpen(true);
        }}
        onChangeStatus={(user) => {
          setSelectedUser(user);
          setStatusOpen(true);
        }}
      />

      <UserDetailsDialog
        open={detailsOpen}
        onOpenChange={setDetailsOpen}
        user={selectedUser}
      />

      <ChangeUserStatusDialog
        open={statusOpen}
        onOpenChange={setStatusOpen}
        user={selectedUser}
      />
    </Container>
  );
}