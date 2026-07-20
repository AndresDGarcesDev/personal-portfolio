import type { ReactNode } from "react";

type SectionTitleProps = {
  title: ReactNode;
  subtitle: ReactNode;
};
export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <header className="mb-10 text-center">
      <h3 className="mt-4 text-5xl font-bold text-text-title-section tracking-[0.2rem] capitalize">
        {title}
      </h3>
      <p className="pt-3 text-lg uppercase tracking-[0.4rem] text-text-title-section">
        {subtitle}
      </p>
    </header>
  );
}
