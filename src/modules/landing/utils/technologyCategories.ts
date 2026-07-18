import {
  Award01Icon,
  CodeIcon,
  ApiIcon,
  BrowserIcon,
  DatabaseIcon,
  CloudIcon,
  ToolboxIcon,
  PackageIcon,
  SmartPhoneIcon,
} from "@hugeicons/core-free-icons";
import type { TechnologyCategoryItem } from "../types/technology-category-item";

export const technologyCategories: TechnologyCategoryItem[] = [
  {
    value: "featured",
    label: "Destacados",
    title: "Mi stack principal",
    description:
      "Las tecnologías que utilizo con mayor frecuencia en proyectos actuales.",
    icon: Award01Icon,
  },
  {
    value: "programming-language",
    label: "Lenguajes",
    title: "Lenguajes de programación",
    description: "Base para el desarrollo backend, frontend y automatización.",
    icon: CodeIcon,
  },
  {
    value: "backend",
    label: "Backend",
    title: "Desarrollo Backend",
    description:
      "Construcción de APIs REST, microservicios y arquitectura empresarial.",
    icon: ApiIcon,
  },
  {
    value: "frontend",
    label: "Frontend",
    title: "Desarrollo Frontend",
    description: "Interfaces modernas, accesibles y responsivas.",
    icon: BrowserIcon,
  },
  {
    value: "database",
    label: "Bases de datos",
    title: "Persistencia de datos",
    description: "Modelado, consultas y optimización de bases de datos.",
    icon: DatabaseIcon,
  },
  {
    value: "cloud",
    label: "Cloud",
    title: "Cloud Computing",
    description: "Infraestructura, despliegues y servicios en la nube.",
    icon: CloudIcon,
  },
  {
    value: "mobile",
    label: "Móvil",
    title: "Desarrollo móvil",
    description: "Aplicaciones Android e iOS multiplataforma.",
    icon: SmartPhoneIcon,
  },
  {
    value: "tools",
    label: "Herramientas",
    title: "Herramientas de desarrollo",
    description: "Productividad, CI/CD y calidad del software.",
    icon: ToolboxIcon,
  },
  {
    value: "library",
    label: "Librerías",
    title: "Frameworks y librerías",
    description: "Componentes y ecosistemas que complementan el desarrollo.",
    icon: PackageIcon,
  },
];
