import dayjs from "dayjs";

import { Eye } from "lucide-react";

import { ProfileUser } from "@/types/user";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import UserMobileCard from "./UserMobileCard";

interface UsersTableProps {
  users: ProfileUser[];

  onView: (user: ProfileUser) => void;

  onChangeStatus: (
    user: ProfileUser
  ) => void;
}

export default function UsersTable({
  users,
  onView,
  onChangeStatus,
}: UsersTableProps) {
  return (
    <>
    <div className="hidden md:block overflow-x-auto rounded-lg border">
      <table className="w-full text-sm">
        <thead className="bg-muted">
          <tr>
            <th className="px-4 py-3 text-left">
              Name
            </th>

            <th className="px-4 py-3 text-left">
              Email
            </th>

            <th className="px-4 py-3 text-left">
              Roles
            </th>

            <th className="px-4 py-3 text-left">
              Status
            </th>

            <th className="px-4 py-3 text-left">
              Joined
            </th>

            <th className="px-4 py-3 text-right">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-t"
            >
              <td className="px-4 py-4 font-medium">
                {user.name}
              </td>

              <td className="px-4 py-4">
                {user.email}
              </td>

              <td className="px-4 py-4">
                <div className="flex flex-wrap gap-1">
                  {user.role.map((role) => (
                    <Badge
                      key={role.id}
                      variant="secondary"
                    >
                      {role.role}
                    </Badge>
                  ))}
                </div>
              </td>

              <td className="px-4 py-4">
                <Badge>
                  {user.status}
                </Badge>
              </td>

              <td className="px-4 py-4">
                {dayjs(
                  user.createdAt
                ).format("DD MMM YYYY")}
              </td>

              <td className="px-4 py-4">
                <div className="flex justify-end gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      onView(user)
                    }
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    View
                  </Button>

                  <Button
                    size="sm"
                    variant={
                      user.status ===
                      "ACTIVE"
                        ? "destructive"
                        : "default"
                    }
                    onClick={() =>
                      onChangeStatus(
                        user
                      )
                    }
                  >
                    {user.status ===
                    "ACTIVE"
                      ? "Block"
                      : "Activate"}
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="space-y-4 md:hidden">
  {users.map((user) => (
    <UserMobileCard
      key={user.id}
      user={user}
      onView={onView}
      onChangeStatus={onChangeStatus}
    />
  ))}
</div>
    </>
  );
}