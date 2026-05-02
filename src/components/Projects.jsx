import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    name: 'social-media-app',
    description: 'Full-stack social networking app allowing users to securely sign up, share thoughts instantly, interact with live likes and nested comments, and personalize their profiles with avatars.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/ah-nd-naf/social-media-app',
    live: 'https://social-media-app-amber-eight-47.vercel.app',
  },
  {
    name: 'Authentication-System',
    description: 'A professional MERN stack authentication boilerplate featuring JWT, protected routes, real-time activity logging, and a premium glassmorphism dashboard.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/ah-nd-naf/Authentication-System',
    live: 'https://authentication-system-six-teal.vercel.app',
  },
  {
    name: 'mern-project',
    description: 'A comprehensive Pet Rescue, Adoption & Care Platform built with the MERN stack featuring REST API integrations.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/ah-nd-naf/mern-project/tree/main/mern-project-main',
    live: '#',
  },
  {
    name: 'PetSite',
    description: 'Responsive pet adoption website featuring a gallery, adoption process guide, live application form, and family testimonials — deployed on Vercel.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/ah-nd-naf/PetSite',
    live: 'https://pet-site-pi.vercel.app/',
  },
  {
    name: 'Aesthetic-Restaurant',
    description: 'Welcome to the Aesthetic Restaurant Website repository! Designed to offer visitors an immersive and visually appealing experience that reflects the restaurant\'s philosophy.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/ah-nd-naf/Aesthetic-Restaurant',
    live: '#',
  },
  {
    name: 'Student-Management-System',
    description: 'Comprehensive backend system for managing students, teachers, and admins. Includes role-based access control and secure JWT authentication.',
    tech: ['Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/ah-nd-naf/STD_MS',
    live: '#',
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const goToSlide = (idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  useEffect(() => {
    if (isHovered) return; // Pause slider on hover

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const project = projects[currentIndex];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            display: 'inline-block',
            position: 'relative',
            background: 'linear-gradient(90deg, rgba(22,27,34,0.95) 0%, rgba(13,17,23,0) 100%)',
            padding: '1.25rem 2.5rem 1.25rem 2rem',
            borderLeft: '4px solid var(--syn-cyan)',
            borderRadius: '0 12px 12px 0',
            marginBottom: '3rem',
            marginLeft: '-2rem', // Pulls it slightly to the edge for a cool bleed effect
            boxShadow: '-10px 0 30px rgba(0, 212, 245, 0.05)',
            overflow: 'hidden'
          }}
        >
          {/* Subtle tech background pattern */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'linear-gradient(rgba(0, 212, 245, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 245, 0.05) 1px, transparent 1px)', backgroundSize: '15px 15px', opacity: 0.6, pointerEvents: 'none', zIndex: 0 }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Terminal execution metadata */}
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--syn-comment)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', opacity: 0.8, display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <span><span style={{ color: 'var(--syn-pink)' }}>●</span> <b>sys.init</b></span>
              <span><span style={{ color: 'var(--syn-cyan)' }}>○</span> <b>fetch_repos</b></span>
              <span style={{ background: 'rgba(78, 201, 176, 0.1)', color: 'var(--syn-green)', padding: '2px 6px', borderRadius: '4px' }}><b>200 OK</b></span>
            </div>

            <h2 className="section-code-header" style={{ margin: 0, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              <span className="syn-keyword">export const </span>
              <span className="syn-fn" style={{ textShadow: '0 0 25px rgba(0, 212, 245, 0.5)' }}>projects </span>
              <span style={{ color: 'var(--text-muted)' }}>= </span>
              <span className="syn-yellow" style={{ textShadow: '0 0 25px rgba(248, 197, 85, 0.5)' }}>[</span>
              <motion.span 
                 animate={{ opacity: [1, 0, 1] }} 
                 transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                 style={{ color: 'var(--syn-cyan)', fontWeight: '300', marginLeft: '6px' }}
              >_</motion.span>
            </h2>
            <p className="section-sub" style={{ margin: '0.75rem 0 0 0', fontSize: '1rem', letterSpacing: '0.5px' }}>
              <span style={{ color: 'var(--syn-purple)', marginRight: '8px' }}>&gt;</span> 
              <span style={{ color: 'var(--syn-comment)' }}>// Exploring the repositories of ah-nd-naf</span>
            </p>
          </div>
        </motion.div>

        <div 
          className="slider-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence initial={false} mode="popLayout" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={{
                enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0, scale: 0.96 }),
                center: { x: 0, opacity: 1, scale: 1 },
                exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0, scale: 0.96 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="premium-project-card slider-card"
            >
              {/* Project Image / Visual */}
              <div className="project-visual">
                <div className={`visual-glow glow-color-${currentIndex % 3}`}></div>
                {project.live !== '#' ? (
                  <img 
                    src={`/${project.name}.png`} 
                    alt={`${project.name} live preview`} 
                    className="project-image"
                    onError={(e) => { e.target.onerror = null; e.target.src = "/placeholder.png"; }}
                  />
                ) : (
                  <img 
                    src="/placeholder.png" 
                    alt={`${project.name} placeholder`} 
                    className="project-image"
                  />
                )}
              </div>

              {/* Content Area */}
              <div className="project-content">
                <div className="project-card-header">
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
                    <div className="project-title-code">
                      <span className="syn-keyword">let </span>
                      <span className="syn-fn">{project.name}</span>
                    </div>
                    {project.live !== '#' ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(78, 201, 176, 0.1)', padding: '3px 8px', borderRadius: '4px', border: '1px solid rgba(78, 201, 176, 0.2)' }}>
                        <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--syn-green)', boxShadow: '0 0 8px var(--syn-green)', animation: 'pulse 2s infinite' }}></span>
                        <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--syn-green)', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 'bold' }}>Live</span>
                      </div>
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255, 95, 87, 0.1)', padding: '3px 8px', borderRadius: '4px', border: '1px solid rgba(255, 95, 87, 0.2)' }}>
                        <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: '#ff5f57', boxShadow: '0 0 8px #ff5f57' }}></span>
                        <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: '#ff5f57', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 'bold' }}>Offline</span>
                      </div>
                    )}
                  </div>
                  <div className="project-icons">
                    {project.github !== '#' && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.live !== '#' && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                        <FiExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots — outside overflow:hidden container */}
        <div className="slider-dots">
          {projects.map((_, idx) => (
            <button
              key={idx}
              className={`slider-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <motion.div
          className="section-code-footer"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          style={{
            display: 'inline-block',
            position: 'relative',
            background: 'linear-gradient(270deg, rgba(22,27,34,0.95) 0%, rgba(13,17,23,0) 100%)',
            padding: '1.25rem 2rem 1.25rem 3rem',
            borderRight: '4px solid var(--syn-yellow)',
            borderRadius: '12px 0 0 12px',
            marginTop: '2rem',
            float: 'right',
            marginRight: '-2rem',
            boxShadow: '10px 0 30px rgba(248, 197, 85, 0.05)',
            overflow: 'hidden'
          }}
        >
          {/* Subtle tech background pattern */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'linear-gradient(rgba(248, 197, 85, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(248, 197, 85, 0.05) 1px, transparent 1px)', backgroundSize: '15px 15px', opacity: 0.6, pointerEvents: 'none', zIndex: 0 }} />

          <div style={{ position: 'relative', zIndex: 1, textAlign: 'right' }}>
            <span className="syn-yellow" style={{ textShadow: '0 0 25px rgba(248, 197, 85, 0.5)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>]</span>
            <span style={{ color: 'var(--text-muted)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>;</span>
            
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--syn-comment)', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '0.5rem', opacity: 0.8, display: 'flex', gap: '1rem', justifyContent: 'flex-end', alignItems: 'center' }}>
              <span>EOF</span> 
              <span style={{ color: 'var(--syn-green)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--syn-green)', boxShadow: '0 0 8px var(--syn-green)' }}></span>
                {projects.length} items loaded
              </span>
            </div>
          </div>
        </motion.div>
        <div style={{ clear: 'both' }}></div>
      </div>
    </section>
  );
};

export default Projects;
