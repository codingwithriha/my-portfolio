import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Approach } from "../components/sections/Approach";
import { InterfaceStates } from "../components/sections/InterfaceStates";
import { Skills } from "../components/sections/Skills";
import { Experience } from "../components/sections/Experience";
import { Projects } from "../components/sections/Projects";
import { Blog } from "../components/sections/Blog";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Approach />
        <InterfaceStates />
        <Skills />
        <Experience />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}