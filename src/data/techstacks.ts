import techstacksData from "./techstacks.json";

export interface TechStack {
  name: string;
  icon?: string;
  backgroundColor: string;
  textColor?: string;
  spanTextColor?: string;
  borderClass?: string;
}

export const techstacks: TechStack[] = techstacksData;
