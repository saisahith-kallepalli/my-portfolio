'use client';

import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Intro', href: '#intro' },
    { label: 'Featured Apps', href: '#featured' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills Matrix', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Technical Blog', href: '#insights' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className="glass-navbar"
      style={{
        padding: scrolled ? '0.8rem 0' : '1.25rem 0',
        boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.15)' : 'none',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Logo / Name */}
        <a
          href="#intro"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontWeight: 800,
            fontSize: '1.25rem',
            letterSpacing: '-0.03em',
            color: 'var(--color-text-primary)',
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'var(--color-bg-surface)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-text-primary)',
              fontWeight: 900,
            }}
          >
            KS
          </div>
          <div>
            <span>SAI SAHITH</span>
            <span
              style={{
                display: 'block',
                fontSize: '0.68rem',
                fontWeight: 600,
                color: 'var(--color-text-secondary)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              SENIOR FULL STACK ENGINEER
            </span>
          </div>
        </a>

        {/* Right side: Nav links + Theme Toggle + Download CV */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <ThemeToggle />

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.75rem',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  color: 'var(--color-text-secondary)',
                  fontSize: '0.92rem',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--color-text-primary)')}
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = 'var(--color-text-secondary)')
                }
              >
                {link.label}
              </a>
            ))}

            <a
              href="/kallepalli-sai-sahith-resume.pdf"
              download="Kallepalli_Sai_Sahith_Resume.pdf"
              className="btn-primary"
              style={{ padding: '0.65rem 1.3rem', fontSize: '0.88rem' }}
            >
              <Download size={15} />
              <span>Download CV</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-text-primary)',
              cursor: 'pointer',
              display: 'none',
            }}
            aria-label="Toggle mobile menu"
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Responsive Styles via Style block */}
      <style jsx>{`
        @media (max-width: 950px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(11, 12, 16, 0.98)',
            borderBottom: '1px solid var(--color-border)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: '#fff',
                fontSize: '1.05rem',
                fontWeight: 600,
                padding: '0.5rem 0',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/kallepalli-sai-sahith-resume.pdf"
            download="Kallepalli_Sai_Sahith_Resume.pdf"
            className="btn-primary"
            style={{ justifyContent: 'center', marginTop: '0.5rem' }}
          >
            <Download size={16} />
            <span>Download Full Resume</span>
          </a>
        </div>
      )}
    </header>
  );
}
