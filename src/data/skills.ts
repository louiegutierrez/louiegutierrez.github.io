export type Skill = {
  name: string;
};

export type SkillCategoryTone =
  | 'emerald'
  | 'blue'
  | 'purple'
  | 'cyan'
  | 'pink'
  | 'orange';

export type SkillCategoryIcon =
  | 'code'
  | 'book'
  | 'wrench'
  | 'cloud'
  | 'database'
  | 'cpu';

export type SkillCategory = {
  title: string;
  tone: SkillCategoryTone;
  icon: SkillCategoryIcon;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    tone: 'emerald',
    icon: 'code',
    skills: [
      { name: 'Java' },
      { name: 'Python' },
      { name: 'C/C++' },
      { name: 'SQL (MySQL)' },
      { name: 'JavaScript' },
      { name: 'HTML/CSS' },
    ],
  },
  {
    title: 'Frameworks',
    tone: 'blue',
    icon: 'book',
    skills: [
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'Flask' },
      { name: 'FastAPI' },
      { name: 'JUnit' },
      { name: 'Express' },
    ],
  },
  {
    title: 'Developer Tools',
    tone: 'purple',
    icon: 'wrench',
    skills: [
      { name: 'Git' },
      { name: 'Docker' },
      { name: 'VS Code' },
      { name: 'IntelliJ' },
      { name: 'PyCharm' },
      { name: 'Linux' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    tone: 'cyan',
    icon: 'cloud',
    skills: [
      { name: 'AWS' },
      { name: 'GCP' },
      { name: 'ServiceNow' },
      { name: 'CI/CD' },
      { name: 'Tomcat' },
      { name: 'EC2' },
    ],
  },
  {
    title: 'Data & ML',
    tone: 'pink',
    icon: 'database',
    skills: [
      { name: 'MySQL' },
      { name: 'Pandas' },
      { name: 'NumPy' },
      { name: 'PyTorch' },
      { name: 'NLTK' },
      { name: 'BeautifulSoup' },
    ],
  },
  {
    title: 'Concepts',
    tone: 'orange',
    icon: 'cpu',
    skills: [
      { name: 'REST APIs' },
      { name: 'Object-Oriented Programming' },
      { name: 'Data Structures' },
      { name: 'Algorithms' },
      { name: 'Networking' },
      { name: 'Unit Testing' },
    ],
  },
];
