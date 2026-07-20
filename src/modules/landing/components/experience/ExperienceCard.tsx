import type { Experience } from "../../types/experience";
import CardContent from "./ExperienceCardContent";

interface Props {
  experience: Experience;
  align: "left" | "right";
}

export default function ExperienceCard({ experience, align }: Props) {
  const isRight = align === "right";

  return (
    <div className="relative mb-20 grid grid-cols-1 md:grid-cols-2 items-center">
      {!isRight && (
        <div className="pl-12 md:pl-0 md:pr-16">
          <CardContent experience={experience} />
        </div>
      )}
      <div className="absolute left-4 top-8 md:left-1/2 md:-translate-x-1/2">
        <div className="h-6 w-6 rounded-full border-4 border-slate-900 bg-background-btn" />
      </div>
      {isRight && (
        <div className="pl-12 md:col-start-2 md:pl-16">
          <CardContent experience={experience} />
        </div>
      )}
    </div>
  );
}
