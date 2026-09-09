"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { aiTransformation } from "@/lib/profile";
import {
  fadeUp,
  getTransition,
  getViewport,
  usePrefersReducedMotion,
} from "@/lib/motion";

function FlowArrow() {
  return (
    <div className="flex justify-center py-2" aria-hidden="true">
      <ArrowDown className="h-4 w-4 text-accent-muted" strokeWidth={1.5} />
    </div>
  );
}

function DeliveryCommandCentre({
  concept,
}: {
  concept: (typeof aiTransformation.concepts)[0];
}) {
  if (!("inputs" in concept)) return null;

  return (
    <article className="card-base p-6 sm:p-8">
      <h3 className="text-sm font-semibold tracking-wide text-foreground sm:text-base">
        {concept.title}
      </h3>

      <div className="mt-6">
        <div className="flex flex-wrap justify-center gap-2">
          {concept.inputs.map((item) => (
            <span
              key={item}
              className="rounded-lg border border-border bg-background px-3 py-2 text-xs font-medium text-muted sm:text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <FlowArrow />

        <div className="rounded-xl border border-accent/20 bg-accent-light px-4 py-3 text-center">
          <p className="text-sm font-semibold tracking-wide text-accent">
            AI INTELLIGENCE
          </p>
        </div>

        <FlowArrow />

        <div className="flex flex-wrap justify-center gap-2">
          {concept.outputs.map((item) => (
            <span
              key={item}
              className="rounded-lg border border-border bg-surface px-3 py-2 text-xs font-medium text-foreground sm:text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
        {concept.description}
      </p>
    </article>
  );
}

function SREOperatingModel({
  concept,
}: {
  concept: (typeof aiTransformation.concepts)[1];
}) {
  if (!("flow" in concept)) return null;

  return (
    <article className="card-base p-6 sm:p-8">
      <h3 className="text-sm font-semibold tracking-wide text-foreground sm:text-base">
        {concept.title}
      </h3>

      <div className="mt-6 flex flex-col items-center">
        {concept.flow.map((step, index) => (
          <div key={step} className="flex w-full max-w-xs flex-col items-center">
            <div className="w-full rounded-lg border border-border bg-accent-light/50 px-4 py-2.5 text-center">
              <span className="text-xs font-semibold tracking-wide text-foreground sm:text-sm">
                {step}
              </span>
            </div>
            {index < concept.flow.length - 1 && <FlowArrow />}
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
        {concept.description}
      </p>
    </article>
  );
}

export default function AITransformation() {
  const reducedMotion = usePrefersReducedMotion();
  const [deliveryConcept, sreConcept] = aiTransformation.concepts;

  return (
    <section id="ai-transformation" className="section-padding">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={getViewport(reducedMotion)}
          variants={fadeUp}
          transition={getTransition(reducedMotion)}
        >
          <SectionHeading
            title="AI & Transformation"
            subtitle={aiTransformation.intro}
          />
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={getViewport(reducedMotion)}
            variants={fadeUp}
            transition={getTransition(reducedMotion, 0.5)}
          >
            <DeliveryCommandCentre concept={deliveryConcept} />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={getViewport(reducedMotion)}
            variants={fadeUp}
            transition={{
              ...getTransition(reducedMotion, 0.5),
              delay: reducedMotion ? 0 : 0.1,
            }}
          >
            <SREOperatingModel concept={sreConcept} />
          </motion.div>
        </div>

        <motion.blockquote
          initial="hidden"
          whileInView="visible"
          viewport={getViewport(reducedMotion)}
          variants={fadeUp}
          transition={{
            ...getTransition(reducedMotion, 0.5),
            delay: reducedMotion ? 0 : 0.15,
          }}
          className="mt-8 border-l-4 border-accent bg-accent-light/50 px-5 py-4 sm:px-6"
        >
          <p className="text-base font-medium leading-relaxed text-foreground sm:text-lg">
            &ldquo;{aiTransformation.principle}&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
