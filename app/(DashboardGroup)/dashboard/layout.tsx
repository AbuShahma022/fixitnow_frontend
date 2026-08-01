import { ReactNode } from "react";
import DashboardSidebar from "../_components/DashboardSidebar";
import DashboardHeader from "../_components/DashboardHeader";



interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-[calc(100vh-80px)]">
      <DashboardSidebar />

      <main className="flex-1 p-6">
          <DashboardHeader />
        {children}
      </main>
    </div>
  );
}