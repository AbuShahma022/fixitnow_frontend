"use client";

import dayjs from "dayjs";

import { ProfileUser } from "@/types/user";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface UserDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: ProfileUser | null;
}

export default function UserDetailsDialog({
  open,
  onOpenChange,
  user,
}: UserDetailsDialogProps) {
  if (!user) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            User Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex items-center gap-5">
            <Avatar className="h-20 w-20">
              <AvatarImage
                src={user.profileImage ?? ""}
              />

              <AvatarFallback className="text-2xl">
                {user.name
                  .charAt(0)
                  .toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div>
              <h2 className="text-xl font-semibold">
                {user.name}
              </h2>

              <p className="text-muted-foreground">
                {user.email}
              </p>

              <div className="mt-2 flex flex-wrap gap-2">
                {user.role.map((role) => (
                  <Badge key={role.id}>
                    {role.role}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm text-muted-foreground">
                Phone
              </p>

              <p>
                {user.phone ??
                  "Not Provided"}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Status
              </p>

              <Badge>
                {user.status}
              </Badge>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Joined
              </p>

              <p>
                {dayjs(
                  user.createdAt
                ).format(
                  "DD MMM YYYY"
                )}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Updated
              </p>

              <p>
                {dayjs(
                  user.updatedAt
                ).format(
                  "DD MMM YYYY"
                )}
              </p>
            </div>
          </div>

          {user.technicianProfile && (
            <>
              <div className="border-t pt-6">
                <h3 className="mb-4 text-lg font-semibold">
                  Technician Profile
                </h3>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Experience
                    </p>

                    <p>
                      {
                        user
                          .technicianProfile
                          .experienceYears
                      }{" "}
                      Years
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Rating
                    </p>

                    <p>
                      {
                        user
                          .technicianProfile
                          .averageRating
                      }
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Reviews
                    </p>

                    <p>
                      {
                        user
                          .technicianProfile
                          .totalReviews
                      }
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Bio
                  </p>

                  <p>
                    {
                      user
                        .technicianProfile
                        .bio
                    }
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Location
                  </p>

                  <p>
                    {
                      user
                        .technicianProfile
                        .location
                        .area
                    }
                    ,{" "}
                    {
                      user
                        .technicianProfile
                        .location
                        .district
                    }
                    ,{" "}
                    {
                      user
                        .technicianProfile
                        .location
                        .division
                    }
                    ,{" "}
                    {
                      user
                        .technicianProfile
                        .location
                        .country
                    }
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}