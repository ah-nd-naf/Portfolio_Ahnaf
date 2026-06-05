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
            <span>[System: Active] · [Env: Production] · [Ping: 12ms]</span>
          </div>
          <div className="footer-credits">
            <span style={{ color: 'var(--syn-comment)' }}>// </span>
            designed &amp; built by{' '}
            <span style={{ color: 'var(--syn-cyan)' }}>Ahnaf Rasheed</span>
            {' · '}{new Date().getFullYear()}
          </div>
          <div className="footer-right">
            <div className="footer-socials">
              <a href="https://github.com/ah-nd-naf" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="GitHub">
                <FaGithub size={15} />
              </a>
              <a href="https://linkedin.com/in/ahnafrasheed/" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="LinkedIn">
                <FaLinkedin size={15} />
              </a>
              <a href="https://www.facebook.com/share/192K2vokxv/" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="Facebook">
                <FaFacebook size={15} />
              </a>
              <a href="mailto:ahnaf.rasheed.zaki@gmail.com" className="footer-social-link" title="Email">
                <FiMail size={15} />
              </a>
            </div>
            <span onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="footer-back-to-top">
              // return to top
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

