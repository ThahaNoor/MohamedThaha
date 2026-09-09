"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { incidentSimulation } from "@/lib/ai";
import { getTransition, usePrefersReducedMotion } from "@/lib/motion";

export default function IncidentSimulation() {
  const reducedMotion = usePrefersReducedMotion();
  const [currentStep, setCurrentStep] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<number | null>(null);
  const { incident, steps, stepDelayMs, title, disclaimer } = incidentSimulation;

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const reset = useCallback(() => {
    clearTimer();
    setIsRunning(false);
    setCurrentStep(-1);
  }, [clearTimer]);

  useEffect(() => {
    return () => clearTimer();
  }, [clearTimer]);

  const advanceStep = useCallback(
    (step: number) => {
      if (step >= steps.length) {
        setIsRunning(false);
        return;
      }

      setCurrentStep(step);

      if (step < steps.length - 1) {
        timerRef.current = window.setTimeout(
          () => advanceStep(step + 1),
          reducedMotion ? 0 : stepDelayMs,
        );
      } else {
        setIsRunning(false);
      }
    },
    [reducedMotion, stepDelayMs, steps.length],
  );

  const runInvestigation = () => {
    clearTimer();
    setIsRunning(true);
    setCurrentStep(-1);

    if (reducedMotion) {
      setCurrentStep(0);
      setIsRunning(false);
      return;
    }

    advanceStep(0);
  };

  const goPrevious = () => {
    clearTimer();
    setIsRunning(false);
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const goNext = () => {
    clearTimer();
    setIsRunning(false);
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const visibleSteps = currentStep >= 0 ? steps.slice(0, currentStep + 1) : [];

  return (
    <article className="card-base mt-8 p-5 sm:p-6">
      <h4 className="text-base font-semibold text-foreground sm:text-lg">
        {title}
      </h4>
      <p className="mt-1 text-xs text-muted">{disclaimer}</p>

      <div className="mt-6 rounded-lg border border-border bg-background p-4 sm:p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">
          {incident.title}
        </p>
        <p className="mt-1 text-sm font-medium text-foreground">
          {incident.summary}
        </p>
        <div className="mt-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            Signals
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {incident.signals.map((signal) => (
              <span
                key={signal}
                className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-muted"
              >
                {signal}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={runInvestigation}
          disabled={isRunning}
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Run Investigation
        </button>
        <button
          type="button"
          onClick={reset}
          className="rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Reset
        </button>
      </div>

      {currentStep >= 0 && (
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={goPrevious}
            disabled={currentStep <= 0}
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={currentStep >= steps.length - 1}
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}

      <div
        className="mt-6 min-h-[120px] space-y-3"
        aria-live="polite"
        aria-atomic="false"
      >
        <AnimatePresence>
          {visibleSteps.map((step, index) => (
            <motion.div
              key={`${step.stage}-${index}`}
              initial={reducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={getTransition(reducedMotion, 0.5)}
              className="rounded-lg border border-border bg-accent-light/30 px-4 py-3"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                {index + 1}. {step.stage}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-foreground">
                {step.message}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </article>
  );
}
