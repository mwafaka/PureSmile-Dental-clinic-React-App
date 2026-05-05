import React from 'react';
import { scrollTo } from './ui';

export default function BookingCTA() {
  return (
    <section
      aria-label="Book an appointment"
      style={{
        background: 'linear-gradient(130deg, var(--sky) 0%, #2876b5 100%)',
        padding: '90px 24px',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 580, margin: '0 auto' }}>
        <div style={{ fontSize: 42, marginBottom: 20, lineHeight: 1 }}>🦷</div>

        <h2 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'clamp(28px, 4.5vw, 50px)',
          color: '#fff', lineHeight: 1.14, marginBottom: 18,
        }}>
          Ready for Your<br />
          <em style={{ fontStyle: 'italic' }}>Dream Smile?</em>
        </h2>

        <p style={{
          color: 'rgba(255,255,255,0.78)', fontSize: 16.5,
          lineHeight: 1.72, marginBottom: 40,
        }}>
          Book your free consultation today and take the first confident step
          toward a healthier, more beautiful smile.
        </p>

        <button
          onClick={() => scrollTo('contact')}
          style={{
            background: '#fff', color: 'var(--sky)',
            fontFamily: 'var(--sans)', fontSize: 15.5, fontWeight: 500,
            padding: '16px 40px', borderRadius: 50, border: 'none',
            cursor: 'pointer', letterSpacing: '0.02em',
            boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform  = 'translateY(-2px)';
            e.currentTarget.style.boxShadow  = '0 14px 40px rgba(0,0,0,0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform  = 'none';
            e.currentTarget.style.boxShadow  = '0 8px 32px rgba(0,0,0,0.18)';
          }}
        >
          Book Free Consultation →
        </button>

        <p style={{
          color: 'rgba(255,255,255,0.55)', fontSize: 12.5,
          marginTop: 18, letterSpacing: '0.03em',
        }}>
          No obligation · Same-week appointments available · 100 % confidential
        </p>
      </div>
    </section>
  );
}
