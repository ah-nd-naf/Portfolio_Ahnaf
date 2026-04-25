import React from 'react';
import { motion } from 'framer-motion';

const skillset = [
  {
    category: '// Frontend',
    skills: [
      { icon: '⚛️', name: 'React.js' },
      { icon: '⚡', name: 'Vite' },
      { icon: '🎨', name: 'CSS3 / Tailwind' },
      { icon: '🌀', name: 'Framer Motion' },
      { icon: '🟨', name: 'JavaScript (ES6+)' },
    ],
  },
  {
    category: '// Backend',
    skills: [
      { icon: '🟩', name: 'Node.js' },
      { icon: '🚂', name: 'Express.js' },
      { icon: '🔐', name: 'JWT Auth' },
      { icon: '📧', name: 'Nodemailer' },
    ],
  },
  {
    category: '// Databases',
    skills: [
      { icon: '🍃', name: 'MongoDB' },
      { icon: '🐘', name: 'PostgreSQL' },
      { icon: '🔴', name: 'Redis' },
    ],
  },
  {
    category: '// Tools & Platforms',
    skills: [
      { icon: '🐙', name: 'Git & GitHub' },
      { icon: '▲', name: 'Vercel' },
      { icon: '🐳', name: 'Docker (basics)' },
      { icon: '📮', name: 'Postman' },
      { icon: '🖥️', name: 'Linux' },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="skills-section">
    <div className="container">
      <motion.div
        className="ide-window"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <div className="ide-titlebar">
          <span className="traffic-light tl-red" />
          <span className="traffic-light tl-yellow" />
          <span className="traffic-light tl-green" />
          <span className="ide-tab">skills.config<span className="tab-ext">.ts</span></span>
        </div>

        <div className="skills-ide-body">
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
            <span className="syn-keyword">export const </span>
            <span className="syn-fn">skillset </span>
            <span style={{ color: 'var(--text-muted)' }}>= {'{'}</span>
          </div>

          {skillset.map((group, gi) => (
            <motion.div
              key={group.category}
              className="skill-category"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.1 }}
            >
              <p className="skill-category-label">{group.category}</p>
              <div className="skill-pills">
                {group.skills.map((s) => (
                  <span key={s.name} className="skill-pill">
                    <span className="skill-icon">{s.icon}</span>
                    {s.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            <span style={{ color: 'var(--text-muted)' }}>{'}'}</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Skills;
