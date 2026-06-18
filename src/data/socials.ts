import socialsData from "./socials.json";

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
  download?: boolean;
}

export const socials: SocialLink[] = socialsData;
