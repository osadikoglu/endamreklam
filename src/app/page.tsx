import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Sectors from "@/components/sections/Sectors";
import WhyCloudflare from "@/components/sections/WhyCloudflare";
import PricingSimple from "@/components/sections/PricingSimple";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <HowItWorks />
      <Sectors />
      <WhyCloudflare />
      <PricingSimple />
      <ContactSection />
    </div>
  );
}
