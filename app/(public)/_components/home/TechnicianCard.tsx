import Link from "next/link";
import { ArrowRight, MapPin, Star, UserCircle } from "lucide-react";

import { Technician } from "@/types/technician";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TechnicianCardProps {
  technician: Technician;
}

export default function TechnicianCard({
  technician,
}: TechnicianCardProps) {
  const { user, location } = technician;

  return (
    <Card className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="flex flex-col items-center space-y-4 pt-6 text-center">
        <Avatar className="h-20 w-20">
          <AvatarImage src={user.profileImage ?? ""} />
          <AvatarFallback>
            <UserCircle className="h-10 w-10" />
          </AvatarFallback>
        </Avatar>

        <div>
          <h3 className="text-xl font-semibold">{user.name}</h3>

          <p className="text-muted-foreground mt-2 line-clamp-2 text-sm">
            {technician.bio}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary">
            {technician.experienceYears} Years Exp.
          </Badge>

          {technician.totalReviews > 0 ? (
            <Badge variant="outline">
              <Star className="mr-1 h-3 w-3 fill-yellow-400 text-yellow-400" />
              {technician.averageRating.toFixed(1)} ({technician.totalReviews})
            </Badge>
          ) : (
            <Badge variant="outline">New Technician</Badge>
          )}
        </div>

        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <MapPin className="h-4 w-4" />
          {location.district}, {location.division}
        </div>
      </CardContent>

      <CardFooter className="justify-center">
        <Link
          href={`/technicians/${technician.id}`}
          className="text-primary inline-flex items-center gap-2 text-sm font-medium"
        >
          View Profile
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
}