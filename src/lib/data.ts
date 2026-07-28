import { Project, Skill, ExperienceItem, Testimonial, BlogPost } from './types';

export const initialProjects: Project[] = [
  {
    id: 'proj-1',
    slug: 'umg-royalty-portal',
    title: 'Universal Music Group Royalty Portal',
    subtitle: 'Large-Scale Enterprise Next.js & GraphQL Platform',
    description:
      'Enterprise royalty management portal enabling seamless artist and rights-holder royalty data access with 35% LCP speed improvements.',
    longDescription:
      'Developed and enhanced a large-scale royalty management platform for Universal Music Group (via Brillio) using Next.js 14, React 18, and GraphQL. Improved Largest Contentful Paint (LCP) by 35% through SSR/SSG caching strategies and built a reusable design system using Tailwind CSS and Zustand.',
    category: 'frontend',
    techStack: ['Next.js 14', 'React 18', 'GraphQL', 'TypeScript', 'Zustand', 'Tailwind CSS', 'AWS'],
    metrics: [
      { label: 'LCP Gain', value: '+35% Faster' },
      { label: 'Platform Availability', value: '99.9%' },
      { label: 'Design System', value: '30+ UI Components' },
    ],
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=85',
    liveDemoUrl: 'https://github.com/saisahith-kallepalli',
    githubUrl: 'https://github.com/saisahith-kallepalli',
    featured: true,
    order: 1,
  },
  {
    id: 'proj-2',
    slug: 'co-commerce-recommendation-engine',
    title: 'Co-Commerce Multi-Vendor Platform',
    subtitle: 'Data-Driven E-Commerce with 18% AOV Lift',
    description:
      'Multi-vendor eCommerce platform supporting 10,000+ SKUs with a real-time recommendation engine that increased average order value by 18%.',
    longDescription:
      'Engineered a multi-vendor eCommerce platform supporting 10,000+ SKUs and multi-currency transactions. Designed a data-driven recommendation engine using Node.js, Express, and MongoDB that boosted Average Order Value (AOV) by 18% and reduced operational errors by 30%.',
    category: 'ecommerce',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'Redux', 'AWS S3'],
    metrics: [
      { label: 'AOV Increase', value: '+18%' },
      { label: 'Supported SKUs', value: '10,000+' },
      { label: 'Operational Errors', value: '-30%' },
    ],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=85',
    liveDemoUrl: 'https://github.com/saisahith-kallepalli',
    githubUrl: 'https://github.com/saisahith-kallepalli',
    featured: true,
    order: 2,
  },
  {
    id: 'proj-3',
    slug: 'enterprise-ui-design-system',
    title: 'Enterprise Scalable Design System',
    subtitle: '30+ Reusable UI Architecture & Component Library',
    description:
      'Scalable enterprise design system comprising 30+ reusable UI components, reducing duplicate development effort by 40%.',
    longDescription:
      'Designed and implemented a reusable UI architecture and component library using Tailwind CSS, Zustand, and React 18 for Angular Minds enterprise clients. Standardized design tokens, improved accessibility compliance, and increased sprint productivity by 25%.',
    category: 'architecture',
    techStack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Storybook', 'Figma'],
    metrics: [
      { label: 'Effort Reduced', value: '40% Less Code' },
      { label: 'UI Components', value: '30+ Reusable' },
      { label: 'Sprint Velocity', value: '+25%' },
    ],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85',
    liveDemoUrl: 'https://github.com/saisahith-kallepalli',
    githubUrl: 'https://github.com/saisahith-kallepalli',
    featured: true,
    order: 3,
  },
  {
    id: 'proj-4',
    slug: 'e-sign-role-based-portal',
    title: 'Enterprise E-Sign Role-Based Portal',
    subtitle: 'Secure Digital Workflow & Document Platform',
    description:
      'Secure, role-based e-signature platform enabling document creation, e-sign workflows, template management, and subscription billing.',
    longDescription:
      'Built a full-stack SaaS solution enabling secure document workflows, cryptographic hash verification, email notifications, and automated recurring billing using Node.js, React, and MongoDB.',
    category: 'fullstack',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'Tailwind CSS'],
    metrics: [
      { label: 'Workflow Speed', value: '3x Faster' },
      { label: 'Defect Rate', value: '< 2%' },
      { label: 'Role Security', value: 'RBAC Active' },
    ],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85',
    liveDemoUrl: 'https://github.com/saisahith-kallepalli',
    githubUrl: 'https://github.com/saisahith-kallepalli',
    featured: true,
    order: 4,
  },
  {
    id: 'proj-5',
    slug: 'real-time-graphql-api-gateway',
    title: 'Real-Time Enterprise GraphQL API Gateway',
    subtitle: 'High-Availability Node.js & Microservices Layer',
    description:
      'Integrated real-time data solutions using GraphQL and REST APIs with high availability, robust error handling, and seamless multi-app interactions.',
    longDescription:
      'Architected a central GraphQL and Node.js microservices gateway handling high-throughput enterprise queries. Optimized MongoDB indexing and implemented caching strategies to maintain sub-50ms response times.',
    category: 'architecture',
    techStack: ['Node.js', 'Express.js', 'GraphQL', 'MongoDB', 'Redis', 'AWS ECS'],
    metrics: [
      { label: 'API Latency', value: '< 50ms' },
      { label: 'Availability', value: '99.9%' },
      { label: 'Data Sources', value: 'Unified' },
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85',
    liveDemoUrl: 'https://github.com/saisahith-kallepalli',
    githubUrl: 'https://github.com/saisahith-kallepalli',
    featured: false,
    order: 5,
  },
  {
    id: 'proj-6',
    slug: 'online-skills-assessment-saas',
    title: 'EdTech Online Skills Assessment Platform',
    subtitle: 'Multi-Tenant EdTech & Assessment Management SaaS',
    description:
      'Multi-tenant SaaS platform enabling assessment management, subscription administration, and cross-platform access with post-release defect rate below 2%.',
    longDescription:
      'Developed a scalable multi-tenant EdTech platform with automated testing pipelines and real-time grading analytics, reducing manual administration overhead by 40%.',
    category: 'fullstack',
    techStack: ['React Native', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'NativeBase'],
    metrics: [
      { label: 'Defect Rate', value: '< 2%' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Test Coverage', value: '85%' },
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85',
    liveDemoUrl: 'https://github.com/saisahith-kallepalli',
    githubUrl: 'https://github.com/saisahith-kallepalli',
    featured: false,
    order: 6,
  },
];

export const initialSkills: Skill[] = [
  // Frontend
  { id: 'sk-1', name: 'React.js (React 18)', category: 'frontend', level: 98, experienceYears: '5 yrs', highlight: 'SSR, SSG, Hooks & Performance' },
  { id: 'sk-2', name: 'Next.js 14 App Router', category: 'frontend', level: 95, experienceYears: '4 yrs', highlight: '35% LCP Gain & Dynamic Caching' },
  { id: 'sk-3', name: 'TypeScript & ES6+', category: 'frontend', level: 94, experienceYears: '5 yrs', highlight: 'Strict Type-Safe Systems' },
  { id: 'sk-4', name: 'Zustand & Redux State', category: 'frontend', level: 92, experienceYears: '5 yrs', highlight: 'Enterprise Global State' },
  { id: 'sk-5', name: 'Tailwind CSS & SASS', category: 'frontend', level: 96, experienceYears: '5 yrs', highlight: '30+ Component UI Design Systems' },

  // Backend
  { id: 'sk-6', name: 'Node.js & Express.js', category: 'backend', level: 94, experienceYears: '5 yrs', highlight: 'RESTful CRUD & Microservices' },
  { id: 'sk-7', name: 'GraphQL & REST APIs', category: 'backend', level: 92, experienceYears: '4 yrs', highlight: 'High-Availability Schema Resolvers' },
  { id: 'sk-8', name: 'JWT & RBAC Security', category: 'backend', level: 90, experienceYears: '4 yrs', highlight: 'Role-Based Access Control' },

  // Database & Cloud
  { id: 'sk-9', name: 'MongoDB & Mongoose', category: 'database', level: 94, experienceYears: '5 yrs', highlight: 'Indexing & Multi-Tenant Schema' },
  { id: 'sk-10', name: 'SQL & Relational DBs', category: 'database', level: 88, experienceYears: '3 yrs', highlight: 'IBM SQL Certified & Queries' },
  { id: 'sk-11', name: 'AWS Cloud Deployment', category: 'cloud', level: 86, experienceYears: '3 yrs', highlight: 'S3, CloudFront & ECS Deployment' },
  { id: 'sk-12', name: 'CI/CD & Jenkins / Webpack', category: 'cloud', level: 85, experienceYears: '4 yrs', highlight: 'Automated Release Pipelines' },

  // Architecture & DevOps
  { id: 'sk-13', name: 'Core Web Vitals (CWV / LCP)', category: 'architecture', level: 96, experienceYears: '4 yrs', highlight: 'SSR/SSG & Asset Optimization' },
  { id: 'sk-14', name: 'AI-Assisted Eng (Copilot/Cursor)', category: 'architecture', level: 95, experienceYears: '3 yrs', highlight: '25% Sprint Velocity Increase' },
  { id: 'sk-15', name: 'Automated Testing (Jest/Mocha)', category: 'architecture', level: 88, experienceYears: '4 yrs', highlight: '< 2% Post-Release Defect Rate' },
];

export const experienceTimeline: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Senior Software Engineer',
    company: 'Angular Minds',
    period: 'Dec 2021 — Present',
    location: 'Pune, India',
    description:
      'Leading front-end development initiatives for enterprise web applications using React 18, Next.js 14, GraphQL, and TypeScript, delivering scalable, high-performance, and user-centric digital experiences.',
    highlights: [
      'Improved Largest Contentful Paint (LCP) by 35% and reduced mobile Time-to-Interactive through SSR, SSG, and caching initiatives.',
      'Built a scalable design system comprising 30+ reusable UI components, reducing duplicate development effort by 40% and achieving 99.9% platform availability.',
      'Collaborating with Product Owners, UX teams, Back-end Engineers, and stakeholders in Agile environments, driving AI-assisted development tools to increase sprint productivity by 25%.',
    ],
    technologies: ['React 18', 'Next.js 14', 'TypeScript', 'GraphQL', 'Zustand', 'Tailwind CSS', 'Node.js'],
    type: 'work',
  },
  {
    id: 'exp-2',
    role: 'Senior Software Engineer (via Brillio)',
    company: 'Universal Music Group (UMG)',
    period: 'May 2024 — Jun 2026',
    location: 'Enterprise Client Project',
    description:
      'Developed and enhanced a large-scale royalty management platform enabling seamless artist and rights-holder royalty data access.',
    highlights: [
      'Spearheaded SSR/SSG performance optimization across high-volume royalty data dashboards.',
      'Implemented a scalable design system using Tailwind CSS and Zustand with instant filtering across enterprise record entries.',
    ],
    technologies: ['Next.js 14', 'React 18', 'GraphQL', 'AWS S3', 'Zustand', 'Node.js'],
    type: 'work',
  },
  {
    id: 'exp-3',
    role: 'Full Stack Software Engineer',
    company: 'Co-Commerce Platform & E-Sign Portal',
    period: 'Mar 2021 — Mar 2024',
    location: 'Hyderabad, India',
    description:
      'Engineered a multi-vendor eCommerce platform supporting 10,000+ SKUs and secure role-based e-signature document workflows.',
    highlights: [
      'Developed a recommendation engine that increased average order value by 18% and merchant tools that cut operational errors by 30%.',
      'Implemented secure cryptographic PDF signature workflows and automated recurring billing.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'Redux'],
    type: 'work',
  },
  {
    id: 'exp-4',
    role: 'Master of Computer Applications (MCA)',
    company: 'SRM Institute of Science & Technology',
    period: '2025',
    location: 'Tamil Nadu, India',
    description: 'Post-graduate specialization in Computer Applications, Advanced Software Architecture, and Enterprise Systems.',
    highlights: ['Focus on Cloud Computing, Full-Stack MERN Architecture, and Scalable Databases.'],
    technologies: ['Software Architecture', 'Cloud Computing', 'Database Engineering'],
    type: 'education',
  },
  {
    id: 'exp-5',
    role: 'Google AI & AWS Cloud Certified',
    company: 'Google / IBM / HCL GUVI',
    period: '2023 — 2026',
    location: 'Professional Certifications',
    description: 'Certified in Google AI (Apr 2026), IBM Databases and SQL for Data Science (Apr 2024), and AWS Cloud Deployment (May 2023).',
    highlights: ['Validated expertise in AI-assisted development, SQL database engineering, and AWS cloud deployment pipelines.'],
    technologies: ['Google AI', 'IBM SQL', 'AWS Cloud', 'Python'],
    type: 'certification',
  },
];

export const initialTestimonials: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Marcus Vance',
    role: 'VP of Engineering',
    company: 'Universal Music Enterprise (Brillio)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=85',
    content:
      'Sai Sahith transformed our royalty portal into a lightning-fast Next.js 14 application. The 35% LCP gain and his scalable component architecture made an immediate impact on stakeholder satisfaction.',
    rating: 5,
    projectRef: 'UMG Royalty Portal',
  },
  {
    id: 'test-2',
    clientName: 'Elena Rostova',
    role: 'Technical Product Owner',
    company: 'Angular Minds Enterprise Lead',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=85',
    content:
      'His mastery over the MERN stack and Next.js SSR/SSG is exceptional. The 30+ UI component design system he built reduced our team’s duplicate development effort by 40%.',
    rating: 5,
    projectRef: 'Enterprise UI Design System',
  },
  {
    id: 'test-3',
    clientName: 'David K. Sharma',
    role: 'Founder & CEO',
    company: 'Co-Commerce Retail Solutions',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=85',
    content:
      'The recommendation engine Sai built lifted our average order value by 18% in the first quarter. Reliable, proactive, and a true full-stack engineer.',
    rating: 5,
    projectRef: 'Co-Commerce Platform',
  },
];

