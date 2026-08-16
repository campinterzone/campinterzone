import type { Variants } from "framer-motion";

/**
 * Scroll-reveal timings from the design handoff — every `data-reveal` element in
 * the prototype fades and rises identically. Siblings stagger with per-element
 * delays of 80–200ms, passed through the `custom` prop.
 */
const EASE: [number, number, number, number] = [0, 0, 0.2, 1];

export const reveal: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: (delayMs: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: delayMs / 1000, ease: EASE },
  }),
};

/** IntersectionObserver equivalent of `rootMargin: 0px 0px -12% 0px`, fired once. */
export const revealViewport = { once: true, margin: "0px 0px -12% 0px" } as const;
