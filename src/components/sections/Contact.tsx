import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";


export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's build something great together!</h3>
              <p className="text-muted-foreground text-lg">
                Feel free to reach out for collaborations, freelance projects, or just a friendly hello. 
                I'm always open to discussing new opportunities and ideas.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="block text-sm text-muted-foreground mb-1">Email Me</span>
                  <a
                    href="mailto:rihashehzadi2003@gmail.com"
                    data-testid="link-email"
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    rihashehzadi2003@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <span className="block text-sm text-muted-foreground mb-1">Location</span>
                  <span className="text-lg font-medium text-foreground">
                    Lahore, Pakistan
                  </span>
                </div>
              </div>

              {/* <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <span className="block text-sm text-muted-foreground mb-1">Phone</span>
                  <a
                    href="tel:+923224316417"
                    data-testid="link-phone"
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    +92 322 4316417
                  </a>
                </div>
              </div> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 shadow-xl space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                <Input data-testid="input-name" id="name" required placeholder="John Doe" className="bg-background/50" />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Your Email</label>
                <Input data-testid="input-email" id="email" type="email" required placeholder="john@example.com" className="bg-background/50" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea data-testid="input-message" id="message" required placeholder="How can I help you?" className="min-h-[150px] bg-background/50 resize-y" />
              </div>

              <Button
                type="submit"
                size="lg"
                data-testid="button-send-message"
                className="w-full h-12"
                disabled={isSubmitting || submitted}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">Sending...</span>
                ) : submitted ? (
                  <span className="flex items-center gap-2 text-green-400">Message Sent Successfully!</span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message <Send size={18} />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
