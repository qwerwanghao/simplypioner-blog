# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Tech Stack

- **Next.js 14** with Pages Router (not App Router)
- **React 18.2** with TypeScript 5.2 (strict mode)
- **TailwindCSS 3.3** for styling
- **Framer Motion 10.16** for animations

## Commands

```bash
npm run dev      # Start development server on localhost:3000
npm run build    # Create production build
npm start        # Start production server
npm run lint     # Run ESLint
```

## Architecture

### Pages Router Pattern

This project uses Next.js **Pages Router**, not the App Router. Pages are in `src/pages/` and use special files:
- `_app.tsx` - App wrapper
- `_document.tsx` - HTML document structure
- `index.tsx` - Home page
- Dynamic routes use `[param].tsx` syntax (e.g., `blog/[slug].tsx`)

### Static Generation

Blog posts use `getStaticPaths` and `getStaticProps` for pre-rendering at build time. The blog post data is currently hardcoded in `src/pages/blog/[slug].tsx` (line 8-35).

To add a new blog post, add an object to the `blogPosts` array with:
- `title`, `slug`, `excerpt`, `coverImage`, `date`, `readingTime`, `tags`, `content`

### Path Aliases

Use `@/` to import from the `src/` directory (configured in `tsconfig.json`):
```typescript
import { LayoutProps } from '@/types/components';
```

### Component Structure

All reusable components are in `src/components/`:
- `Layout.tsx` - Main wrapper with SEO, Navbar, Footer, and Apple-style background effects
- `Navbar.tsx` - Fixed navigation with mobile menu
- `Footer.tsx` - Footer with social links
- `BlogCard.tsx`, `ProjectCard.tsx`, `SkillBar.tsx`, `ContactForm.tsx` - Content components

Component prop types are defined in `src/types/components.d.ts`.

### Design System

The site follows an **Apple-style design** with:
- Minimalist aesthetic
- Gradient orb backgrounds (see `Layout.tsx` lines 42-46)
- Subtle grain overlay (lines 48-53)
- Spring-based animations via Framer Motion
- Dark mode support

**Colors** (defined in `tailwind.config.js`):
- Primary: `#000000` (black text)
- Secondary: `#ffffff` (white background)
- Accent: `#3b82f6` (blue highlights)

**Fonts**: Inter (sans-serif), Roboto Mono (monospace)

### Animation Pattern

All animations use Framer Motion with spring physics:
```typescript
transition={{
  type: "spring",
  stiffness: 260,
  damping: 20
}}
```

Page transitions are handled in `Layout.tsx` (lines 23-36) using `AnimatePresence`.

## Important Notes

- **No testing framework** is currently configured
- **No CI/CD** setup exists
- Contact form submission is mocked (no backend integration)
- Blog content is hardcoded, not from a CMS or markdown files
- TypeScript strict mode is enabled - maintain type safety
