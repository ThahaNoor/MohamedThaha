"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { impactMetrics } from "@/lib/profile";
import {
  fadeUp,
  getTransition,
  getViewport,
  usePrefersReducedMotion,
} from "@/lib/motion";

function parseMetricValue(value: string): {
  numeric: number | null;
  prefix: string;
  suffix: string;
} {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return { numeric: null, prefix: "", suffix: value };
  }
  return {
    prefix: match[1],
    numeric: Number(match[2]),
    suffix: match[3],
  };
}

function AnimatedMetric({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const reducedMotion = usePrefersReducedMotion();
  const parsed = parseMetricValue(value);
  const [displayValue, setDisplayValue] = useState(
    reducedMotion || parsed.numeric === null ? value : `${parsed.prefix}0${parsed.suffix}`,
  );

  useEffect(() => {
    if (!isInView || reducedMotion || parsed.numeric === null) {
      setDisplayValue(value);
      return;
    }

    const duration = 1800;
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(parsed.numeric! * eased);
      setDisplayValue(`${parsed.prefix}${current}${parsed.suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, parsed.numeric, parsed.prefix, parsed.suffix, reducedMotion, value]);

  return (
    <div ref={ref} className="card-base p-5 sm:p-6">
      <p className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {displayValue}
      </p>
      <p className="mt-2 text-sm leading-snug text-muted">{label}</p>
    </div>
  );
}

export default function ImpactMetrics() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="impact" className="section-padding bg-accent-light/40">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={getViewport(reducedMotion)}
          variants={fadeUp}
          transition={getTransition(reducedMotion)}
        >
          <SectionHeading
            title="Leadership by the Numbers"
            align="center"
          />
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial="hidden"
              whileInView="visible"
              viewport={getViewport(reducedMotion)}
              variants={fadeUp}
              transition={{
                ...getTransition(reducedMotion, 0.45),
                delay: reducedMotion ? 0 : index * 0.05,
              }}
            >
              <AnimatedMetric value={metric.value} label={metric.label} />
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted sm:text-base">
          Selected outcomes from enterprise delivery, engineering operations and
          transformation initiatives.
        </p>
      </div>
    </section>
  );
}
