import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <ParticleBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <footer className="site-footer">
          <span style={{ color: 'var(--syn-comment)' }}>// </span>
          designed &amp; built by{' '}
          <span style={{ color: 'var(--syn-cyan)' }}>Ahnaf Rasheed</span>
          {' · '}{new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}

export default App;
