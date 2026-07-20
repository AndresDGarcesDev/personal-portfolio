interface Props {
  reflection: string;
}

export default function LearningReflection({ reflection }: Props) {
  return (
    <section className="mt-auto border-slate-800 pt-8">
      <h4 className="text-xs uppercase font-semibold tracking-widest text-text-primary">
        Lo que cambió
      </h4>
      <blockquote className="mt-4 italic leading-relaxed text-text-secondary">
        "{reflection}"
      </blockquote>
    </section>
  );
}
