import React from 'react';
import { motion } from 'framer-motion';
import TypingEffect from './TypingEffect';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="hero-greeting text-gradient">Hello, I'm</h2>
          <TypingEffect text="Ahnaf Rasheed" speed={120} className="mb-4" />
          <motion.h3 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            Full-Stack Web Developer
          </motion.h3>
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            I build scalable, professional, and visually stunning web applications.
          </motion.p>
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 1 }}
          >
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 4, duration: 2, repeat: Infinity }}
      >
        <a href="#about"><ChevronDown size={32} /></a>
      </motion.div>
    </section>
  );
};

export default Hero;
