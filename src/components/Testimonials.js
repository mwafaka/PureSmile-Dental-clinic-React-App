import React, { useState, useEffect } from 'react';
import useFadeIn from '../hooks/useFadeIn';
import { SectionLabel, SectionTitle, Stars } from './ui';

const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    role: 'Marketing Director',
    text: 'Absolutely transformed my smile! The team was so gentle and professional. I had been afraid of the dentist for years — PureSmile changed all of that completely.',
    initials: 'SM',
    accent: '#4a9eca',
  },
  {
    name: 'James K.',
    role: 'Software Engineer',
    text: "Got implants here and the result is incredible. You literally cannot tell they're not real teeth. Every step was explained clearly and I never felt anxious once.",
    initials: 'JK',
    accent: '#5bbcaa',
  },
  {
    name: 'Priya L.',
    role: 'School Teacher',
    text: 'The whitening treatment gave me a confidence I didn\'t know I was missing. The clinic is spotless, the staff is warm, and the results truly speak for themselves.',
    initials: 'PL',
    accent: '#9b6b9e',
  },
  {
    name: 'Marco D.',
    role: 'Restaurant Owner',
    text: 'Dr. Voss fitted my veneers and they look completely natural. Every colleague asks if I had work done — that\'s how subtle and perfect the result is.',
    initials: 'MD',
    accent: '#e07b54',
  },
];

function TestimonialCard({ name, role, text, initials, accent, isActive, delay }) {
  const ref = useFadeIn(delay);

  return (
    <article
      ref={ref}
      className="fade-in"
      style={{
        background: '#fff',
        borderRadius: 24,
        padding: '28px 28px 24px',
        border: `2px solid ${isActive ? 'var(--sky)' : 'transparent'}`,
        boxShadow: isActive
          ? '0 12px 40px rgba(74,158,202,0.16)'
          : '0 2px 18px rgba(0,0,0,0.05)',
        transition: 'all 0.45s ease',
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
      }}
    >
      <Stars />

      <p style={{
        fontFamily: 'var(--serif)', fontStyle: 'italic',
        fontSize: 17.5, lineHeight: 1.72, color: '#3a4a5c',
        margin: '18px 0 24px',
        flexGrow: 1,
      }}>
        "{text}"
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div aria-hidden="true" style={{
          width: 44, height: 44, borderRadius: '50%',
          background: accent, color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 13, fontWeight: 500, flexShrink: 0,
        }}>
          {initials}
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--navy)' }}>{name}</div>
          <div style={{ fontSize: 12, color: 'var(--muted)' }}>{role}</div>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const headerRef = useFadeIn();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActive((p) => (p + 1) % TESTIMONIALS.length),
      4500
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" aria-label="Patient testimonials" style={{ background: 'var(--sky-pale)', padding: '90px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div ref={headerRef} className="fade-in" style={{ textAlign: 'center', marginBottom: 56 }}>
          <SectionLabel center>Patient Stories</SectionLabel>
          <SectionTitle center>
            What Our Patients{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--sky)' }}>Say</em>
          </SectionTitle>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 22, marginBottom: 40,
        }}>
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard
              key={t.name}
              {...t}
              isActive={i === active}
              delay={i * 90}
            />
          ))}
        </div>

        {/* Dot indicators */}
        <div
          role="tablist"
          aria-label="Testimonial navigation"
          style={{ display: 'flex', justifyContent: 'center', gap: 8 }}
        >
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? 28 : 8, height: 8,
                borderRadius: 4,
                background: i === active ? 'var(--sky)' : 'rgba(74,158,202,0.25)',
                border: 'none', cursor: 'pointer',
                transition: 'all 0.35s ease',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
