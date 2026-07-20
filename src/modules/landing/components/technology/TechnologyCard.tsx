import Badge from "../../../../components/ui/badge/Badge";
import type { Technology } from "../../types/technology";

interface Props {
  technology: Technology;
}
export default function TechnologyCard({ technology }: Props) {
  return (
    <article className="group rounded-xl border border-slate-800 bg-surface p-5">
      <header className="flex justify-between">
        <h3 className="text-text-primary font-bold">{technology.name}</h3>
        <Badge variant="info">{technology.level}</Badge>
      </header>
      <p className="mt-4 text-sm text-text-primary">{technology.description}</p>
      <footer className="mt-5 text-text-secondary">
        {technology.years}{" "}
        años de experiencia
      </footer>
    </article>
  );
}
