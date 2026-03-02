import { motion } from "motion/react";
import { skillCategories } from "../data/skills";
import { fadeInUp, stagger } from "./animation";
import { Card } from "./ui/Card";

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
          <h2>Technical Skills</h2>
          <p>Resume-aligned stack across languages, frameworks, tools, concepts, and libraries.</p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={fadeInUp}>
              <Card className="space-y-5">
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      {typeof skill.level === "number" ? (
                        <>
                          <div className="flex items-center justify-between text-sm text-slate-300">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true, amount: 0.2 }}
                              transition={{ duration: 0.75, ease: "easeOut" }}
                              className={`h-full rounded-full bg-gradient-to-r ${category.accent}`}
                            />
                          </div>
                        </>
                      ) : (
                        <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-300">
                          {skill.name}
                        </span>
                      )}
                    </div>
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
