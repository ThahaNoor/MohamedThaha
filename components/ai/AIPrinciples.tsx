"use client";

import { motion } from "framer-motion";
import { aiPrinciples } from "@/lib/ai";
import SectionHeading from "@/components/SectionHeading";
import {
  fadeUp,
  getTransition,
  getViewport,
  usePrefersReducedMotion,
} from "@/lib/motion";

export default function AIPrinciples() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="mt-16">
      <SectionHeading title="How I Think About AI" />

      <div className="grid gap-4 sm:grid-cols-2">
        {aiPrinciples.map((principle, index) => (
          <motion.article
            key={principle.number}
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
            <p className="text-xs font-semibold text-accent">
              {principle.number}.
            </p>
            <h3 className="mt-1 text-sm font-semibold tracking-wide text-foreground">
              {principle.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {principle.description}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
