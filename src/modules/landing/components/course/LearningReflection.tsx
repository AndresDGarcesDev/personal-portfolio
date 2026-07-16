interface Props {
  reflection: string;
}

export default function LearningReflection({ reflection }: Props) {
  return (
    <section className="mt-auto border-t border-slate-800 pt-8">
      <h4 className="text-xs uppercase tracking-widest text-cyan-400">
        Lo que cambió
      </h4>
      <blockquote className="mt-4 italic leading-relaxed text-slate-300">
        "{reflection}"
      </blockquote>
    </section>
  );
}
