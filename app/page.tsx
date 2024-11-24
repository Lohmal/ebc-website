import Contact from "@/components/main/Contact";
import Experience from "@/components/main/Experience";
import Hero from "@/components/main/Hero";
import { Photos } from "@/components/main/Photos";
import Projects from "@/components/main/Projects";
import { Teams } from "@/components/main/Teams";
import Sponsor from "@/components/main/Sponsor";

export default function Home() {
  return (
    <main className="h-full w-full container">
      <div className="flex flex-col gap-20">
        <Hero />
        <Experience />
        <Photos />
        <Teams />
        <Sponsor />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
