export type ProjectCategory = 'all' | 'frontend' | 'fullstack' | 'architecture' | 'ecommerce';

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: 'frontend' | 'fullstack' | 'architecture' | 'ecommerce';
  techStack: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  image: string;
  videoPreview?: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  order: number;
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'architecture';
  level: number; // 0 - 100
  experienceYears: string;
  highlight?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
  type: 'work' | 'education' | 'certification';
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  projectRef: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  coverImage: string;
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
  createdAt: string;
}
