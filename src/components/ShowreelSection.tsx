'use client';

import React from 'react';
import { Project } from '@/lib/types';
import { Sparkles, ArrowRight, ExternalLink, Cpu, CheckCircle2 } from 'lucide-react';

interface ShowreelSectionProps {
  featuredProjects: Project[];
  onSelectProject: (project: Project) => void;
}

export default function ShowreelSection({
  featuredProjects,
  onSelectProject,
}: ShowreelSectionProps) {
  // Select top featured fullstack/ecommerce enterprise projects
  const flagshipProjects = featuredProjects.slice(0, 3);

  return (
    <section id="featured" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
          <span className="badge">
            <Sparkles size={14} />
            FLAGSHIP ENTERPRISE CASE STUDIES
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '3.5rem',
          }}
        >
          <div>
            <h2 className="section-title">
              High-Performance <span className="gradient-text">MERN &amp; Next.js</span> Platforms.
            </h2>
            <p className="section-subtitle" style={{ margin: 0 }}>
              Delivering business-impacting enterprise solutions with 99.9% availability, SSR/SSG caching, and scalable design systems.
            </p>
          </div>

          <a href="#projects" className="btn-secondary" style={{ padding: '0.75rem 1.4rem' }}>
            <span>Explore All Projects</span>
            <ArrowRight size={17} />
          </a>
        </div>

        {/* Flagship Case Studies Showcase Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {flagshipProjects.map((project, idx) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s, border-color 0.3s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0, 242, 254, 0.4)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)';
              }}
            >
              {/* Card Image Banner */}
              <div
                style={{
                  position: 'relative',
                  height: '240px',
                  background: 'rgba(0,0,0,0.4)',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.85,
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '999px',
                    background: 'rgba(11, 12, 16, 0.85)',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--color-accent-cyan)',
                    textTransform: 'uppercase',
                  }}
                >
                  {project.category}
                </div>
              </div>

              {/* Card Content */}
              <div
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--color-text-muted)',
                      marginBottom: '0.4rem',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    CASE STUDY #{idx + 1}
                  </div>
                  <h3
                    style={{
                      fontSize: '1.45rem',
                      fontWeight: 700,
                      color: '#fff',
                      marginBottom: '0.6rem',
                      lineHeight: 1.25,
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      color: 'var(--color-text-secondary)',
                      fontSize: '0.92rem',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem',
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Metrics Badges */}
                  {project.metrics && (
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.75rem',
                        marginBottom: '1.5rem',
                      }}
                    >
                      {project.metrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          style={{
                            padding: '0.45rem 0.8rem',
                            borderRadius: '10px',
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid var(--color-border)',
                            fontSize: '0.78rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                          }}
                        >
                          <CheckCircle2 size={13} color="var(--color-accent-cyan)" />
                          <span style={{ fontWeight: 700, color: '#fff' }}>{metric.value}</span>
                          <span style={{ color: 'var(--color-text-muted)' }}>{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.45rem',
                      marginBottom: '1.75rem',
                    }}
                  >
                    {project.techStack.map((t, tIdx) => (
                      <span key={tIdx} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal action button */}
                <button
                  onClick={() => onSelectProject(project)}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '0.85rem 1rem',
                  }}
                >
                  <Cpu size={16} />
                  <span>Inspect Enterprise Case Study</span>
                  <ExternalLink size={15} style={{ marginLeft: 'auto' }} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
