import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <a 
        href="#"
        className="nav-logo"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setIsMobileMenuOpen(false);
        }}
      >
        <span className="logo-path">./</span>
        <span className="logo-name">AHNAF</span>
        <span className="logo-path">/PORTFOLIO</span>
      </a>

      {/* Desktop Navigation */}
      <nav className="nav-links desktop-nav" aria-label="Primary navigation">
        <a href="#about">about</a>
        <a href="#projects">projects</a>
        <a href="#skills">skills</a>
        <a href="#contact">contact</a>
        <a
          href="https://github.com/ah-nd-naf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-github"
        >
          GitHub →
        </a>
      </nav>

      {/* Mobile Toggle Button */}
      <button 
        className="mobile-menu-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      {/* Mobile Dropdown Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>about</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>projects</a>
            <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>skills</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>contact</a>
            <a
              href="https://github.com/ah-nd-naf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-github-mobile"
            >
              GitHub →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
