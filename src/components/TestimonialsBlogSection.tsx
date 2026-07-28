'use client';

import React, { useState } from 'react';
import { Testimonial, BlogPost } from '@/lib/types';
import { Sparkles, Star, ArrowRight, Quote, Calendar, Clock, BookOpen } from 'lucide-react';

interface TestimonialsBlogSectionProps {
  testimonials: Testimonial[];
  blogPosts: BlogPost[];
}

export default function TestimonialsBlogSection({
  testimonials,
  blogPosts,
}: TestimonialsBlogSectionProps) {
  const [activeTab, setActiveTab] = useState<'testimonials' | 'blog'>('blog');

  return (
    <section id="insights" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
          <span className="badge">
            <Sparkles size={14} />
            ENGINEERING INSIGHTS &amp; ARCHITECTURE BLOG
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
              Engineering Insights &amp; <span className="gradient-text">Technical Writing</span>.
            </h2>
            <p className="section-subtitle" style={{ margin: 0 }}>
              Read technical articles on Next.js 14 LCP optimization, design systems, and MERN architecture.
            </p>
          </div>

          {/* Tab Switcher */}
          <div
            style={{
              display: 'flex',
              padding: '0.4rem',
              background: 'rgba(0,0,0,0.5)',
              borderRadius: '999px',
              border: '1px solid var(--color-border)',
              gap: '0.5rem',
            }}
          >
            {/* Stakeholder Testimonials button hidden for now
            <button
              onClick={() => setActiveTab('testimonials')}
              style={{
                padding: '0.65rem 1.4rem',
                borderRadius: '999px',
                border: 'none',
                background:
                  activeTab === 'testimonials'
                    ? 'linear-gradient(135deg, var(--color-accent-cyan), var(--color-accent-violet))'
                    : 'transparent',
                color: activeTab === 'testimonials' ? '#0b0c10' : 'var(--color-text-secondary)',
                fontWeight: activeTab === 'testimonials' ? 700 : 500,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Stakeholder Testimonials ({testimonials.length})
            </button>
            */}
            <button
              onClick={() => setActiveTab('blog')}
              style={{
                padding: '0.65rem 1.4rem',
                borderRadius: '999px',
                border: 'none',
                background:
                  activeTab === 'blog'
                    ? 'linear-gradient(135deg, var(--color-accent-cyan), var(--color-accent-violet))'
                    : 'transparent',
                color: activeTab === 'blog' ? '#0b0c10' : 'var(--color-text-secondary)',
                fontWeight: activeTab === 'blog' ? 700 : 500,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Technical Articles ({blogPosts.length})
            </button>
          </div>
        </div>

        {/* TESTIMONIALS TAB */}
        {activeTab === 'testimonials' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2rem',
            }}
          >
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="glass-card"
                style={{
                  padding: '2.5rem',
                  borderRadius: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1.5rem',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.5rem',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '0.25rem' }}>
                      {Array.from({ length: test.rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          fill="var(--color-accent-cyan)"
                          color="var(--color-accent-cyan)"
                        />
                      ))}
                    </div>
                    <Quote size={28} color="rgba(255,255,255,0.15)" />
                  </div>

                  <p
                    style={{
                      color: '#fff',
                      fontSize: '1.02rem',
                      lineHeight: 1.65,
                      fontStyle: 'italic',
                      marginBottom: '0',
                    }}
                  >
                    &ldquo;{test.content}&rdquo;
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid var(--color-border)',
                  }}
                >
                  <img
                    src={test.avatar}
                    alt={test.clientName}
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid var(--color-accent-cyan)',
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 700, color: '#fff', fontSize: '1rem' }}>
                      {test.clientName}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                      {test.role} • {test.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TECHNICAL BLOG ARTICLES TAB */}
        {activeTab === 'blog' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2.25rem',
            }}
          >
            {blogPosts.map((post) => (
              <div
                key={post.id}
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
                <div
                  style={{
                    position: 'relative',
                    height: '210px',
                    background: 'rgba(0,0,0,0.5)',
                  }}
                >
                  <img
                    src={post.coverImage}
                    alt={post.title}
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
                      padding: '0.35rem 0.85rem',
                      borderRadius: '999px',
                      background: 'rgba(11,12,16,0.85)',
                      border: '1px solid var(--color-border)',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      color: 'var(--color-accent-cyan)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {post.category}
                  </div>
                </div>

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
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        fontSize: '0.78rem',
                        color: 'var(--color-text-muted)',
                        marginBottom: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Calendar size={13} />
                        <span>{post.date}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Clock size={13} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3
                      style={{
                        fontSize: '1.35rem',
                        fontWeight: 700,
                        color: '#fff',
                        marginBottom: '0.75rem',
                        lineHeight: 1.35,
                      }}
                    >
                      {post.title}
                    </h3>
                    <p
                      style={{
                        color: 'var(--color-text-secondary)',
                        fontSize: '0.92rem',
                        lineHeight: 1.6,
                        marginBottom: '1.5rem',
                      }}
                    >
                      {post.excerpt}
                    </p>
                  </div>

                  <div>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.4rem',
                        marginBottom: '1.5rem',
                      }}
                    >
                      {post.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="tech-tag">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={`#blog-${post.slug}`}
                      className="btn-secondary"
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        padding: '0.75rem 1rem',
                      }}
                    >
                      <BookOpen size={16} />
                      <span>Read Engineering Article</span>
                      <ArrowRight size={15} style={{ marginLeft: 'auto' }} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
