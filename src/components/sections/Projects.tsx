import { motion } from "framer-motion";
import { ArrowUpRight, Code2, LockKeyhole } from "lucide-react";
import eshopImg from "../../assets/e-shop.png";
import doctorImg from "../../assets/Doctor.png";
import lmsImage from "../../assets/LMS.png";

const PROJECTS = [
  {
    number: "01",
    title: "Eshop-MV",
    type: "Multi-vendor commerce",
    description: "A marketplace built around three connected experiences: customers shopping across seller stores, sellers managing their businesses, and admins overseeing the platform.",
    contribution: "Buyer, seller and admin workflows · product and order management · real-time chat and notifications · Stripe checkout",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Stripe"],
    image: eshopImg,
    tone: "from-rose-500/20 via-orange-400/10 to-transparent",
    github: "https://github.com/codingwithriha/Eshop-MV",
    demo: "https://eshop-mv.vercel.app/",
    access: "Source available"
  },
  {
    number: "02",
    title: "LearnSphere",
    type: "Learning management platform",
    description: "A full-stack learning platform for discovering courses, purchasing access, streaming lessons and participating in course discussions, supported by an administration workspace.",
    contribution: "Course discovery and learning flows · role-based administration · payment verification · notifications and content management",
    stack: ["Next.js", "TypeScript", "Express", "MongoDB", "Redis", "Stripe"],
    image: lmsImage,
    tone: "from-sky-500/20 via-indigo-400/10 to-transparent",
    github: "https://github.com/codingwithriha/LearnSphere",
    demo: "https://learn-sphere-ui.vercel.app/",
    access: "Source available"
  },
  {
    number: "03",
    title: "Estate",
    type: "Real estate marketplace",
    description: "A property listing application where people can explore homes, narrow results with search and filters, publish listings and contact the person responsible for a property.",
    contribution: "Authentication · listing management · search and filtering · image uploads · responsive property detail pages",
    stack: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Firebase", "Cloudinary"],
    tone: "from-emerald-500/20 via-lime-400/10 to-transparent",
    github: "https://github.com/codingwithriha/MERN-Estate",
    demo: "https://estate-hubclient.vercel.app/",
    access: "Source available"
  },
  {
    number: "04",
    title: "Prescripto",
    type: "Doctor appointment system",
    description: "A healthcare appointment platform with separate patient, doctor and admin experiences for booking visits, managing availability and keeping appointment records organised.",
    contribution: "Patient booking flows · doctor schedules · admin management · role-based access · online payment integration",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe"],
    image: doctorImg,
    tone: "from-cyan-500/20 via-teal-400/10 to-transparent",
    github: "https://github.com/codingwithriha/Doctor-Appointment",
    demo: "https://doctor-appointment-prescripto-frontend.vercel.app/",
    access: "Source available"
  },
  {
    number: "05",
    title: "DI Invoicing",
    type: "Digital invoicing · client project",
    description: "A private digital invoicing product designed to help businesses prepare, validate and manage invoices through an integration-led workflow for Pakistan's FBR/PRAL ecosystem.",
    contribution: "Invoice lifecycle and validation workflows · backend API development · integration handling and submission status management",
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "FBR / PRAL"],
    tone: "from-amber-500/20 via-orange-400/10 to-transparent",
    access: "Private client project"
  },
  {
    number: "06",
    title: "Pakistani ERP",
    type: "Business management · client project",
    description: "An in-progress cloud ERP foundation shaped around the workflows and operational needs of Pakistani businesses, with a modular frontend and structured backend foundation.",
    contribution: "Product foundation · frontend architecture · API structure · relational data modelling",
    stack: ["React", "TypeScript", "NestJS", "Prisma", "PostgreSQL"],
    tone: "from-violet-500/20 via-fuchsia-400/10 to-transparent",
    access: "Private client project"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-14 md:mb-20">
          <p className="section-kicker">Selected work / 2023—2026</p>
          <h2 className="section-heading">Projects built around <span className="text-primary">real workflows.</span></h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">A selection of products and client work spanning commerce, education, property, healthcare and business operations. Each one has its own users, constraints and engineering decisions.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
              className="project-card group"
            >
              <div className={`project-visual bg-gradient-to-br ${project.tone}`}>
                {project.image ? (
                  <img src={project.image} alt={`${project.title} interface preview`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" loading="lazy" />
                ) : (
                  <div className="project-placeholder">
                    <span className="project-placeholder-mark">{project.number}</span>
                    <span className="text-sm tracking-[0.22em] uppercase text-muted-foreground">{project.type}</span>
                  </div>
                )}
                <span className="project-number">{project.number}</span>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold mb-2">{project.type}</p>
                    <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
                  </div>
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source on GitHub`} className="project-icon-link"><Code2 size={19} /></a>
                  ) : (
                    <span className="project-icon-link" title="Private client work"><LockKeyhole size={18} /></span>
                  )}
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="mt-5 border-l-2 border-primary/40 pl-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Scope of work</p>
                  <p className="text-sm leading-relaxed">{project.contribution}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.stack.map((item) => <span key={item} className="tech-chip">{item}</span>)}
                </div>
                <div className="flex items-center justify-between gap-4 mt-7 pt-5 border-t border-border">
                  <span className="text-xs text-muted-foreground flex items-center gap-2">
                    {!project.github && <LockKeyhole size={13} />}
                    {project.access}
                  </span>
                  {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">Visit project <ArrowUpRight size={16} /></a>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
