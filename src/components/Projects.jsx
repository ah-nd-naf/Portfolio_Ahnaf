import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const SLIDE_DURATION = 6000;

const projects = [
  {
    name: 'Aurae-Ecommerce',
    label: 'Aurae E-Commerce',
    description: 'A full-stack luxury fashion e-commerce platform with OTP-based JWT authentication, SSLCommerz payment integration, verified purchaser reviews, admin inventory panel, and a minimalist high-contrast storefront UI.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/ah-nd-naf/Aurae-Ecommerce',
    live: 'https://aurae-ecommerce.vercel.app',
    accent: '#f0a500',
  },
  {
    name: 'social-media-app',
    label: 'Social Media App',
    description: 'Full-stack social networking app allowing users to securely sign up, share thoughts instantly, interact with live likes and nested comments, and personalize their profiles with avatars.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/ah-nd-naf/social-media-app',
    live: 'https://social-media-app-amber-eight-47.vercel.app',
    accent: '#00d4f5',
  },
  {
    name: 'Authentication-System',
    label: 'Authentication System',
    description: 'A professional MERN stack authentication boilerplate featuring JWT, protected routes, real-time activity logging, and a premium glassmorphism dashboard.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/ah-nd-naf/Authentication-System',
    live: 'https://authentication-system-six-teal.vercel.app',
    accent: '#c792ea',
  },
  {
    name: 'mern-project',
    label: 'Pet Rescue Platform',
    description: 'A comprehensive Pet Rescue, Adoption & Care Platform built with the MERN stack featuring REST API integrations and full CRUD operations.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/ah-nd-naf/mern-project/tree/main/mern-project-main',
    live: '#',
    accent: '#4ec9b0',
  },
  {
    name: 'PetSite',
    label: 'PetSite',
    description: 'Responsive pet adoption website featuring a gallery, adoption process guide, live application form, and family testimonials — deployed on Vercel.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/ah-nd-naf/PetSite',
    live: 'https://pet-site-pi.vercel.app/',
    accent: '#f8c555',
  },
  {
    name: 'Aesthetic-Restaurant',
    label: 'Aesthetic Restaurant',
    description: "Welcome to the Aesthetic Restaurant Website! Designed to offer visitors an immersive and visually appealing experience that reflects the restaurant's philosophy.",
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/ah-nd-naf/Aesthetic-Restaurant',
    live: '#',
    accent: '#f92aad',
  },
  {
    name: 'Student-Management-System',
    label: 'Student Management System',
    description: 'Comprehensive backend system for managing students, teachers, and admins. Includes role-based access control and secure JWT authentication.',
    tech: ['Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/ah-nd-naf/STD_MS',
    live: '#',
    accent: '#b5cea8',
  },
];


const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);
  const startTimeRef = useRef(null);

  const goTo = (idx, dir) => {
    setDirection(dir);
    setCurrentIndex(idx);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  const goNext = () => goTo((currentIndex + 1) % projects.length, 1);
  const goPrev = () => goTo((currentIndex - 1 + projects.length) % projects.length, -1);

  // Auto-slide timer
  useEffect(() => {
    if (isHovered) return;
    startTimeRef.current = Date.now();

    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % projects.length);
      setProgress(0);
      startTimeRef.current = Date.now();
    }, SLIDE_DURATION);

    return () => clearInterval(intervalRef.current);
  }, [isHovered, currentIndex]);

  // Progress bar animation (runs every 30ms)
  useEffect(() => {
    if (isHovered) return;
    startTimeRef.current = Date.now();

    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      setProgress(Math.min((elapsed / SLIDE_DURATION) * 100, 100));
    }, 30);

    return () => clearInterval(progressRef.current);
  }, [isHovered, currentIndex]);

  const project = projects[currentIndex];

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? '60%' : '-60%', opacity: 0, scale: 0.92, filter: 'blur(8px)' }),
    center: { x: 0, opacity: 1, scale: 1, filter: 'blur(0px)' },
    exit: (dir) => ({ x: dir > 0 ? '-60%' : '60%', opacity: 0, scale: 0.92, filter: 'blur(8px)' }),
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container" style={{ maxWidth: '1200px' }}>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(0, 212, 245, 0.05)', border: '1px solid rgba(0, 212, 245, 0.15)', borderRadius: '30px', marginBottom: '1.25rem' }}>
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--syn-cyan)', boxShadow: '0 0 10px var(--syn-cyan)', animation: 'pulse 2s infinite' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--syn-cyan)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>Featured Work</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontFamily: 'var(--font-sans)', fontWeight: 800, letterSpacing: '-1.5px', lineHeight: 1.1, margin: 0 }}>
            <span style={{ color: 'var(--text-main)' }}>My </span>
            <span className="text-gradient" style={{ display: 'inline-block', textShadow: '0 0 40px rgba(0, 212, 245, 0.3)' }}>Projects</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '1rem', fontFamily: 'var(--font-sans)', fontSize: '1rem', maxWidth: '500px', lineHeight: 1.6 }}>
            A curated selection of things I've built — from full-stack apps to polished frontends.
          </p>
        </motion.div>

        {/* Main Slider Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="projects-slider-wrapper"
        >
          <AnimatePresence initial={false} mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="projects-card"
            >
              {/* Image Panel */}
              <div className="projects-card-image-panel">
                <div className="projects-card-image-overlay" style={{ '--accent': project.accent }} />
                <img
                    src={`/${project.name}.png`}
                    alt={project.label}
                    className="projects-card-img"
                    onError={(e) => { e.target.onerror = null; e.target.src = '/placeholder.png'; }}
                  />
                {/* Project number badge */}
                <div className="projects-card-number">
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '2px' }}>PROJECT</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-main)', lineHeight: 1 }}>
                    {String(currentIndex + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '1px' }}>/ {String(projects.length).padStart(2, '0')}</span>
                </div>
                {/* Live badge */}
                {project.live !== '#' && (
                  <div className="projects-live-badge">
                    <span className="projects-live-dot" style={{ '--accent': project.accent }} />
                    <span>LIVE</span>
                  </div>
                )}
              </div>

              {/* Content Panel */}
              <div className="projects-card-content">
                {/* Top accent line */}
                <div style={{ height: '3px', width: '40px', background: project.accent, borderRadius: '2px', boxShadow: `0 0 12px ${project.accent}`, marginBottom: '1.75rem' }} />

                <h3 style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: 'var(--text-main)', lineHeight: 1.2, letterSpacing: '-0.5px', marginBottom: '1rem' }}>
                  {project.label}
                </h3>

                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.97rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '2rem', flexGrow: 1 }}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
                  {project.tech.map((t) => (
                    <span key={t} className="projects-tech-pill" style={{ '--accent': project.accent }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="projects-btn projects-btn-outline" style={{ '--accent': project.accent }}>
                      <FaGithub size={16} /> Source Code
                    </a>
                  )}
                  {project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="projects-btn projects-btn-solid" style={{ '--accent': project.accent }}>
                      <FiExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Controls Row */}
        <div className="projects-controls">
          {/* Dot Nav */}
          <div className="projects-dots">
            {projects.map((p, idx) => (
              <button
                key={idx}
                className={`projects-dot ${idx === currentIndex ? 'active' : ''}`}
                style={{ '--accent': projects[idx].accent }}
                onClick={() => goTo(idx, idx > currentIndex ? 1 : -1)}
                aria-label={`Go to ${p.label}`}
              />
            ))}
          </div>

          {/* Arrow Buttons */}
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button className="projects-arrow-btn" onClick={goPrev} aria-label="Previous">
              <FiChevronLeft size={20} />
            </button>
            <button className="projects-arrow-btn" onClick={goNext} aria-label="Next">
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="projects-progress-track">
          <motion.div
            className="projects-progress-bar"
            style={{
              width: isHovered ? `${progress}%` : `${progress}%`,
              background: project.accent,
              boxShadow: `0 0 10px ${project.accent}80`,
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default Projects;
