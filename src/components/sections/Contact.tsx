import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const CONTACT_CARDS = [
  {
    icon: Mail,
    label: "Email",
    value: "rihashehzadi2003@gmail.com",
    href: "mailto:rihashehzadi2003@gmail.com",
    description: "Best way to reach me",
    color: "#14b8a6",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 322 4316417",
    href: "tel:+923224316417",
    description: "Available Mon–Fri",
    color: "#3b82f6",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lahore, Pakistan",
    href: "https://maps.google.com/?q=Lahore,Pakistan",
    description: "Open to remote work",
    color: "#8b5cf6",
  },
];

const SOCIAL_LINKS = [
  {
    label: "GitHub (Personal)",
    href: "https://github.com/codingwithriha",
    icon: FaGithub,
    username: "@codingwithriha",
    color: "#f0f0f0",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/riha-shehzadi",
    icon: FaLinkedin,
    username: "Riha Shahzadi",
    color: "#0a66c2",
  },
  {
    label: "Leetcode",
    href: "https://leetcode.com/u/RihaShehzadi",
    icon: SiLeetcode,
    username: "@RihaShehzadi",
    color: "#f0f0f0",
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com/@codingwithriha",
    icon: FaYoutube,
    username: "@codingwithriha",
    color: "#0a66c2",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/rihashehzadi",
    icon: FaTwitter,
    username: "Riha Shehzadi",
    color: "#0a66c2",
  },
  
];

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        {/* Hero CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-snug">
            Let's build something{" "}
            <span className="text-primary">great together.</span>
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            I'm currently open to new opportunities  freelance projects, full-time roles, 
            or technical collaborations. If you have an idea you'd like to bring to life, 
            I'd love to hear from you.
          </p>
          <a
            href="mailto:rihashehzadi2003@gmail.com"
            data-testid="link-cta-email"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:bg-primary/90 transition-all hover:gap-4 shadow-lg shadow-primary/20"
          >
            Say Hello <ArrowRight size={20} />
          </a>
        </motion.div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {CONTACT_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={card.label}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                data-testid={`card-contact-${card.label.toLowerCase()}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group block bg-card border border-border rounded-2xl p-8 hover:border-primary/40 hover:shadow-lg transition-all"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ background: `${card.color}18`, color: card.color }}
                >
                  <Icon size={26} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                  {card.label}
                </p>
                <p className="text-foreground font-semibold text-base mb-1 break-all group-hover:text-primary transition-colors">
                  {card.value}
                </p>
                <p className="text-muted-foreground text-sm">{card.description}</p>
              </motion.a>
            );
          })}
        </div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-card border border-border rounded-2xl p-8"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            Find me online
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`link-social-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group flex items-center gap-3 bg-background/60 border border-border hover:border-primary/40 rounded-xl px-5 py-3.5 transition-all hover:shadow-md"
                >
                  <Icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  <div>
                    <p className="text-xs text-muted-foreground leading-none mb-1">{link.label}</p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {link.username}
                    </p>
                  </div>
                  <ExternalLink size={14} className="ml-auto text-muted-foreground/50 group-hover:text-primary transition-colors" />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
