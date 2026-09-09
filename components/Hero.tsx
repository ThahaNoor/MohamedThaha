"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { heroPathway, profile } from "@/lib/profile";
import {
  fadeUp,
  getTransition,
  getViewport,
  scrollToSection,
  usePrefersReducedMotion,
} from "@/lib/motion";

function PathwayVisual() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div
      className="card-base w-full max-w-sm p-6 sm:p-8"
      aria-label="Career progression pathway"
    >
      <div className="space-y-0">
        {heroPathway.map((step, index) => (
          <div key={step} className="flex flex-col items-center">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={getViewport(reducedMotion)}
              transition={{
                ...getTransition(reducedMotion, 0.4),
                delay: reducedMotion ? 0 : index * 0.08,
              }}
              className="w-full rounded-lg border border-border bg-accent-light/50 px-4 py-2.5 text-center"
            >
              <span className="text-xs font-medium tracking-wide text-foreground sm:text-sm">
                {step}
              </span>
            </motion.div>
            {index < heroPathway.length - 1 && (
              <div className="flex h-6 items-center justify-center" aria-hidden="true">
                <ArrowDown className="h-4 w-4 text-accent-muted" strokeWidth={1.5} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="hero"
      className="section-padding border-b border-border bg-surface"
    >
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={getTransition(reducedMotion, 0.6)}
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent sm:text-sm">
              Professional Profile
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {profile.name}
            </h1>

            <div className="mt-5 space-y-1">
              {profile.headline.map((line) => (
                <p
                  key={line}
                  className="text-sm font-medium tracking-wide text-muted sm:text-base"
                >
                  {line}
                </p>
              ))}
            </div>

            <p className="mt-8 max-w-xl text-lg font-medium leading-relaxed text-foreground sm:text-xl">
              {profile.primaryStatement}
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              {profile.supportingParagraph}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <button
                type="button"
                onClick={() => scrollToSection("#journey")}
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
              >
                Explore My Journey
              </button>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Download size={16} aria-hidden="true" />
                Download Resume
              </a>
            </div>

            <button
              type="button"
              onClick={() => scrollToSection("#ai-transformation")}
              className="mt-4 text-sm font-medium text-accent underline-offset-4 transition-colors hover:underline"
            >
              AI & Transformation
            </button>
          </motion.div>

          <div className="flex justify-center lg:justify-end">
            <PathwayVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
