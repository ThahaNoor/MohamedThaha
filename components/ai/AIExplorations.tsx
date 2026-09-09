"use client";

import { motion } from "framer-motion";
import { aiExplorations } from "@/lib/ai";
import SectionHeading from "@/components/SectionHeading";
import {
  fadeUp,
  getTransition,
  getViewport,
  usePrefersReducedMotion,
} from "@/lib/motion";

export default function AIExplorations() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="mt-16">
      <SectionHeading title="Current Exploration" />

      <div className="grid gap-4 sm:grid-cols-2">
        {aiExplorations.map((exploration, index) => (
          <motion.article
            key={exploration.title}
            initial="hidden"
            whileInView="visible"
            viewport={getViewport(reducedMotion)}
            variants={fadeUp}
            transition={{
              ...getTransition(reducedMotion, 0.45),
              delay: reducedMotion ? 0 : index * 0.05,
            }}
            className="card-base p-5 sm:p-6"
          >
            <div className="flex flex-wrap gap-2">
              {exploration.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-background px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="mt-3 text-sm font-semibold text-foreground sm:text-base">
              {exploration.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {exploration.description}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
