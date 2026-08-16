# Interzone Design System — Full Rules

Current as of the 2026 homepage rebuild (`design_handoff_home_rebuild`). Colors,
typography, spacing, and animation timings in that handoff are final — match them.

## Color Tokens (defined in app/globals.css @theme)
| Token | Hex | Use |
|---|---|---|
| --color-canvas | #EDE8DF | Light section background |
| --color-canvas-2 | #E0D5C5 | Alternate light background |
| --color-espresso / --color-text | #1E120A | Dark sections, body text, image frames |
| --color-accent | #906558 | Rules, dividers, drop cap |
| --color-cta | #B08020 | Buttons, hover states, featured numeral |
| --color-gold-light | #C4A35A | Eyebrows and accents on dark |
| --color-text-muted | #6B5045 | Captions, labels, metadata |
| --color-box-border | #8B7355 | Inspiration box border |
| --color-box-fill | #F0E8D0 | Inspiration box background |
| --color-footer-bg | #1E2535 | Footer background |
| --color-footer-border | #4A6080 | Footer rules |
| --color-footer-text | #8FA8C0 | Footer type |

The page ground is espresso; sections alternate dark and parchment, each one
separated by `border-top: 1px solid #906558`.

Scrims over video/image: `#1E120A` at `0.42` (hero), `0.58` (library), `0.60`
(loud hours), `0.70` (contact page). Header background `rgba(30,18,10,0.34)`,
or `rgba(30,18,10,0.9)` on pages with no hero behind it.

Never use pure black (#000). White (#ffffff) is used only for headings and body
copy over dark video/photography. Never add colors outside this palette without
explicit instruction.

## Typography
Loaded in `app/layout.tsx`; the font variables live on `<html>` (see the gotcha
in CLAUDE.md — putting them on `<body>` breaks every `@theme` font token).

- Headings: Jost **300**, uppercase, `font-heading`
  - Hero H1: tracking 0.09em, clamp(1.9rem, 5.4vw, 4.8rem), line-height 1.04
  - Section H2: tracking 0.11em–0.13em, clamp(1.7rem, 3.6vw, 2.9rem)
  - Event H3: tracking 0.12em, clamp(1.2rem, 2.4vw, 1.75rem)
  - Statement lines: tracking 0.2em, clamp(1.1rem, 2.2vw, 1.7rem)
- Body: Crimson Pro (`font-body`), 1.125rem default, line-height 1.8. Measures
  run 1.05rem–1.35rem depending on the block.
- Display: Playfair Display 700 (`font-display`) — the About drop cap (4rem,
  line-height 0.8) and the event date numerals (3rem, line-height 0.9). Nothing else.
- Metadata: Courier Prime (`font-mono`), 0.6rem–1.15rem, uppercase, tracking
  0.1em–0.32em — eyebrows, captions, times, the closing note, form fields.
- Nav / labels / ticker: Jost 500–600, 0.6rem–0.72rem, uppercase, tracking 0.22em–0.34em.

## Absolute Prohibitions
- NO box-shadow on any element
- NO CSS gradients (linear-gradient, radial-gradient, etc.)
- NO border-radius on any UI element (buttons, cards, inputs, images)
- NO smooth CSS transitions (interactive elements get `transition: none` from globals.css)
- NO floating cards or elevated surfaces

## Interface Rules
### Buttons (Button.tsx — one component, used everywhere)
- Border: 1px solid #B08020
- Jost 600, uppercase, 0.65rem, tracking 0.24em, padding 0.6rem 1.5rem
- `filled`: bg #B08020 / text #1E120A, hover inverts to transparent / #B08020
- `outline`: transparent, `text-inherit` (so it works on parchment and on the dark
  header alike), hover fills #B08020 with #1E120A text
- Hover swaps instantly — no transition, no border-radius, no shadow

### Inputs / Forms (library checkout card aesthetic)
- `.card-input`: transparent, dotted 1px bottom border only, Courier Prime 0.95rem
- Label sits above the field: Jost 600, 0.62rem, uppercase, tracking 0.22em, #6B5045
- The form card itself: 1px solid #1E120A on #FFF8E7

### Images (FramedImage.tsx)
- 4px solid #1E120A frame, no rounding, no shadow
- `imageClassName` carries sizing (e.g. `h-[20rem] object-cover`)
- Optional white inner mat via `mat`
- Videos framed the same way get a plain `border-4 border-[#1E120A]` wrapper

### Section Dividers
- 1px solid #906558 between every section
- Short accent rules (5rem / 9rem / 12rem) sit under headings as punctuation
- Never use whitespace alone to separate sections

## Layout
- Left-aligned editorial, not centered. The footer is the only centered block.
- Asymmetric grids: About `0.92fr / 1.08fr`, Events `0.78fr / 1.22fr`; even splits
  (`1fr 1fr`) for Loud Hours and the Contact CTA.
- Sticky rails: the About map panel (`top: 0`, full height) and the Events left
  rail (`top: 7rem`).
- Section padding: 7rem–8rem vertical, 4.5rem horizontal on desktop; 1.5rem
  horizontal and ~6rem vertical on mobile.
- Content max-widths: 82rem (wide grids), 76rem (contact page), 64rem (hero,
  footer), 56rem (library), 46rem (about column), 36rem / 34rem / 32rem / 30rem
  (paragraph measures).
- Grid gaps: 2.5rem, 4rem, 5rem.
- Every grid collapses to one column on mobile; sticky panels become static.

## Motion
All scroll reveals come from `components/motion.ts` — never hand-roll them.
- `reveal`: opacity 0→1, y 34→0, 700ms, `cubic-bezier(0, 0, 0.2, 1)`
- `revealViewport`: `{ once: true, margin: "0px 0px -12% 0px" }`
- Sibling stagger via the `custom` prop, in milliseconds (80–200 typical)
- Hero is time-based, not scroll-based: image fade 2000ms ease-out on load,
  H1 rise 900ms at 700ms, rule wipe (`scaleX` from the left) 900ms at 1400ms
- Loud Hours ticker: `.ticker-track`, translateX 0→-50%, 34s linear infinite,
  decorative only, no pause on hover, disabled under `prefers-reduced-motion`
- Videos: `autoplay muted loop playsinline`, `playbackRate = 0.5`, always with a
  poster frame so the first paint is never black

## Hover States
- Every interactive element snaps — no fades, no scale transforms
- Buttons and the nav link invert to #B08020
- Event titles and PlayaEvents links go #B08020
- Footer links go white
