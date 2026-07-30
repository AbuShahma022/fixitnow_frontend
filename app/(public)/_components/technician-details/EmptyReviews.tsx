import { Card, CardContent } from "@/components/ui/card";

export default function EmptyReviews() {
  return (
    <Card>
      <CardContent className="py-12 text-center text-muted-foreground">
        No reviews yet.
      </CardContent>
    </Card>
  );
}