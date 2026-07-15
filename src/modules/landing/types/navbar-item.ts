import type { IconSvgElement } from "@hugeicons/react";

export interface NavbarItem {
  id: string;
  label: string;
  href: string;
  icon?: IconSvgElement;
}
