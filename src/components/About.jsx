import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import GlitchText from './GlitchText';

const codeLines = [
  { num: 1, content: <><span className="syn-keyword">const</span> <span className="syn-fn">developer</span> <span style={{color:'var(--text-muted)'}}>= {'{'}</span></> },
  { num: 2, content: <><span style={{paddingLeft:'1.5rem'}}><span className="syn-prop">name</span><span style={{color:'var(--text-muted)'}}>:</span> <span className="syn-string">"Ahnaf Rasheed"</span><span style={{color:'var(--text-muted)'}}>,</span></span></> },
  { num: 3, content: <><span style={{paddingLeft:'1.5rem'}}><span className="syn-prop">role</span><span style={{color:'var(--text-muted)'}}>:</span> <span className="syn-string">"Full-Stack Developer"</span><span style={{color:'var(--text-muted)'}}>,</span></span></> },
  { num: 4, content: <><span style={{paddingLeft:'1.5rem'}}><span className="syn-prop">location</span><span style={{color:'var(--text-muted)'}}>:</span> <span className="syn-string">"Bangladesh 🇧🇩"</span><span style={{color:'var(--text-muted)'}}>,</span></span></> },
  { num: 5, content: <><span style={{paddingLeft:'1.5rem'}}><span className="syn-prop">passion</span><span style={{color:'var(--text-muted)'}}>:</span> <span className="syn-string">"Crafting beautiful UI/UX"</span><span style={{color:'var(--text-muted)'}}>,</span></span></> },
  { num: 6, content: <><span style={{paddingLeft:'1.5rem'}}><span className="syn-prop">skills</span><span style={{color:'var(--text-muted)'}}>:</span> <span style={{color:'var(--text-muted)'}}>[</span></span></> },
  { num: 7, content: <><span style={{paddingLeft:'3rem'}}><span style={{color:'var(--text-muted)'}}>'</span><span className="syn-cyan">React</span><span style={{color:'var(--text-muted)'}}>', '</span><span className="syn-green">Node.js</span><span style={{color:'var(--text-muted)'}}>', '</span><span className="syn-yellow">Express</span><span style={{color:'var(--text-muted)'}}>', '</span><span className="syn-green">MongoDB</span><span style={{color:'var(--text-muted)'}}>',</span></span></> },
  { num: 8, content: <><span style={{paddingLeft:'3rem'}}><span style={{color:'var(--text-muted)'}}>'</span><span className="syn-pink">Python</span><span style={{color:'var(--text-muted)'}}>', '</span><span className="syn-cyan">Django</span><span style={{color:'var(--text-muted)'}}>', '</span><span className="syn-yellow">SQL</span><span style={{color:'var(--text-muted)'}}>', '</span><span className="syn-cyan">JavaScript</span><span style={{color:'var(--text-muted)'}}>',</span></span></> },
  { num: 9, content: <><span style={{paddingLeft:'3rem'}}><span style={{color:'var(--text-muted)'}}>'</span><span className="syn-pink">REST APIs</span><span style={{color:'var(--text-muted)'}}>', '</span><span className="syn-yellow">Git</span><span style={{color:'var(--text-muted)'}}>', '</span><span className="syn-cyan">Linux</span><span style={{color:'var(--text-muted)'}}>',</span></span></> },
  { num: 10, content: <><span style={{paddingLeft:'1.5rem'}}><span style={{color:'var(--text-muted)'}}>],</span></span></> },
  { num: 11, content: <><span style={{paddingLeft:'1.5rem'}}><span className="syn-prop">availableForHire</span><span style={{color:'var(--text-muted)'}}>:</span> <span className="syn-number">true</span></span></> },
  { num: 12, content: <span style={{color:'var(--text-muted)'}}>{'}'}</span> },
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
    <section id="about" className="about-section" style={{ position: 'relative' }}>
      
      {/* Huge Background Typography Accent */}
      <div 
        style={{
          position: 'absolute',
          top: '12%',
          left: '0',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          fontSize: 'clamp(5rem, 15vw, 12rem)',
          fontWeight: 900,
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          fontFamily: 'var(--font-sans)',
          zIndex: -1,
          opacity: 0.15, /* Lowered opacity for a cleaner background accent */
          letterSpacing: '10px'
        }}
      >
        <GlitchText text="ABOUT ME" as="div" />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr', 
            gap: '4rem', 
            maxWidth: '1200px', 
            margin: '0 auto',
            alignItems: 'center'
          }}
          className="about-unique-layout"
        >
          {/* LEFT: Premium Typography Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ paddingRight: '2rem' }}
          >
            <h2 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              fontWeight: 800, 
              lineHeight: 1.1, 
              marginBottom: '2rem',
              letterSpacing: '-1px',
              color: 'var(--text-main)'
            }}>
              I build <span className="text-gradient">digital experiences</span> that live on the web.
            </h2>
            
            <div style={{ 
              fontSize: '1.15rem', 
              lineHeight: 1.8, 
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-sans)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              <p>
                Hey! I'm <strong style={{ color: 'var(--text-main)' }}>Ahnaf Rasheed</strong>. 
                I specialize in turning complex, ambitious ideas into clean, scalable, and visually striking applications. 
              </p>
              <p>
                My expertise spans the entire pipeline. I craft intuitive user interfaces with <span className="syn-cyan" style={{ fontWeight: 600 }}>React</span> and <span className="syn-cyan" style={{ fontWeight: 600 }}>Tailwind</span>, while building rock-solid, high-performance backends using <span className="syn-green" style={{ fontWeight: 600 }}>Node.js</span>, <span className="syn-yellow" style={{ fontWeight: 600 }}>Express</span>, and robust databases like <span className="syn-purple" style={{ fontWeight: 600 }}>PostgreSQL</span> and <span className="syn-green" style={{ fontWeight: 600 }}>MongoDB</span>.
              </p>
              <p>
                I'm driven by a singular philosophy: great software happens when relentless engineering meets uncompromising design.
              </p>
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <a
                href="https://github.com/ah-nd-naf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.8rem 2rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--bg)',
                  background: 'var(--name-grad)',
                  backgroundSize: '200% auto',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 30px rgba(0, 212, 245, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundPosition = 'right center';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(199, 146, 234, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundPosition = 'left center';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 212, 245, 0.2)';
                }}
              >
                Explore My Code <span>→</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Professional Floating IDE Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            style={{ perspective: '1000px' }}
          >
            <div className="premium-code-block">
              <div className="premium-code-glow"></div>
              
              <div className="premium-code-header">
                <div className="premium-mac-buttons">
                  <div className="premium-mac-btn mac-close"></div>
                  <div className="premium-mac-btn mac-min"></div>
                  <div className="premium-mac-btn mac-max"></div>
                </div>
                <div className="premium-code-title">developer.config.js</div>
                <div style={{ width: '44px' }}></div> {/* Spacer to center title */}
              </div>

              <div className="premium-code-content">
                <div style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '1rem', 
                  lineHeight: 1.8,
                }}>
                  {codeLines.map((line, index) => (
                    <div
                      key={line.num}
                      style={{
                        display: 'flex',
                        gap: '1.25rem',
                        opacity: index < visibleLines ? 1 : 0,
                        transform: index < visibleLines ? 'translateY(0)' : 'translateY(10px)',
                        transition: 'opacity 0.3s ease, transform 0.3s ease',
                      }}
                    >
                      <span style={{ color: 'rgba(255,255,255,0.2)', userSelect: 'none', minWidth: '1.5ch', textAlign: 'right' }}>
                        {line.num}
                      </span>
                      <span style={{ flex: 1 }}>{line.content}</span>
                    </div>
                  ))}
                  {visibleLines < codeLines.length && (
                    <div style={{ display: 'flex', gap: '1.25rem' }}>
                      <span style={{ color: 'rgba(255,255,255,0.2)', userSelect: 'none', minWidth: '1.5ch', textAlign: 'right' }}>
                        {visibleLines + 1}
                      </span>
                      <span style={{ flex: 1 }}>
                        <span className="cursor-blink" style={{ color: 'var(--syn-cyan)' }}>_</span>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Inline styles for the grid */}
      <style>{`
        @media (min-width: 900px) {
          .about-unique-layout {
            grid-template-columns: 1.2fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
