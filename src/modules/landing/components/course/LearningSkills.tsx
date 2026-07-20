import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

interface Props {
  skills: string[];
}

export default function LearningSkills({ skills }: Props) {
  return (
    <section className="mt-8">
      <h4 className="mb-4 text-sm uppercase font-semibold tracking-widest text-text-primary">
        Competencias
      </h4>
      <div className="space-y-3">
        {skills.map((skill) => (
          <div key={skill} className="flex items-center gap-3">
            <HugeiconsIcon
              icon={CheckmarkCircle02Icon}
              size={18}
              className="text-primary"
            />
            <span className="text-text-secondary">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
