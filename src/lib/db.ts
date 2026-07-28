import {
  Project,
  Skill,
  ExperienceItem,
  Testimonial,
  BlogPost,
  ContactInquiry,
} from './types';
import {
  initialProjects,
  initialSkills,
  experienceTimeline,
  initialTestimonials,
  initialBlogPosts,
} from './data';

// Singleton in-memory storage for demonstration and local dynamic CRUD
class Database {
  private projects: Project[] = [...initialProjects];
  private skills: Skill[] = [...initialSkills];
  private experience: ExperienceItem[] = [...experienceTimeline];
  private testimonials: Testimonial[] = [...initialTestimonials];
  private blogPosts: BlogPost[] = [...initialBlogPosts];
  private inquiries: ContactInquiry[] = [];

  // Projects
  public getProjects(category?: string): Project[] {
    if (!category || category === 'all') {
      return this.projects;
    }
    return this.projects.filter((p) => p.category === category);
  }

  public getProjectBySlug(slug: string): Project | undefined {
    return this.projects.find((p) => p.slug === slug);
  }

  public addProject(project: Project): Project {
    this.projects.push(project);
    return project;
  }

  // Skills
  public getSkills(category?: string): Skill[] {
    if (!category || category === 'all') {
      return this.skills;
    }
    return this.skills.filter((s) => s.category === category);
  }

  // Experience
  public getExperience(): ExperienceItem[] {
    return this.experience;
  }

  // Testimonials
  public getTestimonials(): Testimonial[] {
    return this.testimonials;
  }

  // Blog Posts
  public getBlogPosts(): BlogPost[] {
    return this.blogPosts;
  }

  // Contact Inquiries
  public addInquiry(inquiry: Omit<ContactInquiry, 'id' | 'createdAt'>): ContactInquiry {
    const newInquiry: ContactInquiry = {
      ...inquiry,
      id: `inq-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    this.inquiries.push(newInquiry);
    return newInquiry;
  }

  public getInquiries(): ContactInquiry[] {
    return this.inquiries;
  }
}

// Global instance to prevent HMR reset in development
const globalForDb = global as unknown as { db: Database };
export const db = globalForDb.db || new Database();
if (process.env.NODE_ENV !== 'production') globalForDb.db = db;
