import React, { useState } from 'react';
import useFadeIn from '../hooks/useFadeIn';
import { SectionLabel, SectionTitle } from './ui';

const REASONS = [
  {
    icon: '🏥',
    title: 'State-of-the-Art Technology',
    desc: 'Digital X-rays, 3D cone-beam scanning, intraoral cameras and laser dentistry for superior precision and comfort.',
  },
  {
    icon: '😌',
    title: 'Pain-Free Treatments',
    desc: 'Advanced anaesthesia protocols and conscious sedation options ensure a genuinely comfortable experience every visit.',
  },
  {
    icon: '🎓',
    title: 'Expert Specialist Team',
    desc: 'Over 20 years of combined experience across all dental disciplines, from restorative to cosmetic and surgical care.',
  },
  {
    icon: '⏱️',
    title: 'Same-Day Appointments',
    desc: 'Flexible scheduling — evenings and Saturdays included — with emergency slots reserved every single day.',
  },
  {
    icon: '🌿',
    title: 'Eco-Friendly Practice',
    desc: 'Digital records, biodegradable consumables and a paperless workflow because a healthy planet matters too.',
  },
  {
    icon: '🔒',
    title: 'Transparent Pricing',
    desc: 'Clear upfront cost estimates, flexible payment plans and full insurance billing support — no hidden surprises.',
  },
];

function ReasonCard({ icon, title, desc, delay }) {
  const ref = useFadeIn(delay);
  const [hovered, setHovered] = useState(false);

  return (
    <article
      ref={ref}
      className="fade-in"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? 'rgba(74,158,202,0.45)' : 'rgba(255,255,255,0.1)'}`,
        borderRadius: 20,
        padding: '28px 24px',
        background: hovered ? 'rgba(74,158,202,0.12)' : 'rgba(255,255,255,0.04)',
        transform: hovered ? 'translateY(-4px)' : 'none',
        transition: 'all 0.3s ease',
        cursor: 'default',
      }}
    >
      <div style={{ fontSize: 28, marginBottom: 16, lineHeight: 1 }}>{icon}</div>
      <h3 style={{
        fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 500,
        color: '#fff', marginBottom: 10,
      }}>
        {title}
      </h3>
      <p style={{ color: 'rgba(255,255,255,0.52)', fontSize: 14, lineHeight: 1.68 }}>{desc}</p>
    </article>
  );
}

export default function WhyUs() {
  const headerRef = useFadeIn();

  return (
    <section id="why-us" aria-label="Why choose us" style={{ background: 'var(--navy)', padding: '90px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div ref={headerRef} className="fade-in" style={{ textAlign: 'center', marginBottom: 56 }}>
          <SectionLabel center light>Why PureSmile</SectionLabel>
          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400, lineHeight: 1.12,
            fontSize: 'clamp(30px, 4vw, 46px)', color: '#fff',
            marginBottom: 16, textAlign: 'center',
          }}>
            The PureSmile{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--sky)' }}>Difference</em>
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.5)', fontSize: 16, lineHeight: 1.72,
            maxWidth: 500, margin: '0 auto',
          }}>
            We don't just treat teeth — we build lasting relationships based on trust,
            expertise, and genuine care for your wellbeing.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 22,
        }}>
          {REASONS.map((r, i) => (
            <ReasonCard key={r.title} {...r} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
