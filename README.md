# The Remarkable Life of Joseph Bologne, Chevalier de Saint-Georges

> *"History does not surface everything it contains on its own. Recognition needs intention, attention and moreover? Effort."*

This interactive digital storybook explores the extraordinary life of **Joseph Bologne**, Chevalier de Saint-Georges (1745–1799). A contemporary of Mozart, Bologne was a virtuoso violinist, a prolific composer, a world-class fencer, and the commander of the first all-Black regiment in Europe. Despite his immense contributions to classical music and history, his legacy was nearly erased—until now.

## Special Consideration: The Chevalier Award

This project was built in honor of the **Pasadena Vocal Competition (PVC)** and the **Courtney B. Vance Chevalier Award**.

The **Chevalier Award** is presented to a singer whose performance includes an aria from an opera written by a composer from the Black diaspora. It recognizes artistic excellence while affirming the importance of repertoire shaped by a broader range of histories and lived experience than opera has traditionally presented.

This site serves as a companion piece to that mission—using modern web technology to reintroduce Bologne's story and music ("Depuis Longtemps" from the album *Ombre di Luce*) to a new generation.

## Technical Implementation

This project is a modern, interactive web application built with a focus on immersive storytelling and audio-reactive visuals.

### Core Stack
*   **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Language:** TypeScript

### Key Features
*   **Immersive Storybook:** A "flipbook" style narrative experience using `react-pageflip` and custom layouts.
*   **Audio Visualization:** Real-time, browser-based audio analysis using the **Web Audio API**. The Podcast page features a custom frequency visualizer and an audio-reactive background shimmer effect.
*   **Dynamic Transparency:** UI elements that respond to audio playback state, fading out to prioritize the listening experience.
*   **Premium UI:** Custom design system featuring dark mode aesthetics, glassmorphism, and smooth transitions powered by **Framer Motion**.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
