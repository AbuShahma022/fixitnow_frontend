"use client";

export default function AdminNavbar() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b bg-background">
      <div className="flex h-full items-center justify-between px-6">
        <h1 className="text-xl font-bold">
          FixItNow Admin
        </h1>

        <div className="text-sm text-muted-foreground">
          Administrator
        </div>
      </div>
    </header>
  );
}