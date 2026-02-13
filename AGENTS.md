## Project Summary

A Bridgerton-inspired digital wedding invitation webpage. It features a Regency-era aesthetic with romantic period details, refined typography, and sophisticated animations to provide an immersive experience for wedding guests.

## Tech Stack

- Framework: Next.js 15 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS 4
- Animations: Framer Motion
- Icons: Lucide React

## Architecture

- `src/app/page.tsx`: Main entry point for the invitation.
- `src/components/`: Reusable components for the invitation (Hero, WeddingDetails, RSVPForm, etc.)
- `public/`: Assets like floral patterns or textures.

## User Preferences

- Regency-era aesthetic (pastel blues, pinks, gold accents).
- Serif fonts: Cormorant Garamond, Playfair Display.
- Elegant, sweeping animations.
- Formal invitation wording.

## Project Guidelines

- Use React Server Components where possible, but use Client Components for animations and interactivity.
- Follow Tailwind CSS 4 conventions.
- Maintain a mobile-first responsive design.

## Common Patterns

- Animated sections using Framer Motion's `initial`, `whileInView`, and `transition` props.
- Custom border components for Regency-style filigree.
