import Image from "next/image";
import Hero from "./_components/home/Hero";
import Features from "./_components/home/Features";
import PopularCategories from "./_components/home/PopularCategories";
import PopularServices from "./_components/home/PopularServices";
import TopTechnicians from "./_components/home/TopTechnicians";
import HowItWorks from "./_components/home/HowItWorks";
import CallToAction from "./_components/home/CallToAction";

export default function Home() {
  return (
   <div>
    <Hero />
    <Features />
    <PopularCategories />
    <PopularServices/>
    <TopTechnicians/>
    <HowItWorks/>
    <CallToAction/>

    </div>
  );
}
