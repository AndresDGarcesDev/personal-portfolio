import { useRef } from "react";
import type { Metric } from "../../types/metric";
import { useHoverLift } from "../../../../shared/animations/gsap";

type Props = {
  metric: Metric;
};

export default function HeroMetricCard({ metric }: Props) {
  const metricsHover = useRef<HTMLElement>(null);
  useHoverLift(metricsHover);

  return (
    <article
      className="group rounded-2xl border border-slate-800 bg-surface p-5 hover:border-border-hover hover:shadow-lg"
      ref={metricsHover}
    >
      <h3 className="text-3xl font-bold text-text-primary" data-stagger>{metric.value}</h3>
      <p className="mt-2 text-sm leading-6 text-text-secondary" data-stagger>
        {metric.label}
      </p>
    </article>
  );
}
