"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { professionalExperience } from "@/lib/experience";
import {
  fadeUp,
  getTransition,
  getViewport,
  usePrefersReducedMotion,
} from "@/lib/motion";

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(
    professionalExperience[0]?.id ?? null,
  );
  const reducedMotion = usePrefersReducedMotion();

  const toggleEntry = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <section id="experience" className="section-padding bg-accent-light/30">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={getViewport(reducedMotion)}
          variants={fadeUp}
          transition={getTransition(reducedMotion)}
        >
          <SectionHeading title="Selected Experience" />
        </motion.div>

        <div className="space-y-4">
          {professionalExperience.map((entry, index) => {
            const isExpanded = expandedId === entry.id;
            const panelId = `experience-panel-${entry.id}`;

            return (
              <motion.article
                key={entry.id}
                initial="hidden"
                whileInView="visible"
                viewport={getViewport(reducedMotion)}
                variants={fadeUp}
                transition={{
                  ...getTransition(reducedMotion, 0.45),
                  delay: reducedMotion ? 0 : index * 0.04,
                }}
                className="card-base overflow-hidden"
              >
                <button
                  type="button"
                  id={`experience-trigger-${entry.id}`}
                  aria-expanded={isExpanded}
                  aria-controls={panelId}
                  onClick={() => toggleEntry(entry.id)}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left transition-colors hover:bg-accent-light/40 sm:p-6"
                >
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-foreground sm:text-lg">
                      {entry.organization}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-muted sm:text-base">
                      {entry.role}
                    </p>
                    <p className="mt-1 text-sm text-muted">{entry.period}</p>
                    {entry.location && (
                      <p className="mt-1 text-sm text-muted">{entry.location}</p>
                    )}
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
                      aria-labelledby={`experience-trigger-${entry.id}`}
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
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
