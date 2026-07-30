import Link from "next/link";
import { ArrowLeft, BadgeCheck, Briefcase, MapPin, Star } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface TechnicianHeroProps {
  technician: any;
}

export default function TechnicianHero({
  technician,
}: TechnicianHeroProps) {
  const { user, location } = technician;

  return (
    <div className="space-y-8">
      <Button
        asChild
        variant="ghost"
        className="w-fit"
      >
        <Link href="/technicians">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Technicians
        </Link>
      </Button>

      <Card>
        <CardContent className="p-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <Avatar className="h-28 w-28">
              <AvatarImage src={user.profileImage ?? ""} />

              <AvatarFallback className="text-3xl">
                {user.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-4">
              <div>
                <Badge className="mb-3">
                  <BadgeCheck className="mr-1 h-3 w-3" />
                  Verified Technician
                </Badge>

                <h1 className="text-3xl font-bold">
                  {user.name}
                </h1>

                <p className="mt-2 text-muted-foreground">
                  {technician.bio}
                </p>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                  <span>
                    {technician.averageRating.toFixed(1)} (
                    {technician.totalReviews} reviews)
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />

                  <span>
                    {location.district}, {location.division}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />

                  <span>
                    {technician.experienceYears} Years Experience
                  </span>
                </div>
              </div>
            </div>

            <Button size="lg">
              Book Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}