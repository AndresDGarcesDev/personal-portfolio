import type { NavbarItem } from "../types/navbar-item";
import {
  User02Icon,
  CodeXmlIcon,
  Briefcase01Icon,
  GraduationCapIcon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";

export const navbarItems: NavbarItem[] = [
  {
    id: "about",
    label: "Sobre Mí",
    href: "#about",
    icon: User02Icon,
  },
  {
    id: "technologies",
    label: "Tecnologías",
    href: "#technologies",
    icon: CodeXmlIcon,
  },
  {
    id: "experiences",
    label: "Experiencia",
    href: "#experiences",
    icon: Briefcase01Icon,
  },
  {
    id: "educations",
    label: "Educación",
    href: "#educations",
    icon: GraduationCapIcon,
  },
  {
    id: "contact",
    label: "Contacto",
    href: "#contact",
    icon: Mail01Icon,
  },
];
