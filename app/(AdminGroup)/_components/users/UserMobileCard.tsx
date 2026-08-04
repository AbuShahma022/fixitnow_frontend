import dayjs from "dayjs";
import { Eye } from "lucide-react";

import { ProfileUser } from "@/types/user";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

interface UserMobileCardProps {
  user: ProfileUser;
  onView: (user: ProfileUser) => void;
  onChangeStatus: (
    user: ProfileUser
  ) => void;
}

export default function UserMobileCard({
  user,
  onView,
  onChangeStatus,
}: UserMobileCardProps) {
  return (
    <Card>
      <CardContent className="space-y-4 p-4">
        <div>
          <h3 className="font-semibold">
            {user.name}
          </h3>

          <p className="text-sm text-muted-foreground break-all">
            {user.email}
          </p>
        </div>

        <div>
          <p className="mb-2 text-xs font-medium text-muted-foreground">
            Roles
          </p>

          <div className="flex flex-wrap gap-2">
            {user.role.map((role) => (
              <Badge
                key={role.id}
                variant="secondary"
              >
                {role.role}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Badge>{user.status}</Badge>

          <span className="text-xs text-muted-foreground">
            {dayjs(user.createdAt).format(
              "DD MMM YYYY"
            )}
          </span>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => onView(user)}
          >
            <Eye className="mr-2 h-4 w-4" />
            View
          </Button>

          <Button
            className="flex-1"
            variant={
              user.status === "ACTIVE"
                ? "destructive"
                : "default"
            }
            onClick={() =>
              onChangeStatus(user)
            }
          >
            {user.status === "ACTIVE"
              ? "Block"
              : "Activate"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}