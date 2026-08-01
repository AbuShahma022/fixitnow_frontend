"use client";

import { Menu } from "lucide-react";

import DashboardSidebar from "./DashboardSidebar";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function DashboardHeader() {
  return (
    <header className="mb-6 flex items-center justify-between lg:hidden">
      <h1 className="text-2xl font-bold">
        Dashboard
      </h1>

      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="w-72 p-0">
          <DashboardSidebar mobile />
        </SheetContent>
      </Sheet>
    </header>
  );
}