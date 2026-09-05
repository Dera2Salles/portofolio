import type { Variants } from "framer-motion";

/** Shared easing for every transition in the site: a calm, decelerating curve. */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Parent node: reveals its descendants one after the other. */
export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.08 },
  },
};

/** Tighter cadence for dense grids and lists. */
export const staggerTight: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045 },
  },
};

/** Leaf node: a short rise into place. Framer neutralises the offset on its own
    when the visitor asks for reduced motion (see MotionConfig in App). */
export const rise: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};
