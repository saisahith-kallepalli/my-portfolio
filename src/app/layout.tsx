import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kallepalli Sai Sahith — Senior Full Stack Software Engineer (MERN & Next.js)',
  description:
    'Senior Full Stack Software Engineer with nearly 5 years of experience in MERN stack, Next.js 14, React 18, Node.js, GraphQL, and enterprise UI architecture. Based in Hyderabad, India.',
  keywords: [
    'Kallepalli Sai Sahith',
    'Full Stack Engineer',
    'Senior Software Engineer',
    'MERN Stack',
    'Next.js 14',
    'React 18',
    'Node.js',
    'GraphQL',
    'Enterprise Architecture',
    'Hyderabad Developer',
  ],
  authors: [{ name: 'Kallepalli Sai Sahith', url: 'https://github.com/saisahith-kallepalli' }],
  openGraph: {
    title: 'Kallepalli Sai Sahith — Senior Full Stack Software Engineer',
    description:
      'Explore enterprise case studies, Next.js 14 SSR/SSG architectures, and engineering achievements (+35% LCP speed gain, +18% eCommerce AOV lift).',
    url: 'https://github.com/saisahith-kallepalli',
    siteName: 'Sai Sahith Full Stack Engineering Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kallepalli Sai Sahith',
    jobTitle: 'Senior Full Stack Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Angular Minds',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'SRM Institute of Science & Technology',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      addressCountry: 'India',
    },
    email: 'saisahith.kallepalli.23@gmail.com',
    telephone: '+91-6300067347',
    url: 'https://github.com/saisahith-kallepalli',
    sameAs: [
      'https://github.com/saisahith-kallepalli',
      'https://linkedin.com/in/sai-sahith-kallepalli',
    ],
    knowsAbout: [
      'React.js',
      'Next.js',
      'Node.js',
      'MongoDB',
      'GraphQL',
      'TypeScript',
      'Tailwind CSS',
      'AWS',
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="ambient-glow-1" />
        <div className="ambient-glow-2" />
        <div className="ambient-glow-3" />
        {children}
      </body>
    </html>
  );
}
