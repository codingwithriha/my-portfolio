import { motion } from "framer-motion";
import { ArrowUpRight, Code2, LockKeyhole } from "lucide-react";
import eshopImg from "../../assets/e-shop.png";
import doctorImg from "../../assets/Doctor.png";
import lmsImage from "../../assets/LMS.png";

const PROJECTS = [
  {
    number: "01",
    title: "Eshop-MV",
    type: "Multi-vendor marketplace",
    description: "A marketplace connecting customers, independent sellers and platform administrators through one shopping experience.",
    contribution: "Seller dashboards, product and order workflows, real-time chat and notifications, and Stripe checkout.",
    stack: ["React", "Node.js", "MongoDB", "Socket.IO", "Stripe"],
    image: eshopImg,
    github: "https://github.com/codingwithriha/Eshop-MV",
    demo: "https://eshop-mv.vercel.app/",
    access: "Public repository"
  },
  {
    number: "02",
    title: "LearnSphere",
    type: "Learning platform",
    description: "A full-stack LMS where learners can discover courses, purchase access, stream lessons and join course discussions.",
    contribution: "Course flows, role-based administration, payment verification, notifications and content management.",
    stack: ["Next.js", "TypeScript", "Express", "MongoDB", "Stripe"],
    image: lmsImage,
    github: "https://github.com/codingwithriha/LearnSphere",
    demo: "https://learn-sphere-ui.vercel.app/",
    access: "Public repository"
  },
  {
    number: "03",
    title: "Estate",
    type: "Property marketplace",
    description: "A property platform for exploring listings, filtering results and publishing homes with image-rich detail pages.",
    contribution: "Authentication, listing CRUD, search and filters, Firebase sign-in and Cloudinary image uploads.",
    stack: ["React", "Redux", "Node.js", "MongoDB", "Cloudinary"],
    github: "https://github.com/codingwithriha/MERN-Estate",
    demo: "https://estate-hubclient.vercel.app/",
    access: "Public repository"
  },
  {
    number: "04",
    title: "Prescripto",
    type: "Healthcare appointments",
    description: "A booking system with separate patient, doctor and admin experiences for managing appointments and availability.",
    contribution: "Patient booking, doctor schedules, admin workflows, role-based access and online payments.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    image: doctorImg,
    github: "https://github.com/codingwithriha/Doctor-Appointment",
    demo: "https://doctor-appointment-prescripto-frontend.vercel.app/",
    access: "Public repository"
  },
  {
    number: "05",
    title: "DI Invoicing",
    type: "Digital invoicing · client work",
    description: "A private invoicing product focused on helping businesses prepare, validate and manage digital invoices.",
    contribution: "Invoice lifecycle, validation workflows, backend APIs and integration status handling.",
    stack: ["React", "TypeScript", "Node.js", "MongoDB", "FBR / PRAL"],
    access: "Private client project"
  },
  {
    number: "06",
    title: "Pakistani ERP",
    type: "Business software · in progress",
    description: "A cloud ERP foundation shaped around the operational needs of businesses in Pakistan.",
    contribution: "Frontend architecture, API structure and relational data modelling.",
    stack: ["React", "TypeScript", "NestJS", "Prisma", "PostgreSQL"],
    access: "Private client project"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-10 md:mb-14">
          <p className="section-kicker">Selected work / 2023—2026</p>
          <h2 className="section-heading">A closer look at <span className="text-primary">what I build.</span></h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">A mix of shipped applications and ongoing client products. I focus on the workflows behind the interface: how people use a feature, how data moves, and what happens when something goes wrong.</p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
              className="project-card group flex flex-col"
            >
              <div className="project-visual project-visual-compact">
                {project.image ? (
                  <img src={project.image} alt={`${project.title} interface preview`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" loading="lazy" />
                ) : (
                  <div className="project-placeholder">
                    <span className="project-placeholder-mark">{project.number}</span>
                    <span className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground">{project.type}</span>
                  </div>
                )}
                <span className="project-number">{project.number}</span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-primary font-semibold mb-1.5">{project.type}</p>
                    <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                  </div>
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source on GitHub`} className="project-icon-link"><Code2 size={17} /></a>
                  ) : (
                    <span className="project-icon-link" title="Private client work"><LockKeyhole size={16} /></span>
                  )}
                </div>

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed project-description">{project.description}</p>
                <div className="mt-4 border-l-2 border-primary/40 pl-3">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">My contribution</p>
                  <p className="text-xs leading-relaxed text-foreground/85">{project.contribution}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.stack.map((item) => <span key={item} className="tech-chip">{item}</span>)}
                </div>

                <div className="flex items-center justify-between gap-3 mt-auto pt-4">
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1.5">
                    {!project.github && <LockKeyhole size={11} />}
                    {project.access}
                  </span>
                  {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:gap-2.5 transition-all">Live preview <ArrowUpRight size={14} /></a>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
