# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### about-academy (previewPath: `/`)
- **Kind**: react-vite
- **Purpose**: Spiritual website for Mahayogi Siddhababa Spiritual Academy — "About the Academy" page
- **Tech**: React + Vite + Tailwind + Framer Motion + Cormorant Garamond / Inter fonts
- **Design**: Warm cream/gold/saffron palette; calm, minimal, spiritual aesthetic
- **Sections**: Hero, Academy Description, Well-being Approach, Six Pillars of Service, Discover More
- **Structure**: 
  - `src/pages/AboutAcademy.tsx` — main page composer
  - `src/components/HeroSection.tsx`
  - `src/components/AcademyDescription.tsx`
  - `src/components/WellBeingSection.tsx`
  - `src/components/SixPillars.tsx`
  - `src/components/DiscoverMore.tsx`

### api-server (previewPath: `/api`)
- **Kind**: Express API server
- **Purpose**: Shared backend API

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
