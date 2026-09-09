"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  deliveryInputs,
  deliveryOutputs,
  type DeliveryInput,
} from "@/lib/ai";
import { getTransition, usePrefersReducedMotion } from "@/lib/motion";

function ConceptBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-border bg-background px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted">
      {children}
    </span>
  );
}

function InsightCard({ input }: { input: DeliveryInput }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="card-base mt-6 p-5 sm:p-6"
      aria-live="polite"
    >
      <div className="flex flex-wrap items-center gap-2">
        <ConceptBadge>Concept</ConceptBadge>
        <ConceptBadge>Potential AI capability</ConceptBadge>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            Input
          </p>
          <p className="mt-1 text-sm font-medium text-foreground">
            {input.label}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            AI Could Identify
          </p>
          <ul className="mt-2 space-y-1.5">
            {input.insight.aiCouldIdentify.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-sm text-muted"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 border-t border-border pt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">
          Potential Decision Support
        </p>
        <p className="mt-2 text-sm leading-relaxed text-foreground">
          &ldquo;{input.insight.potentialDecisionSupport}&rdquo;
        </p>
      </div>
    </motion.article>
  );
}

export default function DeliveryCommandCentre() {
  const reducedMotion = usePrefersReducedMotion();
  const [selectedInputId, setSelectedInputId] = useState<string | null>(null);
  const [signalActive, setSignalActive] = useState(false);
  const [highlightedOutputs, setHighlightedOutputs] = useState<string[]>([]);

  const selectedInput = selectedInputId
    ? deliveryInputs.find((input) => input.id === selectedInputId)
    : null;

  const handleInputSelect = useCallback(
    (input: DeliveryInput) => {
      if (selectedInputId === input.id) {
        setSelectedInputId(null);
        setSignalActive(false);
        setHighlightedOutputs([]);
        return;
      }

      setSelectedInputId(input.id);
      setSignalActive(false);
      setHighlightedOutputs([]);

      if (reducedMotion) {
        setHighlightedOutputs(input.outputIds);
        return;
      }

      setSignalActive(true);
      window.setTimeout(() => {
        setSignalActive(false);
        setHighlightedOutputs(input.outputIds);
      }, 1800);
    },
    [reducedMotion, selectedInputId],
  );

  const leftInputs = deliveryInputs.slice(0, 4);
  const rightInputs = deliveryInputs.slice(4);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <ConceptBadge>Exploration</ConceptBadge>
        <ConceptBadge>Concept</ConceptBadge>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-foreground sm:text-xl">
        AI-Enabled Delivery Command Centre
      </h3>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
        Exploring a shift from manually collected project status toward
        data-driven and AI-assisted delivery decision support.
      </p>

      {/* Desktop spatial diagram */}
      <div className="mt-8 hidden lg:block">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6">
          <div className="space-y-3">
            {leftInputs.map((input) => (
              <InputButton
                key={input.id}
                input={input}
                isSelected={selectedInputId === input.id}
                signalActive={signalActive && selectedInputId === input.id}
                onSelect={handleInputSelect}
                align="right"
              />
            ))}
          </div>

          <div className="relative flex flex-col items-center">
            <motion.div
              animate={
                signalActive
                  ? { scale: [1, 1.03, 1], borderColor: "rgba(37, 99, 235, 0.5)" }
                  : { scale: 1 }
              }
              transition={getTransition(reducedMotion, 0.6)}
              className="relative z-10 w-44 rounded-2xl border-2 border-accent/30 bg-accent-light px-4 py-6 text-center shadow-subtle"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                AI Intelligence
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">
                Layer
              </p>
            </motion.div>

            {signalActive && selectedInput && (
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={getTransition(reducedMotion, 1.2)}
                className="absolute inset-0 -z-0 rounded-full bg-accent/5"
                aria-hidden="true"
              />
            )}
          </div>

          <div className="space-y-3">
            {rightInputs.map((input) => (
              <InputButton
                key={input.id}
                input={input}
                isSelected={selectedInputId === input.id}
                signalActive={signalActive && selectedInputId === input.id}
                onSelect={handleInputSelect}
                align="left"
              />
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center" aria-hidden="true">
          <div className="h-8 w-px bg-border" />
        </div>

        <OutputGrid highlightedOutputs={highlightedOutputs} />
      </div>

      {/* Mobile step flow */}
      <div className="mt-8 lg:hidden">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">
          Step 1 — Select a data source
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {deliveryInputs.map((input) => (
            <InputButton
              key={input.id}
              input={input}
              isSelected={selectedInputId === input.id}
              signalActive={signalActive && selectedInputId === input.id}
              onSelect={handleInputSelect}
              compact
            />
          ))}
        </div>

        {selectedInput && (
          <div className="mt-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">
              Step 2 — Source → AI → Insight
            </p>
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-muted">
              <span className="rounded-lg border border-accent bg-accent-light px-3 py-2 text-accent">
                {selectedInput.label}
              </span>
              <span aria-hidden="true">→</span>
              <span className="rounded-lg border border-accent/30 bg-accent-light px-3 py-2 text-accent">
                AI Layer
              </span>
              <span aria-hidden="true">→</span>
              <span className="rounded-lg border border-border bg-surface px-3 py-2 text-foreground">
                Insights
              </span>
            </div>
          </div>
        )}

        <div className="mt-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">
            Step 3 — Potential outputs
          </p>
          <OutputGrid highlightedOutputs={highlightedOutputs} />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selectedInput && <InsightCard key={selectedInput.id} input={selectedInput} />}
      </AnimatePresence>
    </div>
  );
}

function InputButton({
  input,
  isSelected,
  signalActive,
  onSelect,
  align,
  compact,
}: {
  input: DeliveryInput;
  isSelected: boolean;
  signalActive: boolean;
  onSelect: (input: DeliveryInput) => void;
  align?: "left" | "right";
  compact?: boolean;
}) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.button
      type="button"
      onClick={() => onSelect(input)}
      aria-pressed={isSelected}
      animate={
        signalActive && isSelected && !reducedMotion
          ? { x: align === "right" ? 8 : align === "left" ? -8 : 0 }
          : { x: 0 }
      }
      transition={getTransition(reducedMotion, 0.8)}
      className={`w-full rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors ${
        compact ? "text-xs sm:text-sm" : ""
      } ${
        isSelected
          ? "border-accent bg-accent-light text-accent shadow-subtle"
          : "border-border bg-surface text-foreground hover:border-accent/40 hover:bg-accent-light/30"
      } ${align === "right" ? "text-right" : align === "left" ? "text-left" : "text-center"}`}
    >
      {input.label}
    </motion.button>
  );
}

function OutputGrid({ highlightedOutputs }: { highlightedOutputs: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {deliveryOutputs.map((output) => {
        const isHighlighted = highlightedOutputs.includes(output.id);

        return (
          <motion.div
            key={output.id}
            animate={{
              scale: isHighlighted ? 1.02 : 1,
              opacity: highlightedOutputs.length === 0 || isHighlighted ? 1 : 0.45,
            }}
            transition={{ duration: 0.4 }}
            className={`rounded-lg border px-3 py-2.5 text-center text-[10px] font-semibold tracking-wide sm:text-xs ${
              isHighlighted
                ? "border-accent bg-accent-light text-accent"
                : "border-border bg-surface text-muted"
            }`}
          >
            {output.label}
          </motion.div>
        );
      })}
    </div>
  );
}
