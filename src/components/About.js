import React from 'react';
import useFadeIn from '../hooks/useFadeIn';
import { SectionLabel, SectionTitle, BtnPrimary, scrollTo } from './ui';

const CREDENTIALS = [
  'Harvard School of Dental Medicine',
  'Board Certified Specialist',
  'ADA & EDA Member',
  'Invisalign Diamond Provider',
];

function DoctorCard() {
  return (
    <div style={{
      width: '100%', maxWidth: 360, aspectRatio: '4 / 5',
      borderRadius: '40px 40px 40px 8px',
      background: 'linear-gradient(145deg, #c2e4f5 0%, #8ecde8 100%)',
      display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
      overflow: 'hidden', position: 'relative',
    }}>
      <svg viewBox="0 0 300 390" width="100%" style={{ maxWidth: 270, marginBottom: -8 }} aria-hidden="true">
        {/* Coat */}
        <rect x="60" y="218" width="180" height="172" rx="18" fill="#fff" />
        <rect x="80" y="218" width="140" height="155" rx="14" fill="#4a9eca" opacity="0.9" />
        {/* Collar */}
        <polygon points="150,228 130,258 150,248 170,258" fill="#fff" opacity="0.9" />
        {/* Stethoscope */}
        <path d="M115 255 Q104 285 115 305 Q126 325 138 305"
          stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.55" />
        <circle cx="138" cy="305" r="7.5" fill="none" stroke="#fff" strokeWidth="2.5" opacity="0.55" />
        {/* Badge */}
        <rect x="152" y="262" width="62" height="38" rx="7" fill="rgba(255,255,255,0.15)" />
        <text x="183" y="278" textAnchor="middle" fill="#fff" fontSize="7.5" fontFamily="DM Sans,sans-serif" fontWeight="500">Dr. Elena Voss</text>
        <text x="183" y="291" textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="6.5" fontFamily="DM Sans,sans-serif">DMD · Cosmetic</text>
        {/* Head */}
        <circle cx="150" cy="130" r="74" fill="#f0d0b8" />
        <ellipse cx="150" cy="102" rx="55" ry="50" fill="#fce8d6" />
        {/* Hair */}
        <ellipse cx="150" cy="64"  rx="55" ry="38" fill="#3d2b1a" />
        <ellipse cx="150" cy="80"  rx="48" ry="24" fill="#4e3827" />
        {/* Eyes */}
        <circle cx="130" cy="118" r="9"   fill="#2c2016" />
        <circle cx="170" cy="118" r="9"   fill="#2c2016" />
        <circle cx="132" cy="115" r="3.2" fill="#fff" />
        <circle cx="172" cy="115" r="3.2" fill="#fff" />
        {/* Smile */}
        <path d="M136 142 Q150 155 164 142" stroke="#b07060" strokeWidth="2.5"
          fill="none" strokeLinecap="round" />
        {/* Cheeks */}
        <ellipse cx="114" cy="126" rx="12" ry="8" fill="#f0b8a0" opacity="0.5" />
        <ellipse cx="186" cy="126" rx="12" ry="8" fill="#f0b8a0" opacity="0.5" />
        {/* Glasses */}
        <rect x="116" y="109" width="26" height="17" rx="6" fill="none" stroke="#3d2b1a" strokeWidth="2" />
        <rect x="158" y="109" width="26" height="17" rx="6" fill="none" stroke="#3d2b1a" strokeWidth="2" />
        <line x1="142" y1="117" x2="158" y2="117" stroke="#3d2b1a" strokeWidth="1.8" />
      </svg>
    </div>
  );
}

export default function About() {
  const imgRef  = useFadeIn(0);
  const textRef = useFadeIn(150);

  return (
    <section id="about" aria-label="About the doctor" style={{ background: 'var(--sand)', padding: '90px 0' }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto', padding: '0 24px',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 72, alignItems: 'center',
      }}
        className="about-grid"
      >
        {/* Image column */}
        <div
          ref={imgRef}
          className="fade-in"
          style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
        >
          <DoctorCard />

          {/* Floating years badge */}
          <div style={{
            position: 'absolute', top: 24, right: 0,
            background: 'var(--navy)', color: '#fff',
            borderRadius: 16, padding: '14px 22px', textAlign: 'center',
            boxShadow: '0 8px 28px rgba(13,43,69,0.25)',
          }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 34, fontWeight: 400 }}>18+</div>
            <div style={{ fontSize: 10.5, opacity: 0.65, letterSpacing: '0.07em', marginTop: 2 }}>
              YEARS EXP.
            </div>
          </div>
        </div>

        {/* Text column */}
        <div ref={textRef} className="fade-in">
          <SectionLabel>Meet Your Doctor</SectionLabel>
          <SectionTitle>
            Dr. Elena Voss,{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--sky)' }}>DMD</em>
          </SectionTitle>

          <p style={{ color: 'var(--muted)', fontSize: 15.5, lineHeight: 1.8, marginBottom: 20 }}>
            Dr. Voss graduated from Harvard School of Dental Medicine and completed her
            specialty residency in cosmetic and implant dentistry in Vienna. Over 18 years
            she has helped more than 2,400 patients achieve the smiles they deserve.
          </p>
          <p style={{ color: 'var(--muted)', fontSize: 15.5, lineHeight: 1.8, marginBottom: 32 }}>
            Known for her gentle chairside manner and precise technique, Dr. Voss combines
            cutting-edge technology with genuine patient care so every visit feels comfortable
            and every result exceeds expectations.
          </p>

          <ul style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: 14, marginBottom: 36, listStyle: 'none',
          }}>
            {CREDENTIALS.map((c) => (
              <li key={c} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: 'var(--sky)', flexShrink: 0,
                }} />
                <span style={{ fontSize: 14, color: 'var(--navy)' }}>{c}</span>
              </li>
            ))}
          </ul>

          <BtnPrimary onClick={() => scrollTo('contact')}>
            Book with Dr. Voss →
          </BtnPrimary>
        </div>
      </div>

      <style>{`
        .about-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 760px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
