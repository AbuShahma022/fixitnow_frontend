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
    const groupedAvailabilities = availabilities.reduce(
  (acc, slot) => {
    if (!acc[slot.dayOfWeek]) {
      acc[slot.dayOfWeek] = [];
    }

    acc[slot.dayOfWeek].push(slot);

    return acc;
  },
  {} as Record<string, Availability[]>
);
const formatDay = (day: string) =>
  day.charAt(0) + day.slice(1).toLowerCase();

const dayOrder = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];

const sortedDays = Object.entries(groupedAvailabilities).sort(
  ([dayA], [dayB]) =>
    dayOrder.indexOf(dayA) - dayOrder.indexOf(dayB)
);



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
  {sortedDays.map(([day, slots]) => (
    <Card key={day}>
      <CardContent className="space-y-4 p-6">
        <h3 className="text-lg font-semibold">
          {formatDay(day)}
        </h3>

        <div className="space-y-3">
          {slots.map((slot) => (
            <div
              key={slot.id}
              className="flex items-center justify-between rounded-md border p-3"
            >
              <div className="flex items-center gap-3">
                <CalendarClock className="h-4 w-4 text-primary" />

                <span>
                  {dayjs(slot.startTime).format("hh:mm A")} -{" "}
                  {dayjs(slot.endTime).format("hh:mm A")}
                </span>
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
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  ))}
</div>
      )}
    </section>
  );
}