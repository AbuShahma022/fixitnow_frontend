import Link from "next/link";

import { ArrowRight, Clock3, ShieldCheck, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HeroContent() {
  return (
    <div>
      <Badge variant="secondary" className="rounded-full px-4 py-1">
        Trusted Home Service Marketplace
      </Badge>

      <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
        Find Skilled{" "}
        <span className="text-primary">Professionals</span> for Every Home
        Service
      </h1>

      <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-8">
        Book verified technicians for plumbing, electrical, AC repair,
        cleaning, painting, appliance repair, and more—all in one place.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Button asChild size="lg">
          <Link href="/services">
            Find Services
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>

        <Button asChild variant="outline" size="lg">
          <Link href="/register">
            Become a Technician
          </Link>
        </Button>
      </div>

      <div className="mt-10 flex flex-wrap gap-6 text-sm">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-primary size-5" />
          <span>Verified Professionals</span>
        </div>

        <div className="flex items-center gap-2">
          <Clock3 className="text-primary size-5" />
          <span>Fast Booking</span>
        </div>

        <div className="flex items-center gap-2">
          <Star className="text-primary size-5" />
          <span>Trusted by Customers</span>
        </div>
      </div>
    </div>
  );
}