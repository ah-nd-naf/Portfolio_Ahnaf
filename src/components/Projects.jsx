import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, 
  FaReact, 
  FaNodeJs, 
  FaJsSquare, 
  FaServer, 
  FaPython, 
  FaHtml5, 
  FaBrain, 
  FaHeartbeat, 
  FaCss3Alt 
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiPostgresql, 
  SiTailwindcss, 
  SiFastapi, 
  SiPrisma, 
  SiMongodb, 
  SiExpress, 
  SiVite, 
  SiFramer 
} from 'react-icons/si';
import { 
  FiExternalLink, 
  FiChevronLeft, 
  FiChevronRight, 
  FiGrid, 
  FiLayers, 
  FiFolder, 
  FiFileText,
  FiCpu,
  FiEye,
  FiCode
} from 'react-icons/fi';

const SLIDE_DURATION = 6000;

// Developer Tech Stack Icons
const PROJECT_TECH_ICONS = {
  'Next.js': <SiNextdotjs size={11} className="project-tech-icon" />,
  'TypeScript': <SiTypescript size={11} className="project-tech-icon" />,
  'JavaScript': <FaJsSquare size={11} className="project-tech-icon" />,
  'Python': <FaPython size={11} className="project-tech-icon" />,
  'FastAPI': <SiFastapi size={11} className="project-tech-icon" />,
  'Prisma': <SiPrisma size={11} className="project-tech-icon" />,
  'Groq API': <FiCpu size={11} className="project-tech-icon" />,
  'Tailwind CSS': <SiTailwindcss size={11} className="project-tech-icon" />,
  'PostgreSQL': <SiPostgresql size={11} className="project-tech-icon" />,
  'Framer Motion': <SiFramer size={11} className="project-tech-icon" />,
  'REST APIs': <FaServer size={10} className="project-tech-icon" />,
  'Custom APIs': <FaServer size={10} className="project-tech-icon" />,
  'Meta CAPI': <FaServer size={10} className="project-tech-icon" />,
  'TikTok CAPI': <FaServer size={10} className="project-tech-icon" />,
  'GA4 Server': <FaServer size={10} className="project-tech-icon" />,
  'Deep Learning': <FaBrain size={11} className="project-tech-icon" />,
  'Computer Vision': <FiEye size={11} className="project-tech-icon" />,
  'CNN': <FiCpu size={11} className="project-tech-icon" />,
  'Medical AI': <FaHeartbeat size={11} className="project-tech-icon" />,
  'React': <FaReact size={11} className="project-tech-icon" />,
  'Vite': <SiVite size={11} className="project-tech-icon" />,
  'Node.js': <FaNodeJs size={11} className="project-tech-icon" />,
  'Express': <SiExpress size={11} className="project-tech-icon" />,
  'MongoDB': <SiMongodb size={11} className="project-tech-icon" />,
  'HTML': <FaHtml5 size={11} className="project-tech-icon" />,
  'HTML5': <FaHtml5 size={11} className="project-tech-icon" />,
  'CSS': <FaCss3Alt size={11} className="project-tech-icon" />,
  'CSS3': <FaCss3Alt size={11} className="project-tech-icon" />,
  'HTML/CSS': <FaHtml5 size={11} className="project-tech-icon" />
};

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
    name: 'Periscale-Ecommerce',
    label: 'Periscale E-Commerce Engine',
    description: 'Production multi-channel e-commerce storefront & merchant platform featuring 60-second product catalogs, 1-click sync across Daraz, Shopify, Facebook & Instagram, built-in AI fraud prevention, bilingual EN/BN localization, and seamless checkout flows.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Framer Motion', 'REST APIs'],
    categories: ['Full-Stack', 'Frontend', 'Backend'],
    github: '#',
    live: 'https://www.periscale.ai/ecom',
    accent: '#ff4d00',
    isCommercial: true,
  },
  {
    name: 'Periscale-Analytics',
    label: 'Periscale Server CAPI & Analytics Hub',
    description: 'Enterprise first-party Server-Side Conversions API (CAPI) and behavioral analytics platform. Recovers 100% of ad signals lost to iOS 14+ and ad blockers with guaranteed 8.5+ Meta EMQ, real-time 0.018s latency signal stream, interactive signal injector, heatmaps, and session replays.',
    tech: ['Next.js', 'TypeScript', 'Meta CAPI', 'TikTok CAPI', 'GA4 Server', 'PostgreSQL'],
    categories: ['Full-Stack', 'Frontend', 'Backend', 'AI / ML'],
    github: '#',
    live: 'https://www.periscale.ai/analytics',
    accent: '#06b6d4',
    isCommercial: true,
  },
  {
    name: '3C-Net-Research',
    label: '3C-Net: Cervical Cancer AI Classifier',
    description: 'A lightweight deep learning architecture formulated for automated cervical cytology classification (Normal, Precancerous, Cancerous) from Liquid-Based Pap Smear images. Published & indexed in IEEE Xplore (BECITHCON 2025).',
    tech: ['Python', 'Deep Learning', 'Computer Vision', 'CNN', 'Medical AI'],
    categories: ['AI / ML'],
    github: '#',
    live: 'https://ieeexplore.ieee.org/document/11504298',
    isPaper: true,
    accent: '#00d4f5',
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
    description: 'Full-stack dining and culinary showcase platform featuring an immersive, responsive frontend integrated with Python backend services for reservation management and interactive menu exploration.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Python'],
    categories: ['Full-Stack', 'Frontend', 'Backend'],
    github: 'https://github.com/ah-nd-naf/Aesthetic-Restaurant',
    live: '#',
    accent: '#f92aad',
  },
  {
    name: 'Student-Management-System',
    label: 'Student Management System',
    description: 'Full-stack academic management portal (ERP) for students, teachers, and admins featuring responsive management dashboards, attendance tracking, and secure JWT authentication.',
    tech: ['JavaScript', 'HTML/CSS', 'Node.js', 'Express', 'MongoDB'],
    categories: ['Full-Stack', 'Backend'],
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

        {/* Floating Glassmorphic Pill Dock Toolbar */}
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

          <div className="projects-toolbar-divider" />

          {/* View Mode Switcher */}
          <div className="projects-view-toggle-group" role="group" aria-label="Projects view mode">
            <button
              type="button"
              className={`projects-toggle-btn ${viewMode === 'carousel' ? 'active' : ''}`}
              onClick={() => setViewMode('carousel')}
              title="Interactive Carousel View"
              aria-label="Interactive Carousel View"
            >
              <FiLayers size={14} />
              <span>Slider</span>
            </button>
            <button
              type="button"
              className={`projects-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Grid Matrix View"
              aria-label="Grid Matrix View"
            >
              <FiGrid size={14} />
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
                    {activeProject.isPaper ? (
                      <div className="projects-live-badge" style={{ background: 'rgba(0, 212, 245, 0.2)', borderColor: 'var(--syn-cyan)' }}>
                        <span className="projects-live-dot" style={{ background: 'var(--syn-cyan)', boxShadow: '0 0 8px var(--syn-cyan)' }} />
                        <span style={{ color: 'var(--syn-cyan)' }}>IEEE PAPER</span>
                      </div>
                    ) : activeProject.isCommercial ? (
                      <div className="projects-live-badge" style={{ background: `${activeProject.accent}22`, borderColor: activeProject.accent }}>
                        <span className="projects-live-dot" style={{ background: activeProject.accent, boxShadow: `0 0 8px ${activeProject.accent}` }} />
                        <span style={{ color: activeProject.accent, fontWeight: 700 }}>PRODUCTION SAAS</span>
                      </div>
                    ) : activeProject.live !== '#' && (
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
                          {PROJECT_TECH_ICONS[t] || <FiCode size={11} className="project-tech-icon" />}
                          <span>{t}</span>
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="projects-card-actions">
                      {activeProject.isPaper ? (
                        <>
                          <a 
                            href={activeProject.live} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="projects-btn projects-btn-solid"
                            style={{ background: 'var(--name-grad)', color: '#0d1117', fontWeight: 600 }}
                          >
                            <FiExternalLink size={15} /> Read on IEEE Xplore ↗
                          </a>
                          <a 
                            href="#research" 
                            className="projects-btn projects-btn-outline"
                            onClick={(e) => {
                              e.preventDefault();
                              document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                          >
                            <FiFileText size={15} /> Paper Details
                          </a>
                        </>
                      ) : activeProject.isCommercial ? (
                        <>
                          <a 
                            href={activeProject.live} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="projects-btn projects-btn-solid"
                            style={{ background: activeProject.accent, color: '#ffffff', fontWeight: 700, boxShadow: `0 0 16px ${activeProject.accent}40` }}
                          >
                            <FiExternalLink size={15} /> Live Platform ↗
                          </a>
                          <a 
                            href="#experience" 
                            className="projects-btn projects-btn-outline"
                            onClick={(e) => {
                              e.preventDefault();
                              document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                          >
                            <FiLayers size={15} /> Periscale Role
                          </a>
                        </>
                      ) : (
                        <>
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
                          {activeProject.live !== '#' ? (
                            <a 
                              href={activeProject.live} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="projects-btn projects-btn-solid"
                            >
                              <FiExternalLink size={15} /> Live Demo
                            </a>
                          ) : (
                            <span 
                              className="projects-btn-pending"
                              title="Full-stack application available in repo; public deployment in progress"
                            >
                              <span className="projects-pending-dot" />
                              <span>Demo Soon</span>
                            </span>
                          )}
                        </>
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
                  {/* Subtle Top Glow Accent */}
                  <div className="projects-grid-card-glow" />

                  {/* Luxury Top Header Bar */}
                  <div className="projects-grid-header">
                    <div className="projects-grid-category-chip">
                      <span className="grid-cat-dot" style={{ background: proj.accent, boxShadow: `0 0 8px ${proj.accent}` }} />
                      <span className="grid-cat-name">{proj.categories?.[0] || 'Full-Stack'}</span>
                    </div>
                    {proj.isCommercial ? (
                      <span className="projects-grid-num-badge" style={{ color: proj.accent, borderColor: `${proj.accent}40`, fontWeight: 700 }}>
                        SAAS
                      </span>
                    ) : (
                      <span className="projects-grid-num-badge">
                        #{String(idx + 1).padStart(2, '0')}
                      </span>
                    )}
                  </div>

                  {/* Image Showcase with Cinematic Zoom & Gradient Fade */}
                  <div className="projects-grid-image-wrapper">
                    <img
                      src={`/${proj.name}.png`}
                      alt={proj.label}
                      className="projects-grid-img"
                      onError={(e) => { e.target.onerror = null; e.target.src = '/placeholder.png'; }}
                    />
                    <div className="projects-grid-image-overlay" />
                    {proj.isPaper ? (
                      <div className="projects-grid-live-badge" style={{ background: 'rgba(0, 212, 245, 0.2)', borderColor: 'var(--syn-cyan)' }}>
                        <span className="projects-grid-live-dot" style={{ background: 'var(--syn-cyan)', boxShadow: '0 0 8px var(--syn-cyan)' }} />
                        <span style={{ color: 'var(--syn-cyan)' }}>IEEE PAPER</span>
                      </div>
                    ) : proj.isCommercial ? (
                      <div className="projects-grid-live-badge" style={{ background: `${proj.accent}22`, borderColor: proj.accent }}>
                        <span className="projects-grid-live-dot" style={{ background: proj.accent, boxShadow: `0 0 8px ${proj.accent}` }} />
                        <span style={{ color: proj.accent, fontWeight: 700 }}>PRODUCTION</span>
                      </div>
                    ) : proj.live !== '#' && (
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

                    {/* Card Footer: Tech Stack & Actions Dock */}
                    <div className="projects-grid-footer">
                      <div className="projects-grid-tech-wrap">
                        {proj.tech.map((t) => (
                          <span key={t} className="projects-tech-pill">
                            {PROJECT_TECH_ICONS[t] || <FiCode size={10} className="project-tech-icon" />}
                            <span>{t}</span>
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="projects-grid-actions">
                        {proj.isPaper ? (
                          <>
                            <a
                              href={proj.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="projects-btn projects-btn-solid"
                              title="Read IEEE Paper"
                              style={{ background: 'var(--name-grad)', color: '#0d1117', fontWeight: 600 }}
                            >
                              <FiExternalLink size={14} /> IEEE Paper
                            </a>
                            <a
                              href="#research"
                              className="projects-btn projects-btn-outline"
                              title="View Research Summary"
                              onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' });
                              }}
                            >
                              <FiFileText size={14} /> Details
                            </a>
                          </>
                        ) : proj.isCommercial ? (
                          <>
                            <a
                              href={proj.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="projects-btn projects-btn-solid"
                              title="Launch Live Platform"
                              style={{ background: proj.accent, color: '#ffffff', fontWeight: 700 }}
                            >
                              <FiExternalLink size={14} /> Live SaaS
                            </a>
                            <a
                              href="#experience"
                              className="projects-btn projects-btn-outline"
                              title="View Periscale AI Internship Role"
                              onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                              }}
                            >
                              <FiLayers size={14} /> Role
                            </a>
                          </>
                        ) : (
                          <>
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
                                title="Launch Live Application"
                              >
                                <FiExternalLink size={14} /> Launch Demo
                              </a>
                            ) : (
                              <span 
                                className="projects-btn-pending"
                                title="Full-stack application available in repo; public deployment in progress"
                              >
                                <span className="projects-pending-dot" />
                                <span>Demo Soon</span>
                              </span>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

      </div>

      <style>{`
        .projects-tech-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-main);
          background: rgba(0, 212, 245, 0.05);
          border: 1px solid rgba(0, 212, 245, 0.2);
          padding: 5px 12px;
          border-radius: 100px;
          font-weight: 500;
          transition: all 0.2s ease;
          cursor: default;
          white-space: nowrap;
        }

        .projects-tech-pill .project-tech-icon {
          color: var(--syn-cyan);
          opacity: 0.9;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .projects-tech-pill:hover {
          background: rgba(0, 212, 245, 0.12);
          border-color: rgba(0, 212, 245, 0.45);
          box-shadow: 0 0 15px rgba(0, 212, 245, 0.18);
          transform: translateY(-1px);
          color: #fff;
        }

        .projects-tech-pill:hover .project-tech-icon {
          opacity: 1;
        }

        .projects-grid-tech-wrap .projects-tech-pill {
          font-size: 0.73rem;
          padding: 4px 10px;
          gap: 5px;
        }

        @media (max-width: 640px) {
          .projects-tech-pill {
            font-size: 0.72rem !important;
            padding: 4px 10px !important;
            gap: 5px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
