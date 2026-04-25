import React from 'react';
import { motion } from 'framer-motion';
import TypingEffect from './TypingEffect';

const Hero = () => {
  // "Ahnaf Rasheed" = 13 chars, speed=90ms, startDelay=600ms → completes at ~1770ms
  const typingDoneAt = 2.0; // seconds — when subtitle + rest fade in

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-content">
        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hello, I'm
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <TypingEffect text="Ahnaf Rasheed" speed={90} startDelay={600} />
        </motion.div>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: typingDoneAt, duration: 0.8 }}
        >
          Full-Stack <span className="subtitle-accent">Web Developer</span>
        </motion.p>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: typingDoneAt + 0.4, duration: 0.8 }}
        >
          I craft scalable, visually stunning web experiences — from robust backends to polished frontends.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: typingDoneAt + 0.8, duration: 0.8 }}
        >
          <a href="#projects" className="btn btn-primary" id="btn-view-work">View My Work</a>
          <a href="#contact" className="btn btn-secondary" id="btn-contact">Contact Me</a>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.5, 1], y: [0, 8, 0] }}
        transition={{ delay: typingDoneAt + 1.2, duration: 2, repeat: Infinity }}
      >
        <a href="#about" aria-label="Scroll down">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
