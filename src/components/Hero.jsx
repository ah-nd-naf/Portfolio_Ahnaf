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
      <div>
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
          Web Developer
          <span className="tag-sep">·</span>
          Full-Stack Builder
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
