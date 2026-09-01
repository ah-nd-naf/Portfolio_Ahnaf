import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiChevronLeft, FiChevronRight, FiGrid, FiLayers, FiFolder } from 'react-icons/fi';

const SLIDE_DURATION = 6000;

export const projects = [
  {
    name: 'AI-Resume-Analyzer',
    label: 'AI Resume Analyzer',
    description: 'An AI-powered SaaS platform that evaluates resumes against Applicant Tracking Systems (ATS) and job descriptions. Features real-time ATS scoring, keyword gap analysis, AI bullet point rewrites, Groq Vision OCR, and downloadable PDF reports.',
    tech: ['Next.js', 'FastAPI', 'Python', 'Prisma', 'Groq API', 'Tailwind CSS'],
    categories: ['Full-Stack', 'AI / ML', 'Backend'],
    github: 'https://github.com/ah-nd-naf/AI-Resume-Analyzer',
    live: 'https://ai-resume-analyzer-onj7-five.vercel.app',
    accent: '#6366f1',
  },
  {
    name: 'Aurae-Ecommerce',
    label: 'Aurae E-Commerce',
    description: 'A full-stack luxury fashion e-commerce platform with OTP-based JWT authentication, SSLCommerz payment integration, verified purchaser reviews, admin inventory panel, and a minimalist high-contrast storefront UI.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
    categories: ['Full-Stack', 'Frontend', 'Backend'],
    github: 'https://github.com/ah-nd-naf/Aurae-Ecommerce',
    live: 'https://aurae-ecommerce.vercel.app',
    accent: '#f0a500',
  },
  {
    name: 'social-media-app',
    label: 'Social Media App',
    description: 'Full-stack social networking app allowing users to securely sign up, share thoughts instantly, interact with live likes and nested comments, and personalize their profiles with avatars.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    categories: ['Full-Stack', 'Frontend', 'Backend'],
    github: 'https://github.com/ah-nd-naf/social-media-app',
    live: 'https://social-media-app-amber-eight-47.vercel.app',
    accent: '#00d4f5',
  },
  {
    name: 'Authentication-System',
    label: 'Authentication System',
    description: 'A professional MERN stack authentication boilerplate featuring JWT, protected routes, real-time activity logging, and a premium glassmorphism dashboard.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    categories: ['Full-Stack', 'Backend'],
    github: 'https://github.com/ah-nd-naf/Authentication-System',
    live: 'https://authentication-system-six-teal.vercel.app',
    accent: '#c792ea',
  },
  {
    name: 'mern-project',
    label: 'Pet Rescue Platform',
    description: 'A comprehensive Pet Rescue, Adoption & Care Platform built with the MERN stack featuring REST API integrations and full CRUD operations.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    categories: ['Full-Stack', 'Frontend', 'Backend'],
    github: 'https://github.com/ah-nd-naf/mern-project/tree/main/mern-project-main',
    live: '#',
    accent: '#4ec9b0',
  },
  {
    name: 'PetSite',
    label: 'PetSite',
    description: 'Responsive pet adoption website featuring a gallery, adoption process guide, live application form, and family testimonials — deployed on Vercel.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    categories: ['Frontend'],
    github: 'https://github.com/ah-nd-naf/PetSite',
    live: 'https://pet-site-pi.vercel.app/',
    accent: '#f8c555',
  },
  {
    name: 'Aesthetic-Restaurant',
    label: 'Aesthetic Restaurant',
    description: "Welcome to the Aesthetic Restaurant Website! Designed to offer visitors an immersive and visually appealing experience that reflects the restaurant's philosophy.",
    tech: ['HTML', 'CSS', 'JavaScript', 'Python'],
    categories: ['Frontend'],
    github: 'https://github.com/ah-nd-naf/Aesthetic-Restaurant',
    live: '#',
    accent: '#f92aad',
  },
  {
    name: 'Student-Management-System',
    label: 'Student Management System',
    description: 'Comprehensive backend system for managing students, teachers, and admins. Includes role-based access control and secure JWT authentication.',
    tech: ['Node.js', 'Express', 'MongoDB'],
    categories: ['Backend'],
    github: 'https://github.com/ah-nd-naf/STD_MS',
    live: '#',
    accent: '#b5cea8',
  },
];

const CATEGORIES = ['All', 'Full-Stack', 'AI / ML', 'Frontend', 'Backend'];

