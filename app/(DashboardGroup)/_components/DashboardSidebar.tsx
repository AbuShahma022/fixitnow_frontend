"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  ClipboardList,
  User,
  Settings,
  CreditCard,
} from "lucide-react";

import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Bookings",
    href: "/dashboard/bookings",
    icon: ClipboardList,
  },
  {
  title: "Payment History",
  href: "/dashboard/payment-history",
  icon: CreditCard,
},
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

interface DashboardSidebarProps {
  mobile?: boolean;
}

export default function DashboardSidebar({
     mobile = false,
}: DashboardSidebarProps) {
  const pathname = usePathname();

  return (
   <aside
  className={cn(
    "w-64 shrink-0 bg-background",
    mobile
      ? "block border-0"
      : "hidden border-r lg:block"
  )}
>
      <div className="sticky top-20 p-6">
        <h2 className="mb-6 text-xl font-bold">
          Dashboard
        </h2>

        <nav className="space-y-2">
          {navItems.map((item) => {
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