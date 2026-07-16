import { HugeiconsIcon } from "@hugeicons/react";
import type { Experience } from "../../types/experience";
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import Badge from "../../../../components/ui/badge/Badge";

export default function CardContent({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <article className="rounded-3xl border border-slate-700 bg-slate-900/80 backdrop-blur-md p-8 shadow-xl transition-all duration-500 hover:border-cyan-400">
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="text-3xl font-bold">{experience.nameCompany}</h3>
          <p className="mt-1 text-cyan-400">{experience.role}</p>
          <p className="mt-1">
            <Badge key={experience.location}>{experience.location}</Badge>
          </p>
        </div>
        <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
          {experience.startDate} - {experience.endDate}
        </span>
      </div>
      <div className="my-6 h-px bg-slate-700" />
      <ul className="space-y-3">
        {experience.achievements.map((item) => (
          <li key={item} className="flex items-start gap-3 text-slate-300">
            <HugeiconsIcon
              icon={CheckmarkCircle02Icon}
              size={18}
              className="mt-1 shrink-0 text-cyan-400"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap gap-3">
        {experience.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </article>
  );
}
