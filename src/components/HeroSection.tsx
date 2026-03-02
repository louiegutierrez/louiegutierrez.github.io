import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";
import { Button } from "./ui/Button";
import { fadeInUp } from "./animation";

const stars = [
  { left: "8%", top: "14%", delay: 0 },
  { left: "26%", top: "72%", delay: 0.4 },
  { left: "39%", top: "22%", delay: 0.8 },
  { left: "64%", top: "61%", delay: 1.2 },
  { left: "79%", top: "18%", delay: 1.6 },
  { left: "91%", top: "74%", delay: 2 },
];

export function HeroSection() {
  return (
    <section id="home" className="portfolio-hero relative flex min-h-screen items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        {stars.map((star) => (
          <motion.span
            key={`${star.left}-${star.top}`}
            className="portfolio-star"
            initial={{ opacity: 0.1, scale: 0.7 }}
            animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1.35, 0.8] }}
            transition={{ duration: 2.8, repeat: Infinity, delay: star.delay }}
            style={{ left: star.left, top: star.top }}
          />
        ))}
      </div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-7 px-4 pb-16 pt-28 text-center md:px-6"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-emerald-300">Software Engineer Portfolio</p>

        <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
          {profile.name}
        </h1>

        <p className="text-lg text-emerald-200 md:text-2xl">{profile.role}</p>

        <p className="max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
          {profile.tagline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Projects
          </Button>

          <motion.a
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-chip"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-chip"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${profile.email}`}
            className="icon-chip"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </motion.a>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-300"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
