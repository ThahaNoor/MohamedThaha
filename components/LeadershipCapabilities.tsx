"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Layers,
  Server,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { leadershipCapabilities } from "@/lib/profile";
import {
  fadeUp,
  getTransition,
  getViewport,
  usePrefersReducedMotion,
} from "@/lib/motion";

const iconMap: Record<
  (typeof leadershipCapabilities)[number]["icon"],
  LucideIcon
> = {
  delivery: Target,
  engineering: Layers,
  operations: Server,
  leadership: Users,
  ai: Bot,
};

export default function LeadershipCapabilities() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="capabilities" className="section-padding">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={getViewport(reducedMotion)}
          variants={fadeUp}
          transition={getTransition(reducedMotion)}
        >
          <SectionHeading title="What I Bring" />
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {leadershipCapabilities.map((capability, index) => {
            const Icon = iconMap[capability.icon];

            return (
              <motion.article
                key={capability.title}
                initial="hidden"
                whileInView="visible"
                viewport={getViewport(reducedMotion)}
                variants={fadeUp}
                transition={{
                  ...getTransition(reducedMotion, 0.45),
                  delay: reducedMotion ? 0 : index * 0.05,
                }}
                whileHover={
                  reducedMotion
                    ? undefined
                    : { y: -4, transition: { duration: 0.2 } }
                }
                className="card-base p-6"
              >
                <div className="mb-4 inline-flex rounded-lg bg-accent-light p-2.5 text-accent">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="text-sm font-semibold tracking-wide text-foreground">
                  {capability.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {capability.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-relaxed text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
