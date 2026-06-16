import projectsData from "./projects.json";

export interface Project {
  title: string;
  link?: string;
  github?: string;
  githubBackend?: string;
  duration?: string;
  tags: string[];
  description?: string;
}

export const projects: Project[] = projectsData;

