import Link from "next/link";

import { Home, SearchX } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 rounded-full bg-primary/10 p-5">
        <SearchX className="h-14 w-14 text-primary" />
      </div>

      <h1 className="text-5xl font-bold tracking-tight">404</h1>

      <h2 className="mt-4 text-2xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-muted-foreground">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>

      <Button asChild className="mt-8">
        <Link href="/">
          <Home className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>
    </div>
  );
}