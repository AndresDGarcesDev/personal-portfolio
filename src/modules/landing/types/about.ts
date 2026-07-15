import type { IconSvgElement } from "@hugeicons/react";
import type { ReactNode } from "react";

export interface About {
  title: string;
  text: string;
  icon?: IconSvgElement;
  children?: ReactNode;
  href?: string;
  className?: string;
}
