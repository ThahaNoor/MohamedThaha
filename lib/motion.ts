"use client";

import { useReducedMotion } from "framer-motion";

export function usePrefersReducedMotion(): boolean {
  return useReducedMotion() ?? false;
}

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function getTransition(reducedMotion: boolean, duration = 0.5) {
  return reducedMotion
    ? { duration: 0 }
    : { duration, ease: [0.22, 1, 0.36, 1] as const };
}

export function getViewport(reducedMotion: boolean) {
  return reducedMotion
    ? { once: true, amount: 0.1 as const }
    : { once: true, amount: 0.2 as const };
}

export function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