const Projects = () => {
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' | 'grid'
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);
  const startTimeRef = useRef(null);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter(p => p.categories?.includes(selectedCategory));
  }, [selectedCategory]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentIndex(0);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  const goTo = (idx, dir) => {
    setDirection(dir);
    setCurrentIndex(idx);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  const goNext = () => {
    if (filteredProjects.length <= 1) return;
    goTo((currentIndex + 1) % filteredProjects.length, 1);
  };

  const goPrev = () => {
    if (filteredProjects.length <= 1) return;
    goTo((currentIndex - 1 + filteredProjects.length) % filteredProjects.length, -1);
  };

  // Auto-slide timer for Carousel mode
  useEffect(() => {
    if (viewMode !== 'carousel' || isHovered || filteredProjects.length <= 1) return;
    startTimeRef.current = Date.now();

    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
      setProgress(0);
      startTimeRef.current = Date.now();
    }, SLIDE_DURATION);

    return () => clearInterval(intervalRef.current);
  }, [viewMode, isHovered, currentIndex, filteredProjects.length]);

  // Progress bar animation
  useEffect(() => {
    if (viewMode !== 'carousel' || isHovered || filteredProjects.length <= 1) return;
    startTimeRef.current = Date.now();

    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      setProgress(Math.min((elapsed / SLIDE_DURATION) * 100, 100));
    }, 30);

    return () => clearInterval(progressRef.current);
  }, [viewMode, isHovered, currentIndex, filteredProjects.length]);

  // Keep index within bounds if filtered list shrinks
  useEffect(() => {
    if (currentIndex >= filteredProjects.length) {
      setCurrentIndex(0);
      setProgress(0);
    }
  }, [filteredProjects.length, currentIndex]);

  const activeProject = filteredProjects[currentIndex] || filteredProjects[0];

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? '60%' : '-60%', opacity: 0, scale: 0.94, filter: 'blur(6px)' }),
    center: { x: 0, opacity: 1, scale: 1, filter: 'blur(0px)' },
    exit: (dir) => ({ x: dir > 0 ? '-60%' : '60%', opacity: 0, scale: 0.94, filter: 'blur(6px)' }),
  };

  return (
    <section id="projects" className="projects-section">

      {/* Atmospheric Ambient Glow */}
      <div className="projects-ambient-glow" aria-hidden="true" />

      <div className="container" style={{ maxWidth: '1240px', position: 'relative', zIndex: 1 }}>

        {/* Section Header (Centered, Minimalist, High-End) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="projects-header-wrapper"
        >
          <div className="projects-badge-pill">
            <span className="projects-badge-dot" />
            <span className="projects-badge-label">PORTFOLIO WORK</span>
          </div>
          <h2 className="projects-heading">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="projects-subheading">
            A showcase of full-stack web applications, AI tools, and production-grade architectures built with modern engineering standards.
          </p>
        </motion.div>

        {/* Floating Glassmorphic Toolbar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="projects-toolbar-wrapper"
        >
          {/* Category Filter Chips */}
          <div className="projects-filter-chips" role="tablist" aria-label="Filter projects by category">
            {CATEGORIES.map((cat) => {
              const count = cat === 'All' ? projects.length : projects.filter(p => p.categories?.includes(cat)).length;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`projects-chip-btn ${isActive ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(cat)}
                >
                  <span className="chip-text">{cat}</span>
                  <span className="chip-count-badge">{count}</span>
                </button>
              );
            })}
          </div>

          {/* View Mode Switcher */}
          <div className="projects-view-toggle-group" role="group" aria-label="Projects view mode">
            <button
              type="button"
              className={`projects-toggle-btn ${viewMode === 'carousel' ? 'active' : ''}`}
              onClick={() => setViewMode('carousel')}
              title="Interactive Carousel View"
              aria-label="Interactive Carousel View"
            >
              <FiLayers size={13} />
              <span>Slider</span>
            </button>
            <button
              type="button"
              className={`projects-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Grid Matrix View"
              aria-label="Grid Matrix View"
            >
              <FiGrid size={13} />
              <span>Grid ({filteredProjects.length})</span>
            </button>
          </div>
        </motion.div>

        {/* Dynamic Content Area: Carousel vs Grid */}
        {filteredProjects.length === 0 ? (
          <div className="projects-empty-state">
            <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.95rem' }}>
              No projects found matching category <strong style={{ color: 'var(--syn-cyan)' }}>"{selectedCategory}"</strong>.
            </p>
            <button
              type="button"
              className="projects-btn projects-btn-solid"
              onClick={() => handleCategoryChange('All')}
              style={{ '--accent': 'var(--syn-cyan)', marginTop: '1.25rem' }}
            >
              Reset to All Projects
            </button>
          </div>
        ) : viewMode === 'carousel' ? (
          /* ===================================================
             CAROUSEL SLIDER VIEW (REFINED)
             =================================================== */
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="projects-slider-wrapper"
            >
              <AnimatePresence initial={false} mode="wait" custom={direction}>
                <motion.div
                  key={activeProject.name + currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="projects-card"
                  style={{ '--accent': activeProject.accent }}
                >
                  {/* Image Panel */}
                  <div className="projects-card-image-panel">
                    <div className="projects-card-image-overlay" />
                    <img
                      src={`/${activeProject.name}.png`}
                      alt={activeProject.label}
                      className="projects-card-img"
                      onError={(e) => { e.target.onerror = null; e.target.src = '/placeholder.png'; }}
                    />
                    {/* Project number badge */}
                    <div className="projects-card-number">
                      <span className="card-num-prefix">PROJECT</span>
                      <span className="card-num-val">
                        {String(currentIndex + 1).padStart(2, '0')}
                      </span>
                      <span className="card-num-total">
                        / {String(filteredProjects.length).padStart(2, '0')}
                      </span>
                    </div>
                    {/* Live badge */}
                    {activeProject.live !== '#' && (
                      <div className="projects-live-badge">
                        <span className="projects-live-dot" />
                        <span>LIVE</span>
                      </div>
                    )}
                  </div>

                  {/* Content Panel */}
                  <div className="projects-card-content">
                    {/* Breadcrumb Tag */}
                    <div className="projects-card-category-tag">
                      <span className="tag-accent-line" />
                      <span className="tag-category-name">{activeProject.categories?.[0] || 'Full-Stack'}</span>
                    </div>

                    <h3 className="projects-card-title">
                      {activeProject.label}
                    </h3>

                    <p className="projects-card-description">
                      {activeProject.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="projects-card-tech-list">
                      {activeProject.tech.map((t) => (
                        <span key={t} className="projects-tech-pill">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="projects-card-actions">
                      {activeProject.github !== '#' && (
                        <a 
                          href={activeProject.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="projects-btn projects-btn-outline"
                        >
                          <FaGithub size={15} /> Source Code
                        </a>
                      )}
                      {activeProject.live !== '#' && (
                        <a 
                          href={activeProject.live} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="projects-btn projects-btn-solid"
                        >
                          <FiExternalLink size={15} /> Live Demo
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
                {filteredProjects.map((p, idx) => (
                  <button
                    key={p.name + idx}
                    className={`projects-dot ${idx === currentIndex ? 'active' : ''}`}
                    style={{ '--accent': p.accent }}
                    onClick={() => goTo(idx, idx > currentIndex ? 1 : -1)}
                    aria-label={`Go to ${p.label}`}
                  />
                ))}
              </div>

              {/* Arrow Buttons */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  className="projects-arrow-btn"
                  onClick={goPrev}
                  aria-label="Previous Project"
                  disabled={filteredProjects.length <= 1}
                  style={{ opacity: filteredProjects.length <= 1 ? 0.4 : 1, cursor: filteredProjects.length <= 1 ? 'not-allowed' : 'pointer' }}
                >
                  <FiChevronLeft size={20} />
                </button>
                <button
                  className="projects-arrow-btn"
                  onClick={goNext}
                  aria-label="Next Project"
                  disabled={filteredProjects.length <= 1}
                  style={{ opacity: filteredProjects.length <= 1 ? 0.4 : 1, cursor: filteredProjects.length <= 1 ? 'not-allowed' : 'pointer' }}
                >
                  <FiChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            {filteredProjects.length > 1 && (
              <div className="projects-progress-track">
                <motion.div
                  className="projects-progress-bar"
                  style={{
                    width: `${progress}%`,
                    background: activeProject.accent,
                    boxShadow: `0 0 12px ${activeProject.accent}80`,
                  }}
                />
              </div>
            )}
          </>
        ) : (
          /* ===================================================
             GRID MATRIX VIEW (LUXURY ARCHITECTURAL CARDS)
             =================================================== */
          <motion.div
            layout
            className="projects-grid-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((proj, idx) => (
                <motion.div
                  layout
                  key={proj.name}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="projects-grid-card"
                  style={{ '--accent': proj.accent }}
                >
                  {/* Luxury Top Header */}
                  <div className="projects-grid-header">
                    <div className="projects-grid-path">
                      <FiFolder size={12} style={{ color: proj.accent }} />
                      <span>apps/{proj.name}</span>
                    </div>
                    <span className="projects-grid-index">
                      #{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Image Thumbnail with Gradient Mask */}
                  <div className="projects-grid-image-wrapper">
                    <img
                      src={`/${proj.name}.png`}
                      alt={proj.label}
                      className="projects-grid-img"
                      onError={(e) => { e.target.onerror = null; e.target.src = '/placeholder.png'; }}
                    />
                    <div className="projects-grid-image-overlay" />
                    {proj.live !== '#' && (
                      <div className="projects-grid-live-badge">
                        <span className="projects-live-dot" />
                        <span>LIVE</span>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="projects-grid-body">
                    <h3 className="projects-grid-title">{proj.label}</h3>
                    <p className="projects-grid-desc">{proj.description}</p>

                    {/* Tech Tags */}
                    <div className="projects-grid-tech-wrap">
                      {proj.tech.map((t) => (
                        <span key={t} className="projects-tech-pill">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Footer Actions */}
                    <div className="projects-grid-actions">
                      {proj.github !== '#' && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="projects-btn projects-btn-outline"
                          title="View Source Code"
                        >
                          <FaGithub size={14} /> Code
                        </a>
                      )}
                      {proj.live !== '#' ? (
                        <a
                          href={proj.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="projects-btn projects-btn-solid"
                          title="Open Live Deployment"
                        >
                          <FiExternalLink size={14} /> Launch Demo
                        </a>
                      ) : (
                        <span className="projects-btn-disabled">
                          Backend Only
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Projects;
