# Bologne Project - Copilot Custom Instructions

## Project Overview
This is an **interactive digital storybook** about **Joseph Bologne, Chevalier de Saint-Georges** (1745-1799) - a virtuoso violinist, composer, fencer, and revolutionary figure. Built for the **Pasadena Vocal Competition** and the **Courtney B. Vance Chevalier Award**.

## Tech Stack
- **Framework:** Next.js 14 (App Router with `'use client'` directives)
- **Styling:** Tailwind CSS with custom theme (serif: Playfair Display, sans: Inter)
- **Animation:** Framer Motion for scroll-based animations and transitions
- **Audio:** Custom Web Audio API integration via `AudioContext.tsx` for:
  - Background music with ducking
  - Audio visualization
  - Multi-track playlist support
- **Flipbook:** react-pageflip for storybook experience
- **Icons:** Lucide React

## Design System
- **Color palette:** Dark mode (zinc-950, black backgrounds), gold/yellow accents (yellow-500, yellow-600)
- **Typography:** Elegant serif headings (Playfair), clean sans body (Inter)
- **Effects:** Glassmorphism, backdrop-blur, audio-reactive UI elements
- **Golden borders:** `border-yellow-500/60` with glow `shadow-[0_0_15px_rgba(234,179,8,0.3)]`

## Key Patterns
1. **Client Components:** Most components use `'use client'` for interactivity
2. **Audio Context:** Use `useAudio()` hook from `@/lib/AudioContext` for audio control
3. **Story Scenes:** Defined in `src/data/story-scenes.ts` with video/image backgrounds
4. **Route Structure:**
   - `/` - Main story with scrollytelling
   - `/storybook` - Interactive flipbook
   - `/podcast` - Audio experience with visualization
   - `/about` - About page

## Historical Context
When generating content about Joseph Bologne:
- He was born 1745 in Guadeloupe to a French planter and enslaved Senegalese mother
- Trained at Boëssière Academy in fencing, became legendary duelist
- Virtuoso violinist, worked with Haydn on Paris Symphonies
- Colonel of Légion St.-Georges (first all-Black regiment in Europe)
- Denied Paris Opéra directorship due to racism
- Revolutionary who supported abolition

## Code Style Preferences
- Use TypeScript with explicit interfaces
- Prefer `const` arrow functions for components
- Use Tailwind utility classes over custom CSS
- Framer Motion for animations (`motion.div`, `useScroll`, `useTransform`)
- Media files stored in `/public/assets_import/` and `/public/music/`
