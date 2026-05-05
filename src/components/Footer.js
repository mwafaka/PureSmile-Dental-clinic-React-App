import React from 'react';
import { ToothIcon, scrollTo } from './ui';

const QUICK_LINKS = [
  { id: 'home',         label: 'Home'              },
  { id: 'services',     label: 'Services'          },
  { id: 'about',        label: 'About Dr. Voss'    },
  { id: 'why-us',       label: 'Why Choose Us'     },
  { id: 'testimonials', label: 'Testimonials'       },
  { id: 'contact',      label: 'Book Appointment'  },
];

const SERVICES = [
  'Teeth Cleaning', 'Whitening', 'Dental Implants',
  'Orthodontics', 'Root Canal', 'Veneers',
];

const SOCIALS = [
  { label: 'Facebook',  abbr: 'fb' },
  { label: 'Instagram', abbr: 'ig' },
  { label: 'Twitter',   abbr: 'tw' },
  { label: 'LinkedIn',  abbr: 'li' },
];

function SocialBtn({ label, abbr }) {
  const [hovered, setHov] = React.useState(false);
  return (
    <button
      aria-label={label}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: 38, height: 38, borderRadius: '50%',
        border: `1px solid ${hovered ? 'var(--sky)' : 'rgba(255,255,255,0.15)'}`,
        background: hovered ? 'var(--sky)' : 'transparent',
        color: hovered ? '#fff' : 'rgba(255,255,255,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 12, fontWeight: 500, cursor: 'pointer',
        transition: 'all 0.22s ease',
        fontFamily: 'var(--sans)',
      }}
    >
      {abbr}
    </button>
  );
}

export default function Footer() {
  return (
    <footer aria-label="Site footer" style={{ background: 'var(--navy)', color: 'rgba(255,255,255,0.55)', padding: '60px 0 28px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr',
          gap: 48, marginBottom: 52,
        }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <button
              onClick={() => scrollTo('home')}
              aria-label="Go to top"
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                background: 'none', border: 'none', cursor: 'pointer',
                padding: 0, marginBottom: 18,
              }}
            >
              <div style={{
                width: 34, height: 34, borderRadius: '50%',
                background: 'var(--sky)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <ToothIcon size={16} color="#fff" />
              </div>
              <span style={{
                fontFamily: 'var(--serif)', fontSize: 20,
                fontWeight: 500, color: '#fff',
              }}>
                PureSmile
              </span>
            </button>

            <p style={{ fontSize: 14, lineHeight: 1.78, maxWidth: 300, marginBottom: 26 }}>
              Modern dental care rooted in trust and expertise. Your smile is
              our greatest achievement — every single day.
            </p>

            <div style={{ display: 'flex', gap: 10 }}>
              {SOCIALS.map((s) => <SocialBtn key={s.abbr} {...s} />)}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3 style={{
              color: '#fff', fontSize: 13.5, fontWeight: 500,
              letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 22,
            }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none' }}>
              {QUICK_LINKS.map(({ id, label }) => (
                <li key={id} style={{ marginBottom: 13 }}>
                  <button
                    onClick={() => scrollTo(id)}
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      fontFamily: 'var(--sans)', fontSize: 14,
                      color: 'rgba(255,255,255,0.5)', padding: 0,
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#fff')}
                    onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.5)')}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 style={{
              color: '#fff', fontSize: 13.5, fontWeight: 500,
              letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 22,
            }}>
              Services
            </h3>
            <ul style={{ listStyle: 'none' }}>
              {SERVICES.map((s) => (
                <li key={s} style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 13 }}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: 24,
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontSize: 13 }}>
            © {new Date().getFullYear()} PureSmile Dental Clinic. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 13 }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((l) => (
              <a key={l} href="#top" style={{ color: 'rgba(255,255,255,0.4)' }}
                onMouseEnter={(e) => (e.target.style.color = 'rgba(255,255,255,0.8)')}
                onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.4)')}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid { grid-template-columns: 2fr 1fr 1fr; }
        @media (max-width: 680px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
