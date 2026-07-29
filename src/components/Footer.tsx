'use client';

import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--color-bg-surface)',
        borderTop: '1px solid var(--color-border)',
        padding: '4rem 0 2.5rem',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          {/* Left Brand */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontWeight: 800,
                fontSize: '1.2rem',
                color: 'var(--color-text-primary)',
                marginBottom: '0.5rem',
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'var(--color-text-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-bg-primary)',
                  fontWeight: 900,
                  fontSize: '0.9rem',
                }}
              >
                KS
              </div>
              <span>KALLEPALLI SAI SAHITH</span>
            </div>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem', margin: 0 }}>
              Senior Full Stack Software Engineer • MERN Stack &amp; Next.js 14 Specialist • Hyderabad, India
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="https://github.com/saisahith-kallepalli"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--color-bg-subtle)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-primary)',
                textDecoration: 'none',
              }}
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>

            <a
              href="https://linkedin.com/in/sai-sahith-kallepalli"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--color-bg-subtle)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-primary)',
                textDecoration: 'none',
              }}
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              href="mailto:saisahith.kallepalli.23@gmail.com"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--color-bg-subtle)',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-text-primary)',
                textDecoration: 'none',
              }}
              aria-label="Send Email"
            >
              <Mail size={18} />
            </a>

            <button
              onClick={scrollToTop}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--color-accent-cyan)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-bg-primary)',
                cursor: 'pointer',
                marginLeft: '0.5rem',
              }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Copyright Line */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid var(--color-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'var(--color-text-muted)',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} KALLEPALLI Sai Sahith. All rights reserved. Crafted with Next.js 14 &amp; React 18.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Core Web Vitals Optimized</span>
            <span>WCAG 2.1 AA Compliant</span>
            <span>Enterprise SSR/SSG Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
