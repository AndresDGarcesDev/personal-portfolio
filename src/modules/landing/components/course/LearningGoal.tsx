interface Props {
  goal: string;
}

export default function LearningGoal({ goal }: Props) {
  return (
    <section className="min-h-36 rounded-xl border border-border-section p-5">
      <h4 className="text-xs uppercase font-semibold tracking-widest text-text-primary">
        Lo que buscaba
      </h4>
      <p className="mt-3 text-text-secondary">{goal}</p>
    </section>
  );
}
