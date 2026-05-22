import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

const EXPERIENCES = [
  {
    id: 1,
    company: "Onxpress Transportation Partners",
    role: "Software Engineer",
    period: "Feb 2024 – Present",
    location: "Remote, Canada",
    type: "Full-time",
    highlights: [
      "Designed and delivered complex transportation system interfaces using ReactJS and Node.js, focusing on performance, responsiveness, and scalability.",
      "Took ownership of server-side components, integrating scalable APIs and ensuring continuous integration through automated pipelines.",
      "Regularly participated in code reviews, fostering strong communication skills and promoting team-wide knowledge sharing.",
    ],
    color: "from-teal-500/20 to-teal-500/5",
    accent: "#14b8a6",
  },
  {
    id: 2,
    company: "Miqsol Pvt. Ltd",
    role: "Software Engineer",
    period: "Jan 2023 – Jan 2024",
    location: "Lahore, Pakistan",
    type: "Full-time",
    highlights: [
      "Built and maintained web applications using ReactJS and Node.js, applying modern design patterns and test-driven development practices.",
      "Integrated RESTful APIs with PostgreSQL and MongoDB, improving performance and scalability.",
      "Led product features using microservices architecture, collaborating with cross-functional teams in agile sprints.",
      "Implemented Docker-based containerization and deployed solutions on AWS and Azure for improved CI/CD.",
      "Proactively addressed performance bottlenecks, leading refactoring initiatives for long-term maintainability.",
    ],
    color: "from-blue-500/20 to-blue-500/5",
    accent: "#3b82f6",
  },
  {
    id: 3,
    company: "Miqsol Pvt. Ltd",
    role: "Product Designer",
    period: "Jun 2022 – Jan 2023",
    location: "Lahore, Pakistan",
    type: "Full-time",
    highlights: [
      "Collaborated closely with developers and product designers to support early-stage software development through effective UI layouts and user-focused visuals.",
      "Designed visual assets and branding materials supporting various platforms and marketplace applications.",
    ],
    color: "from-purple-500/20 to-purple-500/5",
    accent: "#8b5cf6",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-0`}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-2 border-primary bg-background -translate-x-1/2 top-6 z-10 shadow-[0_0_12px_rgba(20,184,166,0.4)]"
                  />

                  {/* Card */}
                  <div className={`ml-12 md:ml-0 md:w-[45%] ${isEven ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"}`}>
                    <div
                      data-testid={`card-experience-${exp.id}`}
                      className={`relative bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all bg-gradient-to-br ${exp.color}`}
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                          <p className="text-primary font-semibold mt-0.5">{exp.company}</p>
                        </div>
                        <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium shrink-0">
                          {exp.type}
                        </span>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-4 mb-5 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} className="text-primary" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-primary" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2">
                        {exp.highlights.map((point, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
