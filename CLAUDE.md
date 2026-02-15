# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site built with Next.js 15 (Pages Router), TypeScript, React 18, and MUI (Material UI v5). Dark-themed single-page layout statically exported for GitHub Pages hosting.

## Commands

- `npm run dev` - Start dev server
- `npm run build` - Production build (outputs static site to `out/`)
- `npm run export` - Build + create `.nojekyll` for GitHub Pages
- `npm start` - Start production server (local only, not for static export)

No test runner or linter is configured.

## Architecture

- **Pages Router** (`pages/`): Uses Next.js Pages Router. `_app.tsx` applies global CSS and wraps components. `index.tsx` composes all section components with a MUI dark theme.
- **Components** (`components/`): Section components — Navbar, Hero, About, Projects, Experience, Contact, Footer. Each is self-contained and imports its own data.
- **Data** (`data/`): Typed content files — `profile.ts` (bio, email, links, skills), `projects.ts` (project cards), `experiences.ts` (work history). Edit these to update site content.
- **Styling**: MUI `sx` props for all styling. `styles/globals.css` only contains scroll behavior and keyframe animations.
- **Static Export**: `next.config.js` sets `output: 'export'` with `images.unoptimized: true`. Build output goes to `out/` directory.
- **TypeScript**: Strict mode is off (`strict: false` in tsconfig).
- **Node**: Requires Node >= 18 (`.nvmrc` pinned to 18).

## GitHub Pages Deployment

1. Run `npm run export`
2. Push the `out/` directory contents to a `gh-pages` branch, or configure GitHub Pages to serve from `out/` on main
