import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiTerminal, FiSearch } from 'react-icons/fi';

const Navbar = ({ onOpenCommandPalette }) => {
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
        <FiTerminal className="logo-icon" />
        <span className="logo-path">./</span>
        <span className="logo-name">AHNAF</span>
        <span className="logo-portfolio">/PORTFOLIO</span>
      </a>

      {/* Desktop Navigation */}
      <nav className="nav-links desktop-nav" aria-label="Primary navigation">
        <a href="#about">about</a>
        <a href="#projects">projects</a>
        <a href="#skills">skills</a>
        <a href="#qualification">education</a>
        <a href="#contact">contact</a>

        {/* Command Palette Trigger */}
        <button
          type="button"
          className="nav-cmd-trigger"
          onClick={onOpenCommandPalette}
          title="Quick Search & Terminal (Ctrl+K or ~)"
          aria-label="Quick Search & Command Terminal"
        >
          <FiSearch size={13} className="nav-cmd-icon" />
          <span className="nav-cmd-text">Search</span>
          <kbd className="nav-cmd-kbd">⌘K</kbd>
        </button>

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
            <a href="#qualification" onClick={() => setIsMobileMenuOpen(false)}>education</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>contact</a>
            
            <button 
              className="nav-cmd-trigger-mobile"
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (onOpenCommandPalette) onOpenCommandPalette();
              }}
            >
              <FiSearch size={15} /> Quick Search & Terminal <kbd className="nav-cmd-kbd" style={{ marginLeft: '6px' }}>⌘K</kbd>
            </button>

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
