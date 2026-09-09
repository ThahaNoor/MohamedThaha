"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { careerTimeline } from "@/lib/experience";
import {
  fadeUp,
  getTransition,
  getViewport,
  usePrefersReducedMotion,
} from "@/lib/motion";

export default function CareerJourney() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  const toggleEntry = (index: number) => {
    setExpandedIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="journey" className="section-padding">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={getViewport(reducedMotion)}
          variants={fadeUp}
          transition={getTransition(reducedMotion)}
        >
          <SectionHeading
            title="From Engineering to Technology Leadership"
            subtitle="A career built across engineering, operations, delivery and transformation."
          />
        </motion.div>

        <div className="relative">
          <div
            className="absolute left-[1.125rem] top-0 hidden h-full w-px bg-border sm:block"
            aria-hidden="true"
          />

          <ol className="space-y-4">
            {careerTimeline.map((entry, index) => {
              const isExpanded = expandedIndex === index;
              const panelId = `timeline-panel-${index}`;

              return (
                <motion.li
                  key={`${entry.year}-${entry.organization}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={getViewport(reducedMotion)}
                  variants={fadeUp}
                  transition={{
                    ...getTransition(reducedMotion, 0.45),
                    delay: reducedMotion ? 0 : index * 0.05,
                  }}
                  className="relative sm:pl-12"
                >
                  <div
                    className="absolute left-3 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-surface sm:block"
                    aria-hidden="true"
                  />

                  <div className="card-base overflow-hidden">
                    <button
                      type="button"
                      id={`timeline-trigger-${index}`}
                      aria-expanded={isExpanded}
                      aria-controls={panelId}
                      onClick={() => toggleEntry(index)}
                      className="flex w-full items-start justify-between gap-4 p-5 text-left transition-colors hover:bg-accent-light/30 sm:p-6"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <span className="text-sm font-semibold text-accent">
                            {entry.year}
                          </span>
                          <span className="text-base font-semibold text-foreground sm:text-lg">
                            {entry.organization}
                          </span>
                        </div>
                        <p className="mt-1 text-sm font-medium text-muted sm:text-base">
                          {entry.role}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {entry.description}
                        </p>
                      </div>
                      <ChevronDown
                        className={`mt-1 h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={`timeline-trigger-${index}`}
                          initial={reducedMotion ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={getTransition(reducedMotion, 0.3)}
                          className="overflow-hidden"
                        >
                          <ul className="space-y-2 border-t border-border px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                            {entry.bullets.map((bullet) => (
                              <li
                                key={bullet}
                                className="flex gap-3 text-sm leading-relaxed text-muted"
                              >
                                <span
                                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                                  aria-hidden="true"
                                />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
