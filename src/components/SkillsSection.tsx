'use client';

import React, { useState } from 'react';
import { Skill } from '@/lib/types';
import { Sparkles, Terminal, CheckCircle2 } from 'lucide-react';

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { label: 'All Competencies', value: 'all' },
    { label: 'Frontend Technologies', value: 'frontend' },
    { label: 'Backend & APIs', value: 'backend' },
    { label: 'Database & Cloud', value: 'database' },
    { label: 'Architecture & DevOps', value: 'architecture' },
  ];

  const filteredSkills =
    activeTab === 'all'
      ? skills
      : skills.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
          <span className="badge">
            <Sparkles size={14} />
            TECHNICAL PROFICIENCY &amp; CERTIFICATIONS
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
              Engineering <span className="gradient-text">Skills Matrix</span>.
            </h2>
            <p className="section-subtitle" style={{ margin: 0 }}>
              Proficiencies across the MERN stack, Next.js 14 SSR/SSG, TypeScript, GraphQL, and AWS Cloud deployment.
            </p>
          </div>

          {/* Category Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              padding: '0.35rem',
              background: 'rgba(0,0,0,0.4)',
              borderRadius: '999px',
              border: '1px solid var(--color-border)',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveTab(cat.value)}
                style={{
                  padding: '0.55rem 1.15rem',
                  borderRadius: '999px',
                  border: 'none',
                  background:
                    activeTab === cat.value
                      ? 'linear-gradient(135deg, var(--color-accent-cyan), var(--color-accent-violet))'
                      : 'transparent',
                  color: activeTab === cat.value ? '#0b0c10' : 'var(--color-text-secondary)',
                  fontWeight: activeTab === cat.value ? 700 : 500,
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

        {/* Skills Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="glass-card"
              style={{
                padding: '1.75rem',
                borderRadius: '18px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'border-color 0.25s, transform 0.25s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0, 242, 254, 0.4)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(0, 242, 254, 0.1)',
                      border: '1px solid rgba(0, 242, 254, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-accent-cyan)',
                    }}
                  >
                    <Terminal size={18} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: '#fff',
                        marginBottom: '0.15rem',
                      }}
                    >
                      {skill.name}
                    </h3>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--color-text-muted)',
                        textTransform: 'uppercase',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {skill.experienceYears} EXPERIENCE
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: 'var(--color-accent-cyan)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {skill.level}%
                </div>
              </div>

              {/* Animated Progress Bar */}
              <div
                style={{
                  width: '100%',
                  height: '8px',
                  background: 'rgba(255,255,255,0.06)',
                  borderRadius: '999px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${skill.level}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, var(--color-accent-cyan), var(--color-accent-violet))',
                    borderRadius: '999px',
                    boxShadow: '0 0 10px rgba(0, 242, 254, 0.5)',
                  }}
                />
              </div>

              {/* Highlight Badge */}
              {skill.highlight && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.8rem',
                    color: 'var(--color-text-secondary)',
                    marginTop: '0.2rem',
                  }}
                >
                  <CheckCircle2 size={14} color="var(--color-accent-cyan)" />
                  <span>{skill.highlight}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
