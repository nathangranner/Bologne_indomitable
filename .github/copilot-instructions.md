# GitHub Copilot Instructions for Joseph Bologne Project

This project is an interactive digital storybook exploring the life of Joseph Bologne, Chevalier de Saint-Georges. It uses modern web technologies to create an immersive storytelling experience with audio-reactive visuals.

## Project Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript with strict mode enabled
- **Styling:** Tailwind CSS
- **UI Libraries:** Framer Motion for animations, Lucide React for icons
- **Key Features:** Audio visualization using Web Audio API, interactive storytelling with react-pageflip

## Coding Standards

### TypeScript
- Always use TypeScript for all files (.ts, .tsx)
- Enable strict type checking - never use `any` types unless absolutely necessary
- Use type inference where possible but explicitly type function parameters and return types for public APIs
- Use proper TypeScript types for React components (e.g., `React.FC` or explicit prop interfaces)

### React & Next.js
- Use functional components with hooks exclusively
- Always add `'use client'` directive for components that use client-side features (hooks, browser APIs, event handlers)
- Use Next.js App Router conventions (app directory structure)
- Import from '@/' alias for src directory imports (e.g., `@/components`, `@/lib`, `@/data`)
- Follow Next.js 14 best practices for layouts, pages, and server/client components

### Component Structure
- Place UI components in `src/components/ui/`
- Place feature-specific components in appropriate subdirectories (e.g., `src/components/scrollytelling/`)
- Keep data definitions in `src/data/`
- Keep utility functions and contexts in `src/lib/`

### Styling with Tailwind CSS
- Use Tailwind CSS utility classes for styling
- Follow the established color palette: dark theme with zinc-950/black backgrounds, yellow accent colors
- Use existing theme extensions in tailwind.config.ts (custom fonts, gradient utilities)
- Apply responsive design with Tailwind's mobile-first breakpoints (sm:, md:, lg:)
- Use glassmorphism effects with backdrop-blur and transparency where appropriate

### Code Style
- Use single quotes for strings in TypeScript/JavaScript
- Use 2-space indentation (following Next.js conventions)
- Follow the ESLint configuration defined in eslint.config.mjs
- Run `npm run lint` to check for linting errors

## Audio & Media Handling

- Use Web Audio API for audio analysis and visualization
- Store audio files in the public directory
- Handle audio context creation responsibly (user interaction required for playback)
- Implement proper cleanup for audio contexts and nodes to prevent memory leaks

## Performance & Optimization

- Use Next.js Image component for optimized images
- Implement lazy loading for heavy components where appropriate
- Be mindful of audio context and animation performance
- Keep bundle sizes small - avoid unnecessary dependencies

## Accessibility

- Ensure keyboard navigation works properly
- Provide proper ARIA labels for interactive elements
- Maintain good color contrast for text readability
- Support responsive design for mobile and desktop

## Security

- Never commit API keys or sensitive credentials
- Validate and sanitize any user inputs
- Use secure methods for handling audio/media files
- Follow Next.js security best practices

## Testing & Building

- Run `npm run dev` for development server
- Run `npm run build` to verify production build succeeds
- Run `npm run lint` to check for code quality issues
- Test on multiple browsers and device sizes

## Historical Context

This project honors Joseph Bologne, Chevalier de Saint-Georges, and the Pasadena Vocal Competition's Courtney B. Vance Chevalier Award. Be respectful and accurate when working with historical content and biographical information.
