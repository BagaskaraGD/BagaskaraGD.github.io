# UI Prototype Brief

## Purpose
This document describes the approved Claude Design prototype and how it should guide implementation.

## Approved Direction
The approved design uses a stylized 2D RPG game-world background as the main visual identity, supported by modern AI/futuristic UI overlays.

## Visual Balance
- 60% stylized RPG game-world environment
- 40% modern AI / futuristic UI

## Main Prototype File
Use this file as the main visual reference:

`docs/prototype/claude-design/standalone.html`

## Supporting Files
- `docs/prototype/claude-design/index.html`
- `docs/prototype/claude-design/styles.css`
- `docs/prototype/claude-design/main.js`

## Implementation Notes
When converting to Astro + Tailwind:
- Do not copy everything into one file.
- Break the design into reusable components.
- Keep the game landscape background as the main visual identity.
- Keep terminal panel, neon accents, glass cards, and wire UI as supporting layers.
- Implement Home Page first.
- Keep the project static-first and compatible with GitHub Pages.