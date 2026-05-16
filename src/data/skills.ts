export type SkillColor =
  | "cyan"
  | "purple"
  | "emerald"
  | "amber"
  | "blue"
  | "rose";

export interface Skill {
  name: string;
  level: number;
  color: SkillColor;
}

export interface SkillNode {
  id: string;
  name: string;
  icon: string;
  level: number;
  maxLevel: number;
  color: SkillColor;
  isCore?: boolean;
  isLocked?: boolean;
  x: number;
  y: number;
  connections?: string[];
}

export const coreSkillBars: Skill[] = [
  { name: "Backend (Laravel)", level: 70, color: "cyan" },
  { name: "Frontend (Bootstrap, Tailwind)", level: 40, color: "purple" },
  { name: "Database (MySQL,PostgreSQL,Supabase)", level: 70, color: "emerald" },
  { name: "Mobile (Flutter)", level: 40, color: "amber" },
];

export const techStack = [
  { name: "Laravel", color: "cyan" as SkillColor },
  { name: "Tailwind", color: "emerald" as SkillColor },
  { name: "Flutter", color: "amber" as SkillColor },
  { name: "Git", color: "rose" as SkillColor },
  { name: "MySQL", color: "cyan" as SkillColor },
  { name: "PostgreSQL", color: "emerald" as SkillColor },
  { name: "Supabase", color: "blue" as SkillColor },
];

export const skillNodes: SkillNode[] = [
  {
    id: "laravel",
    name: "Laravel",
    icon: "⚡",
    level: 8,
    maxLevel: 10,
    color: "cyan",
    isCore: true,
    x: 50,
    y: 50,
    connections: ["php", "mysql","tailwind", "flutter"],
  },
  {
    id: "php",
    name: "PHP",
    icon: "🐘",
    level: 7,
    maxLevel: 10,
    color: "cyan",
    x: 18,
    y: 28,
    connections: ["laravel"],
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: "🗄",
    level: 7,
    maxLevel: 10,
    color: "emerald",
    x: 20,
    y: 72,
    connections: ["laravel"],
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: "🎨",
    level: 4,
    maxLevel: 10,
    color: "cyan",
    x: 88,
    y: 50,
    connections: ["laravel"],
  },
  {
    id: "flutter",
    name: "Flutter",
    icon: "📱",
    level: 4,
    maxLevel: 10,
    color: "amber",
    x: 50,
    y: 88,
    connections: ["laravel"],
  },
];
