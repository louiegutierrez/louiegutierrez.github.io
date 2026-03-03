import { motion } from 'motion/react';
import { BriefcaseBusiness } from 'lucide-react';
import { experience } from '../data/experience';
import { cardReveal, fadeInUp, stagger } from './animation';
import { Card } from './ui/Card';

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
          <div className="section-divider" />
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
            <motion.div key={item.title} variants={cardReveal}>
              <Card className="accent-panel timeline-card space-y-4" data-tone="purple">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="flex items-center gap-2 text-xl font-semibold text-white">
                      <BriefcaseBusiness className="h-5 w-5 text-emerald-300" />
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-300">{item.organization}</p>
                    <p className="mt-1 text-xs text-slate-400">{item.location}</p>
                  </div>
                  <span className="tech-chip" data-tone="emerald">
                    {item.dateRange}
                  </span>
                </div>

                <ul className="space-y-2.5 text-sm leading-relaxed text-slate-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet.slice(0, 28)} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <span key={`${item.title}-${tool}`} className="tech-chip" data-tone="purple">
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
