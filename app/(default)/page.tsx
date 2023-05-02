export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";
import About from "@/components/about";
import TechExperiences from "@/components/tech-experiences";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <TechExperiences />
      
      {/* <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter /> */}
    </div>
  );
}
