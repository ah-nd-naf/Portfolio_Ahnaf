import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => (
  <motion.nav
    className="navbar"
    initial={{ y: -80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    <div className="nav-logo">
      <span className="logo-path">./</span>
      <span className="logo-name">ahnaf</span>
      <span className="logo-path">/portfolio</span>
    </div>

    <nav className="nav-links" aria-label="Primary navigation">
      <a href="#about">about</a>
      <a href="#projects">projects</a>
      <a href="#skills">skills</a>
      <a href="#contact">contact</a>
      <a
        href="https://github.com/ah-nd-naf"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'var(--syn-cyan)' }}
      >
        GitHub →
      </a>
    </nav>
  </motion.nav>
);

export default Navbar;
