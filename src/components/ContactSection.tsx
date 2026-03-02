import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "../data/profile";
import { fadeInUp } from "./animation";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/manqynno", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      console.error("Contact form error", error);
      setStatus("error");
      setErrorMessage("Oops! There was an error submitting your form.");
    }
  };

  return (
    <section id="contact" className="portfolio-section bg-slate-950">
      <div className="section-shell">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="section-head"
        >
          <h2>Contact</h2>
          <p>Open to internships, full-time roles, and collaborative engineering projects.</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <Card>
              <h3 className="text-xl font-semibold text-white">Send me a message</h3>
              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <Input id="name" name="name" type="text" required placeholder="Your name" />
                <Input id="email" name="email" type="email" required placeholder="your.email@example.com" />
                <Textarea id="message" name="message" rows={6} required placeholder="Tell me about your project..." />

                <div className="flex flex-wrap items-center gap-3">
                  <Button type="submit" disabled={status === "submitting"}>
                    {status === "submitting" ? "Sending..." : "Send message"}
                  </Button>
                  {status === "success" && (
                    <p className="text-sm text-emerald-300">Thank you! Your message has been received.</p>
                  )}
                  {status === "error" && errorMessage && (
                    <p className="text-sm text-rose-300">{errorMessage}</p>
                  )}
                </div>
              </form>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <Card className="space-y-5">
              <h3 className="text-xl font-semibold text-white">Let&apos;s connect</h3>
              <p className="text-sm leading-relaxed text-slate-300">
                I&apos;m interested in software engineering opportunities where I can contribute to production systems,
                learn from strong teams, and keep building impactful tools.
              </p>

              <a href={`mailto:${profile.email}`} className="contact-row">
                <Mail className="h-5 w-5" />
                <span>{profile.email}</span>
              </a>
              <a href={`tel:+1${profile.phone.replace(/[^\d]/g, "")}`} className="contact-row">
                <Phone className="h-5 w-5" />
                <span>{profile.phone}</span>
              </a>
              <p className="contact-row">
                <MapPin className="h-5 w-5" />
                <span>{profile.location}</span>
              </p>

              <div className="pt-2">
                <p className="mb-3 text-sm text-slate-300">Social</p>
                <div className="flex items-center gap-3">
                  <motion.a whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }} href={profile.githubUrl} target="_blank" rel="noopener noreferrer" className="icon-chip" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }} href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="icon-chip" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </motion.a>
                  <motion.a whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }} href={`mailto:${profile.email}`} className="icon-chip" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
