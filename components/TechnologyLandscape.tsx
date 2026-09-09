"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { technologyLandscape } from "@/lib/profile";
import {
  fadeUp,
  getTransition,
  getViewport,
  usePrefersReducedMotion,
} from "@/lib/motion";

export default function TechnologyLandscape() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="technology" className="section-padding bg-accent-light/30">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={getViewport(reducedMotion)}
          variants={fadeUp}
          transition={getTransition(reducedMotion)}
        >
          <SectionHeading title="Technology Landscape" />
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologyLandscape.map((group, index) => (
            <motion.article
              key={group.group}
              initial="hidden"
              whileInView="visible"
              viewport={getViewport(reducedMotion)}
              variants={fadeUp}
              transition={{
                ...getTransition(reducedMotion, 0.45),
                delay: reducedMotion ? 0 : index * 0.04,
              }}
              className="card-base p-5 sm:p-6"
            >
              <h3 className="text-sm font-semibold tracking-wide text-foreground">
                {group.group}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-background px-2.5 py-1.5 text-xs text-muted sm:text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
