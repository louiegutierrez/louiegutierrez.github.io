export type EducationEntry = {
  school: string;
  location: string;
  degree: string;
  dateRange: string;
  gpa: string;
  honors: string[];
  coursework: string[];
};

export const education: EducationEntry[] = [
  {
    school: "University of California, Irvine",
    location: "Irvine, CA",
    degree: "B.S. in Computer Science",
    dateRange: "Sept. 2022 - June 2026",
    gpa: "3.84",
    honors: ["Regent Scholar", "14x Dean's Honor List"],
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "AI/ML",
      "Information Retrieval",
    ],
  },
];
