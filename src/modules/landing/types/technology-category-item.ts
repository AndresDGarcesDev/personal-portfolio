import type { IconSvgElement } from "@hugeicons/react";
import type { TechnologyCategory } from "./tecnnology-category";

export interface TechnologyCategoryItem {
  value: TechnologyCategory | "featured";
  label: string;
  title: string;
  description: string;
  icon: IconSvgElement;
}
