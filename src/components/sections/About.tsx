import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Code2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-muted-foreground text-lg leading-relaxed"
          >
            <p>
              I'm a detail oriented and performance driven MERN Stack Developer
              with over 2 years of experience, specializing in building and
              maintaining efficient, scalable, and highly interactive
              applications.
            </p>
            <p>
              Proficient in React.js, Node.js, Express.js, and MongoDB, with
              hands on experience in state management using Redux and Context
              API. Skilled in RESTful API design, database design, and version
              control systems like Git. Passionate about open source and
              applying emerging technologies to improve scalability and code
              maintainability.
            </p>

            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-sm text-foreground font-medium">
                    Location
                  </span>
                  <span>Lahore, Pakistan</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Briefcase size={20} />
                </div>
                <div>
                  <span className="block text-sm text-foreground font-medium">
                    Experience
                  </span>
                  <span>
                    2+ Years  Software Engineer at Onxpress &amp; Miqsol
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <span className="block text-sm text-foreground font-medium">
                    Education
                  </span>
                  <span>
                    BS(Software Engineering)  Virtual University of Pakistan
                    (2021–2025)
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 relative overflow-hidden flex items-center justify-center">
              <Code2 size={120} className="text-primary/40" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-xl flex items-center gap-4">
              <div className="text-4xl font-bold text-primary">230+</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider leading-tight">
                LeetCode
                <br />
                Challenges
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-card border border-border rounded-xl p-6 shadow-xl flex items-center gap-4">
              <div className="text-4xl font-bold text-primary">2+</div>
              <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider leading-tight">
                Years
                <br />
                Experience
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
