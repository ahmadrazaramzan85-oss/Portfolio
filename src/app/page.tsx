import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import PracticalProjects from "@/components/PracticalProjects";
import MarketingSkills from "@/components/MarketingSkills";

export default function Home() {
  return (
    <main className="relative bg-[#121212] min-h-screen selection:bg-white/30">
      <div className="relative">
        {/* Sticky Canvas background */}
        <ScrollyCanvas />
        {/* Absolute positioned interactive/parallax text layer over the canvas container */}
        <Overlay />
      </div>
      
      {/* Normal scrolling sections below the sequence */}
      <About />
      <Experience />
      <Skills />
      <Projects />
      <PracticalProjects />
      <MarketingSkills />
      
      {/* Spacer to allow scrolling past the projects component for visual clarity */}
      <footer className="h-[50vh] flex items-center justify-center text-white/30 text-sm tracking-widest uppercase">
        © {new Date().getFullYear()} Creative Studio. All rights reserved.
      </footer>
    </main>
  );
}
