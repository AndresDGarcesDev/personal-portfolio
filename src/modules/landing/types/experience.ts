export interface Experience {
  id: number;
  nameCompany: string;
  role: string;
  startDate: string;
  endDate: string;
  location: "Remoto" | "Hibrido" | "Presencial";
  type: "Intern" | "Full time" | "Freelance";
  summary: string;
  achievements: string[];
  technologies: string[];
  featured: boolean;
}
