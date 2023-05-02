export const metadata = {
  title: "Praveen Krishna",
  description: "Page description",
};

import Hero from "@/components/hero";
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
