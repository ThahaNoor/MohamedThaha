"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/lib/profile";
import {
  fadeUp,
  getTransition,
  getViewport,
  usePrefersReducedMotion,
} from "@/lib/motion";

export default function Contact() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="contact" className="section-padding bg-accent-light/40">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={getViewport(reducedMotion)}
          variants={fadeUp}
          transition={getTransition(reducedMotion)}
        >
          <SectionHeading
            title="Let's Connect"
            subtitle="Interested in technology delivery, engineering leadership, digital transformation or AI-enabled ways of working?"
            align="center"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={getViewport(reducedMotion)}
          variants={fadeUp}
          transition={getTransition(reducedMotion, 0.5)}
          className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-3"
        >
          <a
            href={`mailto:${profile.email}`}
            className="card-base flex flex-col items-center p-5 text-center transition-colors hover:border-accent sm:p-6"
          >
            <Mail className="mb-3 h-5 w-5 text-accent" aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-wide text-muted">
              Email
            </span>
            <span className="mt-2 break-all text-sm font-medium text-foreground">
              {profile.email}
            </span>
          </a>

          <a
            href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
            className="card-base flex flex-col items-center p-5 text-center transition-colors hover:border-accent sm:p-6"
          >
            <Phone className="mb-3 h-5 w-5 text-accent" aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-wide text-muted">
              Phone
            </span>
            <span className="mt-2 text-sm font-medium text-foreground">
              {profile.phone}
            </span>
          </a>

          <a
            href={profile.linkedinUrl}
            className="card-base flex flex-col items-center p-5 text-center transition-colors hover:border-accent sm:p-6"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="mb-3 h-5 w-5 text-accent" aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-wide text-muted">
              LinkedIn
            </span>
            <span className="mt-2 text-sm font-medium text-foreground">
              Connect on LinkedIn
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
