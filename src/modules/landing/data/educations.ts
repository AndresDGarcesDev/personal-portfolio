import type { Education } from "../types/education";

export const education: Education[] = [
  {
    id: 1,
    nameInstitution: "Universidad nacional abierta y a distancia",
    sig: "UNAD",
    title: "Ingeniería de sistemas",
    formation: "Pregrado",
    startYear: 2023,
    endYear: 2027,
    state: "En proceso de formación",
    technologies: [
      "Ingeniería",
      "Bases de datos",
      "Java",
      "Python",
      "Arquitectura",
    ],
    objetive:
      "Formación profesional enfocada en arquitectura de software, desarrollo web, bases de datos y metodologías ágiles.",
  },
  {
    id: 2,
    nameInstitution: "Servicio nacional de aprendizaje",
    sig: "SENA",
    title: "Análisis y desarrollo de sistemas de información",
    formation: "Tecnólogo",
    startYear: 2017,
    endYear: 2019,
    state: "Finalizado",
    technologies: ["PHP", ".NET", "Sql Server", "MySql", "Modelos de datos"],
    objetive:
      "Formación intermedia de desarrollo de software y análisis internos de proyectos.",
  },
];
