import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa"

import Container from "./container";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Categories", href: "/categories" },
  { name: "Services", href: "/services" },
  { name: "Technicians", href: "/technicians" },
];

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms" },
];

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: FaFacebook,
    href: "https://facebook.com",
    label: "Facebook",
  },
];

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold"
            >
              FixItNow
            </Link>

            <p className="text-muted-foreground mt-4">
              Connecting homeowners with trusted and verified
              technicians for fast, reliable, and professional home
              services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Company
            </h3>

            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Contact
            </h3>

            <div className="space-y-4">
              <div className="text-muted-foreground flex items-center gap-3">
                <Mail className="text-primary h-5 w-5" />
                support@fixitnow.com
              </div>

              <div className="text-muted-foreground flex items-center gap-3">
                <Phone className="text-primary h-5 w-5" />
                +880 1234-567890
              </div>

              <div className="text-muted-foreground flex items-center gap-3">
                <MapPin className="text-primary h-5 w-5" />
                Dhaka, Bangladesh
              </div>

              <div className="flex gap-3 pt-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-primary hover:text-primary-foreground rounded-full border p-2 transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="text-muted-foreground border-t py-6 text-center text-sm">
          © {new Date().getFullYear()} FixItNow. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}