import React, { useState } from 'react';
import useFadeIn from '../hooks/useFadeIn';
import { SectionLabel, SectionTitle, BtnPrimary } from './ui';

/* ── Validation ── */
function validate(form) {
  const errors = {};
  if (!form.name.trim())
    errors.name = 'Full name is required.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = 'Please enter a valid email address.';
  if (!form.message.trim())
    errors.message = 'Please tell us how we can help.';
  return errors;
}

/* ── Field wrapper ── */
function Field({ label, error, children }) {
  return (
    <div>
      <label style={{
        display: 'block', fontSize: 11.5, fontWeight: 500,
        color: 'var(--muted)', letterSpacing: '0.07em',
        textTransform: 'uppercase', marginBottom: 8,
      }}>
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" style={{ color: '#c0392b', fontSize: 12, marginTop: 5 }}>{error}</p>
      )}
    </div>
  );
}

/* ── Styled input ── */
const inputStyle = (hasError) => ({
  width: '100%', background: '#fff',
  border: `1.5px solid ${hasError ? '#c0392b' : '#dde6ee'}`,
  borderRadius: 10, padding: '13px 16px',
  fontFamily: 'var(--sans)', fontSize: 14.5, color: 'var(--navy)',
  outline: 'none', transition: 'border-color 0.2s',
});

/* ── Contact info items ── */
const INFO = [
  { icon: '📍', label: 'Address',  value: 'Kurfürstendamm 88\n10709 Berlin, Germany' },
  { icon: '📞', label: 'Phone',    value: '+49 30 8800 4422' },
  { icon: '✉️', label: 'Email',    value: 'hello@puresmile.de' },
  { icon: '🕐', label: 'Hours',    value: 'Mon – Fri: 8 am – 7 pm\nSaturday: 9 am – 4 pm' },
];

