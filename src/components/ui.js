import React from 'react';

/* ─── Scroll helper ─────────────────────────────────────────────────── */
export function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

/* ─── Buttons ───────────────────────────────────────────────────────── */
export function BtnPrimary({ children, onClick, style = {}, type = 'button' }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    gap: 8, background: 'var(--sky)', color: '#fff', fontSize: 14,
    fontWeight: 500, letterSpacing: '0.04em', padding: '14px 28px',
    borderRadius: 50, border: 'none', cursor: 'pointer',
    transition: 'all 0.25s ease', ...style,
  };
  return (
    <button
      type={type}
      style={base}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--sky-hover)';
        e.currentTarget.style.transform  = 'translateY(-2px)';
        e.currentTarget.style.boxShadow  = '0 8px 24px rgba(74,158,202,0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'var(--sky)';
        e.currentTarget.style.transform  = 'none';
        e.currentTarget.style.boxShadow  = 'none';
      }}
    >
      {children}
    </button>
  );
}

export function BtnOutline({ children, onClick, style = {} }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    gap: 8, background: 'transparent', color: 'var(--navy)', fontSize: 14,
    fontWeight: 500, letterSpacing: '0.04em', padding: '13px 28px',
    borderRadius: 50, border: '1.5px solid var(--navy)',
    cursor: 'pointer', transition: 'all 0.25s ease', ...style,
  };
  return (
    <button
      type="button"
      style={base}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'var(--navy)';
        e.currentTarget.style.color      = '#fff';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color      = 'var(--navy)';
      }}
    >
      {children}
    </button>
  );
}

/* ─── Section label ─────────────────────────────────────────────────── */
export function SectionLabel({ children, center = false, light = false }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      fontSize: 11, fontWeight: 500, letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: light ? 'var(--sky)' : 'var(--sky)',
      marginBottom: 16,
      ...(center ? { justifyContent: 'center', width: '100%' } : {}),
    }}>
      <span style={{ display: 'block', width: 24, height: 1.5, background: 'var(--sky)', flexShrink: 0 }} />
      {children}
    </div>
  );
}

/* ─── Section title ─────────────────────────────────────────────────── */
export function SectionTitle({ children, center = false, light = false }) {
  return (
    <h2 style={{
      fontFamily: 'var(--serif)', fontWeight: 400, lineHeight: 1.12,
      fontSize: 'clamp(30px, 4vw, 46px)',
      color: light ? '#fff' : 'var(--navy)',
      marginBottom: 16,
      ...(center ? { textAlign: 'center', margin: '0 auto 16px' } : {}),
    }}>
      {children}
    </h2>
  );
}

/* ─── Star rating ───────────────────────────────────────────────────── */
export function Stars({ count = 5 }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24"
          fill="#f0b429" stroke="#f0b429" strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

/* ─── Tooth SVG icon ────────────────────────────────────────────────── */
export function ToothIcon({ size = 24, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M12 2C9 2 6 4 6 7c0 2 .5 4 1 6 .5 2 1 5 1 7h2c0-1 .5-3 1-4 .5-2 1-4 1-4s.5 2 1 4 1 3 1 4h2c0-2 .5-5 1-7s1-4 1-6c0-3-3-5-6-5z" />
    </svg>
  );
}
