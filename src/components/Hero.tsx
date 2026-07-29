'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Sparkles, Award, Download, Cpu, Database, Layout } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ROLES = [
  'SENIOR FULL STACK ENGINEER',
  'SOFTWARE ENGINEER',
  'MERN & NEXT.JS SPECIALIST',
  'CLOUD & DATABASE ARCHITECT',
  'UI/UX ENGINEERING EXPERT',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText.length < currentRole.length) {
      // Typing characters
      timer = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 70);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      // Pause before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting characters
      timer = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      }, 35);
    } else if (isDeleting && displayText.length === 0) {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="intro"
      style={{
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '7rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Background ambient glow circles */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '750px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0,242,254,0.12) 0%, rgba(127,0,255,0.08) 50%, rgba(0,0,0,0) 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1050px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1.8rem',
          }}
        >
          <span className="badge">
            <Sparkles size={14} />
            AVAILABLE FOR SENIOR FULL STACK &amp; MERN ENGINEERING
          </span>
        </motion.div>

        {/* Main Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-0.04em',
            marginBottom: '1rem',
            color: '#ffffff',
            width: '100%',
          }}
        >
          SAI SAHITH <span className="gradient-text">Kallepalli</span>
        </motion.h1>

        {/* Dynamic Typewriter Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            minHeight: '3.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 2.2rem)',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
              color: 'var(--color-accent-cyan)',
              textShadow: '0 0 20px rgba(0, 242, 254, 0.45)',
              letterSpacing: '0.04em',
            }}
          >
            {displayText}
            <span
              style={{
                display: 'inline-block',
                width: '3px',
                height: '1.1em',
                backgroundColor: '#ffffff',
                marginLeft: '6px',
                verticalAlign: 'middle',
                animation: 'cursorBlink 1s infinite',
              }}
            />
          </div>
        </motion.div>

        {/* Full-Width Centered Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            fontSize: 'clamp(1.08rem, 1.45vw, 1.28rem)',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            marginBottom: '2.8rem',
            maxWidth: '850px',
            width: '100%',
          }}
        >
          Senior Full Stack Software Engineer with nearly 5 years of experience architecting high-performance web &amp; enterprise applications using <strong style={{ color: '#fff' }}>React 18</strong>, <strong style={{ color: '#fff' }}>Next.js 14</strong>, <strong style={{ color: '#fff' }}>Node.js</strong>, and <strong style={{ color: '#fff' }}>MongoDB</strong>. Proven track record in performance optimization (+35% LCP reduction), SSR/SSG caching, and scalable UI architecture.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
            marginBottom: '4rem',
            width: '100%',
          }}
        >
          <a href="#projects" className="btn-primary" style={{ padding: '0.85rem 2.2rem', fontSize: '1rem' }}>
            <span>Explore Projects</span>
            <ArrowRight size={19} />
          </a>

          <a href="#contact" className="btn-secondary" style={{ padding: '0.85rem 2.2rem', fontSize: '1rem' }}>
            <Terminal size={18} />
            <span>Contact me</span>
          </a>

          <a
            href="/kallepalli-sai-sahith-resume.pdf"
            download="Kallepalli_Sai_Sahith_Resume.pdf"
            className="btn-secondary"
            style={{ padding: '0.85rem 1.8rem', fontSize: '1rem', borderColor: 'var(--color-accent-cyan)' }}
          >
            <Download size={18} />
            <span>Download CV</span>
          </a>
        </motion.div>

        {/* Full-Width Metrics & Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '1.5rem',
            width: '100%',
            maxWidth: '960px',
          }}
        >
          <div className="glass-card" style={{ padding: '1.6rem', textAlign: 'center', borderRadius: '16px' }}>
            <div
              style={{
                fontSize: '2.2rem',
                fontWeight: 800,
                color: 'var(--color-accent-cyan)',
                fontFamily: 'var(--font-mono)',
              }}
            >
              +35%
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', fontWeight: 700, marginTop: '0.4rem' }}>
              LCP SPEED IMPROVEMENT
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1.6rem', textAlign: 'center', borderRadius: '16px' }}>
            <div
              style={{
                fontSize: '2.2rem',
                fontWeight: 800,
                color: '#ffffff',
                fontFamily: 'var(--font-mono)',
              }}
            >
              +18%
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', fontWeight: 700, marginTop: '0.4rem' }}>
              USER RETENTION LIFT
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1.6rem', textAlign: 'center', borderRadius: '16px' }}>
            <div
              style={{
                fontSize: '2.2rem',
                fontWeight: 800,
                color: '#d1a3ff',
                fontFamily: 'var(--font-mono)',
              }}
            >
              99.9%
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', fontWeight: 700, marginTop: '0.4rem' }}>
              ENTERPRISE SLA &amp; UPTIME
            </div>
          </div>

          <div className="glass-card" style={{ padding: '1.6rem', textAlign: 'center', borderRadius: '16px' }}>
            <div
              style={{
                fontSize: '2.2rem',
                fontWeight: 800,
                color: '#4facfe',
                fontFamily: 'var(--font-mono)',
              }}
            >
              30+
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', fontWeight: 700, marginTop: '0.4rem' }}>
              UI DESIGN SYSTEM COMPONENTS
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes cursorBlink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
