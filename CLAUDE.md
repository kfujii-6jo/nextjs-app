# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run Biome linter
npm run format   # Format code with Biome
```

## Tech Stack

- **Next.js 16** with App Router
- **React 19**
- **TypeScript** with strict mode
- **Tailwind CSS v4** (via @tailwindcss/postcss)
- **Biome** for linting and formatting (not ESLint/Prettier)

## Project Structure

```
src/
└── app/           # App Router pages and layouts
    ├── layout.tsx # Root layout with Geist fonts
    ├── page.tsx   # Home page
    └── globals.css
```

## Path Aliases

- `@/*` → `./src/*`

## Code Style

Biome is configured with:
- 2-space indentation
- Recommended rules for React and Next.js
- Auto import organization enabled
