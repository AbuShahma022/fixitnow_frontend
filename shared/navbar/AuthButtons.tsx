"use client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useProfile } from "@/hooks/auth/useProfile";
import { LayoutDashboard, LogOut } from "lucide-react";
import { useLogout } from "@/hooks/auth/useLogout";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export default function AuthButtons() {
     const { data, isLoading } = useProfile();

  const user = data?.data;
  const isAdmin = user?.role.some(
  (item) => item.role === "ADMIN"
);
  const router = useRouter();

const { mutate: logout, isPending } = useLogout();

const handleLogout = () => {
  logout(undefined, {
    onSuccess: (response) => {
      toast.success(response.message);

      router.push("/");
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ??
          "Logout failed."
      );
    },
  });
};


    
  const initials =
  user?.name
    ?.split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase() ?? "";
 if (isLoading) {
  return null;
}

if (!user) {
  return (
    <>
      <Button variant="ghost" asChild>
        <Link href="/login">Login</Link>
      </Button>

      <Button asChild>
        <Link href="/register">Register</Link>
      </Button>
    </>
  );
}



return (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        variant="ghost"
        className="relative h-10 w-10 rounded-full p-0"
      >
        <Avatar className="h-10 w-10">
          <AvatarImage
            src={user.profileImage ?? ""}
            alt={user.name}
          />

          <AvatarFallback>
            {initials}
          </AvatarFallback>
        </Avatar>
      </Button>
    </DropdownMenuTrigger>

<DropdownMenuContent align="end" className="w-64">
  <DropdownMenuLabel className="space-y-1">
    <p className="font-medium">{user.name}</p>

    <p className="text-xs font-normal text-muted-foreground">
      {user.email}
    </p>
  </DropdownMenuLabel>

  <DropdownMenuSeparator />

  <DropdownMenuItem asChild>
    <Link
      href={isAdmin ? "/admin" : "/dashboard"}

      className="flex cursor-pointer items-center gap-2"
    >
      <LayoutDashboard className="h-4 w-4" />
      Dashboard
    </Link>
  </DropdownMenuItem>

  <DropdownMenuSeparator />

  <DropdownMenuItem
  onClick={handleLogout}
  disabled={isPending}
  className="cursor-pointer text-destructive focus:text-destructive"
>
  <LogOut className="mr-2 h-4 w-4" />

  {isPending ? "Logging out..." : "Logout"}
</DropdownMenuItem>
</DropdownMenuContent>


  </DropdownMenu>
);

}