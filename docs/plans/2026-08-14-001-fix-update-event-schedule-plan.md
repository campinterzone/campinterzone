---
artifact_contract: ce-unified-plan/v1
artifact_readiness: implementation-ready
execution: code
product_contract_source: ce-plan-bootstrap
title: "fix: Update Events & Workshops schedule to 2026 PlayaEvents data"
created: 2026-08-14
plan_depth: lightweight
---

# fix: Update Events & Workshops schedule to 2026 PlayaEvents data

## Summary

`components/sections/Workshops.tsx` renders the homepage "Events & Workshops" section from a hardcoded `events` array (6 cards, `Aug 26–30` dates). The camp's actual 2026 Burning Man schedule, sourced from Burning Man PlayaEvents, covers `Aug 31–Sep 5` and only has 4 distinct registered events. This plan replaces the `events` array with the 4 real events and adjusts the card grid from a 3-column (6-card) layout to a 2x2 grid to match.

---

## Problem Frame

The site currently displays 6 events with dates (`Aug 26`–`Aug 30`) that don't match the camp's actual registered 2026 schedule (`Aug 31`–`Sep 5`, per https://playaevents.burningman.org/playa_event/search/2026/?q=Interzone). Two of the six cards ("Connecting with the Cosmos", "Yearning for Yoga") are not in the sourced schedule at all. "Tai Chi Workshop" is currently shown recurring "Mon & Wed" but is only registered for Wednesday. "Books 'N Brews Welcome Party" has the wrong date and end time. The section needs to reflect the real schedule so visitors see accurate event info.

## Requirements

- **R1**: Replace the `events` array in `components/sections/Workshops.tsx` with the 4 events from the sourced 2026 schedule: Library Loud Hours (recurring daily Mon–Sat, 3:00–6:00 PM), Books 'n Brews Welcome Party (Mon Aug 31, 8:00–10:30 PM), Tai Chi Workshop (Wed Sep 2, 10:00–11:30 AM), Death Cafe (Fri Sep 4, 1:00–2:00 PM).
- **R2**: Drop the two events not present in the sourced schedule ("Connecting with the Cosmos", "Yearning for Yoga") — confirmed with user.
- **R3**: Adapt each event's description copy to content-voice.md tone (literary, second person implied via camp's voice, no marketing speak) while keeping the underlying facts (what the event is) accurate to the PlayaEvents source. Do not paste source copy verbatim where it drifts from the established card copy style already in the file.
- **R4**: Update the card grid from `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` to a symmetric 2x2 grid (`grid-cols-1 sm:grid-cols-2`, no `lg:grid-cols-3` override) to fit 4 cards without an orphaned 3+1 row — confirmed with user.
- **R5**: Preserve the existing pinned-note card visual pattern (bg/pin/rotate per card, pushpin, dashed divider, Framer Motion stagger/hover) exactly as implemented — this is a data and grid-density change only, not a redesign.

## Key Technical Decisions

- **KTD1: Data-only + one grid class change, no component restructuring.** The existing `events.map(...)` render logic, card markup, and Framer Motion variants are untouched. Rationale: the visual system already handles arbitrary-length event lists correctly; the only thing wrong is the data and the column count for the new count. Alternative (rebuilding the section from scratch) was rejected — no design or behavior defect exists, only stale content.
- **KTD2: Drop rather than keep the 2 non-sourced yoga events.** Rationale: the user confirmed the site should reflect the PlayaEvents-sourced schedule as ground truth; keeping unsourced events risks displaying incorrect info to visitors planning their Burning Man week.
- **KTD3: Reuse existing bg/pin/rotate values from the corresponding retained or thematically-closest old cards** (Library Loud Hours, Books 'n Brews, Tai Chi keep their existing color/pin/rotate; the new Death Cafe card reuses the outgoing "Attitudes on Death Symposium" card's bg `#EAE8F0` / pin `#1E120A` / rotate `1deg`, since it replaces that card in the same thematic slot). Rationale: preserves the established scrapbook color rhythm without inventing new tokens outside the design system.

---

## Implementation Units

### U1. Replace events data and update grid layout

**Goal**: `components/sections/Workshops.tsx` renders the 4 sourced 2026 events in a 2x2 grid with accurate dates, times, and voice-adapted copy.

**Requirements**: R1, R2, R3, R4, R5

**Dependencies**: none

**Files**:
- `components/sections/Workshops.tsx` — replace `events` array (lines 17–78) and grid class (line 128)

**Approach**:
Replace the `events` array with 4 entries:

1. `title: "Library\nLoud Hours"`, `time: "Daily Mon – Sat"`, `slot: "3:00 – 6:00 PM"` — description unchanged from current (already accurate and on-voice): "Music, cold draft beer, and an open door. The library goes loud every afternoon. Walk in. Stay as long as you like." `bg: "#FFF8E7"`, `pin: "#B08020"`, `rotate: "2deg"`.
2. `title: "Books 'N Brews\nWelcome Party"`, `time: "Mon Aug 31"`, `slot: "8:00 – 10:30 PM"` — description adapted from source ("Celebrate the start of another burn with craft beer and peruse our library") blended with existing on-voice phrasing about the library. `bg: "#F0EBD8"`, `pin: "#4A7B6F"`, `rotate: "-2deg"`.
3. `title: "Tai Chi\nWorkshop"`, `time: "Wed Sep 2"` (not "Mon & Wed" — source has it Wednesday only), `slot: "10:00 – 11:30 AM"` — description adapted from source ("An intro to moving meditation, basic Tai Chi movement and interactive practice") merged with the existing card's poetic register. `bg: "#EFF3E8"`, `pin: "#1E120A"`, `rotate: "1.5deg"`.
4. `title: "Death\nCafe"`, `time: "Fri Sep 4"`, `slot: "1:00 – 2:00 PM"` — description adapted from source ("Join an open discussion about death, dying and end of life issues") in the same register as the outgoing Death Symposium card. `bg: "#EAE8F0"`, `pin: "#1E120A"`, `rotate: "1deg"`.

Change the grid container class from `"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"` to `"grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"`.

No other lines in the file change — the `.map()` render body, motion variants, pushpin/paper markup, and section wrapper stay exactly as they are.

**Patterns to follow**: The existing 6-entry `events` array (current file, lines 17–78) is the pattern for object shape (`title`, `description`, `time`, `slot`, `bg`, `pin`, `rotate`) and copy tone — match its sentence rhythm (short, declarative, present tense) per `.claude/rules/content-voice.md`.

**Test scenarios**:
- Test expectation: none — this is static marketing copy/data with no interactive or conditional logic; there is no test suite covering `Workshops.tsx` content and none is warranted for a data literal change.

**Verification**: Run the dev server and view the homepage's Events & Workshops section. Confirm: 4 cards render in a 2-column grid on desktop (2x2) and stack to 1 column on mobile; each card shows the correct title, date/recurrence, time, and description; hover/rotate/pushpin interactions behave identically to before (unchanged markup); no console errors; `npm run build` (or `next build`) succeeds with no type errors.

---

## Sources & Research

- User-provided 2026 Interzone event schedule, sourced from Burning Man PlayaEvents search results: https://playaevents.burningman.org/playa_event/search/2026/?q=Interzone
- Existing implementation: `components/sections/Workshops.tsx` (read in full before planning)
- Design system: `.claude/rules/design-system.md` (grid symmetry rule — "NO asymmetric layouts without explicit instruction" — is what drove the 2x2 grid decision over a 3+1 layout)
- Content voice: `.claude/rules/content-voice.md`
