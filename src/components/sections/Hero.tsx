import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Button } from "../ui/button";

const ROLES = [
  "MERN Stack Engineer",
  "React Developer",
  "Node.js Developer",
  "OpenSource Contributor",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Riha Shahzadi - MERN Stack Engineer.pdf";
    link.download = "Riha Shahzadi - MERN Stack Engineer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between z-10 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-left space-y-6"
        >
          <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-mono mb-4">
            Hello, World! 👋
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            Hi, I'm <span className="text-primary">Riha Shahzadi</span>
          </h1>

          <div className="h-[40px] md:h-[60px] flex items-center">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-2xl md:text-3xl text-muted-foreground font-light"
            >
              {ROLES[roleIndex]}
            </motion.p>
          </div>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Detail-oriented MERN Stack Developer with 2+ years of experience
            building scalable, high-performance web applications. Passionate
            about clean code, great UX, and open-source contribution.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={scrollToProjects}
              data-testid="button-view-work"
              className="rounded-full px-8"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              data-testid="button-download-cv"
              className="rounded-full px-8"
              onClick={downloadCV}
            >
              Download Resume
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-8 text-muted-foreground">
            <a
              href="https://github.com/codingwithriha"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-github"
              className="hover:text-primary transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/riha-shahzadi"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-linkedin"
              className="hover:text-primary transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://x.com/RihaShehzadi"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-github-org"
              className="hover:text-primary transition-colors"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 hidden md:flex justify-end"
        >
          <div className="relative w-full max-w-md h-[410px] rounded-2xl bg-card border border-border shadow-2xl p-6 overflow-hidden flex flex-col font-mono text-sm text-muted-foreground">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>

            <div className="flex-1 space-y-4">
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">developer</span> = {"{"}
              </p>
              <p className="pl-4">
                name: <span className="text-green-400">'Riha Shahzadi'</span>,
              </p>
              <p className="pl-4">
                role:{" "}
                <span className="text-green-400">'MERN Stack Engineer'</span>,
              </p>
              <p className="pl-4">skills: ['React', 'Node.js', 'Next.js'],</p>
              <p className="pl-4">
                leetcode: <span className="text-orange-400">230</span>+
                challenges,
              </p>
              <p className="pl-4">
                buildAwesomeApps:{" "}
                <span className="text-purple-400">function</span>() {"{"}
              </p>
              <p className="pl-8 text-muted-foreground/60">
                // turning ideas into reality
              </p>
              <p className="pl-8">
                <span className="text-purple-400">return</span>{" "}
                <span className="text-green-400">'Success'</span>;
              </p>
              <p className="pl-4">{"}"}</p>
              <p>{"};"}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
