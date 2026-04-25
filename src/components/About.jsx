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
    <section id="about" className="about-section" style={{ position: 'relative' }}>
      
      {/* Huge Background Typography Accent */}
      <div 
        style={{
          position: 'absolute',
          top: '10%',
          left: '-5%',
          fontSize: '15vw',
          fontWeight: 900,
          color: 'rgba(255,255,255,0.015)',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          fontFamily: 'var(--font-sans)',
          zIndex: 0
        }}
      >
        ABOUT ME
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

          {/* RIGHT: Borderless Floating Glass Code Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            style={{ perspective: '1000px' }}
          >
            <div style={{
              background: 'linear-gradient(145deg, rgba(22,27,34,0.8) 0%, rgba(13,17,23,0.4) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '24px',
              padding: '3rem 2.5rem',
              boxShadow: '0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Internal subtle glow */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, rgba(199,146,234,0.15) 0%, transparent 70%)',
                pointerEvents: 'none'
              }} />

              <div style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '1.05rem', 
                lineHeight: 2,
                position: 'relative',
                zIndex: 1
              }}>
                {codeLines.map((line, index) => (
                  <div
                    key={line.num}
                    style={{
                      display: 'flex',
                      gap: '1.5rem',
                      opacity: index < visibleLines ? 1 : 0,
                      transform: index < visibleLines ? 'translateY(0)' : 'translateY(10px)',
                      transition: 'opacity 0.3s ease, transform 0.3s ease',
                    }}
                  >
                    <span style={{ color: 'rgba(255,255,255,0.15)', userSelect: 'none', minWidth: '1.5ch', textAlign: 'right' }}>
                      {line.num}
                    </span>
                    <span style={{ flex: 1 }}>{line.content}</span>
                  </div>
                ))}
                {visibleLines < codeLines.length && (
                  <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <span style={{ color: 'rgba(255,255,255,0.15)', userSelect: 'none', minWidth: '1.5ch', textAlign: 'right' }}>
                      {visibleLines + 1}
                    </span>
                    <span style={{ flex: 1 }}>
                      <span className="cursor-blink" style={{ color: 'var(--syn-cyan)' }}>_</span>
                    </span>
                  </div>
                )}
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
