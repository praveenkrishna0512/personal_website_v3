export const metadata = {
  title: "Praveen Krishna",
  description: "My Personal Website!",
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
    </div>
  );
}
