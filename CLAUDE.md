# Camp Interzone — Claude Context

## Project
Marketing website for Camp Interzone, a Burning Man camp inspired by 1950s Tangier / William Burroughs's *Naked Lunch*.
Domain: campinterzone.com | Stack: Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion

## Design System (full rules → @.claude/rules/design-system.md)
- Background: #F5EDD8 (canvas) / #EAD9B8 (canvas-2)
- Accent: #B85C38 (burnt sienna) | CTA: #C4891A (mustard gold)
- Text: #1E120A (espresso) | Muted: #6B4C35 (tobacco)
- Headings: Jost, all-caps, tracking-widest | Body: Courier Prime
- NEVER add: box-shadow, gradient, border-radius, smooth transitions
- Hover states must snap instantly (no transition)
- All layouts: center-aligned, rigid grids

## Content Voice (full rules → @.claude/rules/content-voice.md)
- 1950s Tangier bohemian literary tone
- Cultured, mysterious, welcoming — not precious or pretentious
- Second person ("you"), present tense, short declarative sentences

## Key Files
- `app/layout.tsx` — root layout, fonts, metadata
- `app/globals.css` — design tokens via @theme
- `app/page.tsx` — homepage (long-scroll, all sections)
- `app/gallery/page.tsx` — photo/video gallery
- `app/join/page.tsx` — contact/join form
- `components/FramedImage.tsx` — polaroid/museum frame wrapper
- `components/Button.tsx` — universal button (one style only)
- `components/sections/` — Hero, About, Library, LoudHours, Workshops, Gifting
- `public/logo.svg` — SVG wordmark (render in #1E120A on light, white on dark)
- `public/images/{hero,library,events,gallery}/` — organized media

## Conventions
- One Button component, one style — never deviate
- Section dividers: 1px solid #B85C38, never just whitespace
- Image borders: 4px solid #1E120A (polaroid look)
- Form inputs: dotted border-bottom only, no box
- Font sizes: H1 clamp(3rem,6vw,5rem) | H2 clamp(1.5rem,3vw,2.5rem) | Body 1rem
- Letter spacing on all headings: 0.15em minimum

## Build Status (as of 2026-03-21)
**Site is live at campinterzone.com** — deployed on Vercel, auto-deploys from GitHub on every push.
- GitHub: https://github.com/campinterzone/campinterzone (main branch)
- Vercel project: campinterzone (campinterzone-3719s org)
- Formspree form: https://formspree.io/f/mbdzajbe (wired to join page)
- Vercel Analytics: enabled in Vercel dashboard + `<Analytics />` in layout
- Google Analytics: G-3DW21DSW6N via `@next/third-parties/google` + `<GoogleAnalytics />` in layout

### What's complete
- All homepage sections: Hero (video), About, Library (video + card catalogue), Workshops (video), Gifting (video), Footer
- Gallery page (stub — grid layout ready, needs real photos added)
- Join / Contact form (Formspree backend wired, confirmation card, loading + error states)
- Favicon: `app/icon.svg` (desktop) + `app/apple-icon.png` (iOS)
- OG share image: `app/opengraph-image.png`
- Security headers, robots.txt, sitemap
- Mobile responsive across all sections
- Vercel Analytics + Google Analytics (G-3DW21DSW6N)

### What still needs doing
- Add actual hero video → `public/videos/hero.mp4` + poster image
- Download Google Photos albums and drop into `public/images/{hero,library,events,gallery}/`
- Populate gallery page with real FramedImage grid (currently a stub)
- Mobile: verify iOS favicon is showing after latest push
- (Optional) Phase 2 members portal — Clerk + Neon, routes under `app/members/`

## Fonts in Use
- Jost → `--font-jost` (headings, nav, labels)
- Crimson Pro → `--font-crimson-pro` (editorial body, available)
- Playfair Display → `--font-playfair` (available, used sparingly)
- Caveat → `--font-caveat` (handwriting — polaroid captions)
- Courier Prime / Courier New → body copy and form fields

## Members Portal (Phase 2 — not built yet)
- Auth: Clerk | DB: Neon (PostgreSQL)
- Routes reserved under app/members/ and app/api/auth/
