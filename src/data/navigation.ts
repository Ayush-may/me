import navigationData from "./navigation.json";

export interface NavigationLink {
  label: string;
  href: string;
}

export const navigationLinks: NavigationLink[] = navigationData;
