'use client';

import React from 'react';
import { Project } from '@/lib/types';
import { X, Cpu, Sparkles } from 'lucide-react';

interface ShowreelModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ShowreelModal({ project, onClose }: ShowreelModalProps) {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(11, 12, 16, 0.88)',
        backdropFilter: 'blur(24px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '960px',
          maxHeight: '90vh',
          borderRadius: '28px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          border: '1px solid rgba(0, 242, 254, 0.35)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with badge and close button */}
        <div
          style={{
            padding: '1.5rem 2.25rem',
            borderBottom: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(11, 12, 16, 0.65)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="badge">
              <Sparkles size={14} />
              ENTERPRISE CASE STUDY ARCHITECTURE
            </span>
            <span
              style={{
                fontSize: '0.8rem',
                color: 'var(--color-text-muted)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              ID: {project.slug}
            </span>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid var(--color-border)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
            aria-label="Close Case Study"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal content area */}
        <div
          style={{
            padding: '2.5rem',
            overflowY: 'auto',
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '2.5rem',
          }}
        >
          {/* Left Column: Media Showcase & Architectural Details */}
          <div>
            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                background: 'rgba(0,0,0,0.5)',
                border: '1px solid var(--color-border)',
                marginBottom: '2rem',
                position: 'relative',
                height: '320px',
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>
              {project.title}
            </h3>
            <div
              style={{
                fontSize: '1rem',
                color: 'var(--color-accent-cyan)',
                fontWeight: 600,
                marginBottom: '1.25rem',
              }}
            >
              {project.subtitle}
            </div>

            <p
              style={{
                color: 'var(--color-text-secondary)',
                fontSize: '1rem',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}
            >
              {project.longDescription}
            </p>
          </div>

          {/* Right Column: Engineering Specs & Verified Metrics */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
            }}
          >
            {/* Verified Performance Metrics */}
            {project.metrics && (
              <div
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  borderRadius: '20px',
                  background: 'rgba(255,255,255,0.02)',
                }}
              >
                <h4
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <Cpu size={16} color="var(--color-accent-cyan)" />
                  Verified Business &amp; Performance Impact
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {project.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingBottom: '0.75rem',
                        borderBottom:
                          idx < project.metrics!.length - 1
                            ? '1px solid rgba(255,255,255,0.06)'
                            : 'none',
                      }}
                    >
                      <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.92rem' }}>
                        {m.label}
                      </span>
                      <span
                        style={{
                          fontWeight: 800,
                          color: 'var(--color-accent-cyan)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '1rem',
                        }}
                      >
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div
              className="glass-card"
              style={{
                padding: '1.75rem',
                borderRadius: '20px',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              <h4
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                Engineering Tech Stack
              </h4>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.techStack.map((t, i) => (
                  <span key={i} className="tech-tag" style={{ fontSize: '0.82rem' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions Bar */}
        <div
          style={{
            padding: '1.5rem 2.5rem',
            borderTop: '1px solid var(--color-border)',
            background: 'rgba(11, 12, 16, 0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '1rem',
          }}
        >
          <button onClick={onClose} className="btn-secondary">
            <span>Close Case Study</span>
          </button>


        </div>
      </div>
    </div>
  );
}
