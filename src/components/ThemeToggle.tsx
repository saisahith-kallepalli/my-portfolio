'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Monitor } from 'lucide-react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="theme-toggle-btn"
        aria-label="Toggle theme"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.45rem',
          padding: '0.45rem 0.85rem',
          borderRadius: '999px',
          border: '1px solid var(--color-border)',
          background: 'var(--color-bg-subtle, rgba(255, 255, 255, 0.05))',
          color: 'var(--color-text-primary)',
          fontSize: '0.8rem',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        <Monitor size={15} />
        <span>System</span>
      </button>
    );
  }

  const cycleTheme = () => {
    if (theme === 'system') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('system');
    }
  };

  const getIcon = () => {
    if (theme === 'light') return <Sun size={15} />;
    if (theme === 'dark') return <Moon size={15} />;
    return <Monitor size={15} />;
  };

  const getLabel = () => {
    if (theme === 'light') return 'Light';
    if (theme === 'dark') return 'Dark';
    return 'System';
  };

  return (
    <button
      onClick={cycleTheme}
      className="theme-toggle-btn"
      aria-label="Cycle color theme"
      title={`Current theme: ${getLabel()} (click to switch)`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.45rem',
        padding: '0.45rem 0.85rem',
        borderRadius: '999px',
        border: '1px solid var(--color-border)',
        background: 'var(--color-bg-subtle, rgba(255, 255, 255, 0.06))',
        color: 'var(--color-text-primary)',
        fontSize: '0.8rem',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.25s ease',
      }}
    >
      {getIcon()}
      <span>{getLabel()}</span>
    </button>
  );
}
