import { HugeiconsIcon } from "@hugeicons/react";
import type { LearningStage } from "../../types/learning-stage";
import { learningIcons } from "../../../../shared/constants/learning-icons";

interface Props {
  stage: LearningStage;
}

export default function LearningStageHeader({ stage }: Props) {
  return (
    <header className="mb-3">
      <div className="inline-flex justify-center align-middle items-center">
        <HugeiconsIcon
          icon={learningIcons[stage.category]}
          size={34}
          className="text-primary"
        />
        <h3 className="pl-3 text-3xl font-bold text-text-primary">{stage.title}</h3>
      </div>
      <p className="mt-1 uppercase tracking-widest text-text-secondary">
        {stage.period}
      </p>
      <p className="mt-6 min-h-20 text-text-secondary">{stage.description}</p>
    </header>
  );
}
