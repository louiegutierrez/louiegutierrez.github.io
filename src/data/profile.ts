export type FunLink = {
  label: string;
  href: string;
};

export const profile = {
  name: "Leonardo Gutierrez IV",
  role: "Software Engineer & Computer Science Student",
  tagline:
    "Building scalable systems across full-stack development, robotics, and AI/ML.",
  location: "Irvine, California",
  email: "contact@louiegutierrez.com",
  phone: "Contact me for phone number",
  linkedinUrl: "https://linkedin.com/in/leogutz",
  githubUrl: "https://github.com/louiegutierrez",
  graduation: "June 2026",
  gpa: "3.84",
  honors: ["Regent Scholar", "14x Dean's Honor List"],
  aboutParagraphs: [
    "I am a Computer Science student at UC Irvine focused on building reliable, high-impact software. My work spans full-stack applications, cloud-backed systems, and autonomous robotics workflows.",
    "At UCI Office of Information Technology, I resolve technical issues across enterprise systems and automate support workflows to improve consistency and speed. I also serve as an Undergraduate Teaching Assistant, where I help students build strong foundations in OOP, functional programming, and algorithmic thinking.",
    "I enjoy shipping practical systems that scale, collaborating with teams, and continuously learning new tools across software engineering, infrastructure, and applied AI.",
  ],
  funLinks: [
    {
      label: "Marvel Rivals Stats",
      href: "https://tracker.gg/marvel-rivals/profile/ign/Silenence/overview",
    },
  ] as FunLink[],
};
