"use client";
import AdminMobileSidebar from "./AdminMobileSidebar";
export default function AdminNavbar() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b bg-background">
      <div className="flex h-full items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-3">
          <AdminMobileSidebar />

          <h1 className="text-xl font-bold">FixItNow Admin</h1>
        </div>
        <div className="text-sm text-muted-foreground">Administrator</div>
      </div>
    </header>
  );
}
