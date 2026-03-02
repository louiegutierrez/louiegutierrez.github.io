import { motion } from "motion/react";
import { BriefcaseBusiness } from "lucide-react";
import { experience } from "../data/experience";
import { fadeInUp, stagger } from "./animation";
import { Card } from "./ui/Card";

export function ExperienceSection() {
  return (
    <section id="experience" className="portfolio-section bg-slate-900/70">
      <div className="section-shell">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="section-head"
        >
          <h2>Experience</h2>
          <p>Hands-on impact across IT operations, automation, and CS instruction.</p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          {experience.map((item) => (
            <motion.div key={item.title} variants={fadeInUp}>
              <Card className="timeline-card">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="flex items-center gap-2 text-xl font-semibold text-white">
                      <BriefcaseBusiness className="h-5 w-5 text-emerald-300" />
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-300">{item.organization}</p>
                    <p className="mt-1 text-xs text-slate-400">{item.location}</p>
                  </div>
                  <span className="rounded-full border border-emerald-300/40 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                    {item.dateRange}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-slate-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet.slice(0, 28)} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <span
                      key={`${item.title}-${tool}`}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
