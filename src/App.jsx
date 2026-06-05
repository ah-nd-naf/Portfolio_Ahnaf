import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

function App() {
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
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Qualification />
          <Contact />
        </main>
        <footer className="site-footer">
          <div className="footer-status">
            <span className="footer-status-dot"></span>
            <span style={{ color: 'var(--text-dim)' }}>[</span>
            <span style={{ color: 'var(--syn-cyan)' }}>system</span>
            <span style={{ color: 'var(--text-dim)' }}>:</span>
            <span style={{ color: 'var(--syn-green)', fontWeight: 600 }}>active</span>
            <span style={{ color: 'var(--text-dim)' }}>] · [</span>
            <span style={{ color: 'var(--syn-cyan)' }}>env</span>
            <span style={{ color: 'var(--text-dim)' }}>:</span>
            <span style={{ color: 'var(--syn-purple)' }}>production</span>
            <span style={{ color: 'var(--text-dim)' }}>] · [</span>
            <span style={{ color: 'var(--syn-cyan)' }}>ping</span>
            <span style={{ color: 'var(--text-dim)' }}>:</span>
            <span style={{ color: 'var(--syn-number)' }}>12ms</span>
            <span style={{ color: 'var(--text-dim)' }}>]</span>
          </div>
          <div className="footer-credits">
            <span style={{ color: 'var(--syn-comment)' }}>// designed &amp; built by </span>
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
            <span style={{ color: 'var(--syn-comment)' }}> · </span>
            <span style={{ color: 'var(--syn-number)' }}>{new Date().getFullYear()}</span>
          </div>
          <div className="footer-right">
            <div className="footer-socials">
              <a href="https://github.com/ah-nd-naf" target="_blank" rel="noopener noreferrer" className="footer-social-link github-icon" title="GitHub">
                <FaGithub size={15} />
              </a>
              <a href="https://linkedin.com/in/ahnafrasheed/" target="_blank" rel="noopener noreferrer" className="footer-social-link linkedin-icon" title="LinkedIn">
                <FaLinkedin size={15} />
              </a>
              <a href="https://www.facebook.com/share/192K2vokxv/" target="_blank" rel="noopener noreferrer" className="footer-social-link facebook-icon" title="Facebook">
                <FaFacebook size={15} />
              </a>
              <a href="mailto:ahnaf.rasheed.zaki@gmail.com" className="footer-social-link mail-icon" title="Email">
                <FiMail size={15} />
              </a>
            </div>
            <span onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="footer-back-to-top">
              <span className="back-to-top-kw">return</span> <span className="back-to-top-fn">toTop</span><span className="back-to-top-punct">()</span>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

