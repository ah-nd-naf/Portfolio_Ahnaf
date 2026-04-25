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

        <div>
          <a href="mailto:ahnafrasheed@gmail.com" className="contact-email">
            <FiMail style={{ marginRight: '0.4rem', verticalAlign: 'middle' }} />
            ahnafrasheed@gmail.com
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
