import { HugeiconsIcon } from "@hugeicons/react";
import type { Beyond } from "../../types/beyond";

interface Props {
  beyond: Beyond;
}

export default function BeyondCodeCard({ beyond }: Props) {
  return (
    <article
      className="group rounded-2xl border border-gray-800 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400"
      data-stagger
    >
      <HugeiconsIcon
        icon={beyond.icon}
        size={32}
        className="mb-5 text-cyan-400"
      />
      <h3 className="text-xl font-semibold text-white">{beyond.title}</h3>
      <p className="mt-3 text-gray-400">
        {beyond.subtitle}
        {beyond.badge && (
          <span className="ml-1 text-red-400">{beyond.badge}</span>
        )}
      </p>
      {beyond.note && <span className="text-gray-400">{beyond.note}</span>}
    </article>
  );
}
