'use client';

import React from 'react';
import { ArrowRight, Terminal, Sparkles, Award } from 'lucide-react';
import HeroCanvas from './3d/HeroCanvas';

export default function Hero() {
  return (
    <section
      id="intro"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '3rem',
          alignItems: 'center',
        }}
      >
        {/* Left Column: Typography & Metrics */}
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <span className="badge">
              <Sparkles size={14} />
              AVAILABLE FOR SENIOR FULL STACK &amp; MERN ENGINEERING
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.2vw, 4.3rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
              marginBottom: '1.5rem',
              color: '#fff',
            }}
          >
            Architecting Scalable Web &amp;{' '}
            <span className="gradient-text">High-Performance Enterprise</span> Apps.
          </h1>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.35vw, 1.25rem)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
              marginBottom: '2.5rem',
              maxWidth: '650px',
            }}
          >
            Senior Full Stack Software Engineer with nearly 5 years of experience designing and delivering scalable web and mobile applications using React 18, Next.js 14, Node.js, and MongoDB. Proven track record in performance optimization (+35% LCP reduction), SSR/SSG caching, and enterprise UI architecture.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.2rem',
              flexWrap: 'wrap',
              marginBottom: '3rem',
            }}
          >
            <a href="#projects" className="btn-primary">
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="btn-secondary">
              <Terminal size={17} />
              <span>Contact me</span>
            </a>
          </div>

          {/* Quick Stats Banner */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
              padding: '1.5rem',
              borderRadius: '18px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--color-border)',
              maxWidth: '580px',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  color: 'var(--color-accent-cyan)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                +35%
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
                LCP SPEED IMPROVEMENT
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  color: '#fff',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                +18%
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
                E-COMMERCE AOV LIFT
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  color: '#d1a3ff',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                30+
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
                UI ARCHITECTURE COMPONENTS
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive WebGL Ambient Sphere Visualization */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '540px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Glass Card Backdrop */}
          <div
            className="glass-card"
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '24px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <HeroCanvas />
          </div>

          {/* Floating UI Badges */}
          <div
            className="glass-card"
            style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '1.5rem',
              padding: '0.75rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '0.8rem',
              fontWeight: 600,
            }}
          >
            <Award size={16} color="var(--color-accent-cyan)" />
            <span>Google AI &amp; IBM SQL Certified</span>
          </div>

          <div
            className="glass-card"
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              padding: '0.6rem 1rem',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--color-accent-cyan)',
            }}
          >
            FULL STACK MERN SPECIALIST
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 950px) {
          .container {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .btn-primary,
          .btn-secondary {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
