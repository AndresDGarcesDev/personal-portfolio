interface Props {
  goal: string;
}

export default function LearningGoal({ goal }: Props) {
  return (
    <section className="min-h-36 rounded-xl border border-cyan-500/20 p-5">
      <h4 className="text-xs uppercase tracking-widest text-cyan-400">
        Lo que buscaba
      </h4>
      <p className="mt-3 text-slate-300">{goal}</p>
    </section>
  );
}
