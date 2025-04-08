export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
}

export interface CVEItem {
  id: string;
  title: string;
  description: string;
  product: string;
  detailsLink: string;
  writeupLink?: string;
}

export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  date: string;
  description: string;
  bullets?: string[];
  link?: {
    url: string;
    text: string;
  };
}

export interface CertificationItem {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialURL?: string;
  image?: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface GalleryItem {
  id: number;
  image: string;
  title: string;
  date: string;
  location?: string;
}
