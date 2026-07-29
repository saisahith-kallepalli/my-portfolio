'use client';

import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle2, Sparkles, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons/SocialIcons';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const resData = await response.json();

      if (!response.ok || !resData.success) {
        throw new Error(resData.error || 'Failed to submit inquiry.');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'An error occurred. Please try emailing directly.'
      );
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
          <span className="badge">
            <Sparkles size={14} />
            LET&rsquo;S CONNECT &amp; WORK TOGETHER
          </span>
        </div>

        <h2 className="section-title">
          Let&rsquo;s Build <span className="gradient-text">Something Extraordinary</span>.
        </h2>
        <p className="section-subtitle">
          Whether you need a senior full-stack MERN engineer, a scalable UI design system architect, or a Next.js performance consultant — get in touch.
        </p>

        <div className="grid-2" style={{ alignItems: 'flex-start', gap: '3rem' }}>
          {/* Left Column: Direct Profile Details */}
          <div>
            <div className="glass-card" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '1.5rem' }}>
                Direct Contact Information
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <a
                  href="mailto:saisahith.kallepalli.23@gmail.com"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    textDecoration: 'none',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'var(--color-bg-subtle)',
                      border: '1px solid var(--color-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                      EMAIL ME DIRECTLY
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '1rem' }}>
                      saisahith.kallepalli.23@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+916300067347"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    textDecoration: 'none',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'var(--color-bg-subtle)',
                      border: '1px solid var(--color-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                      PHONE NUMBER
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '1rem' }}>
                      +91-6300067347
                    </div>
                  </div>
                </a>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'var(--color-bg-subtle)',
                      border: '1px solid var(--color-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                      CURRENT LOCATION
                    </div>
                    <div style={{ fontWeight: 600, fontSize: '1rem' }}>
                      Hyderabad, 500032, India • Available Remote Worldwide
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  marginTop: '2rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--color-border)',
                }}
              >
                <a
                  href="https://github.com/saisahith-kallepalli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  <GithubIcon size={17} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/sai-sahith-kallepalli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  <LinkedinIcon size={17} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Availability card */}
            <div
              className="glass-card"
              style={{
                padding: '1.5rem',
                borderLeft: '4px solid var(--color-accent-cyan)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: 'var(--color-accent-cyan)',
                  boxShadow: '0 0 10px var(--color-accent-cyan)',
                }}
              />
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>
                  Open for Q3 / Q4 2026 Opportunities
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>
                  Accepting Full-Stack Lead, MERN Engineering &amp; Next.js Consulting roles.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
              Send Me a Message
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem', fontSize: '0.95rem' }}>
              Fill out the brief inquiry form below, and let&rsquo;s discuss your engineering timeline and deliverables.
            </p>

            {status === 'success' ? (
              <div
                style={{
                  padding: '3rem 2rem',
                  textAlign: 'center',
                  background: 'var(--color-bg-subtle)',
                  borderRadius: '16px',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'var(--color-bg-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  <Send size={26} />
                </div>
                <h4 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                  Message Sent Successfully!
                </h4>
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
                  Thank you for reaching out. Sai Sahith has received your request and will follow up within 24 business hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-secondary"
                  style={{ margin: '0 auto' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Row 1: Name & Email */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        marginBottom: '0.5rem',
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Marcus Vance"
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '10px',
                        background: 'var(--color-bg-subtle)',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-text-primary)',
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-sans)',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        marginBottom: '0.5rem',
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="marcus@enterprise.com"
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '10px',
                        background: 'var(--color-bg-subtle)',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-text-primary)',
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-sans)',
                      }}
                    />
                  </div>
                </div>

                {/* Row 2: Phone Number & Subject */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        marginBottom: '0.5rem',
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      Phone Number / WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 63000 67347 or +1 (555) 000-0000"
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '10px',
                        background: 'var(--color-bg-subtle)',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-text-primary)',
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-sans)',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        marginBottom: '0.5rem',
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="e.g. MERN Consulting or Next.js Architecture"
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '10px',
                        background: 'var(--color-bg-subtle)',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-text-primary)',
                        fontSize: '0.95rem',
                        fontFamily: 'var(--font-sans)',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      marginBottom: '0.5rem',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    Project Details or Role Summary *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your MERN stack requirements, Next.js architecture goals, or full-time opening..."
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      background: 'var(--color-bg-subtle)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text-primary)',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-sans)',
                      resize: 'vertical',
                    }}
                  />
                </div>

                {status === 'error' && (
                  <div
                    style={{
                      color: '#ff6b6b',
                      fontSize: '0.88rem',
                      padding: '0.75rem',
                      background: 'rgba(255, 107, 107, 0.1)',
                      borderRadius: '8px',
                    }}
                  >
                    ⚠️ {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '1rem',
                    fontSize: '1rem',
                    opacity: status === 'loading' ? 0.7 : 1,
                  }}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
