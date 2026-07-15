import SectionTitle from "../../../components/ui/title/SectionTitle";
import { beyond } from "../data/beyonds";
import BeyondCodeCard from "./beyond/BeyondCard";

export default function BeyondCodeSection() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col justify-center px-6 py-2">
      <div className="pt-10 text-center">
        <SectionTitle title="Más allá del código" subtitle="Beyond the Code" />

        <samp>
          "Las mejores soluciones nacen cuando aprendes también fuera del
          software."
        </samp>
      </div>

      <div className="mt-5 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {beyond.map((item) => (
          <BeyondCodeCard key={item.title} beyond={item} />
        ))}
      </div>

      <p className="pt-5 text-sm">
        <span className="text-red-400">*</span> Mi objetivo es comunicar ideas
        técnicas con la misma claridad en inglés que actualmente lo hago en
        español.
      </p>
    </section>
  );
}
