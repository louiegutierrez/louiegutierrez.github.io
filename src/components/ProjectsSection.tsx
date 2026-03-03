import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';
import { cardReveal, fadeInUp, stagger } from './animation';
import { Card } from './ui/Card';

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
          <h2>Featured Projects</h2>
          <div className="section-divider" />
          <p>Engineering outcomes and technical decisions from recent builds.</p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-8 lg:grid-cols-2"
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.name} variants={cardReveal}>
              <Card className="accent-panel group overflow-hidden p-0" data-tone="emerald">
                <div className="project-media-wrap">
                  <img src={project.image} alt={project.name} className="project-media" loading="lazy" />
                  <div className="project-media-overlay" />

                  <div className="absolute right-4 top-4 flex gap-2">
                    <motion.a
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="media-overlay-button"
                      aria-label={`Open ${project.name} source`}
                    >
                      <Github className="h-4 w-4" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveHref ?? project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="media-overlay-button"
                      aria-label={`Open ${project.name} demo`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </motion.a>
                  </div>
                </div>

                <div className="space-y-4 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-emerald-300">
                      {project.name}
                    </h3>
                    {project.dateLabel && (
                      <span className="rounded-full border border-emerald-300/40 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-200">
                        {project.dateLabel}
                      </span>
                    )}
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
                      <span key={`${project.name}-${tech}`} className="tech-chip" data-tone="emerald">
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
          <>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mt-12 text-center"
            >
              <h3 className="text-2xl font-semibold text-white">Other Projects</h3>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            >
              {otherProjects.map((project) => (
                <motion.div key={project.name} variants={cardReveal}>
                  <Card className="accent-panel group h-full overflow-hidden p-0" data-tone="blue">
                    <div className="project-media-wrap h-48">
                      <img src={project.image} alt={project.name} className="project-media" loading="lazy" />
                      <div className="project-media-overlay" />
                    </div>

                    <div className="space-y-3 p-4">
                      <h4 className="text-base font-semibold text-white transition-colors duration-300 group-hover:text-emerald-300">
                        {project.name}
                      </h4>
                      <p className="text-sm text-slate-300">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span key={`${project.name}-${tech}`} className="tech-chip" data-tone="blue">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
                      >
                        <Github className="h-4 w-4" />
                        View on GitHub
                      </a>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
