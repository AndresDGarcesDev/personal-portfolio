import type { Metric } from "../../types/metric";

type Props = {
  metric: Metric;
};

export default function HeroMetricCard({ metric }: Props) {
  return (
    <article className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg">
      <h3 className="text-3xl font-bold text-white">{metric.value}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{metric.label}</p>
    </article>
  );
}
