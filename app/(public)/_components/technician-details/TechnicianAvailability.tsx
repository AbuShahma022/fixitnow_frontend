import dayjs from "dayjs";
import { CalendarClock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/shared/SectionHeading";

import { TechnicianAvailability as Availability } from "@/types/technician";

interface TechnicianAvailabilityProps {
  availabilities: Availability[];
}

export default function TechnicianAvailability({
  availabilities,
}: TechnicianAvailabilityProps) {
  return (
    <section className="space-y-6">
      <SectionHeading
        badge="Availability"
        title="Working Schedule"
        description="Available working hours for booking."
      />

      {availabilities.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            No availability has been added yet.
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {availabilities.map((slot) => (
            <Card key={slot.id}>
              <CardContent className="flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <CalendarClock className="h-5 w-5 text-primary" />

                  <div>
                    <h3 className="font-medium">
                      {slot.dayOfWeek}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {dayjs(slot.startTime).format("hh:mm A")} -{" "}
                      {dayjs(slot.endTime).format("hh:mm A")}
                    </p>
                  </div>
                </div>

                <Badge
                  variant={
                    slot.status === "AVAILABLE"
                      ? "default"
                      : "destructive"
                  }
                >
                  {slot.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}