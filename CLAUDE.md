# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**kkfash** is an animation-focused fashion directory website displaying 8 categories of fashion brands/resellers (100+ items) with dynamic logos from Clearbit API, Framer Motion animations, and glass morphism UI on a dark theme.

## Development Commands

```bash
npm run dev       # Dev server on port 3000 (auto-opens browser)
npm run build     # Production build via Vite
npm run preview   # Preview production build locally
```

No test runner or linter is configured.

## Architecture

**Component hierarchy:** `App` → `FashAnimated` → `CategorySection` → `FashCard`

- **FashAnimated.jsx** — Main orchestrator. Contains the hardcoded `data` array of all categories/brands. Renders `AnimatedBackground`, maps categories to `CategorySection` components, and includes the footer.
- **CategorySection.jsx** — Collapsible accordion section. Categories start **collapsed** (`isOpen: false`). Click toggles open/closed with animated height transition. Cards animate in with staggered delay (`itemIndex * 0.05s`). Tracks hover state per card via `hoveredId`.
- **FashCard.jsx** — Individual brand card. Fetches logo from `https://logo.clearbit.com/{domain}` with fallback to gradient + first letter on error. Clicking opens brand URL in new tab. Receives `isHovered` prop from parent for coordinated animations.
- **AnimatedBackground.jsx** — Fixed fullscreen layer with 3 animated gradient blobs (purple, blue, pink) and a subtle SVG grid overlay. Uses `z-index: -10`.

**Data structure** (in `FashAnimated.jsx`):
```js
{ title: "Category Name", icon: LucideIcon, items: [{ name: "Brand", url: "domain.com" }] }
```

The `url` field is a bare domain (no protocol) — used both for Clearbit logo lookup and for navigation (`https://` prepended on click).

## Styling

- **Glass morphism** is defined as CSS classes in `index.css` (`.glass`, `.glass-dark`), not via Tailwind utility classes. The `tailwind.config.js` extensions for glass exist but the actual styles come from `index.css`.
- **Tailwind CSS 4** with `@tailwindcss/postcss` plugin (not classic `tailwindcss` PostCSS plugin).
- Responsive grid: `grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6` (defined in `CategorySection.jsx`).
- Dark theme is hardcoded (black background), not toggled via Tailwind's `darkMode: 'class'`.

## Key Implementation Details

- Categories use `item.url` as React key (not `item.name`), so duplicate brand names across categories are fine but duplicate URLs within a category will cause issues.
- No routing — single page app with no React Router.
- No state management library — local `useState` only.
- No API calls besides Clearbit logo images loaded as `<img>` tags with `crossOrigin="anonymous"`.
- Card grid max-width is hardcoded to `900px` via inline style in `CategorySection.jsx`.
