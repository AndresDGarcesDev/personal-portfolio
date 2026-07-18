import Badge from "../../../../components/ui/badge/Badge";
import type { Technology } from "../../types/technology";

interface Props {
  technology: Technology;
}
export default function TechnologyCard({ technology }: Props) {
  return (
    <article className="group rounded-xl border border-slate-800 bg-slate-900/40 p-5">
      <header className="flex justify-between">
        <h3>{technology.name}</h3>
        <Badge>{technology.level}</Badge>
      </header>
      <p className="mt-4 text-sm text-slate-400">{technology.description}</p>
      <footer className="mt-5">
        {technology.years}{" "}
        años de experiencia
      </footer>
    </article>
  );
}
