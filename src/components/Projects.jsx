import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    name: 'SocialMediaApp',
    description: '// Full-stack social media platform with JWT authentication,\n// real-time interactions, and RESTful APIs.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/ah-nd-naf',
    live: '#',
  },
  {
    name: 'PetCare',
    description: '// Interactive and responsive web application built with MERN stack.\n// Features comprehensive REST API integration.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/ah-nd-naf',
    live: '#',
  },
  {
    name: 'AestheticRestaurant',
    description: '// Web-based restaurant system with ordering and reservation features.\n// Includes user-friendly interfaces and robust backend logic.',
    tech: ['Django', 'Python', 'SQL', 'HTML/CSS'],
    github: 'https://github.com/ah-nd-naf',
    live: '#',
  },
  {
    name: 'PetSite',
    description: '// Responsive frontend application featuring a pet gallery,\n// adoption flow, dynamic sliders, and interactive forms.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/ah-nd-naf',
    live: '#',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1 },
  }),
};

const Projects = () => (
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
        <p className="section-sub">// Building software that makes an impact</p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            className="glass-card project-card"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="project-card-header">
              <div className="project-title-code">
                <span className="syn-keyword">let </span>
                <span className="syn-fn">{project.name}</span>
              </div>
              <div className="project-icons">
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub size={17} />
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                  <FiExternalLink size={17} />
                </a>
              </div>
            </div>

            <p className="project-description" style={{ whiteSpace: 'pre-line' }}>
              {project.description}
            </p>

            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t} className="tech-pill">{t}</span>
              ))}
            </div>
          </motion.div>
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

export default Projects;
