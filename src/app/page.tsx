import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import TransparentProcess from "@/components/sections/TransparentProcess";
import Sectors from "@/components/sections/Sectors";
import PricingSimple from "@/components/sections/PricingSimple";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Problem />
      <Solution />
      <TransparentProcess />
      <Sectors />
      <PricingSimple />
      <ContactSection />
    </div>
  );
}
