"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useProfile } from "@/hooks/auth/useProfile";

import BecomeTechnicianDialog from "./BecomeTechnicianDialog";

import { Button } from "@/components/ui/button";

export default function BecomeTechnicianButton() {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const { data } = useProfile();

  const user = data?.data;

const isTechnician =
  !!user?.technicianProfile;

if (isTechnician) {
  return null;
}

  return (
    <>
      <Button
        variant="outline"
        size="lg"
        onClick={() => {
          if (!user) {
            router.push("/login");
            return;
          }

          setOpen(true);
        }}
      >
        Become a Technician
      </Button>
      <BecomeTechnicianDialog open={open} onOpenChange={setOpen} />
    </>
  );
}