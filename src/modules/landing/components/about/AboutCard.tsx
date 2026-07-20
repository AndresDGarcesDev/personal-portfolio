import type { About } from "../../types/about";
import { HugeiconsIcon } from "@hugeicons/react";

export default function AboutCard({
  title,
  text,
  icon: Icon,
  children,
  href,
  className = "",
}: About) {
  const content = (
    <div
      className={`
        rounded-2xl
        border
        border-slate-800
        bg-surface
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-border-hover
        hover:shadow-lg
        ${className}
      `}
    >
      {Icon && (
        <div className="mb-5 inline-flex rounded-xl bg-cyan-500/10 p-3 text-primary">
          <HugeiconsIcon icon={Icon} size={28} />
        </div>
      )}
      <h2 className="text-xl font-semibold text-text-primary">{title}</h2>
      <p className="mt-3 leading-7 text-text-secondary">{text}</p>
      {children && <div className="mt-6">{children}</div>}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label="Hipervínculo información"
      >
        {content}
      </a>
    );
  }

  return content;
}
