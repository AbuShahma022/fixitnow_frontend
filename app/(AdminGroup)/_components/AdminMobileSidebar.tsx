"use client";

import { useState } from "react";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import AdminSidebarItems from "./AdminSidebarItems";

export default function AdminMobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="w-72"
        >
          <SheetHeader>
            <SheetTitle>
              Admin Panel
            </SheetTitle>
          </SheetHeader>

          <div className="mt-6">
            <AdminSidebarItems
              onItemClick={() =>
                setOpen(false)
              }
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}