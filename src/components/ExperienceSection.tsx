'use client';

import React, { useState } from 'react';
import { ExperienceItem } from '@/lib/types';
import { Briefcase, GraduationCap, Award, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'exp-1': true,
    'exp-2': true,
  });

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="experience" className="section">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
          <span className="badge">
            <Briefcase size={14} />
            CAREER TIMELINE &amp; ENTERPRISE EXPERIENCE
          </span>
        </div>

        <h2 className="section-title">
          Professional <span className="gradient-text">Journey</span> &amp; Leadership.
        </h2>
        <p className="section-subtitle">
          Proven track record of delivering business-impacting solutions in Agile environments, mentoring engineering teams, and building scalable enterprise MERN and Next.js architectures.
        </p>

        {/* Vertical Timeline */}
        <div
          style={{
            position: 'relative',
            maxWidth: '920px',
            margin: '0 auto',
            borderLeft: '2px solid rgba(0, 242, 254, 0.25)',
            paddingLeft: '2rem',
          }}
        >
          {experience.map((item) => {
            const isExpanded = expandedIds[item.id] || false;
            return (
              <div
                key={item.id}
                style={{
                  position: 'relative',
                  marginBottom: '2.5rem',
                }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-2.55rem',
                    top: '0.25rem',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background:
                      item.type === 'work'
                        ? 'var(--color-accent-cyan)'
                        : item.type === 'education'
                          ? 'var(--color-accent-violet)'
                          : '#fff',
                    border: '3px solid #0b0c10',
                    boxShadow: '0 0 10px var(--color-accent-cyan)',
                  }}
                />

                <div
                  className="glass-card"
                  style={{
                    padding: '2rem',
                    cursor: 'pointer',
                  }}
                  onClick={() => toggleExpand(item.id)}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '1rem',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <div>
                      <span
                        className="badge"
                        style={{
                          marginBottom: '0.5rem',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                        }}
                      >
                        {item.type === 'work' ? (
                          <Briefcase size={13} />
                        ) : item.type === 'education' ? (
                          <GraduationCap size={13} />
                        ) : (
                          <Award size={13} />
                        )}
                        {item.period}
                      </span>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff' }}>
                        {item.role}
                      </h3>
                      <div style={{ color: 'var(--color-accent-cyan)', fontWeight: 600 }}>
                        {item.company} <span style={{ color: 'var(--color-text-muted)' }}>• {item.location}</span>
                      </div>
                    </div>

                    <button
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid var(--color-border)',
                        color: '#fff',
                        padding: '0.5rem',
                        borderRadius: '8px',
                        cursor: 'pointer',
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(item.id);
                      }}
                      aria-label="Toggle experience detail"
                    >
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                  </div>

                  <p
                    style={{
                      color: 'var(--color-text-secondary)',
                      fontSize: '0.98rem',
                      lineHeight: 1.7,
                      marginBottom: isExpanded ? '1.25rem' : '0.5rem',
                    }}
                  >
                    {item.description}
                  </p>

                  {isExpanded && (
                    <div style={{ marginTop: '1.25rem' }}>
                      {/* Highlights */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.25rem' }}>
                        {item.highlights.map((h, i) => (
                          <div
                            key={i}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.75rem',
                              color: 'var(--color-text-primary)',
                              fontSize: '0.92rem',
                            }}
                          >
                            <CheckCircle2
                              size={17}
                              color="var(--color-accent-cyan)"
                              style={{ flexShrink: 0, marginTop: '2px' }}
                            />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech stack badges */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                        {item.technologies.map((t, idx) => (
                          <span
                            key={idx}
                            style={{
                              fontSize: '0.78rem',
                              color: 'var(--color-text-secondary)',
                              background: 'rgba(255,255,255,0.05)',
                              border: '1px solid var(--color-border)',
                              padding: '0.25rem 0.75rem',
                              borderRadius: '6px',
                              fontFamily: 'var(--font-mono)',
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
