"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  ClipboardList,
  User,
  
  CreditCard,
  BriefcaseBusiness,
CalendarDays,
FilePlus2,
} from "lucide-react";
import { useProfile } from "@/hooks/auth/useProfile";

import { cn } from "@/lib/utils";

const customerNavItems = [
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
  
];

const technicianNavItems = [
  {
    title: "Technician Dashboard",
    href: "/dashboard/technician",
    icon: LayoutDashboard,
  },
  {
    title: "Technician Bookings",
    href: "/dashboard/technician/bookings",
    icon: ClipboardList,
  },
  {
    title: "My Services",
    href: "/dashboard/technician/services",
    icon: BriefcaseBusiness,
  },
  {
  title: "Service Requests",
  href: "/dashboard/technician/service-requests",
  icon: FilePlus2,
},
  {
    title: "Availability",
    href: "/dashboard/technician/availability",
    icon: CalendarDays,
  },
];

interface DashboardSidebarProps {
  mobile?: boolean;
}

export default function DashboardSidebar({
     mobile = false,
}: DashboardSidebarProps) {
  const pathname = usePathname();
  const { data } = useProfile();

const isTechnician =
  !!data?.data?.technicianProfile;
  const navItems = isTechnician
  ? [
      ...customerNavItems,
      ...technicianNavItems,
    ]
  : customerNavItems;

  return (
   <aside
  className={cn(
    "w-64 shrink-0 bg-background",
    mobile
      ? "block border-0"
      : "hidden border-r lg:block"
  )}
>
     <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto p-6">
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