"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { agentStages, type AgentStage } from "@/lib/ai";
import { getTransition, usePrefersReducedMotion } from "@/lib/motion";

function StageDetail({ stage }: { stage: AgentStage }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="card-base mt-6 p-5 sm:p-6"
      aria-live="polite"
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex rounded-full border border-border bg-background px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted">
          Concept
        </span>
        <span className="inline-flex rounded-full border border-border bg-background px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted">
          Exploration
        </span>
      </div>

      <h4 className="mt-4 text-base font-semibold text-foreground sm:text-lg">
        {stage.label}
      </h4>

      <dl className="mt-4 space-y-4">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
            Purpose
          </dt>
          <dd className="mt-1 text-sm leading-relaxed text-foreground">
            {stage.purpose}
          </dd>
        </div>

        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
            Example Inputs
          </dt>
          <dd className="mt-2 flex flex-wrap gap-2">
            {stage.inputs.map((input) => (
              <span
                key={input}
                className="rounded-md border border-border bg-background px-2.5 py-1 text-xs text-muted"
              >
                {input}
              </span>
            ))}
          </dd>
        </div>

        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
            Potential AI Assistance
          </dt>
          <dd className="mt-1 text-sm leading-relaxed text-foreground">
            {stage.potentialAiAssistance}
          </dd>
        </div>

        <div className="rounded-lg border border-accent/20 bg-accent-light/50 p-4">
          <dt className="text-xs font-semibold uppercase tracking-wide text-accent">
            Human Role
          </dt>
          <dd className="mt-1 text-sm leading-relaxed text-foreground">
            {stage.humanRole}
          </dd>
        </div>
      </dl>
    </motion.article>
  );
}

function CircularLoop({
  selectedId,
  onSelect,
}: {
  selectedId: string | null;
  onSelect: (stage: AgentStage) => void;
}) {
  const radius = 140;
  const centerX = 180;
  const centerY = 180;

  return (
    <div className="relative mx-auto hidden h-[360px] w-[360px] md:block">
      <svg
        viewBox="0 0 360 360"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-border"
          strokeDasharray="4 6"
        />
      </svg>

      {agentStages.map((stage, index) => {
        const angle = (index / agentStages.length) * 2 * Math.PI - Math.PI / 2;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        const isSelected = selectedId === stage.id;

        return (
          <button
            key={stage.id}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onSelect(stage)}
            style={{
              left: `${x}px`,
              top: `${y}px`,
              transform: "translate(-50%, -50%)",
            }}
            className={`absolute rounded-lg border px-2.5 py-2 text-[10px] font-semibold tracking-wide transition-colors sm:text-xs ${
              isSelected
                ? "border-accent bg-accent text-white shadow-subtle"
                : "border-border bg-surface text-foreground hover:border-accent/40 hover:bg-accent-light/50"
            }`}
          >
            {stage.label}
          </button>
        );
      })}

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-accent">
          Agent
        </p>
        <p className="text-[10px] font-semibold uppercase tracking-wider text-accent">
          Loop
        </p>
        <p className="mt-1 text-lg text-accent-muted" aria-hidden="true">
          ↺
        </p>
      </div>
    </div>
  );
}

function VerticalLoop({
  selectedId,
  onSelect,
}: {
  selectedId: string | null;
  onSelect: (stage: AgentStage) => void;
}) {
  return (
    <div className="md:hidden">
      <ol className="space-y-0">
        {agentStages.map((stage, index) => {
          const isSelected = selectedId === stage.id;

          return (
            <li key={stage.id}>
              <button
                type="button"
                aria-pressed={isSelected}
                onClick={() => onSelect(stage)}
                className={`w-full rounded-lg border px-4 py-3 text-left text-sm font-semibold tracking-wide transition-colors ${
                  isSelected
                    ? "border-accent bg-accent-light text-accent"
                    : "border-border bg-surface text-foreground hover:border-accent/40"
                }`}
              >
                <span className="text-xs font-normal text-muted">
                  Step {index + 1}
                </span>
                <span className="mt-0.5 block">{stage.label}</span>
              </button>
              {index < agentStages.length - 1 && (
                <div className="flex justify-center py-1" aria-hidden="true">
                  <ArrowDown className="h-4 w-4 text-accent-muted" strokeWidth={1.5} />
                </div>
              )}
            </li>
          );
        })}
      </ol>
      <p className="mt-3 text-center text-xs text-muted" aria-hidden="true">
        ↺ Loop continues
      </p>
    </div>
  );
}

export default function AgentLoop() {
  const reducedMotion = usePrefersReducedMotion();
  const [selectedStage, setSelectedStage] = useState<AgentStage | null>(
    agentStages[0] ?? null,
  );

  const handleSelect = (stage: AgentStage) => {
    setSelectedStage((current) =>
      current?.id === stage.id ? stage : stage,
    );
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex rounded-full border border-border bg-background px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted">
          Exploration
        </span>
        <span className="inline-flex rounded-full border border-border bg-background px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted">
          Concept
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-foreground sm:text-xl">
        AI / SRE Agent Loop
      </h3>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
        Exploring how agentic AI could augment traditional production support.
      </p>

      <p className="mt-4 text-sm text-muted md:hidden">
        Tap each stage to explore purpose, inputs, AI assistance and human role.
      </p>
      <p className="mt-4 hidden text-sm text-muted md:block">
        Select a stage to explore purpose, inputs, AI assistance and human role.
      </p>

      <motion.div
        initial={reducedMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={getTransition(reducedMotion)}
        className="mt-8"
      >
        <CircularLoop
          selectedId={selectedStage?.id ?? null}
          onSelect={handleSelect}
        />
        <VerticalLoop
          selectedId={selectedStage?.id ?? null}
          onSelect={handleSelect}
        />
      </motion.div>

      <AnimatePresence mode="wait">
        {selectedStage && (
          <StageDetail key={selectedStage.id} stage={selectedStage} />
        )}
      </AnimatePresence>
    </div>
  );
}
