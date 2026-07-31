import Link from "next/link";

import Container from "../container";
import Logo from "./logo";
import MobileNav from "./MobileNav";

import NavLinks from "./NavLinks";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import AuthButtons from "./AuthButtons";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <Container>
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <NavLinks />

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 md:flex">
            <ModeToggle />

              <AuthButtons/>
          </div>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}