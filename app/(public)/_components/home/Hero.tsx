
import HeroContent from "./HeroContent";
import Container from "@/shared/container";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <HeroContent />
          <HeroImage/>
        </div>
      </Container>
    </section>
  );
}