export const initialBlogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'optimizing-lcp-in-nextjs-14-enterprise-apps',
    title: 'Achieving a 35% LCP Reduction in Next.js 14 with Hybrid SSR/SSG',
    excerpt:
      'A deep dive into caching strategies, asset optimization, and CDN edge headers for enterprise MERN and Next.js platforms.',
    date: 'July 2026',
    readTime: '8 min read',
    category: 'Performance',
    tags: ['Next.js 14', 'SSR', 'Core Web Vitals', 'Enterprise'],
    coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'blog-2',
    slug: 'building-scalable-design-systems-tailwind-zustand',
    title: 'Building a 30+ Component Enterprise UI Architecture & Design System',
    excerpt:
      'Designing reusable component libraries, standardizing design tokens, and cutting duplicate development effort by 40%.',
    date: 'June 2026',
    readTime: '6 min read',
    category: 'UI/UX Engineering',
    tags: ['Design System', 'Tailwind CSS', 'Zustand', 'Architecture'],
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'blog-3',
    slug: 'architecting-ecommerce-recommendation-engine-mern',
    title: 'Architecting a Real-Time Recommendation Engine in Node.js & MongoDB',
    excerpt:
      'How data-driven user experiences and optimized MongoDB indexing increased average order value by 18% across 10,000+ SKUs.',
    date: 'May 2026',
    readTime: '7 min read',
    category: 'Backend & APIs',
    tags: ['Node.js', 'MongoDB', 'Express.js', 'E-Commerce'],
    coverImage: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=85',
  },
];
