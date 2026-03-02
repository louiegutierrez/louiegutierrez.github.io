export type ExperienceEntry = {
  title: string;
  organization: string;
  location: string;
  dateRange: string;
  bullets: string[];
  tools: string[];
};

export const experience: ExperienceEntry[] = [
  {
    title: "Information Technology Consultant",
    organization: "University of California, Irvine - Office of Information Technology (OIT)",
    location: "Irvine, CA",
    dateRange: "Nov. 2024 - Present",
    bullets: [
      "Resolved 200+ technical support requests involving networking, email systems, authentication, enterprise software, and hardware troubleshooting.",
      "Diagnosed issues across OIT-supported systems and delivered accurate solutions for students, faculty, and staff.",
      "Automated repeat support workflows with scripts and runbooks to improve resolution consistency and reduce time-to-close.",
    ],
    tools: ["ServiceNow", "Active Directory", "VPN", "Imaging", "SSO/Auth Systems"],
  },
  {
    title: "Undergraduate Teaching Assistant",
    organization: "University of California, Irvine",
    location: "Irvine, CA",
    dateRange: "Sep. 2023 - Jan. 2026",
    bullets: [
      "Taught core CS concepts including OOP, functional programming, recursion, asymptotic analysis, and Python fundamentals.",
      "Guided 100+ students through debugging, algorithm design, and coursework comprehension during office hours.",
      "Supported faculty with grading and course material preparation while maintaining consistent academic standards.",
    ],
    tools: ["Python", "OOP", "Functional Programming", "Algorithms", "Instruction"],
  },
];