export default function Contact() {
  const headerRef = useFadeIn();
  const formRef   = useFadeIn(150);
  const infoRef   = useFadeIn(0);

  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [errors,    setErrors]    = useState({});
  const [loading,   setLoading]   = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) => {
    setForm((p) => ({ ...p, [field]: e.target.value }));
    setErrors((p) => ({ ...p, [field]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1600);
  };

  const focusBorder  = (e) => (e.target.style.borderColor = 'var(--sky)');
  const blurBorder   = (e, hasError) => (e.target.style.borderColor = hasError ? '#c0392b' : '#dde6ee');

  return (
    <section id="contact" aria-label="Contact and booking" style={{ background: '#fff', padding: '90px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div ref={headerRef} className="fade-in" style={{ textAlign: 'center', marginBottom: 56 }}>
          <SectionLabel center>Get in Touch</SectionLabel>
          <SectionTitle center>
            Book Your{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--sky)' }}>Appointment</em>
          </SectionTitle>
          <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.72, maxWidth: 500, margin: '0 auto' }}>
            Fill out the form and we'll confirm your appointment within 24 hours.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.45fr',
          gap: 64, alignItems: 'start',
        }}
          className="contact-grid"
        >
          {/* Info column */}
          <div ref={infoRef} className="fade-in">
            {INFO.map(({ icon, label, value }) => (
              <div key={label} style={{ display: 'flex', gap: 16, marginBottom: 28 }}>
                <div style={{
                  width: 46, height: 46, borderRadius: 12,
                  background: 'var(--sky-light)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20, flexShrink: 0,
                }}>
                  {icon}
                </div>
                <div>
                  <div style={{
                    fontSize: 11, color: 'var(--muted)',
                    letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 5,
                  }}>
                    {label}
                  </div>
                  <div style={{ fontSize: 14.5, color: 'var(--navy)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                    {value}
                  </div>
                </div>
              </div>
            ))}

            {/* Accepting badge */}
            <div style={{
              background: 'var(--sky-pale)', borderRadius: 18,
              padding: '18px 22px', border: '1px solid rgba(74,158,202,0.14)',
              marginTop: 8,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <span style={{
                  width: 9, height: 9, borderRadius: '50%',
                  background: '#27ae60', display: 'inline-block',
                  boxShadow: '0 0 0 3px rgba(39,174,96,0.25)',
                  animation: 'pulseRing 1.6s ease-out infinite',
                }} />
                <span style={{ fontSize: 13.5, fontWeight: 500, color: 'var(--navy)' }}>
                  Accepting New Patients
                </span>
              </div>
              <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>
                Same-week appointments available. Emergency dental slots reserved every day.
              </p>
            </div>
          </div>

          {/* Form column */}
          <div
            ref={formRef}
            className="fade-in"
            style={{ background: 'var(--sand)', borderRadius: 24, padding: '40px 36px' }}
          >
            {submitted ? (
              /* Success state */
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{ fontSize: 52, marginBottom: 20 }}>🎉</div>
                <h3 style={{
                  fontFamily: 'var(--serif)', fontSize: 28,
                  color: 'var(--navy)', marginBottom: 14,
                }}>
                  Appointment Requested!
                </h3>
                <p style={{ color: 'var(--muted)', fontSize: 15.5, lineHeight: 1.7 }}>
                  Thank you, <strong>{form.name}</strong>! We'll reach out within 24 hours
                  to confirm your appointment details.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name:'', email:'', phone:'', service:'', message:'' }); }}
                  style={{
                    marginTop: 28, background: 'none', border: '1.5px solid var(--sky)',
                    borderRadius: 50, padding: '10px 24px', color: 'var(--sky)',
                    fontFamily: 'var(--sans)', fontSize: 13.5, cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  Submit another request
                </button>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} noValidate aria-label="Appointment request form">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}
                  className="form-row"
                >
                  <Field label="Full Name *" error={errors.name}>
                    <input
                      type="text"
                      value={form.name}
                      onChange={update('name')}
                      onFocus={focusBorder}
                      onBlur={(e) => blurBorder(e, !!errors.name)}
                      placeholder="Jane Doe"
                      style={inputStyle(!!errors.name)}
                      autoComplete="name"
                    />
                  </Field>
                  <Field label="Phone" error={errors.phone}>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={update('phone')}
                      onFocus={focusBorder}
                      onBlur={(e) => blurBorder(e, false)}
                      placeholder="+49 30 …"
                      style={inputStyle(false)}
                      autoComplete="tel"
                    />
                  </Field>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <Field label="Email Address *" error={errors.email}>
                    <input
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      onFocus={focusBorder}
                      onBlur={(e) => blurBorder(e, !!errors.email)}
                      placeholder="jane@example.com"
                      style={inputStyle(!!errors.email)}
                      autoComplete="email"
                    />
                  </Field>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <Field label="Service Interested In" error={undefined}>
                    <select
                      value={form.service}
                      onChange={update('service')}
                      onFocus={focusBorder}
                      onBlur={(e) => blurBorder(e, false)}
                      style={{ ...inputStyle(false), cursor: 'pointer', appearance: 'auto' }}
                    >
                      <option value="">Select a service…</option>
                      <option>Teeth Cleaning</option>
                      <option>Whitening</option>
                      <option>Dental Implants</option>
                      <option>Orthodontics / Braces</option>
                      <option>Root Canal</option>
                      <option>Veneers</option>
                      <option>General Check-up</option>
                      <option>Other</option>
                    </select>
                  </Field>
                </div>

                <div style={{ marginBottom: 28 }}>
                  <Field label="How can we help? *" error={errors.message}>
                    <textarea
                      value={form.message}
                      onChange={update('message')}
                      onFocus={focusBorder}
                      onBlur={(e) => blurBorder(e, !!errors.message)}
                      placeholder="Tell us about your situation or any questions you have…"
                      rows={4}
                      style={{ ...inputStyle(!!errors.message), resize: 'vertical', lineHeight: 1.6 }}
                    />
                  </Field>
                </div>

                <BtnPrimary
                  type="submit"
                  style={{ width: '100%', fontSize: 15, padding: '16px' }}
                >
                  {loading ? 'Sending…' : 'Request Appointment →'}
                </BtnPrimary>

                <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--muted)', marginTop: 14 }}>
                  🔒 We respect your privacy. Your information is never shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid { grid-template-columns: 1fr 1.45fr; }
        .form-row     { grid-template-columns: 1fr 1fr;    }
        @media (max-width: 760px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row     { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
