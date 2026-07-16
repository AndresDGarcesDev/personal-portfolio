import { HugeiconsIcon } from "@hugeicons/react";
import {
  BadgeCheckIcon,
  Building05Icon,
  Calendar02Icon,
  Mortarboard02Icon,
} from "@hugeicons/core-free-icons";
import type { Education } from "../../types/education";
import Badge from "../../../../components/ui/badge/Badge";

interface Props {
  education: Education;
}

export default function EducationCard({ education }: Props) {
  return (
    <article className="group pb-3 mt-5 w-full rounded-xl border border-zinc-700 bg-zinc-950/60 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
          <HugeiconsIcon icon={Mortarboard02Icon} size={24} />
        </div>
        <div>
          <h3 className="text-2xl text-left font-bold">{education.title}</h3>
          <div className="mt-1 flex items-center gap-2 text-zinc-400">
            <HugeiconsIcon icon={Building05Icon} size={16} />
            <span>
              {education.nameInstitution} ({education.sig})
            </span>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        <Badge>{education.formation}</Badge>
        <Badge variant="info">{education.state}</Badge>
      </div>
      <div className="mt-6 space-y-3 text-zinc-300">
        <div className="flex items-center gap-3">
          <HugeiconsIcon
            icon={Calendar02Icon}
            size={18}
            className="text-cyan-400"
          />
          <span>
            {education.startYear} - {education.endYear}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span>{education.objetive}</span>
        </div>
      </div>
      <div className="my-6 h-px bg-zinc-800" />
      <p className="mb-3 font-semibold">Tecnologías aprendidas</p>
      <div className="flex flex-wrap gap-2 py-4">
        {education.technologies.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>

      {education.state !== "Finalizado" && (
        <div className="mt-2">
          <div className="mb-2 flex justify-between text-sm">
            <span>Progreso</span>
            <span>70%</span>
          </div>
          <div className="h-2 rounded-full bg-zinc-800">
            <div className="h-full w-[70%] rounded-full bg-cyan-500 transition-all duration-700 group-hover:w-[72%]" />
          </div>
        </div>
      )}

      {education.state === "Finalizado" && (
        <div className="mt-2 flex items-center gap-2 text-emerald-400">
          <HugeiconsIcon icon={BadgeCheckIcon} size={20} />
          <span>Programa finalizado satisfactoriamente</span>
        </div>
      )}
    </article>
  );
}
