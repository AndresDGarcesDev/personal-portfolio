import SectionTitle from "../../../components/ui/title/SectionTitle";
import { education } from "../data/educations";
import EducationCard from "./education/EducationCard";

export default function EducationSection() {
  return (
    <section id="educations" className="mx-auto max-w-7xl px-6 py-15">
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
