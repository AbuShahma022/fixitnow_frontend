import { LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader>
        <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-xl">
          <Icon className="size-6" />
        </div>

        <CardTitle className="pt-4">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground leading-7">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}