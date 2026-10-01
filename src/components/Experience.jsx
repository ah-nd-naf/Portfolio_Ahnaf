import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiBriefcase, 
  FiExternalLink, 
  FiGitCommit, 
  FiLayers, 
  FiCode, 
  FiCheckCircle, 
  FiTerminal,
  FiCpu
} from 'react-icons/fi';

const EXPERIENCE_DATA = {
  company: 'Periscale AI',
  companyUrl: 'https://www.periscale.ai/',
  logo: '/periscale-logo.png',
  role: 'Full-Stack Developer Intern',
  type: 'Internship',
  period: 'August 1, 2026 – Present',
  status: 'Active',
  location: 'Dhaka, Bangladesh · Remote / Hybrid',
  summary: 'Contributing as a core full-stack developer across multiple key repositories—engineering high-performance frontends, resilient backend APIs, and scalable PostgreSQL database schemas for an AI-powered social commerce revenue engine.',
  repositories: [
    {
      id: 'periscale-core',
      badge: 'Core Platform & Web',
      title: 'Periscale AI Web & Platform Services',
      description: 'Engineered responsive frontend modules and backend API services powering Periscale\'s official web presence and platform workflows. Built server-driven UI components with Next.js and TypeScript, connected to robust backend endpoints.',
      tags: ['Next.js', 'TypeScript', 'React', 'PostgreSQL', 'REST APIs', 'Tailwind CSS'],
      color: 'var(--syn-cyan)'
    },
    {
      id: 'gammify',
      badge: 'Engagement Engine',
      title: 'Gammify (Gamification & Loyalty Repo)',
      description: 'Architected and implemented interactive gamification mechanics, customer reward loops, and retention tools within the Gammify repository to boost user interaction and conversion rates for social-first brands.',
      tags: ['TypeScript', 'JavaScript', 'Next.js', 'PostgreSQL', 'State Management'],
      color: 'var(--syn-purple)'
    },
    {
      id: 'client-projects',
      badge: 'Client Deliverables',
      title: 'Client Enterprise Solutions & Integrations',
      description: 'Delivered rapid full-stack solutions and third-party integrations across 2+ commercial client codebases. Handled relational database schemas, secure API routing, and custom frontend views with strict deadlines.',
      tags: ['TypeScript', 'JavaScript', 'Node.js', 'PostgreSQL', 'Custom APIs'],
      color: 'var(--syn-green)'
    }
  ],
  stack: [
    'Next.js',
    'TypeScript',
    'JavaScript',
    'PostgreSQL',
    'Node.js',
    'REST APIs',
    'Tailwind CSS',
    'Git & GitHub'
  ],
  metrics: [
    { label: 'Repositories Contributed', value: '3+' },
    { label: 'Client Solutions Shipped', value: '2+' },
    { label: 'Stack Scope', value: 'Full-Stack (UI to DB)' },
    { label: 'Status', value: 'Active Contributor' }
  ]
};

