# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**kkfash** is a modern, animation-focused fashion directory website. It displays 8 curated categories of fashion brands and resellers (80+ items) with dynamic logos fetched from Clearbit API, smooth Framer Motion animations, and glass morphism UI effects.

## Common Development Commands

```bash
# Development server (runs on port 3000, auto-opens in browser)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Install dependencies
npm install
```

## Codebase Architecture

### Directory Structure
```
src/
├── components/
│   ├── FashAnimated.jsx      # Main orchestrator: data structure, layout, animations
│   ├── CategorySection.jsx   # Renders category sections with staggered animations
│   ├── FashCard.jsx          # Individual brand card with hover effects & Clearbit logos
│   └── AnimatedBackground.jsx # Fullscreen animated gradient blobs background
├── App.jsx                   # Root wrapper component
├── main.jsx                  # React DOM entry point
└── index.css                 # Global styles & Tailwind imports
```

### Key Architectural Patterns

1. **Data Flow:** Fashion category data is embedded in `FashAnimated.jsx` as an array structure, then cascades down through component props: `FashAnimated` → `CategorySection` → `FashCard`

2. **Animation-First Design:** Every visual element uses Framer Motion for entrance animations and hover effects:
   - Staggered reveals when page loads (header → categories → cards)
   - Hover elevation, glow borders, and scaling on cards
   - Independent animated gradient blobs in background

3. **External Logo Integration:** `FashCard.jsx` fetches company logos dynamically from Clearbit API using domain URLs. Graceful fallback to gradient + first letter if API fails or image loads with error.

4. **Responsive Grid Layout:** Built with Tailwind CSS, responsive from mobile to desktop (3 cols → 6 cols)

5. **Glass Morphism UI:** Custom Tailwind config extends glass effect classes for backdrop blur + transparency effects

### Technology Stack
- **React 19** - UI framework
- **Vite 7** - Build tool & dev server (port 3000)
- **Tailwind CSS 4** - Styling with glass morphism extensions
- **Framer Motion 12** - Animation library
- **Lucide React 0.548** - Icon library (used for category icons)
- **Clearbit API** - External service for logo fetching (free tier)

## Configuration Files

**vite.config.js**
- React plugin configured
- Dev server runs on port 3000 with `open: true` (auto-launches in browser)

**tailwind.config.js**
- Custom glass morphism classes: `glass`, `glass-dark`, borders
- Dark mode enabled with `darkMode: 'class'`
- Content paths configured for JSX files in src/

**postcss.config.js**
- Only `@tailwindcss/postcss` plugin enabled

**index.html**
- Single mount point at `<div id="root">`
- Meta tags describe the fashion directory purpose
- Loads React app via `src/main.jsx`

## Important Implementation Details

### Data Structure (FashAnimated.jsx)
Each category object contains:
- `title` - Category name (e.g., "Luxury", "Streetwear")
- `icon` - Lucide React icon component
- `items` - Array of brand objects with:
  - `name` - Brand display name
  - `url` - Domain URL (used for Clearbit logo lookup)

### Logo Fetching (FashCard.jsx)
Clearbit API endpoint: `https://logo.clearbit.com/{domain}?size=200`
- Automatically extracted from brand URL
- Image error handling shows gradient fallback with first letter
- Consider cache headers and rate limits (Clearbit free tier has limits)

### Responsive Breakpoints
- Mobile-first approach using Tailwind breakpoints
- Cards use responsive grid: `grid-cols-3 md:grid-cols-4 lg:grid-cols-6`
- Adjust in `CategorySection.jsx` if needed

## Notes for Future Development

1. **Logo API:** Clearbit has rate limits on free tier. If deploying at scale, consider caching logos server-side or switching to alternative service
2. **Data Management:** Currently hardcoded in component. For larger dataset, consider moving to separate data file or backend API
3. **Animations:** Framer Motion settings are tuned for smooth reveal effects. Adjust `delay`, `duration`, and `transition` props in Framer Motion components if design changes
4. **Styling:** Glass morphism effects are custom Tailwind extensions in `tailwind.config.js`. Keep these in sync if updating Tailwind version
