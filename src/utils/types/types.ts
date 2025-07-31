export interface Education {
  data: string;
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
  icon?: React.ReactNode
}
