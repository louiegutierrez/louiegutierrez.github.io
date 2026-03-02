import { Github, Linkedin } from "lucide-react";
import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-center text-xs text-slate-400 md:flex-row md:px-6 md:text-left">
        <p>&copy; 2026 {profile.name}. All rights reserved.</p>
        <div className="flex items-center gap-4 text-slate-200">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition hover:text-emerald-300"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-emerald-300"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
