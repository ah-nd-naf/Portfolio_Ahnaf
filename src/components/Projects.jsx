import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const projectData = [
  {
    title: "Student Management System",
    description: "A comprehensive MERN stack application for managing student records, featuring role-based authentication, dashboard analytics, and secure data handling.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "#",
    live: "#",
    icon: <FaCode size={48} />
  },
  {
    title: "Social Media Platform",
    description: "A dynamic social networking app with real-time nested comments, post creation, and a premium glassmorphism UI design.",
    tech: ["React", "TailwindCSS", "Node.js", "PostgreSQL"],
    github: "#",
    live: "#",
    icon: <FaCode size={48} />
  },
  {
    title: "E-Commerce Dashboard",
    description: "An admin dashboard for e-commerce platforms tracking sales, inventory, and user activities in real-time.",
    tech: ["React", "Vite", "Framer Motion", "Chart.js"],
    github: "#",
    live: "#",
    icon: <FaCode size={48} />
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projectData.map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card glass-panel"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <div className="project-image-placeholder">
                {project.icon}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={20} /> Code
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt size={20} /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
