import React, { useState } from 'react';
import useFadeIn from '../hooks/useFadeIn';
import { SectionLabel, SectionTitle } from './ui';

const SERVICES = [
  {
    icon: '🦷',
    title: 'Teeth Cleaning',
    desc: 'Professional scaling and polishing to remove plaque, tartar and surface stains for a brighter, healthier smile.',
    bg: '#e8f4fb',
  },
  {
    icon: '✨',
    title: 'Whitening',
    desc: 'Advanced in-clinic whitening treatments delivering noticeably whiter teeth in a single comfortable visit.',
    bg: '#f0f8fd',
  },
  {
    icon: '🔬',
    title: 'Dental Implants',
    desc: 'Permanent, natural-looking tooth replacements that restore full chewing function and confidence.',
    bg: '#e8f6f3',
  },
  {
    icon: '😁',
    title: 'Orthodontics',
    desc: 'Clear aligners and traditional braces to straighten your teeth discreetly and comfortably.',
    bg: '#f3f1ec',
  },
  {
    icon: '🛡️',
    title: 'Root Canal',
    desc: 'Pain-free endodontic therapy using modern rotary instruments and gentle sedation options.',
    bg: '#e8f4fb',
  },
  {
    icon: '💎',
    title: 'Veneers',
    desc: 'Ultra-thin porcelain veneers individually crafted for a flawless, natural-looking smile transformation.',
    bg: '#f0f8fd',
  },
];

function ServiceCard({ icon, title, desc, bg, delay }) {
  const ref = useFadeIn(delay);
  const [hovered, setHovered] = useState(false);

  return (
    <article
      ref={ref}
      className="fade-in"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--sky-pale)' : bg,
        border: `1.5px solid ${hovered ? 'rgba(74,158,202,0.28)' : 'transparent'}`,
        borderRadius: 20,
        padding: '28px 28px 24px',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: hovered ? '0 12px 32px rgba(74,158,202,0.13)' : 'none',
        cursor: 'default',
      }}
    >
      <div style={{ fontSize: 30, marginBottom: 16, lineHeight: 1 }}>{icon}</div>
      <h3 style={{
        fontFamily: 'var(--serif)', fontSize: 21, fontWeight: 500,
        color: 'var(--navy)', marginBottom: 10,
      }}>
        {title}
      </h3>
      <p style={{ color: 'var(--muted)', fontSize: 14.5, lineHeight: 1.68 }}>{desc}</p>
      <div style={{
        marginTop: 18, fontSize: 13, color: 'var(--sky)', fontWeight: 500,
        display: 'flex', alignItems: 'center', gap: 6,
        opacity: hovered ? 1 : 0, transition: 'opacity 0.3s ease',
      }}>
        Learn more <span aria-hidden="true">→</span>
      </div>
    </article>
  );
}

export default function Services() {
  const headerRef = useFadeIn();

  return (
    <section id="services" aria-label="Services" style={{ background: '#fff', padding: '90px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div ref={headerRef} className="fade-in" style={{ textAlign: 'center', marginBottom: 56 }}>
          <SectionLabel center>What We Offer</SectionLabel>
          <SectionTitle center>
            Comprehensive Dental{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--sky)' }}>Services</em>
          </SectionTitle>
          <p style={{
            color: 'var(--muted)', fontSize: 16, lineHeight: 1.72,
            maxWidth: 520, margin: '0 auto',
          }}>
            From your first visit to your final result, every treatment is
            tailored to your unique needs and smile goals.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: 24,
        }}>
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
