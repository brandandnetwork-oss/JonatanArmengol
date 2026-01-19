
export type ViewType = 'home' | 'radio' | 'influencer' | 'accesibilidad' | 'conferencias' | 'contacto';

export interface NavItem {
  label: string;
  view: ViewType;
}

export interface Stat {
  label: string;
  value: string;
  description: string;
  icon?: string;
}

export interface RadioEpisode {
  title: string;
  date: string;
  duration: string;
  description: string;
  category: string;
  image: string;
}
