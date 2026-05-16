# Development Rules

## Core Development Principles
This project must be developed as a static, maintainable, and professional frontend project.

Prioritize:
1. Maintainability
2. Readability
3. Static-first architecture
4. Responsive design
5. Reusable components
6. Performance
7. Consistent design system
8. GitHub Pages compatibility

## Stack Rules
Use the following stack:
- Astro as the main framework
- Tailwind CSS for styling
- TypeScript for typed data and logic
- Markdown/MDX for documentation content
- GitHub Pages for deployment

Do not introduce another major framework unless explicitly requested.

## Architecture Rules
1. Keep pages clean.
2. Move repeated UI into components.
3. Move reusable data into `src/data`.
4. Move long content into Markdown/MDX.
5. Avoid hardcoding large datasets directly inside page files.
6. Use clear folder naming.
7. Use kebab-case for file and folder names where appropriate.
8. Prefer simple static generation over unnecessary client-side rendering.

## Component Rules
Components should be:
- Reusable
- Small enough to understand
- Named clearly
- Focused on one responsibility
- Easy to modify later

Recommended components:
- Navbar
- Footer
- HeroSection
- SectionHeader
- ProjectCard
- ServiceCard
- SkillCard
- CommandCard
- Badge
- PixelFrame
- WireBackground
- CTAButton

## Styling Rules
1. Use Tailwind utility classes consistently.
2. Avoid messy inline styles.
3. Use global CSS only for base styles, animations, fonts, and reusable effects.
4. Keep spacing consistent.
5. Maintain text readability.
6. Avoid excessive neon effects.
7. Do not make the UI too crowded.
8. Ensure mobile layout is designed properly, not just squeezed from desktop.

## Animation Rules
Animations are allowed but must be subtle.

Allowed:
- Fade in
- Hover lift
- Glow pulse
- Floating elements
- Smooth transitions
- Background wire movement

Avoid:
- Large distracting animations
- Too many simultaneous animations
- Animation that reduces readability
- Heavy animation libraries unless needed

## Content Rules
Use real content where available. If content is not yet available, use clearly marked placeholder content.

Good placeholder:
"Project description will be added later."

Bad placeholder:
"Lorem ipsum dolor sit amet..."

## Dev Notes Rules
Each command/note should ideally include:
- Title
- Category
- Command or concept
- Explanation
- When to use it
- Example usage
- Common mistake if relevant

Example structure:
```md
---
title: Laravel Migration
category: Laravel
tags: [laravel, migration, database]
---

## Command
```bash
php artisan migrate