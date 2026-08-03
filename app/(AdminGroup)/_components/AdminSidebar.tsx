"use client";

import AdminSidebarItems from "./AdminSidebarItems";

export default function AdminSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r bg-background lg:block">
      <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto p-6">
        <h2 className="mb-6 text-xl font-bold">
          Admin Panel
        </h2>

        <AdminSidebarItems />
      </div>
    </aside>
  );
}