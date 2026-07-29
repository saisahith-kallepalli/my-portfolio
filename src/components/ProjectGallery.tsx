'use client';

import React, { useState } from 'react';
import { Project, ProjectCategory } from '@/lib/types';
import { Sparkles, Eye, BarChart2 } from 'lucide-react';

interface ProjectGalleryProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export default function ProjectGallery({
  projects,
  onSelectProject,
}: ProjectGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Frontend & SSR', value: 'frontend' },
    { label: 'Full Stack MERN', value: 'fullstack' },
    { label: 'Architecture & UI', value: 'architecture' },
    { label: 'E-Commerce Platforms', value: 'ecommerce' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
          <span className="badge">
            <Sparkles size={14} />
            Projects
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}
        >
          <div>
            <h2 className="section-title">
              Full-Stack <span className="gradient-text">Project Gallery</span>
            </h2>
            <p className="section-subtitle" style={{ margin: 0 }}>
              Filter through scalable enterprise Next.js, Node.js, GraphQL, and eCommerce platforms engineered by Sai Sahith.
            </p>
          </div>

          {/* Filter Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.6rem',
              padding: '0.4rem',
              background: 'var(--color-bg-subtle)',
              borderRadius: '999px',
              border: '1px solid var(--color-border)',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                style={{
                  padding: '0.55rem 1.15rem',
                  borderRadius: '999px',
                  border: activeCategory === cat.value ? '1px solid var(--color-border)' : '1px solid transparent',
                  background:
                    activeCategory === cat.value
                      ? 'var(--color-text-primary)'
                      : 'transparent',
                  color: activeCategory === cat.value ? 'var(--color-bg-primary)' : 'var(--color-text-secondary)',
                  fontWeight: activeCategory === cat.value ? 700 : 500,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.25s, border-color 0.25s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-5px)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.35)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)';
              }}
            >
              {/* Card info */}
              <div
                style={{
                  padding: '2rem 1.75rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'inline-block',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '8px',
                      background: 'var(--color-bg-subtle)',
                      border: '1px solid var(--color-border)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: 'var(--color-text-primary)',
                      textTransform: 'uppercase',
                      marginBottom: '1rem',
                    }}
                  >
                    {project.category}
                  </div>
                  <h3
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'var(--color-text-primary)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      color: 'var(--color-text-secondary)',
                      fontSize: '0.9rem',
                      lineHeight: 1.55,
                      marginBottom: '1.25rem',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Highlight Metrics */}
                  {project.metrics && (
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.6rem',
                        marginBottom: '1.25rem',
                      }}
                    >
                      {project.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          style={{
                            padding: '0.35rem 0.7rem',
                            borderRadius: '8px',
                            background: 'var(--color-bg-subtle)',
                            border: '1px solid var(--color-border)',
                            fontSize: '0.76rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                          }}
                        >
                          <BarChart2 size={12} color="var(--color-accent-cyan)" />
                          <span style={{ fontWeight: 700, color: 'var(--color-text-primary)' }}>{metric.value}</span>
                          <span style={{ color: 'var(--color-text-muted)' }}>{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.4rem',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {project.techStack.map((t, tIdx) => (
                      <span key={tIdx} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectProject(project)}
                  className="btn-secondary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '0.75rem 1rem',
                  }}
                >
                  <Eye size={16} />
                  <span>Inspect Architecture &amp; Metrics</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
