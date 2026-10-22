import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import GithubStats from './components/GithubStats';
import Research from './components/Research';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import CommandPalette from './components/CommandPalette';
import CVModal from './components/CVModal';
import ContactModal from './components/ContactModal';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { 
  FiMail, 
  FiTerminal, 
  FiArrowUp, 
  FiArrowUpRight, 
  FiChevronRight,
  FiUser,
  FiBriefcase,
  FiCode,
  FiBookOpen,
  FiCpu,
  FiAward,
  FiSend,
  FiFileText
} from 'react-icons/fi';

function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

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
          <GithubStats />
          <Research />
          <Skills />
          <Qualification />
          <Contact onOpenContactModal={() => setIsContactModalOpen(true)} />
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

        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />

        <footer className="site-footer">
          {/* Main 3-Column Modern Grid */}
          <div className="footer-grid-container">
            {/* Col 1: Brand & Identity */}
            <div className="footer-col footer-col-brand">
              <a href="#hero" className="footer-logo">
                <span className="footer-bracket">&lt;</span>
                <span className="footer-logo-text">ahnaf.dev</span>
                <span className="footer-slash">/</span>
                <span className="footer-bracket">&gt;</span>
              </a>
              <p className="footer-bio">
                Building resilient full-stack systems &amp; intelligent web apps with clean architecture and modern engineering.
              </p>
              
              <div className="footer-status-indicator">
                <span className="footer-pulse-dot"></span>
                <span className="footer-status-text">Available for select projects &amp; roles</span>
              </div>
            </div>

            {/* Col 2: Navigation Directory */}
            <div className="footer-col footer-col-nav">
              <div className="footer-col-header">
                <span className="footer-header-symbol">#</span>
                <span className="footer-header-title">directory</span>
                <span className="footer-header-count">[8]</span>
              </div>
              <ul className="footer-nav-list">
                <li>
                  <a href="#about" className="footer-nav-item nav-card-cyan" title="01 · ~/whoami">
                    <div className="nav-card-icon-box">
                      <FiUser size={13} className="nav-card-icon" />
                    </div>
                    <div className="nav-card-meta">
                      <span className="nav-card-title">About</span>
                      <span className="nav-card-path">
                        <span className="nav-card-idx">01</span>
                        <span className="nav-card-sep">·</span>
                        <span className="nav-card-slug">~/whoami</span>
                      </span>
                    </div>
                    <FiChevronRight size={11} className="nav-card-arrow" />
                  </a>
                </li>
                <li>
                  <a href="#experience" className="footer-nav-item nav-card-emerald" title="02 · ~/career">
                    <div className="nav-card-icon-box">
                      <FiBriefcase size={13} className="nav-card-icon" />
                    </div>
                    <div className="nav-card-meta">
                      <span className="nav-card-title">Experience</span>
                      <span className="nav-card-path">
                        <span className="nav-card-idx">02</span>
                        <span className="nav-card-sep">·</span>
                        <span className="nav-card-slug">~/career</span>
                      </span>
                    </div>
                    <FiChevronRight size={11} className="nav-card-arrow" />
                  </a>
                </li>
                <li>
                  <a href="#projects" className="footer-nav-item nav-card-blue" title="03 · ~/work">
                    <div className="nav-card-icon-box">
                      <FiCode size={13} className="nav-card-icon" />
                    </div>
                    <div className="nav-card-meta">
                      <span className="nav-card-title">Projects</span>
                      <span className="nav-card-path">
                        <span className="nav-card-idx">03</span>
                        <span className="nav-card-sep">·</span>
                        <span className="nav-card-slug">~/work</span>
                      </span>
                    </div>
                    <FiChevronRight size={11} className="nav-card-arrow" />
                  </a>
                </li>
                <li>
                  <a href="#research" className="footer-nav-item nav-card-amber" title="04 · ~/papers">
                    <div className="nav-card-icon-box">
                      <FiBookOpen size={13} className="nav-card-icon" />
                    </div>
                    <div className="nav-card-meta">
                      <span className="nav-card-title">Research</span>
                      <span className="nav-card-path">
                        <span className="nav-card-idx">04</span>
                        <span className="nav-card-sep">·</span>
                        <span className="nav-card-slug">~/papers</span>
                      </span>
                    </div>
                    <FiChevronRight size={11} className="nav-card-arrow" />
                  </a>
                </li>
                <li>
                  <a href="#skills" className="footer-nav-item nav-card-teal" title="05 · ~/stack">
                    <div className="nav-card-icon-box">
                      <FiCpu size={13} className="nav-card-icon" />
                    </div>
                    <div className="nav-card-meta">
                      <span className="nav-card-title">Skills</span>
                      <span className="nav-card-path">
                        <span className="nav-card-idx">05</span>
                        <span className="nav-card-sep">·</span>
                        <span className="nav-card-slug">~/stack</span>
                      </span>
                    </div>
                    <FiChevronRight size={11} className="nav-card-arrow" />
                  </a>
                </li>
                <li>
                  <a href="#qualification" className="footer-nav-item nav-card-indigo" title="06 · ~/academia">
                    <div className="nav-card-icon-box">
                      <FiAward size={13} className="nav-card-icon" />
                    </div>
                    <div className="nav-card-meta">
                      <span className="nav-card-title">Education</span>
                      <span className="nav-card-path">
                        <span className="nav-card-idx">06</span>
                        <span className="nav-card-sep">·</span>
                        <span className="nav-card-slug">~/academia</span>
                      </span>
                    </div>
                    <FiChevronRight size={11} className="nav-card-arrow" />
                  </a>
                </li>
                <li>
                  <a href="#contact" className="footer-nav-item nav-card-rose" title="07 · ~/message">
                    <div className="nav-card-icon-box">
                      <FiSend size={13} className="nav-card-icon" />
                    </div>
                    <div className="nav-card-meta">
                      <span className="nav-card-title">Contact</span>
                      <span className="nav-card-path">
                        <span className="nav-card-idx">07</span>
                        <span className="nav-card-sep">·</span>
                        <span className="nav-card-slug">~/message</span>
                      </span>
                    </div>
                    <FiChevronRight size={11} className="nav-card-arrow" />
                  </a>
                </li>
                <li>
                  <button 
                    type="button" 
                    onClick={() => setIsCVModalOpen(true)}
                    className="footer-nav-item nav-card-purple footer-nav-btn"
                    title="08 · ~/resume.pdf (View & Download Resume / CV)"
                  >
                    <div className="nav-card-icon-box">
                      <FiFileText size={13} className="nav-card-icon" />
                    </div>
                    <div className="nav-card-meta">
                      <span className="nav-card-title">Resume / CV</span>
                      <span className="nav-card-path">
                        <span className="nav-card-idx">08</span>
                        <span className="nav-card-sep">·</span>
                        <span className="nav-card-slug">~/resume.pdf</span>
                      </span>
                    </div>
                    <FiArrowUpRight size={11} className="nav-card-arrow" />
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Social & Connect Network */}
            <div className="footer-col footer-col-social">
              <div className="footer-col-header">
                <span className="footer-header-symbol">$</span>
                <span className="footer-header-title">connect --socials</span>
              </div>
              <div className="footer-social-grid">
                <a 
                  href="https://github.com/ah-nd-naf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-card github-card"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <div className="social-card-icon-box">
                    <FaGithub size={15} className="social-card-icon" />
                  </div>
                  <div className="social-card-meta">
                    <span className="social-card-title">GitHub</span>
                    <span className="social-card-handle">@ah-nd-naf</span>
                  </div>
                  <FiArrowUpRight size={13} className="social-card-arrow" />
                </a>

                <a 
                  href="https://linkedin.com/in/ahnafrasheed/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-card linkedin-card"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <div className="social-card-icon-box">
                    <FaLinkedin size={15} className="social-card-icon" />
                  </div>
                  <div className="social-card-meta">
                    <span className="social-card-title">LinkedIn</span>
                    <span className="social-card-handle">@ahnafrasheed</span>
                  </div>
                  <FiArrowUpRight size={13} className="social-card-arrow" />
                </a>

                <a 
                  href="https://www.facebook.com/share/192K2vokxv/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-card facebook-card"
                  title="Facebook Profile"
                  aria-label="Facebook Profile"
                >
                  <div className="social-card-icon-box">
                    <FaFacebook size={15} className="social-card-icon" />
                  </div>
                  <div className="social-card-meta">
                    <span className="social-card-title">Facebook</span>
                    <span className="social-card-handle">@ahnaf</span>
                  </div>
                  <FiArrowUpRight size={13} className="social-card-arrow" />
                </a>

                <button 
                  type="button"
                  onClick={() => setIsContactModalOpen(true)}
                  className="footer-social-card mail-card"
                  title="Send Direct Message"
                  aria-label="Send Direct Message"
                >
                  <div className="social-card-icon-box">
                    <FiMail size={15} className="social-card-icon" />
                  </div>
                  <div className="social-card-meta">
                    <span className="social-card-title">Direct Msg</span>
                    <span className="social-card-handle">Say Hello</span>
                  </div>
                  <FiArrowUpRight size={13} className="social-card-arrow" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Row: VS Code / IDE Status Dock */}
          <div className="footer-status-bar">
            <div className="footer-status-left">
              <span className="footer-status-item">
                <span className="footer-status-dot"></span>
                <span className="status-key">[status:</span>
                <span className="status-val status-val-active">active</span>
                <span className="status-key">]</span>
              </span>
              <span className="footer-status-sep">·</span>
              <span className="footer-status-item">
                <span className="status-key">[env:</span>
                <span className="status-val status-val-env">prod</span>
                <span className="status-key">]</span>
              </span>
              <span className="footer-status-sep">·</span>
              <span className="footer-status-item">
                <span className="status-key">[ping:</span>
                <span className="status-val status-val-ping">12ms</span>
                <span className="status-key">]</span>
              </span>
              <span className="footer-status-sep">·</span>
              <button 
                type="button"
                className="footer-terminal-btn"
                onClick={() => setIsCommandPaletteOpen(true)}
                title="Open Command Palette (Ctrl+K or ~)"
                aria-label="Open Command Palette"
              >
                <span className="status-key">[</span>
                <FiTerminal size={11} className="footer-term-icon" />
                <span className="status-key">terminal:</span>
                <span className="footer-cmd-kbd">⌘K</span>
                <span className="status-key">]</span>
              </button>
            </div>

            <div className="footer-status-center">
              <span className="footer-credits-tag">// built with React 18 · Vite · CSS3</span>
              <span className="footer-credits-sep">·</span>
              <span className="footer-credits-name">Ahnaf Rasheed</span>
              <span className="footer-credits-copy">© {new Date().getFullYear()}</span>
            </div>

            <div className="footer-status-right">
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
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

