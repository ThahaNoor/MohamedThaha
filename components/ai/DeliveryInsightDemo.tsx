"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { deliveryInsightDemo } from "@/lib/ai";
import { getTransition, usePrefersReducedMotion } from "@/lib/motion";

export default function DeliveryInsightDemo() {
  const reducedMotion = usePrefersReducedMotion();
  const [showResult, setShowResult] = useState(false);
  const { title, disclaimer, sample, result } = deliveryInsightDemo;

  const healthColors = {
    Healthy: "text-green-700 bg-green-50 border-green-200",
    Watch: "text-amber-700 bg-amber-50 border-amber-200",
    "At Risk": "text-red-700 bg-red-50 border-red-200",
  };

  return (
    <article className="card-base mt-8 p-5 sm:p-6">
      <h4 className="text-base font-semibold text-foreground sm:text-lg">
        {title}
      </h4>
      <p className="mt-1 text-xs text-muted">{disclaimer}</p>

      <dl className="mt-6 grid gap-3 sm:grid-cols-2">
        {(
          [
            ["Sprint Completion", sample.sprintCompletion],
            ["UAT Defects", sample.uatDefects],
            ["Open Dependencies", sample.openDependencies],
            ["Release Date", sample.releaseDate],
            ["Blocked Items", sample.blockedItems],
          ] as const
        ).map(([label, value]) => (
          <div
            key={label}
            className="rounded-lg border border-border bg-background px-4 py-3"
          >
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
              {label}
            </dt>
            <dd className="mt-1 text-sm font-medium text-foreground">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setShowResult(true)}
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
        >
          Generate Delivery Insight
        </button>
        <button
          type="button"
          onClick={() => setShowResult(false)}
          className="rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Reset
        </button>
      </div>

      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={getTransition(reducedMotion, 0.5)}
            className="mt-6 rounded-lg border border-border bg-accent-light/30 p-5"
            aria-live="polite"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              Delivery Health
            </p>
            <p
              className={`mt-2 inline-flex rounded-lg border px-3 py-1.5 text-sm font-semibold ${healthColors[result.health]}`}
            >
              {result.health}
            </p>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                Key Signals
              </p>
              <ul className="mt-2 space-y-1.5">
                {result.keySignals.map((signal) => (
                  <li
                    key={signal}
                    className="flex gap-2 text-sm text-foreground"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {signal}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 border-t border-border pt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                Recommended Action
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                &ldquo;{result.recommendedAction}&rdquo;
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
