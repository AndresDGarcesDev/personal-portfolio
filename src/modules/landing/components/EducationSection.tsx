import { useRef } from "react";
import SectionTitle from "../../../components/ui/title/SectionTitle";
import { education } from "../data/educations";
import EducationCard from "./education/EducationCard";
import { useReveal } from "../../../shared/animations/gsap";

export default function EducationSection() {
  const educationRef = useRef<HTMLElement>(null);
  useReveal(educationRef);

  return (
    <section
      id="educations"
      className="mx-auto max-w-7xl px-6 py-15"
      ref={educationRef}
    >
      <SectionTitle
        title="Educación Profesional"
        subtitle="Professional Education"
      />
      <div className="relative mt-5">
        <div className="grid gap-16 lg:grid-cols-2">
          {education.map((item) => (
            <div key={item.id} className="relative flex flex-col items-center">
              <EducationCard education={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
