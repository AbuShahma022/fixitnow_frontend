"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { useLogout } from "@/hooks/auth/useLogout";

import { LayoutDashboard, LogOut } from "lucide-react";

import { useProfile } from "@/hooks/auth/useProfile";

import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

interface MobileAuthProps {
  onNavigate: () => void;
}

export default function MobileAuth({
  onNavigate,
}: MobileAuthProps) {
  const { data, isLoading } = useProfile();
    const router = useRouter();

const { mutate: logout, isPending } = useLogout();

  const user = data?.data;

 if (isLoading) {
    return null;
  }



const handleLogout = () => {
  logout(undefined, {
    onSuccess: (response) => {
      toast.success(response.message);

      onNavigate(); // Close the sheet

      router.push("/");
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ?? "Logout failed."
      );
    },
  });
};



  if (!user) {
    return (
      <div className="flex flex-col gap-2">
        <Button asChild variant="outline">
          <Link href="/login" onClick={onNavigate}>
            Login
          </Link>
        </Button>

        <Button asChild>
          <Link href="/register" onClick={onNavigate}>
            Register
          </Link>
        </Button>
      </div>
    );
  }

  const initials =
  user?.name
    ?.split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase() ?? "";

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 rounded-lg border bg-muted/30 p-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={user.profileImage ?? ""} alt={user.name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>

        <div className="min-w-0 flex-1">
          <p className="truncate font-medium">{user.name}</p>

          <p className="truncate text-sm text-muted-foreground">{user.email}</p>
        </div>
      </div>

      <Button asChild variant="outline" className="w-full justify-start">
        <Link href="/dashboard" onClick={onNavigate}>
          <LayoutDashboard className="mr-2 h-4 w-4" />
          Dashboard
        </Link>
      </Button>

      <Button
        variant="ghost"
        className="w-full justify-start text-destructive hover:text-destructive"
        onClick={handleLogout}
        disabled={isPending}
      >
        <LogOut className="mr-2 h-4 w-4" />

        {isPending ? "Logging out..." : "Logout"}
      </Button>
    </div>
  );
}