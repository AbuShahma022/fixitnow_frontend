import {useState} from "react";
import dayjs from "dayjs";

import {ProfileUser} from "@/types/user";

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {CalendarDays, Phone, ShieldCheck, Pencil, Clock3} from "lucide-react";
import {Button} from "@/components/ui/button";
import EditProfileDialog from "./EditProfileDialog";
import EditTechnicianProfileDialog from "./EditTechnicianProfileDialog";

interface ProfileCardProps {
  user: ProfileUser;
}

export default function ProfileCard({user}: ProfileCardProps) {
  const [open, setOpen] = useState(false);
  const [technicianOpen, setTechnicianOpen] = useState(false);

  return (
    <Card>
      <CardHeader className="border-b pb-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <Avatar className="h-24 w-24">
            <AvatarImage src={user.profileImage ?? ""} />

            <AvatarFallback className="text-3xl">
              {user.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 text-center sm:text-left">
            <CardTitle className="text-2xl">{user.name}</CardTitle>

            <p className="mt-1 text-muted-foreground">{user.email}</p>

            <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
              {user.role.map((role) => (
                <Badge key={role.id}>{role.role}</Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Button onClick={() => setOpen(true)}>
              <Pencil className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>

            {user.technicianProfile && (
              <Button variant="outline" onClick={() => setTechnicianOpen(true)}>
                Edit Technician Profile
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid gap-8 py-8 md:grid-cols-2">
        <div className="flex items-start gap-3">
          <Phone className="mt-1 h-5 w-5 text-muted-foreground" />

          <div>
            <p className="text-sm text-muted-foreground">Phone</p>

            <p className="font-medium">{user.phone || "Not Added"}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-1 h-5 w-5 text-muted-foreground" />

          <div>
            <p className="text-sm text-muted-foreground">Status</p>

            <p className="font-medium">{user.status}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <CalendarDays className="mt-1 h-5 w-5 text-muted-foreground" />

          <div>
            <p className="text-sm text-muted-foreground">Joined</p>

            <p className="font-medium">
              {dayjs(user.createdAt).format("DD MMM YYYY")}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Clock3 className="mt-1 h-5 w-5 text-muted-foreground" />

          <div>
            <p className="text-sm text-muted-foreground">Last Updated</p>

            <p className="font-medium">
              {dayjs(user.updatedAt).format("DD MMM YYYY")}
            </p>
          </div>
        </div>
        {user.technicianProfile && (
          <>
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold border-t pt-6">
                Technician Information
              </h3>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Experience</p>

              <p className="font-medium">
                {user.technicianProfile.experienceYears} Years
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Rating</p>

              <p className="font-medium">
                {user.technicianProfile.averageRating.toFixed(1)} (
                {user.technicianProfile.totalReviews} reviews)
              </p>
            </div>

            <div className="md:col-span-2">
              <p className="text-sm text-muted-foreground">Bio</p>

              <p className="font-medium">{user.technicianProfile.bio}</p>
            </div>

            <div className="md:col-span-2">
              <p className="text-sm text-muted-foreground">Location</p>

              <p className="font-medium">
                {user.technicianProfile.location.area},{" "}
                {user.technicianProfile.location.district},{" "}
                {user.technicianProfile.location.division},{" "}
                {user.technicianProfile.location.country}
              </p>
            </div>
          </>
        )}
      </CardContent>
      <EditProfileDialog open={open} onOpenChange={setOpen} user={user} />
      <EditTechnicianProfileDialog
        open={technicianOpen}
        onOpenChange={setTechnicianOpen}
        technician={user.technicianProfile}
      />
    </Card>
  );
}
