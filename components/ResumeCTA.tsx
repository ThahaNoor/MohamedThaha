"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { profile } from "@/lib/profile";
import {
  fadeUp,
  getTransition,
  getViewport,
  scrollToSection,
  usePrefersReducedMotion,
} from "@/lib/motion";

export default function ResumeCTA() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="resume" className="section-padding">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={getViewport(reducedMotion)}
          variants={fadeUp}
          transition={getTransition(reducedMotion)}
          className="card-base mx-auto max-w-3xl px-6 py-10 text-center sm:px-10 sm:py-12"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Want the complete career story?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Download the executive resume for a detailed view of experience,
            leadership achievements, technology expertise and certifications.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
            >
              <Download size={16} aria-hidden="true" />
              DOWNLOAD RESUME
            </a>
            <button
              type="button"
              onClick={() => scrollToSection(profile.profileUrl)}
              className="inline-flex items-center justify-center rounded-lg border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              View Profile Online
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
