import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const navItems = ['home', 'about', 'education', 'experience', 'skills', 'projects', 'contact'];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 42);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? 'border-white/15 bg-black/70 shadow-[0_16px_32px_-20px_rgba(0,0,0,0.8)] backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <span className="text-base font-semibold tracking-wide text-white">&lt;louiegutierrez.com&gt;</span>

        <ul className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="capitalize transition hover:text-emerald-300">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
