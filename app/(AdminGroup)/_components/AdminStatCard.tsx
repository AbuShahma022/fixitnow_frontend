import { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface AdminStatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
}

export default function AdminStatCard({
  title,
  value,
  icon: Icon,
}: AdminStatCardProps) {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-6">
        <div>
          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>
        </div>

        <div className="rounded-lg bg-primary/10 p-3">
          <Icon className="h-7 w-7 text-primary" />
        </div>
      </CardContent>
    </Card>
  );
}