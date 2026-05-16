export type ServiceColor = 'cyan' | 'purple' | 'emerald' | 'amber';

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  color: ServiceColor;
  icon: string;
  deliverables: string[];
  duration: string;
}

export const services: Service[] = [
  {
    id: 'web-system',
    title: 'Web System & Admin Panel',
    description:
      'Full Laravel systems with role-based access, CRUD, reporting, and exportable documents. Replaces spreadsheets with a clean dashboard.',
    longDescription:
      'End-to-end Laravel web systems — from database schema and backend logic to a clean, responsive admin panel. Role-based access control (Super Admin, Admin, User), data entry forms, reports, and PDF/Excel export. Typically used for school management, inventory, HR, or any internal business workflow.',
    category: 'BACKEND',
    color: 'cyan',
    icon: '⚡',
    deliverables: [
      'Role-based authentication (multi-role)',
      'CRUD modules per requirement',
      'Data export (PDF & Excel)',
      'Responsive dashboard UI',
      'Database migration & seeder',
      'Basic deployment guide',
    ],
    duration: '2 – 6 weeks',
  },
  {
    id: 'landing-page',
    title: 'Landing Page & Company Profile',
    description:
      'Modern, responsive landing pages and company profiles built with Astro or Laravel. Fast-loading, SEO-friendly, and easy to update.',
    longDescription:
      'Static or semi-static company profile websites and landing pages. Built with Astro for maximum speed or Laravel for content that needs to be editable. Includes hero, about, services, testimonials, contact sections, and proper meta tags for SEO.',
    category: 'FRONTEND',
    color: 'purple',
    icon: '🖥',
    deliverables: [
      'Fully responsive design (mobile + desktop)',
      'Custom section layout per brief',
      'SEO meta tags & Open Graph',
      'Contact form (mailto or formspree)',
      'Performance-optimized assets',
      'GitHub Pages or shared hosting deployment',
    ],
    duration: '1 – 2 weeks',
  },
  {
    id: 'mobile-app',
    title: 'Simple Mobile App',
    description:
      'Flutter apps for internal tools, inventory, or companion features. Offline-capable with SQLite, syncs to a Laravel API backend.',
    longDescription:
      'Flutter mobile apps focused on internal business tools: inventory scanners, field report apps, simple approval workflows. Offline-first with SQLite for data persistence, synced to a Laravel REST API. Delivered as a debug APK for testing, release APK on final delivery.',
    category: 'MOBILE',
    color: 'emerald',
    icon: '📱',
    deliverables: [
      'Flutter APK (Android) — debug & release',
      'Offline SQLite storage',
      'Laravel REST API (if needed)',
      'Basic push notification setup',
      'Source code handoff',
    ],
    duration: '3 – 8 weeks',
  },
  {
    id: 'bugfix',
    title: 'Bug Fix & Code Maintenance',
    description:
      'Fixing broken Laravel projects, migrating old PHP systems, patching security issues, or adding features to an existing codebase.',
    longDescription:
      'If you have an existing Laravel or PHP project that\'s broken, slow, or needs new features — I can help. This includes debugging, code review, dependency updates, migration from old PHP to Laravel, and small feature additions without a full rewrite.',
    category: 'MAINTENANCE',
    color: 'amber',
    icon: '🔧',
    deliverables: [
      'Issue diagnosis & root cause report',
      'Code fix with explanation',
      'Regression testing for affected areas',
      'Updated documentation (if applicable)',
    ],
    duration: 'Per task / hourly',
  },
];
