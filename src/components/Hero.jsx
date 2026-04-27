import React from 'react';
import { motion } from 'framer-motion';
import TypingEffect from './TypingEffect';
import { FaGithub } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

const Hero = () => {
  // "Ahnaf Rasheed" = 13 chars × 90ms + 600ms delay ≈ 1.77s total
  const afterTyping = 2.1;

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
            <TypingEffect text="AHNAF RASHEED" speed={120} startDelay={600} />
          </motion.div>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: afterTyping, duration: 0.8 }}
          >
            <b>Web Developer</b>
            <span className="tag-sep"><b>.</b></span>
            <b>Full-Stack Builder</b>
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: afterTyping + 0.3, duration: 0.7 }}
          >
            <a
              href="https://github.com/ah-nd-naf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              id="btn-github"
            >
              <FaGithub /> View GitHub
            </a>
            <a href="#contact" className="btn btn-secondary" id="btn-contact">
              <FiDownload /> Get In Touch
            </a>
          </motion.div>
        </div>

        {/* Right-side Image Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: afterTyping + 0.5, duration: 1, type: 'spring' }}
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
        animate={{ opacity: 1 }}
        transition={{ delay: afterTyping + 1, duration: 0.8 }}
      >
        <span style={{ color: 'var(--syn-purple)' }}>// </span>
        <a href="#about" style={{ color: 'var(--syn-comment)' }}>scroll to explore</a>
      </motion.div>
    </section>
  );
};

export default Hero;
