import type { Course } from "../../types/course";
import type { LearningStage } from "../../types/learning-stage";

import LearningCourses from "./LearningCourses";
import LearningGoal from "./LearningGoal";
import LearningReflection from "./LearningReflection";
import LearningSkills from "./LearningSkills";
import LearningStageHeader from "./LearningStageHeader";

interface Props {
  stage: LearningStage;
  courses: Course[];
}

export default function LearningStageCard({ stage, courses }: Props) {
  return (
    <article className="h-full">
      <div className="mx-3 group flex h-full flex-col rounded-2xl border border-slate-800 bg-white/5 p-8 my-2 md:my-0 transition-all duration-300 hover:-translate-y-2 hover:border-border-hover">
        <LearningStageHeader stage={stage} />
        <LearningGoal goal={stage.goal} />
        <LearningSkills skills={stage.skills} />
        <LearningCourses courses={courses} />
        <LearningReflection reflection={stage.reflection} />
      </div>
    </article>
  );
}
