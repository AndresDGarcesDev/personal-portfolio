import SectionTitle from "../../../components/ui/title/SectionTitle";
import { experiences } from "../data/experiences";
import ExperienceCard from "./experience/ExperienceCard";

export default function ExperienceSection() {
  return (
    <section id="experiences" className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle title="Experiencia Profesional" subtitle="Career Journey" />
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-slate-700" />
        {[...experiences].reverse().map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            align={index % 2 === 0 ? "right" : "left"}
          />
        ))}
      </div>
    </section>
  );
}
