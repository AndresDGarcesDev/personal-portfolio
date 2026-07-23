import type { HTMLAttributes } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { CheckCircle } from "@hugeicons/core-free-icons";

interface SkillsDataHeroProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
}

export default function SkillsDataHero({
  name,
  className = "",
  ...props
}: SkillsDataHeroProps) {
  return (
    <div
      {...props}
      className={`flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 ${className}`}
    >
      <HugeiconsIcon icon={CheckCircle} size={16} className="text-success" />

      <span className="text-text-secondary">{name}</span>
    </div>
  );
}
