import type { TechnologyCategory } from "./technology-category";

export type TechnologyLevel = "Profesional" | "Avanzado" | "Aprendizaje";

export interface Technology {
  id: number;
  name: string;
  category: TechnologyCategory;
  level: TechnologyLevel;
  years: number;
  description: string;
  current?: boolean;
  favorite?: boolean;
}
