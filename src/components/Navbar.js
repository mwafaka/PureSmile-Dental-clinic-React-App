import React, { useState, useEffect } from 'react';
import { ToothIcon, BtnPrimary, scrollTo } from './ui';

const NAV_LINKS = [
  { id: 'services',      label: 'Services'     },
  { id: 'about',         label: 'About'        },
  { id: 'why-us',        label: 'Why Us'       },
  { id: 'testimonials',  label: 'Testimonials' },
  { id: 'contact',       label: 'Contact'      },
];

export default function Navbar({ activeSection }) {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <header
      role="banner"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(255,255,255,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(74,158,202,0.12)' : 'none',
        transition: 'all 0.35s ease',
      }}
    >
      <nav
        aria-label="Main navigation"
        style={{
          maxWidth: 1100, margin: '0 auto', padding: '0 24px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 68,
        }}
      >
        {/* Logo */}
        <button
          aria-label="Go to top"
          onClick={() => handleNav('home')}
          style={{
            display: 'flex', alignItems: 'center', gap: 10,
            background: 'none', border: 'none', cursor: 'pointer', padding: 0,
          }}
        >
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background: 'var(--sky)', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
          }}>
            <ToothIcon size={18} color="#fff" />
          </div>
          <span style={{
            fontFamily: 'var(--serif)', fontSize: 21, fontWeight: 500,
            color: 'var(--navy)', letterSpacing: '-0.01em',
          }}>
            PureSmile
          </span>
        </button>

        {/* Desktop links */}
        <ul
          style={{
            display: 'flex', gap: 4, listStyle: 'none',
            alignItems: 'center',
          }}
          className="nav-desktop"
        >
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => handleNav(id)}
                aria-current={activeSection === id ? 'page' : undefined}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '8px 14px', fontFamily: 'var(--sans)',
                  fontSize: 13.5, fontWeight: 400, letterSpacing: '0.01em',
                  color: activeSection === id ? 'var(--sky)' : 'var(--navy)',
                  transition: 'color 0.2s',
                  borderBottom: activeSection === id ? '1.5px solid var(--sky)' : '1.5px solid transparent',
                }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Book now (desktop) */}
        <div className="nav-desktop">
          <BtnPrimary
            onClick={() => handleNav('contact')}
            style={{ fontSize: 13, padding: '10px 20px' }}
          >
            Book Now →
          </BtnPrimary>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="nav-mobile"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', gap: 5, padding: 8,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: 'block', width: 22, height: 2,
              background: 'var(--navy)', borderRadius: 2,
              transition: 'all 0.3s ease',
              transform:
                menuOpen && i === 0 ? 'rotate(45deg) translate(5px,5px)'
                : menuOpen && i === 1 ? 'scaleX(0)'
                : menuOpen && i === 2 ? 'rotate(-45deg) translate(5px,-5px)'
                : 'none',
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{
          background: '#fff', borderTop: '1px solid var(--border)',
          padding: '16px 24px 24px',
        }}>
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '12px 0', fontFamily: 'var(--sans)', fontSize: 16,
                color: activeSection === id ? 'var(--sky)' : 'var(--navy)',
                borderBottom: '1px solid rgba(74,158,202,0.08)',
              }}
            >
              {label}
            </button>
          ))}
          <BtnPrimary
            onClick={() => handleNav('contact')}
            style={{ marginTop: 16, width: '100%' }}
          >
            Book Appointment →
          </BtnPrimary>
        </div>
      )}

      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile  { display: none; }
        @media (max-width: 720px) {
          .nav-desktop { display: none !important; }
          .nav-mobile  { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
