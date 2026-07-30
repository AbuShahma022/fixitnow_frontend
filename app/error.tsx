"use client";

import { useEffect } from "react";
import { RefreshCw, TriangleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 rounded-full bg-destructive/10 p-5">
        <TriangleAlert className="h-14 w-14 text-destructive" />
      </div>

      <h1 className="text-3xl font-bold">
        Something went wrong
      </h1>

      <p className="mt-3 max-w-md text-muted-foreground">
        An unexpected error occurred while loading this page.
      </p>

      <Button
        className="mt-8"
        onClick={reset}
      >
        <RefreshCw className="mr-2 h-4 w-4" />
        Try Again
      </Button>
    </div>
  );
}