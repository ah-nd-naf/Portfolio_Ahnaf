import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TypingEffect from './TypingEffect';
import LoopingTypingEffect from './LoopingTypingEffect';
import { FaGithub, FaLinkedin, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiDjango, SiPostgresql, SiMongodb, SiNextdotjs, SiDocker } from 'react-icons/si';
import { FiLayers, FiMail, FiArrowUpRight } from 'react-icons/fi';

const HERO_WORDS = ['Web Developer', 'Full-Stack Builder', 'Web Developer </> Full-Stack Builder'];

const CORE_TECH = [
  { icon: <FaReact color="#61dafb" size={13} />, name: 'React' },
  { icon: <SiNextdotjs color="#ffffff" size={13} />, name: 'Next.js' },
  { icon: <FaNodeJs color="#43853d" size={13} />, name: 'Node.js' },
  { icon: <SiDjango color="#44b78b" size={13} />, name: 'Django DRF' },
  { icon: <SiPostgresql color="#336791" size={13} />, name: 'PostgreSQL' },
  { icon: <SiMongodb color="#47a248" size={13} />, name: 'MongoDB' },
  { icon: <SiDocker color="#2496ed" size={13} />, name: 'Docker' },
];

const METRICS = [
  { val: '15+', label: 'Projects Built' },
  { val: '3+', label: 'Full-Stack Ecosystems' },
  { val: '100%', label: 'Secure & Deployed' },
];

const Hero = () => {
  const [nameComplete, setNameComplete] = useState(false);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-layout">
        <div style={{ position: 'relative', zIndex: 10 }}>
          <motion.p
            className="hero-path-prefix"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="prefix-dot">.PORTFOLIO</span>
            <span style={{ color: 'var(--text-muted)' }}>/ </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <TypingEffect 
              text="AHNAF RASHEED" 
              speed={120} 
              startDelay={600} 
              onComplete={() => setNameComplete(true)} 
            />
          </motion.div>

          <div className="hero-tagline">
            <b>
              <LoopingTypingEffect 
                words={HERO_WORDS} 
                isStarted={nameComplete}
                startDelay={300}
              />
            </b>
          </div>

          {/* Premium Glassmorphic Cyber HUD Card */}
          <motion.div
            className="hero-hud-card"
            initial={{ opacity: 0, y: 15 }}
            animate={nameComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="hero-hud-glow" />

            {/* HUD Status Header */}
            <div className="hero-hud-header">
              <div className="hero-hud-status">
                <span className="hud-pulse-dot" />
                <span className="hud-status-text">AVAILABLE FOR HIRE</span>
              </div>
              <div className="hero-hud-tag">
                <span style={{ color: 'var(--syn-cyan)' }}>📍</span> Dhaka, BD · Remote Ready
              </div>
            </div>

            {/* Bio Body */}
            <p className="hero-hud-bio">
              Full-Stack Developer specializing in <span className="syn-cyan font-semibold">MERN</span>, <span className="syn-purple font-semibold">PERN</span>, and <span className="syn-green font-semibold">Django REST Framework</span>. I engineer production-oriented web applications end-to-end — from secure REST APIs and relational database modeling to sleek, responsive frontends.
            </p>

            {/* Core Tech Stack Micro-Chips */}
            <div className="hero-hud-tech-section">
              <div className="hero-hud-tech-label">
                <span>// CORE TECH STACK</span>
              </div>
              <div className="hero-hud-tech-grid">
                {CORE_TECH.map((t) => (
                  <motion.div 
                    key={t.name}
                    className="hero-tech-chip"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  >
                    <span className="chip-icon">{t.icon}</span>
                    <span className="chip-name">{t.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Telemetry Metrics Footer */}
            <div className="hero-hud-metrics">
              {METRICS.map((m) => (
                <div key={m.label} className="hud-metric-item">
                  <span className="hud-metric-val">{m.val}</span>
                  <span className="hud-metric-label">{m.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons & Social Links */}
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 10 }}
            animate={nameComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a
              href="https://github.com/ah-nd-naf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              id="btn-github"
            >
              <FaGithub /> View GitHub <FiArrowUpRight style={{ fontSize: '0.9rem' }} />
            </a>
            <a href="#projects" className="btn btn-secondary" id="btn-projects">
              <FiLayers /> View Projects
            </a>
            <a href="#contact" className="btn btn-secondary" id="btn-contact">
              <FiMail /> Get In Touch
            </a>

            <div className="hero-social-strip">
              <a 
                href="https://linkedin.com/in/ahnafrasheed" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-btn"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:ahnaf.rasheed.zaki@gmail.com" 
                className="social-icon-btn"
                title="Email Me"
                aria-label="Send Email"
              >
                <FiMail />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right-side Image Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={nameComplete ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.9, delay: 0.3, type: 'spring' }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', height: '100%' }}
        >
          <div style={{ position: 'relative', width: 'clamp(280px, 30vw, 400px)', height: 'clamp(320px, 35vw, 450px)' }}>
            {/* Ambient Glow behind image */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(0, 212, 245, 0.4) 0%, transparent 65%)', filter: 'blur(50px)', zIndex: 0 }}></div>
            
            {/* The Image Box */}
            <div style={{ 
              position: 'relative', 
              width: '100%', 
              height: '100%', 
              borderRadius: '30px', 
              overflow: 'hidden', 
              border: '2px solid rgba(0, 212, 245, 0.4)', 
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), inset 0 0 0 1px rgba(255,255,255,0.1), 0 0 30px rgba(0, 212, 245, 0.15)', 
              zIndex: 1, 
              background: 'var(--bg-editor)' 
            }}>
              {/* User's Photo */}
              <img 
                src="/ahnaf-dp.png" 
                alt="Ahnaf Rasheed" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              
              {/* Cyber overlay gradient (Subtle edge glow) */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(180deg, transparent 70%, rgba(0, 212, 245, 0.25) 100%)', pointerEvents: 'none', boxShadow: 'inset 0 0 40px rgba(0,0,0,0.5)' }}></div>
            </div>

            {/* Floating decoration 1 */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              style={{ position: 'absolute', top: '20px', right: '-20px', background: 'rgba(13, 17, 23, 0.8)', padding: '0.6rem 1.2rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--syn-green)', zIndex: 2, backdropFilter: 'blur(5px)', boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }}
            >
              {"<Developer />"}
            </motion.div>

            {/* Floating decoration 2 */}
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
              style={{ position: 'absolute', bottom: '40px', left: '-30px', background: 'rgba(13, 17, 23, 0.8)', padding: '0.6rem 1.2rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--syn-purple)', zIndex: 2, backdropFilter: 'blur(5px)', boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }}
            >
              {"{ status: 'Active' }"}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={nameComplete ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <span style={{ color: 'var(--syn-purple)' }}>// </span>
        <a href="#about" style={{ color: 'var(--syn-comment)' }}>scroll to explore</a>
      </motion.div>
    </section>
  );
};

export default Hero;
