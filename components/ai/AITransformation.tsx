"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import AIConceptSelector from "@/components/ai/AIConceptSelector";
import DeliveryCommandCentre from "@/components/ai/DeliveryCommandCentre";
import DeliveryInsightDemo from "@/components/ai/DeliveryInsightDemo";
import AgentLoop from "@/components/ai/AgentLoop";
import IncidentSimulation from "@/components/ai/IncidentSimulation";
import AIPrinciples from "@/components/ai/AIPrinciples";
import AIExplorations from "@/components/ai/AIExplorations";
import { aiLabHero, type AIConceptId } from "@/lib/ai";
import {
  fadeUp,
  getTransition,
  getViewport,
  usePrefersReducedMotion,
} from "@/lib/motion";

export default function AITransformation() {
  const reducedMotion = usePrefersReducedMotion();
  const [selectedConcept, setSelectedConcept] =
    useState<AIConceptId>("delivery-command-centre");

  return (
    <section
      id="ai-transformation"
      className="section-padding border-y border-border bg-accent-light/20"
    >
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={getViewport(reducedMotion)}
          variants={fadeUp}
          transition={getTransition(reducedMotion)}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Exploration · Concept · Prototype
          </p>
          <SectionHeading
            title={aiLabHero.title}
            subtitle={aiLabHero.subheading}
          />
          <p className="-mt-6 mb-8 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
            {aiLabHero.supportingText}
          </p>
          <p className="mb-8 max-w-3xl text-sm italic leading-relaxed text-muted">
            {aiLabHero.positioning}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={getViewport(reducedMotion)}
          variants={fadeUp}
          transition={getTransition(reducedMotion, 0.5)}
        >
          <AIConceptSelector
            selected={selectedConcept}
            onSelect={setSelectedConcept}
          />
        </motion.div>

        <div
          role="tabpanel"
          id={`panel-${selectedConcept}`}
          aria-labelledby={`tab-${selectedConcept}`}
          className="mt-8"
        >
          {selectedConcept === "delivery-command-centre" ? (
            <motion.div
              key="delivery"
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(reducedMotion, 0.4)}
            >
              <div className="card-base p-5 sm:p-8">
                <DeliveryCommandCentre />
              </div>
              <DeliveryInsightDemo />
            </motion.div>
          ) : (
            <motion.div
              key="agent"
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(reducedMotion, 0.4)}
            >
              <div className="card-base p-5 sm:p-8">
                <AgentLoop />
              </div>
              <IncidentSimulation />
            </motion.div>
          )}
        </div>

        <motion.blockquote
          initial="hidden"
          whileInView="visible"
          viewport={getViewport(reducedMotion)}
          variants={fadeUp}
          transition={getTransition(reducedMotion, 0.5)}
          className="mt-12 rounded-xl border border-accent/20 bg-accent-light/50 px-5 py-5 sm:px-8 sm:py-6"
        >
          <p className="text-base font-semibold leading-relaxed text-foreground sm:text-lg">
            &ldquo;{aiLabHero.principle.line1}
            <br />
            {aiLabHero.principle.line2}&rdquo;
          </p>
          <p className="mt-3 text-sm text-muted">
            This principle connects to the Human Role throughout the agent loop —
            people retain authorization, accountability and judgment.
          </p>
        </motion.blockquote>

        <AIPrinciples />
        <AIExplorations />
      </div>
    </section>
  );
}
