import { motion } from 'motion/react';
import { Code, BookOpen, Wrench, Cloud, Database, Cpu } from 'lucide-react';
import { skillCategories, type SkillCategoryIcon } from '../data/skills';
import { cardReveal, chipReveal, fadeInUp, stagger } from './animation';
import { Card } from './ui/Card';

const iconMap: Record<SkillCategoryIcon, typeof Code> = {
  code: Code,
  book: BookOpen,
  wrench: Wrench,
  cloud: Cloud,
  database: Database,
  cpu: Cpu,
};

const highlights = [
  { number: '3.84', label: 'GPA', sublabel: "14x Dean's Honor List" },
  { number: '1000+', label: 'Support Tickets', sublabel: 'Resolved at UCI OIT' },
  { number: '100+', label: 'Students Taught', sublabel: 'As Undergraduate LA' },
];

export function SkillsSection() {
  return (
    <section id="skills" className="portfolio-section bg-slate-950">
      <div className="section-shell">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="section-head"
        >
          <h2>Skills & Technologies</h2>
          <div className="section-divider section-divider-purple" />
          <p>A toolkit shaped by academic projects, professional support work, and continuous learning.</p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.div key={category.title} variants={cardReveal}>
                <Card className="accent-panel skill-panel group h-full space-y-5 border-transparent" data-tone={category.tone}>
                  <div className="flex items-center gap-3">
                    <div className="skill-icon" data-tone={category.tone}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  </div>

                  <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.span key={`${category.title}-${skill.name}`} variants={chipReveal} whileHover={{ scale: 1.04 }} className="tech-chip" data-tone={category.tone}>
                        {skill.name}
                      </motion.span>
                    ))}
                  </motion.div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid gap-4 md:grid-cols-3"
        >
          {highlights.map((item) => (
            <motion.div key={item.label} variants={cardReveal}>
              <Card className="accent-panel stat-card text-center" data-tone="emerald">
                <p className="text-3xl font-semibold text-emerald-300 md:text-4xl">{item.number}</p>
                <p className="mt-2 text-base font-semibold text-white">{item.label}</p>
                <p className="mt-1 text-xs text-slate-300">{item.sublabel}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
