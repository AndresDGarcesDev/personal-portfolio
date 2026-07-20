import { HugeiconsIcon } from "@hugeicons/react";
import type { Beyond } from "../../types/beyond";

interface Props {
  beyond: Beyond;
}

export default function BeyondCodeCard({ beyond }: Props) {
  return (
    <article
      className="group rounded-2xl border border-gray-800 bg-surface p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary-hover"
      data-stagger
    >
      <HugeiconsIcon
        icon={beyond.icon}
        size={32}
        className="mb-5 text-primary"
      />
      <h3 className="text-xl font-semibold text-text-primary">{beyond.title}</h3>
      <p className="mt-3 text-text-secondary">
        {beyond.subtitle}
        {beyond.badge && (
          <span className="ml-1 text-danger">{beyond.badge}</span>
        )}
      </p>
      {beyond.note && <span className="text-text-secondary">{beyond.note}</span>}
    </article>
  );
}
