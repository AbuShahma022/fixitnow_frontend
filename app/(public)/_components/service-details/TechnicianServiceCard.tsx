import Link from "next/link";
import {MapPin, Star} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";

import {MasterService} from "@/types/service";
import {Technician} from "@/types/technician";

interface TechnicianServiceCardProps {
  technician: Technician;
  service: MasterService;
}

export default function TechnicianServiceCard({
  technician,
  service,
}: TechnicianServiceCardProps) {
  const technicianService = technician.technicianServices!.find(
    (item) => item.service.id === service.id,
  );

  if (!technicianService) return null;

  return (
    <Card className="transition-all hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="space-y-5 p-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14">
            <AvatarImage
              src={technician.user.profileImage ?? ""}
              alt={technician.user.name}
            />

            <AvatarFallback>
              {technician.user.name
                .split(" ")
                .map((word) => word[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <h3 className="font-semibold">{technician.user.name}</h3>

            <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {technician.location.district}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg border p-3">
            <p className="text-xs text-muted-foreground">Rating</p>

            <div className="mt-1 flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

              <span className="font-semibold">
                {technician.averageRating.toFixed(1)}
              </span>

              <span className="text-xs text-muted-foreground">
                ({technician.totalReviews})
              </span>
            </div>
          </div>

          <div className="rounded-lg border p-3">
            <p className="text-xs text-muted-foreground">Starting Price</p>

            <p className="mt-1 font-semibold text-primary">
              ৳{technicianService.price}
            </p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          {technicianService.description ??
            "No additional description provided."}
        </p>

        <div className="flex gap-3">
          <Button asChild variant="outline" className="flex-1">
            <Link href={`/technicians/${technician.id}`}>View Profile</Link>
          </Button>

          <Button className="flex-1" disabled>
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
