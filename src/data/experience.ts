import experienceData from "./experience.json";

export interface Role {
  title: string;
  duration: string;
}

export interface Experience {
  company: string;
  roles: Role[];
  description: string;
  tags?: string[];
}

export const experiences: Experience[] = experienceData;
