import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "JavaScript (ES6+)", "React.js", "Node.js", "Express.js", 
  "MongoDB", "PostgreSQL", "HTML5 & CSS3", "Git & GitHub", 
  "Tailwind CSS", "Framer Motion", "RESTful APIs"
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.h2 
          className="section-title text-gradient"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="about-grid">
          <motion.div 
            className="about-text glass-panel"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Hello! I'm Ahnaf Rasheed, a passionate Full-Stack Web Developer dedicated to crafting exceptional digital experiences. I enjoy building dynamic, scalable, and beautifully designed web applications from the ground up.
            </p>
            <p>
              My focus is on creating clean, efficient code and intuitive user interfaces. Whether it's setting up a robust backend architecture or designing eye-catching frontend animations, I love bringing ideas to life on the web.
            </p>
            <p>
              When I'm not coding, I'm constantly learning new technologies and exploring modern design trends to keep my skills sharp.
            </p>
          </motion.div>

          <motion.div 
            className="about-skills glass-panel"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4">My Skills</h3>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <motion.span 
                  key={index} 
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
