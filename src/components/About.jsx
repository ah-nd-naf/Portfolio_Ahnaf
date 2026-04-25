import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const codeLines = [
  { num: 1, content: <><span className="syn-keyword">const</span> <span className="syn-fn">profile</span> <span style={{color:'var(--text-muted)'}}>= {'{'}</span></> },
  { num: 2, content: <><span style={{paddingLeft:'1.5rem'}}><span className="syn-prop">name</span><span style={{color:'var(--text-muted)'}}>:</span> <span className="syn-string">"Ahnaf Rasheed"</span><span style={{color:'var(--text-muted)'}}>,</span></span></> },
  { num: 3, content: <><span style={{paddingLeft:'1.5rem'}}><span className="syn-prop">role</span><span style={{color:'var(--text-muted)'}}>:</span> <span className="syn-string">"Full-Stack Web Developer"</span><span style={{color:'var(--text-muted)'}}>,</span></span></> },
  { num: 4, content: <><span style={{paddingLeft:'1.5rem'}}><span className="syn-prop">location</span><span style={{color:'var(--text-muted)'}}>:</span> <span className="syn-string">"Bangladesh 🇧🇩"</span><span style={{color:'var(--text-muted)'}}>,</span></span></> },
  { num: 5, content: <><span style={{paddingLeft:'1.5rem'}}><span className="syn-prop">focus</span><span style={{color:'var(--text-muted)'}}>:</span> <span className="syn-string">"Scalable & beautiful web apps"</span><span style={{color:'var(--text-muted)'}}>,</span></span></> },
  { num: 6, content: <><span style={{paddingLeft:'1.5rem'}}><span className="syn-prop">available</span><span style={{color:'var(--text-muted)'}}>:</span> <span className="syn-number">true</span><span style={{color:'var(--text-muted)'}}>,</span></span></> },
  { num: 7, content: <span style={{color:'var(--text-muted)'}}>{'}'}</span> },
];

const About = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          let i = 0;
          const timer = setInterval(() => {
            i++;
            setVisibleLines(i);
            if (i >= codeLines.length) clearInterval(timer);
          }, 140);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-layout">
          {/* IDE Editor card */}
          <motion.div
            className="ide-window"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="ide-titlebar">
              <span className="traffic-light tl-red" />
              <span className="traffic-light tl-yellow" />
              <span className="traffic-light tl-green" />
              <span className="ide-tab">developer<span className="tab-ext">.ts</span></span>
            </div>
            <div className="ide-body">
              {codeLines.map((line, index) => (
                <div
                  key={line.num}
                  className="code-line"
                  style={{
                    opacity: index < visibleLines ? 1 : 0,
                    transform: index < visibleLines ? 'translateX(0)' : 'translateX(-8px)',
                    transition: 'opacity 0.25s ease, transform 0.25s ease',
                  }}
                >
                  <span className="line-num">{line.num}</span>
                  <span className="line-content">{line.content}</span>
                </div>
              ))}
              {/* blinking cursor on last rendered line */}
              {visibleLines < codeLines.length && (
                <div className="code-line">
                  <span className="line-num">{visibleLines + 1}</span>
                  <span className="line-content">
                    <span className="cursor-blink">█</span>
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            className="about-bio"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Hey! I'm <strong>Ahnaf Rasheed</strong>, a passionate Full-Stack Web Developer from Bangladesh. I love turning complex ideas into clean, scalable, and visually polished digital products.
            </p>
            <p>
              My stack spans the full pipeline — from designing intuitive UIs with React to building robust backends with Node.js, Express, and PostgreSQL or MongoDB.
            </p>
            <p>
              I'm always learning, always building — driven by the belief that great software is where engineering meets design.
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href="https://github.com/ah-nd-naf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View GitHub →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
