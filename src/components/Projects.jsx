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
    github: 'https://github.com/ah-nd-naf/Student-Management-System',
    live: '#',
  }
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [direction, setDirection] = useState(1);

  const goToSlide = (idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const project = projects[currentIndex];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-code-header">
            <span className="syn-keyword">const </span>
            <span className="syn-fn">projects </span>
            <span style={{ color: 'var(--text-muted)' }}>= </span>
            <span className="syn-yellow">[</span>
          </h2>
          <p className="section-sub">// Exploring the repositories of ah-nd-naf</p>
        </motion.div>

        <div className="slider-container">
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
                  <div className="project-title-code">
                    <span className="syn-keyword">let </span>
                    <span className="syn-fn">{project.name}</span>
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <span className="syn-yellow">]</span>
          <span style={{ color: 'var(--text-muted)' }}>;</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
