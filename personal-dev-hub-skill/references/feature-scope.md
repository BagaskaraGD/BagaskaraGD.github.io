# Feature Scope

## Scope Purpose
This document defines what should and should not be built for the MVP.

Use this file before adding new features. If a requested feature is outside MVP scope, ask for confirmation before implementing it.

## MVP Version
MVP v1 focuses on building a static personal developer website with essential pages, reusable components, and static content.

## MVP Must-Have Features

### 1. Home Page
Required sections:
- Hero section
- Name and short tagline
- Short description
- CTA buttons
- Featured portfolio preview
- Services preview
- Dev Notes preview

### 2. About Page
Required sections:
- Biodata
- Developer summary
- Skills
- Tech stack
- Learning journey or profile story

### 3. Portfolio Page
Required:
- Project list
- Project card
- Project category or stack tag
- Project description
- Link to detail page if implemented
- Demo/repository link if available

Optional:
- Filter by stack
- Search project
- Project detail page

### 4. Services Page
Required:
- List of services
- Description of each service
- CTA contact button
- Clear explanation of what systems can be requested

Possible services:
- Landing page
- Company profile
- Admin dashboard
- Laravel system
- Simple information system
- Bug fixing
- Web form and database integration

### 5. Dev Notes Page
Required:
- Category list
- Command/note cards
- Basic command explanation
- Code block
- Usage explanation

Optional:
- Client-side search
- Filter by category
- Tag system

### 6. Contact Section/Page
Required:
- Email
- GitHub
- LinkedIn
- Contact CTA

Optional:
- WhatsApp link
- Download CV button

## Optional Enhancements for MVP
These can be added if the core MVP is already stable:
- Smooth animation
- View transitions
- Search Dev Notes using Fuse.js
- Portfolio filtering
- Skill tree visual
- Quest log visual
- Achievement badges
- Dark/light mode

## Out of Scope for MVP
Do not implement these unless explicitly approved:
- Authentication
- Login/register
- Backend API
- Database
- Admin panel
- Payment gateway
- CMS integration
- User comments
- Real-time chat
- Blog comment system
- Complex dashboard
- Multi-user features
- Server-side processing

## Static Site Rule
Because the website is deployed to GitHub Pages, all features must work as static frontend features.

Allowed:
- Static pages
- Markdown/MDX content
- JSON/TypeScript data
- Client-side search
- Client-side filter
- Static assets
- GitHub Actions deployment

Not allowed for MVP:
- Server runtime
- Database queries
- Protected routes
- Backend authentication
- Server-only APIs

## Feature Decision Rule
Before building a new feature, check:

1. Does it support identity, portfolio, services, or dev documentation?
2. Can it work fully static on GitHub Pages?
3. Is it useful for MVP?
4. Can it be built without backend/database?
5. Will it keep the design professional and maintainable?

If the answer is no, delay it to a future version.

## MVP Completion Checklist
MVP is complete when:
- Home page exists
- About page exists
- Portfolio page exists
- Services page exists
- Dev Notes page exists
- Contact section exists
- Layout is responsive
- Navbar and footer work
- Static content is separated from UI components
- Website can be built successfully
- Website can be deployed to GitHub Pages