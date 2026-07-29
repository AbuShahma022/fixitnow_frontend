import { LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

interface StepCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  step: number;
}

export default function StepCard({
  icon: Icon,
  title,
  description,
  step,
}: StepCardProps) {
  return (
     <div className="relative pt-5">
    <div className="bg-primary text-primary-foreground absolute left-1/2 top-0 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-sm font-bold shadow-md">
      {step}
    </div>

    <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="flex flex-col items-center p-8 text-center">
        <div className="bg-primary/10 text-primary mt-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110">
          <Icon className="size-8" />
        </div>

        <h3 className="mt-6 text-xl font-semibold">
          {title}
        </h3>

        <p className="text-muted-foreground mt-3">
          {description}
        </p>
      </CardContent>
    </Card>
  </div>
  );
}