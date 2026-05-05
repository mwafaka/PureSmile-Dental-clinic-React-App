import React from 'react';
import useFadeIn from '../hooks/useFadeIn';
import { BtnPrimary, BtnOutline, Stars, scrollTo } from './ui';

/* ── Illustrated doctor card (pure SVG, no external images) ── */
function DoctorIllustration() {
  return (
    <svg viewBox="0 0 300 380" width="100%" style={{ maxWidth: 280 }} aria-hidden="true">
      {/* body / coat */}
      <rect x="60" y="200" width="180" height="180" rx="20" fill="#fff" />
      <rect x="80" y="200" width="140" height="160" rx="16" fill="#4a9eca" opacity="0.92" />
      {/* collar */}
      <polygon points="150,210 130,240 150,230 170,240" fill="#fff" opacity="0.9" />
      {/* stethoscope */}
      <path d="M120 240 Q110 270 120 290 Q130 310 140 290" stroke="#fff" strokeWidth="3"
        fill="none" strokeLinecap="round" opacity="0.6" />
      <circle cx="140" cy="290" r="7" fill="none" stroke="#fff" strokeWidth="2.5" opacity="0.6" />
      {/* name badge */}
      <rect x="155" y="245" width="58" height="36" rx="6" fill="rgba(255,255,255,0.18)" />
      <text x="184" y="261" textAnchor="middle" fill="#fff" fontSize="7.5" fontFamily="DM Sans, sans-serif" fontWeight="500">Dr. Elena Voss</text>
      <text x="184" y="273" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="6.5" fontFamily="DM Sans, sans-serif">DMD · Specialist</text>
      {/* head */}
      <circle cx="150" cy="122" r="72" fill="#f0d5c0" />
      <ellipse cx="150" cy="96" rx="52" ry="48" fill="#fce8d6" />
      {/* hair */}
      <ellipse cx="150" cy="60" rx="52" ry="36" fill="#4a3728" />
      <ellipse cx="150" cy="74" rx="46" ry="22" fill="#5a4535" />
      {/* face details */}
      <circle cx="131" cy="112" r="8.5" fill="#2c2016" />
      <circle cx="169" cy="112" r="8.5" fill="#2c2016" />
      <circle cx="133" cy="109" r="3"   fill="#fff" />
      <circle cx="171" cy="109" r="3"   fill="#fff" />
      {/* smile */}
      <path d="M138 136 Q150 148 162 136" stroke="#b07060" strokeWidth="2.5"
        fill="none" strokeLinecap="round" />
      {/* cheeks */}
      <ellipse cx="116" cy="122" rx="11" ry="7" fill="#f0b8a0" opacity="0.55" />
      <ellipse cx="184" cy="122" rx="11" ry="7" fill="#f0b8a0" opacity="0.55" />
      {/* glasses */}
      <rect x="118" y="104" width="24" height="16" rx="6" fill="none" stroke="#4a3728" strokeWidth="2" />
      <rect x="158" y="104" width="24" height="16" rx="6" fill="none" stroke="#4a3728" strokeWidth="2" />
      <line x1="142" y1="112" x2="158" y2="112" stroke="#4a3728" strokeWidth="1.8" />
    </svg>
  );
}

export default function Hero() {
  const textRef  = useFadeIn(0);
  const imageRef = useFadeIn(200);

  return (
    <section
      id="home"
      aria-label="Hero"
      style={{
        background: 'linear-gradient(155deg, var(--sky-pale) 0%, var(--cream) 65%)',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 80,
      }}
    >
      <div style={{
        maxWidth: 1100, margin: '0 auto', padding: '60px 24px',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 64, alignItems: 'center',
      }}
        className="hero-grid"
      >
        {/* ── Left column ── */}
        <div ref={textRef} className="fade-in">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: 11, fontWeight: 500, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--sky)', marginBottom: 18,
          }}>
            <span style={{ width: 24, height: 1.5, background: 'var(--sky)', display: 'block' }} />
            Berlin's Premier Dental Clinic
          </div>

          <h1 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(44px, 6vw, 74px)',
            fontWeight: 300, color: 'var(--navy)',
            lineHeight: 1.06, letterSpacing: '-0.025em',
            marginBottom: 24,
          }}>
            Your Smile,<br />
            <em style={{ fontStyle: 'italic', color: 'var(--sky)' }}>Our Priority.</em>
          </h1>

          <p style={{
            color: 'var(--muted)', fontSize: 17, lineHeight: 1.75,
            marginBottom: 36, maxWidth: 430,
          }}>
            Expert dental care in a calm, modern environment. From routine cleanings
            to complete smile transformations — we're with you at every step.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 52 }}>
            <BtnPrimary
              onClick={() => scrollTo('contact')}
              style={{ fontSize: 15, padding: '15px 32px' }}
            >
              Book Appointment →
            </BtnPrimary>
            <BtnOutline onClick={() => scrollTo('services')}>
              Our Services
            </BtnOutline>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
            {[
              ['2,400+', 'Happy Patients'],
              ['18+',    'Years Experience'],
              ['98%',    'Satisfaction Rate'],
            ].map(([num, label]) => (
              <div key={label}>
                <div style={{
                  fontFamily: 'var(--serif)', fontSize: 34,
                  fontWeight: 500, color: 'var(--navy)',
                  letterSpacing: '-0.02em',
                }}>
                  {num}
                </div>
                <div style={{
                  fontSize: 12, color: 'var(--muted)',
                  letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 3,
                }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column ── */}
        <div
          ref={imageRef}
          className="fade-in"
          style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
        >
          {/* Main blob */}
          <div style={{
            width: '100%', maxWidth: 380, aspectRatio: '4 / 5',
            borderRadius: '62% 38% 55% 45% / 52% 46% 54% 48%',
            background: 'linear-gradient(145deg, #cde9f7 0%, #a4d4ef 100%)',
            display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
            overflow: 'hidden', animation: 'float 6s ease-in-out infinite',
          }}>
            <DoctorIllustration />
          </div>

          {/* Badge – pain free */}
          <div style={{
            position: 'absolute', top: '8%', right: '-4%',
            background: '#fff', borderRadius: 16, padding: '12px 16px',
            boxShadow: '0 8px 32px rgba(74,158,202,0.18)',
            display: 'flex', alignItems: 'center', gap: 10,
            animation: 'float 7s ease-in-out infinite 1s',
          }}>
            <div style={{
              width: 38, height: 38, borderRadius: '50%',
              background: 'var(--mint-light)', display: 'flex',
              alignItems: 'center', justifyContent: 'center', fontSize: 18,
            }}>
              ✓
            </div>
            <div>
              <div style={{ fontSize: 12.5, fontWeight: 500, color: 'var(--navy)' }}>Pain-Free Care</div>
              <div style={{ fontSize: 11, color: 'var(--muted)' }}>Advanced sedation</div>
            </div>
          </div>

          {/* Badge – rating */}
          <div style={{
            position: 'absolute', bottom: '12%', left: '-6%',
            background: '#fff', borderRadius: 16, padding: '12px 16px',
            boxShadow: '0 8px 32px rgba(74,158,202,0.18)',
            display: 'flex', alignItems: 'center', gap: 10,
            animation: 'float 8s ease-in-out infinite 0.5s',
          }}>
            <Stars />
            <div style={{ fontSize: 13, color: 'var(--navy)', fontWeight: 500 }}>4.9 / 5.0</div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 760px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
