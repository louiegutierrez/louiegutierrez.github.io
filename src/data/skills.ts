export type Skill = {
  name: string;
  level?: number;
};

export type SkillCategory = {
  title: string;
  accent: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    accent: "from-emerald-400 to-cyan-400",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 92 },
      { name: "C/C++", level: 82 },
      { name: "SQL (MySQL)", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 88 },
    ],
  },
  {
    title: "Frameworks",
    accent: "from-indigo-400 to-violet-400",
    skills: [
      { name: "React", level: 86 },
      { name: "Node.js", level: 84 },
      { name: "Flask", level: 80 },
      { name: "FastAPI", level: 79 },
      { name: "JUnit", level: 76 },
    ],
  },
  {
    title: "Developer Tools",
    accent: "from-amber-400 to-orange-400",
    skills: [
      { name: "Git" },
      { name: "Docker" },
      { name: "AWS" },
      { name: "GCP" },
      { name: "Linux" },
      { name: "VS Code" },
      { name: "IntelliJ" },
      { name: "PyCharm" },
      { name: "ServiceNow" },
    ],
  },
  {
    title: "Concepts",
    accent: "from-fuchsia-400 to-pink-400",
    skills: [
      { name: "REST APIs" },
      { name: "CI/CD" },
      { name: "Unit Testing" },
      { name: "Networking" },
      { name: "Object-Oriented Programming" },
      { name: "Data Structures" },
    ],
  },
  {
    title: "Libraries",
    accent: "from-sky-400 to-blue-500",
    skills: [
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Matplotlib" },
      { name: "BeautifulSoup" },
      { name: "NLTK" },
    ],
  },
];
