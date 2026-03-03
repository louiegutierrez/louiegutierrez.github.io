import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile';
import { Button } from './ui/Button';
import { heroIntro } from './animation';

const profileImage = 'img/new-profile.png'; // Update with your new profile image path

const stars = Array.from({ length: 48 }).map((_, index) => {
  const row = index % 12;
  const col = Math.floor(index / 12);
  return {
    left: `${6 + row * 8 + (col % 2 === 0 ? 1 : 4)}%`,
    top: `${10 + col * 22 + (row % 2 === 0 ? 2 : 8)}%`,
    delay: Number((index * 0.09).toFixed(2)),
    duration: 2.6 + (index % 5) * 0.35,
  };
});

export function HeroSection() {
  return (
    <section id="home" className="portfolio-hero relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        {stars.map((star) => (
          <motion.span
            key={`${star.left}-${star.top}`}
            className="portfolio-star"
            initial={{ opacity: 0.1, scale: 0.65 }}
            animate={{ opacity: [0.15, 1, 0.2], scale: [0.7, 1.35, 0.8] }}
            transition={{ duration: star.duration, repeat: Infinity, delay: star.delay }}
            style={{ left: star.left, top: star.top }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 pb-20 pt-28 text-center md:px-6">
        <motion.div custom={0.12} variants={heroIntro} initial="hidden" animate="visible" className="mb-6 flex justify-center">
          <div className="hero-avatar-glow">
            <img src={profileImage} alt={profile.name} className="hero-avatar" />
          </div>
        </motion.div>

        <motion.p custom={0.2} variants={heroIntro} initial="hidden" animate="visible" className="mb-4 text-sm uppercase tracking-[0.28em] text-emerald-300">
          Software Engineer Portfolio
        </motion.p>

        <motion.h1 custom={0.3} variants={heroIntro} initial="hidden" animate="visible" className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-7xl">
          {profile.name}
        </motion.h1>

        <motion.p custom={0.42} variants={heroIntro} initial="hidden" animate="visible" className="mt-4 text-xl text-slate-200 md:text-4xl">
          {profile.role}
        </motion.p>

        <motion.p custom={0.56} variants={heroIntro} initial="hidden" animate="visible" className="mt-6 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
          {profile.tagline}
        </motion.p>

        <motion.div custom={0.74} variants={heroIntro} initial="hidden" animate="visible" className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            className="px-8"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="media-overlay-button"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="media-overlay-button"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${profile.email}`}
            className="media-overlay-button"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </motion.a>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-300"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </div>
    </section>
  );
}
