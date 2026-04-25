import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="contact-heading">
          <span className="ch-accent">$ </span>
          get_in_touch<span className="ch-accent">()</span>
        </h2>
        <p className="contact-sub">
          {`// I'm currently open to new opportunities`}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', alignItems: 'center' }}>
          <a href="mailto:ahnaf.rasheed.zaki@gmail.com" className="contact-email">
            <FiMail style={{ marginRight: '0.4rem', verticalAlign: 'middle' }} />
            ahnaf.rasheed.zaki@gmail.com
          </a>
          <a href="tel:+8801715539677" className="contact-email" style={{ fontSize: '1.2rem' }}>
            <span style={{ marginRight: '0.6rem', verticalAlign: 'middle' }}>📞</span>
            +880-1715539677
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/ah-nd-naf"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Contact;
