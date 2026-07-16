import type { LearningStage } from "../types/learning-stage";

export const learningJourney: LearningStage[] = [
  {
    id: 1,
    category: "foundation",
    title: "Fundamentos",
    period: "2022",
    description:
      "Aprender a trabajar en equipo, gestionar versiones y comprender metodologías ágiles.",
    goal: "Comprender cómo colaborar en equipos de desarrollo antes de profundizar en tecnologías más complejas.",
    skills: [
      "Git Flow",
      "Trabajo colaborativo",
      "Scrum",
      "Control de versiones",
    ],
    reflection:
      "Descubrí que desarrollar software no consiste únicamente en escribir código, sino en colaborar con otras personas.",
    courses: [6, 7],
  },

  {
    id: 2,
    category: "expansion",
    title: "Expansión",
    period: "2023 - 2024",
    description:
      "Explorar nuevas plataformas y ampliar capacidades en desarrollo web y móvil.",
    goal: "Salir de mi zona de confort explorando el ecosistema JavaScript y el desarrollo móvil.",
    skills: ["React Native", "AWS", "Frontend", "Backend"],
    reflection:
      "Comprendí que un mismo problema puede resolverse desde distintas plataformas y tecnologías.",
    courses: [5, 4],
  },

  {
    id: 3,
    category: "specialization",
    title: "Especialización",
    period: "2025 - Hoy",
    description:
      "Profundizar en arquitectura cloud, inteligencia artificial y diseño de soluciones escalables.",
    goal: "Orientar mi crecimiento hacia arquitectura de software e inteligencia artificial.",
    skills: ["Cloud", "Arquitectura", "Generative AI", "Google Cloud"],
    reflection:
      "Hoy pienso primero en la arquitectura del sistema y después en el código.",
    courses: [3, 2, 1],
  },
];
