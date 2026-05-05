import React, { useState, useEffect } from 'react';
import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import Services     from './components/Services';
import About        from './components/About';
import WhyUs        from './components/WhyUs';
import Testimonials from './components/Testimonials';
import BookingCTA   from './components/BookingCTA';
import Contact      from './components/Contact';
import Footer       from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const ids = ['home', 'services', 'about', 'why-us', 'testimonials', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Testimonials />
        <BookingCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
