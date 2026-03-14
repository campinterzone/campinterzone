# Interzone Design System — Full Rules

## Color Tokens (defined in app/globals.css @theme)
| Token | Hex | Use |
|---|---|---|
| --color-canvas | #F5EDD8 | Default page background |
| --color-canvas-2 | #EAD9B8 | Alternate section background |
| --color-accent | #B85C38 | Borders, decorative lines, section dividers |
| --color-cta | #C4891A | ALL buttons, ALL links — no exceptions |
| --color-text | #1E120A | All body copy |
| --color-text-muted | #6B4C35 | Captions, labels, metadata |

Never use pure white (#fff) or pure black (#000). Never add colors outside this palette without explicit instruction.

## Typography
- H1: Jost, all-caps, tracking-[0.2em], clamp(3rem, 6vw, 5rem)
- H2: Jost, all-caps, tracking-[0.15em], clamp(1.5rem, 3vw, 2.5rem)
- H3: Jost, all-caps, tracking-[0.12em], 1.25rem
- Body: Courier Prime, normal case, 1rem, line-height 1.75
- Labels/Nav: Jost, all-caps, tracking-[0.15em], 0.75rem
- Three font sizes only — never deviate from this hierarchy

## Absolute Prohibitions
- NO box-shadow on any element
- NO CSS gradients (linear-gradient, radial-gradient, etc.)
- NO border-radius on any UI element (buttons, cards, inputs, images)
- NO smooth CSS transitions (transition-none must be applied to interactive elements)
- NO asymmetric layouts without explicit instruction
- NO floating cards or elevated surfaces

## Interface Rules
### Buttons (Button.tsx — one component, used everywhere)
- Solid border: 2px solid currentColor
- Flat background fill
- Hover: instantly swap background and text color (no transition)
- No border-radius, no shadow
- Padding: py-3 px-8, Jost all-caps tracking-widest

### Inputs / Forms (library checkout card aesthetic)
- Border: none, except dotted bottom border (border-b border-dotted)
- Background: transparent
- No box, no rounding, no shadow
- Label sits above like a card field header

### Images (FramedImage.tsx)
- 4px solid border in --color-text (#1E120A)
- No rounding, no shadow
- Optional white inner mat (4-8px padding inside border, white/canvas background)
- Never bleed to edge of container

### Section Dividers
- 1px solid --color-accent (#B85C38)
- Full-width horizontal rule between sections
- Never use whitespace alone to separate sections

## Layout
- All content: center-aligned (text-center, mx-auto)
- Two-column splits: strict 50/50 (grid-cols-2)
- Grid gutters: identical on all sides (gap-8 or gap-12)
- Max content width: max-w-5xl (homepage sections), max-w-4xl (gallery), max-w-2xl (forms)

## Hover States
- All interactive elements: `transition-none` class
- Button hover: instant bg/text color inversion
- Nav links: instant underline appear (no fade)
- No opacity transitions, no scale transforms, no color fades
