# Camp Interzone — Claude Context

## Project
Marketing website for Camp Interzone, a Burning Man camp inspired by 1950s Tangier / William Burroughs's *Naked Lunch*.
Domain: campinterzone.com | Stack: Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion

## Design System (full rules → @.claude/rules/design-system.md)
- Page ground is dark: sections alternate espresso #1E120A and parchment #EDE8DF
- Canvas: #EDE8DF / #E0D5C5 (canvas-2) | Espresso: #1E120A
- Accent (rules, dividers, drop cap): #906558 | CTA + hover: #B08020
- Gold-light (eyebrows on dark): #C4A35A | Muted: #6B5045
- Inspiration box: border #8B7355 on fill #F0E8D0 | Footer: bg #1E2535, border #4A6080, text #8FA8C0
- Headings: Jost **300**, all-caps, tracking 0.06em–0.34em | Body: Crimson Pro
- Playfair Display 700 → drop cap + event date numerals | Courier Prime → eyebrows, metadata, captions
- NEVER add: box-shadow, gradient, border-radius, smooth transitions
- Hover states must snap instantly (no transition)
- Layout is left-aligned editorial: asymmetric grids, sticky rails, generous rules

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
- `components/sections/` — Hero, About, Library, Workshops, LoudHours, Gifting (that is also the homepage order)
- `components/motion.ts` — shared scroll-reveal variants (`reveal`, `revealViewport`); `custom` carries the stagger delay in ms
- `components/Navigation.tsx` — fixed translucent header; `ctaLabel`/`ctaHref`/`opaque` props
- `public/logo.svg` — SVG wordmark (render in #1E120A on light, `invert` on dark)
- `public/images/hero/hero-night.jpg` — hero still (the looping hero.mp4 is retained, commented out in Hero.tsx)
- `public/images/{hero,library,events,gallery}/` — organized media

## Conventions
- One Button component, one style — never deviate. The outline variant uses `text-inherit` so it reads correctly on both parchment and the dark header.
- Section dividers: 1px solid #906558, never just whitespace
- Image borders: 4px solid #1E120A (polaroid look)
- Form inputs: dotted border-bottom only, no box
- Scroll reveals: opacity 0→1, y 34→0, 700ms, cubic-bezier(0,0,0.2,1), fired once at `-12%` — always via `components/motion.ts`
- **Fonts gotcha**: the `next/font` variable classes must stay on `<html>` in `app/layout.tsx`. `@theme` declares `--font-heading`/`--font-body`/etc. on `:root` in terms of them, and a `var()` that is undefined on `:root` makes the whole token compute to empty — every font silently falls back to system sans.

## Build Status (as of 2026-08-14)
**Site is live at campinterzone.com** — deployed on Vercel, auto-deploys from GitHub on every push.
- GitHub: https://github.com/campinterzone/campinterzone (main branch)
- Vercel project: campinterzone (campinterzone-3719s org)
- Formspree form: https://formspree.io/f/mbdzajbe (wired to join page)
- Vercel Analytics: enabled in Vercel dashboard + `<Analytics />` in layout
- Google Analytics: G-3DW21DSW6N via `@next/third-parties/google` + `<GoogleAnalytics />` in layout

### What's complete
- Homepage rebuilt to the 2026 design handoff (`design_handoff_home_rebuild`): still-image hero, editorial About with sticky Tangier map, Library (video, no card catalogue), Events & Workshops as a date-stack list, Loud Hours with ticker, Contact CTA, Footer
- Events & Workshops: live 2026 playa schedule (4 events, Aug 31 – Sep 5) — see "Event Schedule" below
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

## Event Schedule
Events are a hardcoded `events` array at the top of `components/sections/Workshops.tsx` — no CMS, no API. To change the schedule, edit that array.
- **Source of truth**: https://playaevents.burningman.org/playa_event/search/2026/?q=Interzone — names, dates, and times must match what's registered there. Descriptions get rewritten in the site's voice rather than pasted from the listings.
- Current 2026 schedule: Library Loud Hours (daily Mon–Sat 3–6 PM), Books 'n Brews Welcome Party (Mon Aug 31), Tai Chi Workshop (Wed Sep 2), Death Cafe (Fri Sep 4)
- Each entry renders as an editorial row: date stack (weekday / Playfair numeral / month) beside title, time, description, tag, and a PlayaEvents link. Row count is free — the list is a single column, not a fixed grid.
- The first entry is `featured: true`, which only changes colors: rule #1E120A instead of #906558, numeral and tag #B08020.
- **Gotcha (general)**: Framer Motion owns the `transform` property on any element it animates `y` on. Rotation, scale, or offsets must live in the variants (via `custom`), never in an inline `transform` — an inline one is silently overwritten the moment the element animates into view.

## Fonts in Use
All loaded via `next/font/google` in `app/layout.tsx`, variables on `<html>`.
- Jost 300/400/500/600/700 → `--font-jost` → `font-heading` (headings, nav, labels)
- Crimson Pro → `--font-crimson-pro` → `font-body` (editorial body — the default)
- Playfair Display → `--font-playfair` → `font-display` (drop cap, event numerals)
- Courier Prime → `--font-courier-prime` → `font-mono` (eyebrows, metadata, captions, form fields)
- Caveat → `--font-caveat` (handwriting — polaroid captions)

## Members Portal (Phase 2 — not built yet)
- Auth: Clerk | DB: Neon (PostgreSQL)
- Routes reserved under app/members/ and app/api/auth/
