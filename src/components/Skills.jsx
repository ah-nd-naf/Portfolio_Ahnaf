import React from 'react';
import { motion } from 'framer-motion';
import { FaJsSquare, FaPython, FaDatabase, FaReact, FaHtml5, FaNodeJs, FaServer, FaGitAlt, FaLinux, FaMobileAlt } from 'react-icons/fa';
import { SiDjango, SiMongodb, SiMysql, SiExpress, SiVite, SiFramer, SiTailwindcss } from 'react-icons/si';

const skillset = [
  {
    category: '// Languages',
    skills: [
      { icon: <FaJsSquare color="#f7df1e" size={16} />, name: 'JavaScript' },
      { icon: <FaPython color="#3776ab" size={16} />, name: 'Python' },
      { icon: <FaDatabase color="#8b949e" size={16} />, name: 'SQL' },
    ],
  },
  {
    category: '// Frontend',
    skills: [
      { icon: <FaReact color="#61dafb" size={16} />, name: 'React' },
      { icon: <SiFramer color="#0055FF" size={16} />, name: 'Framer Motion' },
      { icon: <SiTailwindcss color="#38bdf8" size={16} />, name: 'Tailwind CSS' },
      { icon: <FaHtml5 color="#e34f26" size={16} />, name: 'HTML/CSS' },
      { icon: <FaMobileAlt color="#c792ea" size={16} />, name: 'Responsive Design' },
    ],
  },
  {
    category: '// Backend & API',
    skills: [
      { icon: <FaNodeJs color="#43853d" size={16} />, name: 'Node.js' },
      { icon: <SiExpress color="#8b949e" size={16} />, name: 'Express.js' },
      { icon: <SiDjango color="#44b78b" size={16} />, name: 'Django' },
      { icon: <FaServer color="#f92aad" size={16} />, name: 'RESTful APIs' },
    ],
  },
  {
    category: '// Databases & Tools',
    skills: [
      { icon: <SiMongodb color="#47a248" size={16} />, name: 'MongoDB (Basic)' },
      { icon: <SiMysql color="#4479a1" size={16} />, name: 'MySQL' },
      { icon: <FaGitAlt color="#f05032" size={16} />, name: 'Git & GitHub' },
      { icon: <SiVite color="#646CFF" size={16} />, name: 'Vite' },
      { icon: <FaLinux color="#fcc624" size={16} />, name: 'Linux' },
    ],
  },
];

const allSkills = skillset.flatMap(group => group.skills);
const firstRow = allSkills.slice(0, Math.ceil(allSkills.length / 2));
const secondRow = allSkills.slice(Math.ceil(allSkills.length / 2));

const MarqueeRow = ({ items, direction = "left", speed = 40 }) => {
  return (
    <div style={{ overflow: 'hidden', display: 'flex', width: '100%', position: 'relative', padding: '0.5rem 0' }}>
      {/* Edge Fade Gradients */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '15vw', height: '100%', background: 'linear-gradient(90deg, var(--bg) 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, right: 0, width: '15vw', height: '100%', background: 'linear-gradient(270deg, var(--bg) 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }} />
      
      <motion.div
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
        style={{ display: 'flex', gap: '2rem', width: 'max-content' }}
      >
        {/* We duplicate the array 4 times to ensure seamless infinite scrolling regardless of screen width */}
        {[...items, ...items, ...items, ...items].map((s, i) => (
          <div 
            key={i} 
            className="marquee-skill-card"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.25rem 2.5rem',
              background: 'rgba(22, 27, 34, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '100px',
              whiteSpace: 'nowrap',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(22, 27, 34, 0.9)';
              e.currentTarget.style.borderColor = 'var(--syn-cyan)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 212, 245, 0.15)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(22, 27, 34, 0.4)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <span style={{ fontSize: '1.6rem', display: 'flex' }}>{s.icon}</span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-main)' }}>{s.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Skills = () => (
  <section id="skills" className="skills-section" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <div className="container" style={{ maxWidth: '1400px', padding: '0' }}>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '5rem', padding: '0 2rem', position: 'relative' }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(0, 212, 245, 0.05)', border: '1px solid rgba(0, 212, 245, 0.15)', borderRadius: '30px', marginBottom: '1.5rem' }}>
           <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--syn-cyan)', boxShadow: '0 0 10px var(--syn-cyan)', animation: 'pulse 2s infinite' }}></span>
           <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--syn-cyan)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>Technical Proficiencies</span>
        </div>

        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontFamily: 'var(--font-sans)', fontWeight: 800, margin: 0, letterSpacing: '-1.5px', lineHeight: 1.1 }}>
          <span style={{ color: 'var(--text-main)' }}>My</span> <span className="text-gradient" style={{ display: 'inline-block', textShadow: '0 0 40px rgba(0, 212, 245, 0.3)' }}>Tech Arsenal</span>
        </h2>
        
        <p style={{ color: 'var(--text-muted)', marginTop: '1.5rem', fontFamily: 'var(--font-sans)', fontSize: '1.1rem', maxWidth: '600px', margin: '1.5rem auto 0 auto', lineHeight: 1.6 }}>
          A comprehensive toolkit of languages, frameworks, and technologies I leverage to build robust, scalable, and immersive digital experiences.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ display: 'flex', flexDirection: 'column', gap: '2rem', overflow: 'hidden' }}
      >
        <MarqueeRow items={firstRow} direction="left" speed={35} />
        <MarqueeRow items={secondRow} direction="right" speed={40} />
      </motion.div>

    </div>
  </section>
);

export default Skills;
