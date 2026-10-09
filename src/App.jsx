import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Research from './components/Research';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import CommandPalette from './components/CommandPalette';
import CVModal from './components/CVModal';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { FiMail, FiTerminal, FiArrowUp } from 'react-icons/fi';

function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  useEffect(() => {
    // Force scroll to top on every fresh load to prevent browser scroll memory
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <ParticleBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar 
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} 
          onOpenCV={() => setIsCVModalOpen(true)}
        />
        <main>
          <Hero onOpenCV={() => setIsCVModalOpen(true)} />
          <About onOpenCV={() => setIsCVModalOpen(true)} />
          <Experience />
          <Projects />
          <Research />
          <Skills />
          <Qualification />
          <Contact />
        </main>

        <CommandPalette 
          isOpen={isCommandPaletteOpen} 
          setIsOpen={setIsCommandPaletteOpen} 
          onOpenCV={() => setIsCVModalOpen(true)}
        />

        <CVModal 
          isOpen={isCVModalOpen} 
          onClose={() => setIsCVModalOpen(false)} 
        />

        <footer className="site-footer">
          {/* Tier 1: Brand & Section Navigation */}
          <div className="footer-top-row">
            <div className="footer-brand">
              <a href="#hero" className="footer-logo">
                <span className="footer-bracket">&lt;</span>
                <span className="footer-logo-text">ahnaf.dev</span>
                <span className="footer-slash">/</span>
                <span className="footer-bracket">&gt;</span>
              </a>
              <span className="footer-tagline">// building resilient full-stack systems &amp; intelligent web apps</span>
            </div>
            
            <nav className="footer-quick-nav" aria-label="Footer navigation">
              <a href="#about" className="footer-nav-chip">#about</a>
              <a href="#experience" className="footer-nav-chip">#experience</a>
              <a href="#projects" className="footer-nav-chip">#projects</a>
              <a href="#research" className="footer-nav-chip">#research</a>
              <a href="#skills" className="footer-nav-chip">#skills</a>
              <a href="#contact" className="footer-nav-chip">#contact</a>
            </nav>
          </div>

          <div className="footer-divider-line" aria-hidden="true"></div>

          {/* Tier 2: Interactive Social Badges */}
          <div className="footer-social-section">
            <div className="footer-social-title">
              <span className="footer-social-prompt">$</span>
              <span>connect --socials</span>
            </div>
            <div className="footer-social-badges">
              <a 
                href="https://github.com/ah-nd-naf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-badge github-badge"
                title="GitHub: ah-nd-naf"
                aria-label="GitHub Profile"
              >
                <FaGithub size={15} className="social-badge-icon" />
                <span className="social-badge-name">GitHub</span>
                <span className="social-badge-sep">/</span>
                <span className="social-badge-handle">ah-nd-naf</span>
              </a>
              <a 
                href="https://linkedin.com/in/ahnafrasheed/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-badge linkedin-badge"
                title="LinkedIn: ahnafrasheed"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={15} className="social-badge-icon" />
                <span className="social-badge-name">LinkedIn</span>
                <span className="social-badge-sep">/</span>
                <span className="social-badge-handle">ahnafrasheed</span>
              </a>
              <a 
                href="https://www.facebook.com/share/192K2vokxv/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-badge facebook-badge"
                title="Facebook: Ahnaf Rasheed"
                aria-label="Facebook Profile"
              >
                <FaFacebook size={15} className="social-badge-icon" />
                <span className="social-badge-name">Facebook</span>
                <span className="social-badge-sep">/</span>
                <span className="social-badge-handle">ahnaf</span>
              </a>
              <a 
                href="mailto:ahnaf.rasheed.zaki@gmail.com" 
                className="footer-social-badge mail-badge"
                title="Email: ahnaf.rasheed.zaki@gmail.com"
                aria-label="Email Ahnaf"
              >
                <FiMail size={15} className="social-badge-icon" />
                <span className="social-badge-name">Email</span>
                <span className="social-badge-sep">:</span>
                <span className="social-badge-handle">zaki@gmail</span>
              </a>
            </div>
          </div>

          <div className="footer-divider-line" aria-hidden="true"></div>

          {/* Tier 3: Telemetry Bar, Credits, Back to Top */}
          <div className="footer-bottom-row">
            <div className="footer-status">
              <span className="footer-status-pill">
                <span className="footer-status-dot"></span>
                <span style={{ color: 'var(--text-dim)' }}>[</span>
                <span style={{ color: 'var(--syn-cyan)' }}>system</span>
                <span style={{ color: 'var(--text-dim)' }}>:</span>
                <span style={{ color: 'var(--syn-green)', fontWeight: 600 }}>active</span>
                <span style={{ color: 'var(--text-dim)' }}>]</span>
              </span>
              <span className="footer-status-sep">·</span>
              <span className="footer-status-pill">
                <span style={{ color: 'var(--text-dim)' }}>[</span>
                <span style={{ color: 'var(--syn-cyan)' }}>env</span>
                <span style={{ color: 'var(--text-dim)' }}>:</span>
                <span style={{ color: 'var(--syn-purple)' }}>prod</span>
                <span style={{ color: 'var(--text-dim)' }}>]</span>
              </span>
              <span className="footer-status-sep">·</span>
              <span className="footer-status-pill">
                <span style={{ color: 'var(--text-dim)' }}>[</span>
                <span style={{ color: 'var(--syn-cyan)' }}>ping</span>
                <span style={{ color: 'var(--text-dim)' }}>:</span>
                <span style={{ color: 'var(--syn-number)' }}>12ms</span>
                <span style={{ color: 'var(--text-dim)' }}>]</span>
              </span>
              <span className="footer-status-sep">·</span>
              <button 
                type="button"
                className="footer-terminal-btn"
                onClick={() => setIsCommandPaletteOpen(true)}
                title="Open Command Palette (Ctrl+K or ~)"
                aria-label="Open Command Palette"
              >
                <span style={{ color: 'var(--text-dim)' }}>[</span>
                <FiTerminal size={11} className="footer-term-icon" />
                <span style={{ color: 'var(--syn-cyan)' }}>terminal</span>
                <span style={{ color: 'var(--text-dim)' }}>:</span>
                <span style={{ color: 'var(--syn-pink)', fontWeight: 600, marginLeft: '3px' }}>⌘K</span>
                <span style={{ color: 'var(--text-dim)' }}>]</span>
              </button>
            </div>

            <div className="footer-credits">
              <span style={{ color: 'var(--syn-comment)' }}>// built with React 18 · Vite · CSS3</span>
              <span style={{ color: 'var(--text-dim)', margin: '0 4px' }}> · </span>
              <span style={{ 
                background: 'linear-gradient(90deg, var(--syn-cyan), var(--syn-purple), var(--syn-pink))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
                textShadow: '0 0 15px rgba(199, 146, 234, 0.2)',
                display: 'inline-block'
              }}>
                Ahnaf Rasheed
              </span>
              <span style={{ color: 'var(--syn-comment)', marginLeft: '4px' }}>© {new Date().getFullYear()}</span>
            </div>

            <button 
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className="footer-back-to-top"
              aria-label="Return to top"
            >
              <FiArrowUp size={12} className="back-to-top-arrow" />
              <span className="back-to-top-kw">return</span> <span className="back-to-top-fn">toTop</span><span className="back-to-top-punct">()</span>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

