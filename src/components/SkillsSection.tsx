'use client';

import React, { useState } from 'react';
import { Skill } from '@/lib/types';
import { Sparkles, Terminal, CheckCircle2, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SkillGlobeCanvas from './3d/SkillGlobeCanvas';

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(skills[0] || null);

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

  const handleSelectSkillById = (skillId: string) => {
    const found = skills.find((s) => s.id === skillId);
    if (found) setSelectedSkill(found);
  };

  return (
    <section id="skills" className="section" style={{ position: 'relative', paddingTop: '3rem', paddingBottom: '5rem' }}>
      <div className="container" style={{ maxWidth: '1260px', margin: '0 auto' }}>
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
            marginBottom: '2.5rem',
          }}
        >
          <div>
            <h2 className="section-title">
              Engineering <span className="gradient-text">Skills Matrix</span>.
            </h2>
            <p className="section-subtitle" style={{ margin: 0 }}>
              Interactive proficiencies across the MERN stack, Next.js 14 SSR/SSG, TypeScript, GraphQL, and AWS Cloud deployment.
            </p>
          </div>

          {/* Category Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              background: 'var(--color-bg-surface)',
              padding: '0.4rem',
              borderRadius: '999px',
              border: '1px solid var(--color-border)',
            }}
          >
            {categories.map((cat) => {
              const isActive = activeTab === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => {
                    setActiveTab(cat.value);
                    const newFiltered =
                      cat.value === 'all'
                        ? skills
                        : skills.filter((s) => s.category === cat.value);
                    if (newFiltered.length > 0) {
                      setSelectedSkill(newFiltered[0]);
                    }
                  }}
                  style={{
                    padding: '0.5rem 1.25rem',
                    borderRadius: '999px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    background: isActive ? 'var(--color-accent-cyan)' : 'transparent',
                    color: isActive ? '#0b0c10' : 'var(--color-text-secondary)',
                    border: 'none',
                    transition: 'all 0.25s ease',
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Rotating Globe Animation with Orbiting Skill Badges */}
        <div style={{ marginBottom: '3.5rem' }}>
          <SkillGlobeCanvas
            skills={filteredSkills}
            selectedSkillId={selectedSkill?.id || ''}
            onSelectSkill={handleSelectSkillById}
          />
        </div>

        {/* Interactive Engineering Skills Matrix Boxes */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3.5rem',
          }}
        >
          {filteredSkills.map((skill) => {
            const isSelected = selectedSkill?.id === skill.id;

            return (
              <motion.div
                key={skill.id}
                onClick={() => setSelectedSkill(skill)}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 1.02 }}
                className="glass-card"
                style={{
                  cursor: 'pointer',
                  padding: '1.75rem',
                  borderRadius: '18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  background: isSelected
                    ? 'linear-gradient(135deg, rgba(0, 242, 254, 0.16) 0%, rgba(127, 0, 255, 0.2) 100%)'
                    : 'var(--color-bg-card)',
                  border: isSelected
                    ? '2px solid var(--color-accent-cyan)'
                    : '1px solid var(--color-border)',
                  boxShadow: isSelected
                    ? '0 0 35px rgba(0, 242, 254, 0.35)'
                    : '0 8px 30px rgba(0, 0, 0, 0.3)',
                  transition: 'background 0.25s, border-color 0.25s, box-shadow 0.25s',
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
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: isSelected ? 'rgba(0, 242, 254, 0.2)' : 'rgba(0, 242, 254, 0.1)',
                        border: '1px solid rgba(0, 242, 254, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-accent-cyan)',
                      }}
                    >
                      <Terminal size={19} />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: isSelected ? '1.2rem' : '1.1rem',
                          fontWeight: 800,
                          color: '#fff',
                          marginBottom: '0.15rem',
                          transition: 'font-size 0.2s ease',
                          textShadow: isSelected ? '0 0 12px rgba(0, 242, 254, 0.5)' : 'none',
                        }}
                      >
                        {skill.name}
                      </h3>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          color: isSelected ? '#00f2fe' : 'var(--color-text-muted)',
                          textTransform: 'uppercase',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 700,
                        }}
                      >
                        {skill.experienceYears} EXPERIENCE
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      color: isSelected ? '#00f2fe' : 'var(--color-accent-cyan)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {skill.level}%
                  </div>
                </div>

                {/* Progress Bar */}
                <div
                  style={{
                    width: '100%',
                    height: '7px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '999px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${skill.level}%`,
                      height: '100%',
                      background: isSelected
                        ? 'linear-gradient(90deg, #00f2fe, #fff)'
                        : 'linear-gradient(90deg, var(--color-accent-cyan), var(--color-accent-violet))',
                      borderRadius: '999px',
                      transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  />
                </div>

                {/* Highlight text inside Engineering Skills Matrix box */}
                {skill.highlight && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.82rem',
                      color: isSelected ? '#ffffff' : 'var(--color-text-secondary)',
                      fontWeight: 600,
                      background: isSelected ? 'rgba(0, 242, 254, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                      padding: '0.45rem 0.75rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <CheckCircle2 size={15} color="var(--color-accent-cyan)" />
                    <span>{skill.highlight}</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Selected Engineering Skill - Architectural Deep Dive Card */}
        {selectedSkill && (
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSkill.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="glass-card"
              style={{
                padding: '2.5rem',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, rgba(22, 25, 38, 0.85) 0%, rgba(11, 12, 16, 0.95) 100%)',
                border: '1px solid var(--color-border-glow)',
                boxShadow: '0 0 45px rgba(0, 242, 254, 0.2)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                  borderBottom: '1px solid var(--color-border)',
                  paddingBottom: '1.2rem',
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '0.82rem',
                      color: 'var(--color-accent-cyan)',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                    }}
                  >
                    SPECIALIST COMPETENCY &amp; ARCHITECTURE
                  </span>
                  <h3
                    style={{
                      fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                      fontWeight: 800,
                      color: '#ffffff',
                      margin: '0.3rem 0 0',
                    }}
                  >
                    {selectedSkill.name}
                  </h3>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                  }}
                >
                  <span className="badge" style={{ backgroundColor: 'rgba(0, 242, 254, 0.12)' }}>
                    <Award size={14} />
                    {selectedSkill.experienceYears} Experience
                  </span>
                  <span className="badge" style={{ backgroundColor: 'rgba(127, 0, 255, 0.15)' }}>
                    Proficiency: {selectedSkill.level}%
                  </span>
                </div>
              </div>

              <p
                style={{
                  fontSize: '1.1rem',
                  color: '#e0e0e0',
                  lineHeight: 1.7,
                  marginBottom: '1.8rem',
                }}
              >
                Demonstrated senior engineering proficiency in <strong style={{ color: '#fff' }}>{selectedSkill.name}</strong> ({selectedSkill.category.toUpperCase()}). Applied across enterprise MERN stacks, microservices, SSR/SSG caching, and high-concurrency client applications.
              </p>

              {selectedSkill.highlight && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'var(--color-accent-cyan)',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                  }}
                >
                  <CheckCircle2 size={18} />
                  <span>Key Architectural Highlight: {selectedSkill.highlight}</span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
