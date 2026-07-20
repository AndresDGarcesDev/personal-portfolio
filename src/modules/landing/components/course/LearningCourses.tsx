import type { Course } from "../../types/course";

interface Props {
  courses: Course[];
}

export default function LearningCourses({ courses }: Props) {
  return (
    <section className="mt-8">
      <h4 className="mb-4 text-sm uppercase font-semibold tracking-widest text-text-primary">
        Cómo lo hice
      </h4>
      <div className="space-y-2">
        {courses.map((course) => (
          <div
            key={course.id}
            className="rounded-lg border border-slate-700 p-3"
          >
            <h5 className="font-medium text-text-primary">{course.nameCourse}</h5>
            <p className="text-sm text-text-secondary">{course.platformCourse}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
