import { useRef, type ReactNode } from "react";
import { useSplitText } from "../../../shared/animations/hooks/useSplitText";

type SectionTitleProps = {
  title: ReactNode;
  subtitle: ReactNode;
};
export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  useSplitText(titleRef);
  
  return (
    <header className="mb-10 text-center" ref={titleRef}>
      <h3 className="mt-4 text-5xl font-bold text-text-title-section tracking-[0.2rem] capitalize">
        {title}
      </h3>
      <p className="pt-3 text-lg uppercase tracking-[0.4rem] text-text-title-section">
        {subtitle}
      </p>
    </header>
  );
}
