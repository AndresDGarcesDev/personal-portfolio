export type LearningCategory = "foundation" | "expansion" | "specialization";

export interface LearningStage {
  id: number;
  category: LearningCategory;
  title: string;
  period: string;
  description: string;
  goal: string;
  reflection: string;
  skills: string[];
  courses: number[];
}
