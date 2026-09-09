"use client";

import { aiConcepts, type AIConceptId } from "@/lib/ai";

interface AIConceptSelectorProps {
  selected: AIConceptId;
  onSelect: (id: AIConceptId) => void;
}

export default function AIConceptSelector({
  selected,
  onSelect,
}: AIConceptSelectorProps) {
  return (
    <div
      role="tablist"
      aria-label="AI transformation concepts"
      className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
    >
      {aiConcepts.map((concept) => {
        const isSelected = selected === concept.id;

        return (
          <button
            key={concept.id}
            type="button"
            role="tab"
            id={`tab-${concept.id}`}
            aria-selected={isSelected}
            aria-controls={`panel-${concept.id}`}
            onClick={() => onSelect(concept.id)}
            className={`rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors sm:px-5 sm:py-3.5 sm:text-base ${
              isSelected
                ? "border-accent bg-accent text-white shadow-subtle"
                : "border-border bg-surface text-foreground hover:border-accent/40 hover:bg-accent-light/50"
            }`}
          >
            {concept.label}
          </button>
        );
      })}
    </div>
  );
}
