import { motion } from "motion/react";
import { Gamepad2, MapPin, Trophy } from "lucide-react";
import { profile } from "../data/profile";
import { fadeInUp, popIn } from "./animation";
import { Card } from "./ui/Card";

export function AboutSection() {
  return (
    <section id="about" className="portfolio-section bg-slate-900/70">
      <div className="section-shell">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="section-head"
        >
          <h2>About</h2>
          <p>Recruiter-friendly snapshot of my background and interests.</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          <motion.div variants={popIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <Card className="space-y-4">
              {profile.aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 30)} className="text-sm leading-relaxed text-slate-300 md:text-base">
                  {paragraph}
                </p>
              ))}
            </Card>
          </motion.div>

          <motion.div variants={popIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <Card className="space-y-5">
              <h3 className="text-lg font-semibold text-white">Quick Facts</h3>

              <div className="space-y-3">
                <p className="contact-row">
                  <MapPin className="h-4 w-4" />
                  <span>{profile.location}</span>
                </p>
                <p className="contact-row">
                  <Trophy className="h-4 w-4" />
                  <span>{profile.honors.join(" • ")}</span>
                </p>
                <a
                  href={profile.funLinks[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-row transition hover:border-emerald-300/50"
                >
                  <Gamepad2 className="h-4 w-4" />
                  <span>{profile.funLinks[0].label}</span>
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
