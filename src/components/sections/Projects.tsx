import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import doctorImg from "../../assets/Doctor.png";
import blogImg from "../../assets/blog.jpg";
import smartImg from "../../assets/smart-notes.png";
import lmsImage from "../../assets/LMS.png";
import eshopImg from "../../assets/e-shop.png";

const PROJECTS = [
  {
    id: 1,
    title: "Multi-Vendor E-Commerce (Eshop-MV)",
    description: "Scalable multi-vendor e-commerce platform with customer, seller, and admin workflows, real-time features, secure authentication, and complete order management.",
    image: eshopImg,
    fallback: "linear-gradient(135deg, #ec4899, #0f172a)",
    tags: ["MERN", "Node.js", "Socket.io", "JWT", "Cloudinary"],
    category: "Full Stack",
    github: "https://github.com/codingwithriha/Eshop-MV",
    demo: "https://eshop-mv.vercel.app/"
  },
  {
    id: 2,
    title: "Doctor Appointment System",
    description:
      "A full-stack doctor appointment booking application enabling patients to schedule, manage, and track appointments with healthcare providers seamlessly.",
    image: doctorImg,
    fallback: "linear-gradient(135deg, #14b8a6, #0f172a)",
    tags: ["MERN", "Socket.io", "Node.js", "MongoDB"],
    category: "Full Stack",
    github: "https://github.com/codingwithriha/Doctor-Appointment",
    demo: "https://doctor-appointment-prescripto-frontend.vercel.app/",
  },
  {
    id: 3,
    title: "LMS SaaS Platform",
    description:
      "Feature-rich Learning Management System with user authentication, subscriptions, and Stripe payments.",
    image: lmsImage, // (fix later when you import image properly)
    fallback: "linear-gradient(135deg, #3b82f6, #0f172a)",
    tags: ["TypeScript", "Next.js", "Supabase", "Stripe", "Vapi AI"],
    category: "Full Stack",
    github: "https://github.com/codingwithriha/LMS-Saas-Project",
    demo: "https://github.com/codingwithriha/LMS-Saas-Project",
  },
  {
    id: 4,
    title: "Smart Notes App",
    description: "A full-stack Smart Notes Application built with Laravel and Tailwind CSS, featuring advanced note organization with categories, tags, search, soft delete, and public note sharing.",
    image: smartImg,
    fallback: "linear-gradient(135deg, #8b5cf6, #0f172a)",
    tags: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "MVC"],
    category: "Full Stack",
    github: "https://github.com/Riha-Laiba-Dev-Studio/Smart-NotesApp",
    demo: "https://github.com/Riha-Laiba-Dev-Studio/Smart-NotesApp"
  },
  {
    id: 5,
    title: "Warehouse Management",
    description: "A robust warehouse management system for tracking inventory, managing stock movements, and streamlining operations with an intuitive admin interface.",
    image: "",
    fallback: "linear-gradient(135deg, #f59e0b, #0f172a)",
    tags: ["PHP", "Laravel", "MySQL", "Blade"],
    category: "Backend",
    github: "https://github.com/Riha-Laiba-Dev-Studio/Ware-house-management",
    demo: "https://github.com/Riha-Laiba-Dev-Studio/Ware-house-management"
  },
  {
    id: 6,
    title: "Blogging Website",
    description: "A full-featured blogging platform built with PHP and MySQL, featuring an admin dashboard for managing posts, comments, and users. Includes search, category filtering, and a responsive Bootstrap UI.",
    image: blogImg,
    fallback: "linear-gradient(135deg, #ec4899, #0f172a)",
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

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My Projects
            </h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
          </div>

          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
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
          </div>
        </div>

        {/* GRID */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/30 transition-all flex flex-col"
              >
                {/* IMAGE SECTION */}
                <div className="h-48 w-full relative overflow-hidden">

                  {/* Gradient fallback */}
                  <div
                    className="absolute inset-0"
                    style={{ background: project.fallback }}
                  />

                  {/* Image */}
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />

                  {/* Hover buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 bg-background/60 backdrop-blur-sm transition-all duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
                    >
                      <FaGithub size={20} />
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mt-3 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-mono"
                      >
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