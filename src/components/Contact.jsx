import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          className="contact-content glass-panel"
          style={{ padding: '3rem' }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-gradient" style={{ marginBottom: '1.5rem' }}>
            Get In Touch
          </h2>
          
          <p className="contact-text">
            I'm currently open to new opportunities! Whether you have a question, a project idea, or just want to say hi, feel free to drop a message.
          </p>
          
          <a href="mailto:hello@example.com" className="btn btn-primary">
            <FaEnvelope size={20} /> Say Hello
          </a>
          
          <div className="social-links">
            <a href="https://github.com/ahnafrasheed" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <FaGithub size={28} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <FaLinkedin size={28} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
              <FaTwitter size={28} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
