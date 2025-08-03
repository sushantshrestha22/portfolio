export interface Education {
  date: string;
  institution: string;
  level: string;
  description: string;
}

export interface ItemsType {
  title: string;
  url: string;
  icon: React.ComponentType<any>;
  dropdown?: {
    title: string;
    url: string;
    icon: React.ComponentType<any>;
    notify?: number;
  }[];
  notify?: number;
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: React.ReactNode;
}

export interface ExperienceType {
  company: string;
  date: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface Project {
  name: string;
  description?: string;
  url: string;
  image: string;
  tags?: string[];
}
