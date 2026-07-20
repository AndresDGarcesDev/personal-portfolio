import SectionTitle from "../../../components/ui/title/SectionTitle";
import { courses } from "../data/courses";
import { learningJourney } from "../data/learning-journey";
import LearningStageCard from "./course/LearningStageCard";

export default function CourseSection() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col justify-center px-6 py-10">
      <SectionTitle
        title="Cursos complementarios"
        subtitle="Supplementary courses"
      />
      <div className="px-15 mb-5">
        <p className="text-lg text-center text-text-secondary">
          Cada año procuro profundizar en una{" "}
          <span className="font-bold">tecnología o disciplina</span> que
          complemente mi experiencia profesional. Mi objetivo no es acumular
          certificados, sino construir una base sólida que me permita diseñar
          mejores soluciones.
        </p>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row">
        {learningJourney.map((stage) => (
          <LearningStageCard
            key={stage.id}
            stage={stage}
            courses={courses.filter((course) =>
              stage.courses.includes(course.id),
            )}
          />
        ))}
      </div>
    </section>
  );
}
