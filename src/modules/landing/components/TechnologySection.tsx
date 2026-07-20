import { useState } from "react";
import SectionTitle from "../../../components/ui/title/SectionTitle";
import { technologies } from "../data/technologies";
import TechnologyCard from "./technology/TechnologyCard";
import { technologyCategories } from "../utils/technologyCategories";
import { HugeiconsIcon } from "@hugeicons/react";
import type { TechnologyCategory } from "../types/technology-category";

export default function TechnologySection() {
  const [selectedCategory, setSelectedCategory] =
    useState<TechnologyCategory>("featured");

  const filteredTechnologies =
    selectedCategory === "featured"
      ? technologies.filter(
          (technology) => technology.favorite || technology.current,
        )
      : technologies.filter(
          (technology) => technology.category === selectedCategory,
        );

  const selectedCategoryInfo = technologyCategories.find(
    (category) => category.value === selectedCategory,
  );

  return (
    <section
      id="technologies"
      className="relative mx-auto max-w-7xl px-6 pb-10"
    >
      <SectionTitle
        title="Mi stack profesional"
        subtitle="My professional stack"
      />
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="space-y-3">
          {technologyCategories.map((category) => {
            const active = selectedCategory === category.value;

            return (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`w-full rounded-xl border px-5 py-4 text-left text-text-primary transition ${
                  active
                    ? "border-cyan-400 bg-cyan-500/10"
                    : "border-slate-800 hover:border-cyan-500"
                }`}
              >
                <div className="flex items-center gap-3">
                  <HugeiconsIcon
                    icon={category?.icon}
                    size={20}
                    className={active ? "text-primary" : "text-slate-400"}
                  />
                  <span>{category.label}</span>
                </div>
              </button>
            );
          })}
        </aside>
        <div className="mb-6 border-b border-slate-800 pb-5">
          <div className="flex justify-around items-center gap-4">
            {selectedCategoryInfo && (
              <HugeiconsIcon
                icon={selectedCategoryInfo.icon}
                size={26}
                className="text-primary"
              />
            )}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-text-primary">
                  {selectedCategoryInfo?.title}
                </h3>
                <p className="mt-1 max-w-2xl text-text-secondary">
                  {selectedCategoryInfo?.description}
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-4 py-3">
              <p className="text-2xl font-bold text-primary">
                {filteredTechnologies.length}
              </p>
              <span className="text-xs text-text-secondary">tecnologías</span>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 pt-3">
            {filteredTechnologies.map((technology) => (
              <TechnologyCard key={technology.id} technology={technology} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
