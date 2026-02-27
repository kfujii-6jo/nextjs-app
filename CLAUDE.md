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

### Core
- **Next.js 16** with App Router
- **React 19**
- **TypeScript** with strict mode
- **Tailwind CSS v4** (via @tailwindcss/postcss)
- **Biome** for linting and formatting (not ESLint/Prettier)

### Backend & Data
- **NextAuth v5** for authentication (OAuth providers)
- **Drizzle ORM** for database operations
- **Neon Database** (PostgreSQL) for data persistence
- **Hono** for API routes with type-safe RPC client

### State Management & Data Fetching
- **TanStack Query (React Query)** for server state
- **Zustand** for client state management

### UI Components & Styling
- **shadcn/ui** for UI components (Radix UI primitives)
- **Lucide React** for icons
- **Tailwind Merge** & **clsx** for className management
- **class-variance-authority** for variant-based component styling
- **Sonner** for toast notifications
- **react-markdown** for markdown rendering
- **@tailwindcss/typography** for prose styling

## Project Structure

```
src/
├── app/
│   ├── (landing)/           # Landing page route group
│   │   └── page.tsx         # Public landing page
│   ├── (main)/              # Main app route group (protected)
│   │   ├── layout.tsx       # Main layout with header & footer
│   │   └── home/
│   │       └── page.tsx     # Protected home page
│   ├── articles/
│   │   └── [articleId]/
│   │       └── edit/
│   │           └── page.tsx # Article edit page
│   ├── api/
│   │   ├── [[...route]]/    # Hono API routes
│   │   └── auth/
│   │       └── [...nextauth]/ # NextAuth handlers
│   ├── providers/           # React context providers
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── form.tsx
│   │   └── ...
│   ├── header.tsx           # Main app header
│   ├── footer.tsx           # Footer component
│   ├── hero.tsx             # Landing page hero
│   └── ...
├── features/                # Feature-based modules
│   ├── auth/
│   │   ├── actions.ts       # Server actions
│   │   ├── api/             # React Query hooks
│   │   ├── components/      # Auth-specific components
│   │   ├── hooks/           # Auth-specific hooks
│   │   └── server/          # Hono API routes
│   └── articles/
│       ├── api/             # React Query hooks
│       ├── components/      # Article components
│       ├── schemas.ts       # Zod validation schemas
│       ├── server/          # Hono API routes
│       └── types.ts         # TypeScript types
├── db/
│   ├── index.ts             # Drizzle client
│   └── schema.ts            # Database schema (users, articles, etc.)
├── lib/
│   ├── rpc.ts               # Type-safe RPC client for Hono
│   ├── session-middleware.ts # Hono session middleware
│   └── utils.ts             # Utility functions (cn, etc.)
└── auth.ts                  # NextAuth configuration
```

## Architecture Patterns

### Feature-Based Organization
Features are organized in `src/features/` with the following structure:
- `api/` - React Query hooks (use-get-*, use-create-*, etc.)
- `components/` - Feature-specific UI components
- `server/` - Hono API routes
- `schemas.ts` - Zod validation schemas
- `types.ts` - TypeScript types
- `actions.ts` - Server actions (if needed)

### API Layer (Hono)
- API routes are defined in feature `server/route.ts` files
- Combined in `app/api/[[...route]]/route.ts`
- Type-safe RPC client in `lib/rpc.ts`
- Session middleware in `lib/session-middleware.ts`

### Data Fetching
- React Query for server state management
- Custom hooks in `features/*/api/` (e.g., `use-get-article.ts`)
- Optimistic updates and invalidation patterns

## Database (Drizzle ORM)

Schema is defined in `src/db/schema.ts`:
- `users` - User accounts
- `accounts` - OAuth provider accounts (NextAuth)
- `sessions` - User sessions (NextAuth)
- `articles` - User-created articles

Run migrations:
```bash
npx drizzle-kit generate
npx drizzle-kit migrate
```

## Authentication (NextAuth v5)

- Configuration in `src/auth.ts`
- OAuth providers (GitHub, Google, etc.)
- Drizzle adapter for session management
- Session middleware for API routes

## Path Aliases

- `@/*` → `./src/*`

## Code Style

Biome is configured with:
- 2-space indentation
- Recommended rules for React and Next.js
- Auto import organization enabled

## Key Features

- **Landing Page**: Public landing page with hero, features, CTA
- **Authentication**: NextAuth with OAuth providers
- **Protected Routes**: Main app requires authentication
- **Article Creation**: Create and edit articles with markdown support
- **Toast Notifications**: Sonner for user feedback
