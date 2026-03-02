import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { education } from "../data/education";
import { fadeInUp, popIn } from "./animation";
import { Card } from "./ui/Card";

export function EducationSection() {
  return (
    <section id="education" className="portfolio-section bg-slate-950">
      <div className="section-shell">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="section-head"
        >
          <h2>Education</h2>
          <p>Academic foundation and coursework relevant to software engineering.</p>
        </motion.div>

        <div className="space-y-6">
          {education.map((entry) => (
            <motion.div
              key={entry.school}
              variants={popIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="timeline-card space-y-5">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="flex items-center gap-2 text-xl font-semibold text-white">
                      <GraduationCap className="h-5 w-5 text-emerald-300" />
                      {entry.school}
                    </h3>
                    <p className="mt-1 text-sm text-slate-300">{entry.degree}</p>
                    <p className="mt-1 text-xs text-slate-400">{entry.location}</p>
                  </div>
                  <span className="rounded-full border border-emerald-300/40 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                    {entry.dateRange}
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-white">GPA</p>
                    <p className="text-sm text-slate-300">{entry.gpa}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Honors</p>
                    <p className="text-sm text-slate-300">{entry.honors.join(" • ")}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">Relevant Coursework</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {entry.coursework.map((course) => (
                      <span
                        key={course}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
