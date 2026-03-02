import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects";
import { fadeInUp, stagger } from "./animation";
import { Card } from "./ui/Card";

const featuredProjects = projects.filter((project) => project.featured);
const otherProjects = projects.filter((project) => !project.featured);

export function ProjectsSection() {
  return (
    <section id="projects" className="portfolio-section bg-slate-900/70">
      <div className="section-shell">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="section-head"
        >
          <h2>Projects</h2>
          <p>Portfolio projects and engineering outcomes aligned with my current resume.</p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.name} variants={fadeInUp}>
              <Card className="overflow-hidden p-0">
                <img src={project.image} alt={project.name} className="h-52 w-full object-cover" />
                <div className="space-y-4 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                    <motion.a
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-chip"
                      aria-label={`Open ${project.name}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </motion.a>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-300">{project.description}</p>

                  <ul className="space-y-2 text-sm text-slate-300">
                    {project.bullets.map((bullet) => (
                      <li key={bullet.slice(0, 28)} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={`${project.name}-${tech}`}
                        className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-2.5 py-1 text-xs text-emerald-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {otherProjects.length > 0 && (
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid gap-4 md:grid-cols-2"
          >
            {otherProjects.map((project) => (
              <motion.div key={project.name} variants={fadeInUp}>
                <Card className="space-y-3">
                  <h3 className="text-base font-semibold text-white">{project.name}</h3>
                  <p className="text-sm text-slate-300">{project.description}</p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {project.bullets.map((bullet) => (
                      <li key={bullet.slice(0, 28)} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-emerald-200"
                  >
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </a>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
