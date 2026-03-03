import { motion } from 'motion/react';
import { Code, Lightbulb, Users, Coffee, MapPin, Trophy } from 'lucide-react';
import { profile } from '../data/profile';
import { cardReveal, fadeInUp, stagger } from './animation';
import { Card } from './ui/Card';

const features = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Maintainable, scalable implementation choices for long-term system reliability.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Constant experimentation across full-stack workflows, robotics, and applied AI.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Cross-team communication and practical execution in fast-moving environments.',
  },
  {
    icon: Coffee,
    title: 'Dedication',
    description: 'Consistent shipping mindset with ongoing learning and iteration.',
  },
];

const traits = ['Problem Solver', 'Regent Scholar', 'Quick Learner', 'Team Collaborator'];

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
          <h2>About Me</h2>
          <div className="section-divider" />
          <p>Passionate about building practical, reliable software systems.</p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <motion.div variants={cardReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
            <Card className="accent-panel space-y-5" data-tone="emerald">
              {profile.aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 30)} className="text-sm leading-relaxed text-slate-300 md:text-base">
                  {paragraph}
                </p>
              ))}

              <div className="flex flex-wrap gap-2 pt-1">
                {traits.map((trait) => (
                  <span key={trait} className="tech-chip" data-tone="emerald">
                    {trait}
                  </span>
                ))}
              </div>

              <div className="grid gap-3 border-t border-white/10 pt-4 sm:grid-cols-2">
                <p className="contact-row">
                  <MapPin className="h-4 w-4" />
                  <span>{profile.location}</span>
                </p>
                <p className="contact-row">
                  <Trophy className="h-4 w-4" />
                  <span>{profile.honors.join(' • ')}</span>
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={cardReveal}>
                <Card className="accent-panel group h-full space-y-3" data-tone="emerald">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-300/35 bg-emerald-400/15 text-emerald-300 transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm text-slate-300">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