const Experience = () => {
  return (
    <section 
      id="experience" 
      style={{ 
        position: 'relative', 
        padding: '110px 5vw 90px', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Ambient Aurora Glow */}
      <div 
        style={{ 
          position: 'absolute', 
          width: '700px', 
          height: '400px', 
          top: '20%', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          background: 'radial-gradient(ellipse at center, rgba(0, 212, 245, 0.08) 0%, rgba(199, 146, 234, 0.05) 50%, transparent 75%)', 
          filter: 'blur(90px)',
          zIndex: 0, 
          pointerEvents: 'none' 
        }} 
      />

      <div className="container" style={{ maxWidth: '1100px', position: 'relative', zIndex: 1, margin: '0 auto', width: '100%' }}>
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '6px 18px', 
            background: 'rgba(0, 212, 245, 0.05)', 
            border: '1px solid rgba(0, 212, 245, 0.2)', 
            borderRadius: '30px', 
            marginBottom: '1.25rem' 
          }}>
            <FiBriefcase size={14} color="var(--syn-cyan)" />
            <span style={{ 
              fontFamily: 'var(--font-mono)', 
              fontSize: '0.78rem', 
              color: 'var(--syn-cyan)', 
              letterSpacing: '2px', 
              textTransform: 'uppercase', 
              fontWeight: 600 
            }}>
              git log --experience --live
            </span>
          </div>

          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)', 
            fontFamily: 'var(--font-sans)', 
            fontWeight: 800, 
            margin: 0, 
            letterSpacing: '-1.5px', 
            lineHeight: 1.1 
          }}>
            <span style={{ color: 'var(--text-main)' }}>Work</span>{' '}
            <span className="text-gradient" style={{ display: 'inline-block', textShadow: '0 0 35px rgba(0, 212, 245, 0.3)' }}>
              Experience
            </span>
          </h2>
          
          <p style={{ 
            color: 'var(--text-muted)', 
            marginTop: '1.25rem', 
            fontFamily: 'var(--font-sans)', 
            fontSize: '1.1rem', 
            maxWidth: '650px', 
            margin: '1.25rem auto 0 auto', 
            lineHeight: 1.6 
          }}>
            Industry engineering track record building production-grade web applications, core repositories, and client deliverables.
          </p>
        </motion.div>

        {/* Master Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card"
          style={{
            position: 'relative',
            borderRadius: '24px',
            background: 'linear-gradient(145deg, rgba(22, 27, 34, 0.85) 0%, rgba(13, 17, 23, 0.95) 100%)',
            border: '1px solid rgba(0, 212, 245, 0.25)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 212, 245, 0.1)',
            padding: 'clamp(1.5rem, 4vw, 2.75rem)',
            overflow: 'hidden'
          }}
        >
          {/* Subtle Corner Accent Watermark */}
          <div 
            style={{
              position: 'absolute',
              top: '-15px',
              right: '-15px',
              width: '160px',
              height: '160px',
              background: 'radial-gradient(circle, rgba(0, 212, 245, 0.12) 0%, transparent 70%)',
              borderRadius: '50%',
              pointerEvents: 'none',
              filter: 'blur(20px)'
            }}
          />

          {/* Company Header Row */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              {/* Company Logo with Neon Frame */}
              <div 
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: 'rgba(6, 182, 212, 0.08)',
                  border: '1.5px solid rgba(0, 212, 245, 0.4)',
                  padding: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 20px rgba(0, 212, 245, 0.2)',
                  flexShrink: 0
                }}
              >
                <img 
                  src={EXPERIENCE_DATA.logo} 
                  alt={EXPERIENCE_DATA.company} 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <h3 style={{ 
                    margin: 0, 
                    fontSize: 'clamp(1.4rem, 3vw, 1.85rem)', 
                    fontWeight: 800, 
                    color: 'var(--text-main)',
                    letterSpacing: '-0.5px'
                  }}>
                    {EXPERIENCE_DATA.company}
                  </h3>
                  <a
                    href={EXPERIENCE_DATA.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      color: 'var(--syn-cyan)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      textDecoration: 'none',
                      padding: '3px 10px',
                      borderRadius: '20px',
                      background: 'rgba(0, 212, 245, 0.08)',
                      border: '1px solid rgba(0, 212, 245, 0.25)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 212, 245, 0.18)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 212, 245, 0.08)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <span>periscale.ai</span>
                    <FiExternalLink size={12} />
                  </a>
                </div>

                <div style={{ 
                  marginTop: '6px', 
                  fontSize: 'clamp(1rem, 2vw, 1.15rem)', 
                  fontWeight: 600, 
                  color: 'var(--syn-cyan)' 
                }}>
                  {EXPERIENCE_DATA.role}
                </div>
              </div>
            </div>

            {/* Status & Period Badge */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', smAlignItems: 'flex-end', gap: '8px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '5px 14px',
                background: 'rgba(195, 232, 141, 0.1)',
                border: '1px solid rgba(195, 232, 141, 0.3)',
                borderRadius: '30px'
              }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--syn-green)',
                  boxShadow: '0 0 10px var(--syn-green)',
                  animation: 'pulse 2s infinite'
                }} />
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: 'var(--syn-green)',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>
                  {EXPERIENCE_DATA.status}
                </span>
              </div>

              <div style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.85rem', 
                color: 'var(--text-muted)' 
              }}>
                {EXPERIENCE_DATA.period}
              </div>

              <div style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.75rem', 
                color: 'var(--text-dim)' 
              }}>
                {EXPERIENCE_DATA.location}
              </div>
            </div>
          </div>

          {/* High-level Elevator Pitch / Summary */}
          <div style={{ padding: '1.75rem 0 1.5rem', color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.05rem' }}>
            <p style={{ margin: 0 }}>
              {EXPERIENCE_DATA.summary}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
            gap: '1rem',
            padding: '1.25rem',
            background: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            marginBottom: '2.5rem'
          }}>
            {EXPERIENCE_DATA.metrics.map((m, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <span style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.72rem', 
                  color: 'var(--text-dim)', 
                  textTransform: 'uppercase', 
                  letterSpacing: '1px' 
                }}>
                  {m.label}
                </span>
                <span style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '1.15rem', 
                  fontWeight: 700, 
                  color: idx === 0 ? 'var(--syn-cyan)' : idx === 1 ? 'var(--syn-purple)' : idx === 2 ? 'var(--syn-green)' : 'var(--syn-yellow)' 
                }}>
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Section Divider: Repositories & Sub-projects */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FiLayers size={18} color="var(--syn-purple)" />
            <h4 style={{ 
              margin: 0, 
              fontSize: '1.2rem', 
              fontWeight: 700, 
              color: 'var(--text-main)', 
              letterSpacing: '-0.3px' 
            }}>
              Multi-Repository Engineering & Deliverables
            </h4>
          </div>

          {/* Repositories 3-Column / Stack Grid */}
          <div className="exp-repos-grid">
            {EXPERIENCE_DATA.repositories.map((repo, idx) => (
              <motion.div
                key={repo.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                style={{
                  padding: '1.5rem',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: `1px solid ${repo.color}30`,
                  boxShadow: `0 8px 24px -10px ${repo.color}20`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '3px 10px',
                      borderRadius: '6px',
                      background: `${repo.color}15`,
                      color: repo.color,
                      border: `1px solid ${repo.color}35`,
                      letterSpacing: '0.5px'
                    }}>
                      {repo.badge}
                    </span>
                    <FiGitCommit size={14} color={repo.color} opacity={0.8} />
                  </div>

                  <h5 style={{ 
                    margin: '0 0 0.75rem 0', 
                    fontSize: '1.05rem', 
                    fontWeight: 700, 
                    color: 'var(--text-main)', 
                    lineHeight: 1.4 
                  }}>
                    {repo.title}
                  </h5>

                  <p style={{ 
                    margin: 0, 
                    fontSize: '0.92rem', 
                    color: 'var(--text-muted)', 
                    lineHeight: 1.65 
                  }}>
                    {repo.description}
                  </p>
                </div>

                {/* Tech Badges inside Repo Card */}
                <div style={{ 
                  marginTop: '1.25rem', 
                  paddingTop: '1rem', 
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)', 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '6px' 
                }}>
                  {repo.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      style={{ 
                        fontFamily: 'var(--font-mono)', 
                        fontSize: '0.72rem', 
                        color: 'var(--text-muted)', 
                        background: 'rgba(255, 255, 255, 0.03)', 
                        padding: '2px 8px', 
                        borderRadius: '4px',
                        border: '1px solid rgba(255, 255, 255, 0.06)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Section Divider: Tech Stack Arsenal */}
          <div style={{
            paddingTop: '1.75rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FiTerminal size={16} color="var(--syn-green)" />
              <span style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.85rem', 
                color: 'var(--text-dim)', 
                textTransform: 'uppercase', 
                letterSpacing: '1px',
                fontWeight: 600
              }}>
                Active Production Stack:
              </span>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {EXPERIENCE_DATA.stack.map((item, idx) => (
                <span 
                  key={idx} 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--syn-cyan)',
                    background: 'rgba(0, 212, 245, 0.06)',
                    border: '1px solid rgba(0, 212, 245, 0.25)',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontWeight: 500
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </motion.div>

      </div>

      <style>{`
        .exp-repos-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }
        @media (max-width: 992px) {
          .exp-repos-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          }
        }
        @media (max-width: 640px) {
          .exp-repos-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
