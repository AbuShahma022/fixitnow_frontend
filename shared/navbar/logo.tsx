import Link from "next/link";
import { Wrench } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="bg-primary text-primary-foreground flex h-10 w-10 items-center justify-center rounded-lg">
        <Wrench className="h-5 w-5" />
      </div>

      <div className="flex flex-col leading-none">
        <span className="text-lg font-bold">FixItNow</span>
        <span className="text-muted-foreground text-xs">
          Home Service Marketplace
        </span>
      </div>
    </Link>
  );
}