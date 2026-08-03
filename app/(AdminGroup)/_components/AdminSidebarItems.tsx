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

interface AdminSidebarItemsProps {
  onItemClick?: () => void;
}

export default function AdminSidebarItems({
  onItemClick,
}: AdminSidebarItemsProps) {
  const pathname = usePathname();

  return (
    <nav className="space-y-2">
      {adminNavItems.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onItemClick}
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
  );
}