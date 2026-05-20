import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const PROJECTS = [
  {
    id: 1,
    title: "Doctor Appointment System",
    description: "A full-stack doctor appointment booking application enabling patients to schedule, manage, and track appointments with healthcare providers seamlessly.",
    image: "linear-gradient(135deg, #14b8a6, #0f172a)",
    tags: ["JavaScript", "React", "Node.js", "MongoDB"],
    category: "Full Stack",
    github: "https://github.com/codingwithriha/Doctor-Appointment",
    demo: "https://github.com/codingwithriha/Doctor-Appointment"
  },
  {
    id: 2,
    title: "LMS SaaS Platform",
    description: "Feature-rich Learning Management System with user authentication, subscriptions, and Stripe payments built with Next.js and Supabase. Integrates Vapi AI voice agent for interactive learning sessions.",
    image: "linear-gradient(135deg, #3b82f6, #0f172a)",
    tags: ["TypeScript", "Next.js", "Supabase", "Stripe", "Vapi AI"],
    category: "Full Stack",
    github: "https://github.com/codingwithriha/LMS-Saas-Project",
    demo: "https://github.com/codingwithriha/LMS-Saas-Project"
  },
  {
    id: 3,
    title: "Smart Notes App",
    description: "A full-stack Smart Notes Application built with Laravel and Tailwind CSS, featuring advanced note organization with categories, tags, search, soft delete, and public note sharing.",
    image: "linear-gradient(135deg, #8b5cf6, #0f172a)",
    tags: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "MVC"],
    category: "Full Stack",
    github: "https://github.com/Riha-Laiba-Dev-Studio/Smart-NotesApp",
    demo: "https://github.com/Riha-Laiba-Dev-Studio/Smart-NotesApp"
  },
  {
    id: 4,
    title: "Warehouse Management",
    description: "A robust warehouse management system for tracking inventory, managing stock movements, and streamlining operations with an intuitive admin interface.",
    image: "linear-gradient(135deg, #f59e0b, #0f172a)",
    tags: ["PHP", "Laravel", "MySQL", "Blade"],
    category: "Backend",
    github: "https://github.com/Riha-Laiba-Dev-Studio/Ware-house-management",
    demo: "https://github.com/Riha-Laiba-Dev-Studio/Ware-house-management"
  },
  {
    id: 5,
    title: "Blogging Website",
    description: "A full-featured blogging platform built with PHP and MySQL, featuring an admin dashboard for managing posts, comments, and users. Includes search, category filtering, and a responsive Bootstrap UI.",
    image: "linear-gradient(135deg, #ec4899, #0f172a)",
    tags: ["PHP", "MySQL", "Bootstrap", "JavaScript", "CRUD"],
    category: "Full Stack",
    github: "https://github.com/Riha-Laiba-Dev-Studio/Blogging_website",
    demo: "https://github.com/Riha-Laiba-Dev-Studio/Blogging_website"
  }
];

const FILTERS = ["All", "Full Stack", "Backend"];

export function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = PROJECTS.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {FILTERS.map((f) => (
              <button
                key={f}
                data-testid={`button-filter-${f.toLowerCase().replace(" ", "-")}`}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === f
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                data-testid={`card-project-${project.id}`}
                className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/30 transition-all flex flex-col"
              >
                <div
                  className="h-48 w-full relative overflow-hidden"
                  style={{ background: project.image }}
                >
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />

                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 bg-background/60 backdrop-blur-sm transition-all duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`link-github-${project.id}`}
                      className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`link-demo-${project.id}`}
                      className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
