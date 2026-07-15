import type { ReactNode } from "react";

type SectionTitleProps = {
  title: ReactNode;
  subtitle: ReactNode;
};
export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <header className="mb-10 text-center">
      <h3 className="mt-4 text-5xl font-bold text-cyan-500 tracking-[0.2rem] capitalize">
        {title}
      </h3>
      <p className="pt-3 text-lg uppercase tracking-[0.4rem] text-cyan-400">
        {subtitle}
      </p>
    </header>
  );
}
