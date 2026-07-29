import Link from "next/link";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";


import { Button } from "@/components/ui/button";
import Container from "@/shared/container";

export default function CallToAction() {
  return (
    <section className="py-20">
      <Container>
        <div className="from-primary to-primary/80 rounded-3xl bg-gradient-to-r px-8 py-16 text-center text-white md:px-16">
          <h2 className="text-3xl font-bold md:text-5xl">
            Need a Trusted Technician Today?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Connect with experienced professionals for electrical,
            plumbing, cleaning, AC repair, and many other home services.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
            >
              <Link href="/services">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-primary"
            >
              <Link href="/register">
                Become a Technician
                <BriefcaseBusiness className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}