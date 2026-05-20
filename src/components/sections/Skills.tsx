import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript, SiHtml5, SiRedux, SiBootstrap,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiGit, SiDocker, SiPostman, SiVercel
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "REST APIs", icon: SiNodedotjs, color: "#339933" },
      { name: "PostgreSQL", icon: SiNextdotjs, color: "#4169E1" },
    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-8 text-foreground flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                  {catIndex + 1}
                </span>
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-background/50 hover:bg-primary/5 border border-border hover:border-primary/30 transition-colors group"
                  >
                    <skill.icon
                      size={32}
                      className="mb-3 opacity-80 group-hover:opacity-100 transition-opacity"
                      style={{ color: skill.color }}
                    />
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
