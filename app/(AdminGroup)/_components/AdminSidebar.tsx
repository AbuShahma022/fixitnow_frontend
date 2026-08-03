"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  ClipboardList,
  FolderTree,
  BriefcaseBusiness,
  Users,
  CalendarCheck,
  CreditCard,
} from "lucide-react";

import { cn } from "@/lib/utils";

const adminNavItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Service Requests",
    href: "/admin/service-requests",
    icon: ClipboardList,
  },
  {
    title: "Categories",
    href: "/admin/categories",
    icon: FolderTree,
  },
  {
    title: "Master Services",
    href: "/admin/services",
    icon: BriefcaseBusiness,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Bookings",
    href: "/admin/bookings",
    icon: CalendarCheck,
  },
  {
    title: "Payments",
    href: "/admin/payments",
    icon: CreditCard,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 border-r bg-background lg:block">
      <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto p-6">
        <h2 className="mb-6 text-xl font-bold">
          Admin Panel
        </h2>

        <nav className="space-y-2">
          {adminNavItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors hover:bg-muted",
                  pathname === item.href &&
                    "bg-primary text-primary-foreground hover:bg-primary"
                )}
              >
                <Icon className="h-5 w-5" />
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}