import { motion } from "framer-motion";
import { Layers3, Workflow, Palette, ArrowRight } from "lucide-react";

const strengths = [
  {
    icon: Palette,
    number: "01",
    title: "Design-aware engineering",
    text: "My product design experience helps me think beyond components — hierarchy, clarity and the small interactions that make an interface feel considered.",
  },
  {
    icon: Workflow,
    number: "02",
    title: "End-to-end perspective",
    text: "I enjoy connecting the pieces: shaping a user flow, building the interface, integrating APIs and making sure the data supports the experience.",
  },
  {
    icon: Layers3,
    number: "03",
    title: "Practical product thinking",
    text: "I pay attention to real workflows, permissions, validation and edge cases — not just the happy path shown in a design.",
  },
];

const steps = [
  "Understand the problem",
  "Shape the experience",
  "Build the system",
  "Refine the details",
];

export function Approach() {
  return (
    <section className="py-20 md:py-28 border-y border-border/70 bg-card/25">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl mb-12"
        >
          <p className="section-kicker mb-3">How I think about the work</p>
          <h2 className="section-heading">
            Good software is more than{" "}
            <span className="text-primary">good-looking screens.</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I bring a mix of product design experience and full-stack
            development. That means I care about how a product feels to use, and
            how it works behind the scenes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-5">
          {strengths.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="approach-card"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="approach-icon">
                    <Icon size={20} />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {item.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-background/70 p-5 md:p-7">
          <p className="section-kicker mb-5">My working rhythm</p>
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-2">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center gap-2 flex-1">
                <span className="w-7 h-7 shrink-0 rounded-full bg-primary/10 text-primary grid place-items-center text-xs font-semibold">
                  {index + 1}
                </span>
                <span className="text-sm font-medium">{step}</span>
                {index < steps.length - 1 && (
                  <ArrowRight
                    size={15}
                    className="hidden md:block text-primary/60 ml-auto mr-2"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
