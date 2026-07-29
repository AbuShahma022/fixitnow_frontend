import Container from "@/shared/container";
import StepCard from "./StepCard";

import { HOW_IT_WORKS } from "@/constants/howItWorks";
import SectionHeading from "@/shared/SectionHeading";

export default function HowItWorks() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          badge="How It Works"
          title="Book a Trusted Technician in 3 Easy Steps"
          description="Finding professional home services has never been easier. Follow these simple steps to get started."
          className="mx-auto max-w-3xl text-center"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {HOW_IT_WORKS.map((step, index) => (
            <StepCard
              key={step.title}
              step={index + 1}
              {...step}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}