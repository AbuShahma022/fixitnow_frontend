import {
  BadgeCheck,
  CreditCard,
  ShieldCheck,
  Star,
} from "lucide-react";



import FeatureCard from "./FeatureCard";
import Container from "@/shared/container";
import SectionHeading from "@/shared/SectionHeading";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Verified Professionals",
    description:
      "Every technician is carefully verified to ensure quality, trust, and reliability.",
  },
  {
    icon: BadgeCheck,
    title: "Easy Booking",
    description:
      "Book home services in just a few clicks with real-time availability.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description:
      "Pay safely online through Stripe with secure and encrypted transactions.",
  },
  {
    icon: Star,
    title: "Ratings & Reviews",
    description:
      "Read genuine customer reviews before choosing the right technician.",
  },
];

export default function Features() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          badge="Why Choose Us"
          title="Everything You Need for Reliable Home Services"
          description="FixItNow connects customers with trusted professionals through a fast, secure, and seamless booking experience."
          className="mx-auto max-w-3xl text-center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}