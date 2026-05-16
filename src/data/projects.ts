export type QuestType = "main" | "side" | "daily";
export type ProjectStatus = "completed" | "in-progress" | "archived";
export type ProjectTag = {
  name: string;
  color?: "cyan" | "purple" | "emerald" | "amber" | "blue" | "rose";
};

export interface Project {
  id: string;
  title: string;
  year: number;
  category: string;
  description: string;
  questType: QuestType;
  questLabel: string;
  tags: ProjectTag[];
  link?: string;
  repoLink?: string;
  size: "large" | "small";
  thumbBg?: string;
  status: ProjectStatus;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "PemustakaAward",
    title: "PemustakaAward — Gamified Library Management System",
    year: 2025,
    category: "Web · Laravel",
    description:
      "A gamified library management system for my campus library. It tracks book loans, returns, and generates reports while rewarding users with points and badges for their activity.",
    questType: "main",
    questLabel: "★ MAIN QUEST",
    tags: [
      { name: "Laravel", color: "cyan" },
      { name: "MySQL", color: "emerald" },
      { name: "Tailwind", color: "blue" },
    ],
    link: "#",
    size: "large",
    thumbBg: "linear-gradient(135deg, #0a1124, #182347)",
    status: "in-progress",
    featured: true,
  },
  {
    id: "TukarKuy",
    title: "TukarKuy — Mobile Barter Marketplace",
    year: 2025,
    category: "Mobile · Flutter",
    description:
      "A mobile app that facilitates item swapping between users. Users can list items they want to trade, browse available items, and connect with other users for barter deals.",
    questType: "side",
    questLabel: "◆ SIDE QUEST",
    tags: [
      { name: "Flutter", color: "amber" },
      { name: "MySQL", color: "cyan" },
      { name: "Laravel API", color: "purple" },
    ],
    link: "#",
    size: "small",
    thumbBg: "linear-gradient(135deg, #10172e, #1a1230)",
    status: "completed",
    featured: true,
  },
  {
    id: "DinamikaMagang",
    title: "DinamikaMagang — Internship Management System",
    year: 2024,
    category: "Web · Laravel",
    description:
      "A system for managing internships, including application tracking, supervisor assignments, recomendations, and progress reports.",
    questType: "main",
    questLabel: "★ MAIN QUEST",
    tags: [
      { name: "Laravel", color: "cyan" },
      { name: "MySQL", color: "emerald" },
      { name: "Tailwind", color: "blue" },
      { name: "Python", color: "rose" },
    ],
    link: "#",
    size: "large",
    thumbBg: "linear-gradient(135deg, #0a1124, #182347)",
    status: "in-progress",
    featured: true,
  },
];
export const featuredProjects = projects.filter((p) => p.featured);
