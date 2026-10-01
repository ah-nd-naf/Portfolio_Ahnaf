import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiBriefcase, 
  FiGitCommit, 
  FiLayers, 
  FiTerminal,
  FiArrowUpRight
} from 'react-icons/fi';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiPostgresql, 
  SiTailwindcss,
  SiFigma
} from 'react-icons/si';
import { 
  FaReact, 
  FaNodeJs, 
  FaJsSquare, 
  FaServer, 
  FaGitAlt
} from 'react-icons/fa';

// Minimalist, Non-Cartoonish Developer Icons
const TECH_ICONS = {
  'Next.js': <SiNextdotjs size={11} className="exp-icon" />,
  'TypeScript': <SiTypescript size={11} className="exp-icon" />,
  'JavaScript': <FaJsSquare size={11} className="exp-icon" />,
  'React': <FaReact size={11} className="exp-icon" />,
  'PostgreSQL': <SiPostgresql size={11} className="exp-icon" />,
  'Node.js': <FaNodeJs size={11} className="exp-icon" />,
  'REST APIs': <FaServer size={10} className="exp-icon" />,
  'Custom APIs': <FaServer size={10} className="exp-icon" />,
  'Tailwind CSS': <SiTailwindcss size={11} className="exp-icon" />,
  'Git & GitHub': <FaGitAlt size={11} className="exp-icon" />,
  'UI/UX & Testing': <SiFigma size={11} className="exp-icon" />
};

const EXPERIENCE_DATA = {
  company: 'Periscale AI',
  companyUrl: 'https://www.periscale.ai/',
  logo: '/periscale-logo.png',
  role: 'Full-Stack Developer Intern',
  period: 'August 1, 2026 – Present',
  status: 'Active',
  location: 'Dhaka, Bangladesh',
  summary: 'Contributing as a core full-stack developer across multiple key repositories—engineering high-performance frontends, resilient backend APIs, and scalable PostgreSQL database schemas for an AI-powered social commerce revenue engine.',
  repositories: [
    {
      id: 'periscale-core',
      badge: 'Core Platform & Web',
      title: 'Periscale AI Web & Platform Services',
      description: 'Engineered frontend modules and backend API services powering Periscale\'s web applications and landing services. Built responsive UI components with Next.js & TypeScript, integrated with PostgreSQL database queries.',
      tags: ['Next.js', 'TypeScript', 'React', 'PostgreSQL', 'REST APIs'],
      color: 'var(--syn-cyan)'
    },
    {
      id: 'gammify',
      badge: 'Gaming & E-Commerce',
      title: 'Gammify (Online Gaming & Gift Card Platform)',
      description: 'Contributed to Gammify, an e-commerce platform for digital gaming cards, game top-ups, and gift cards. Executed UI/UX design implementation, component testing, stakeholder feedback reviews, and core technical workflows.',
      tags: ['Next.js', 'TypeScript', 'JavaScript', 'PostgreSQL', 'UI/UX & Testing'],
      color: 'var(--syn-purple)'
    },
    {
      id: 'client-projects',
      badge: 'Client Deliverables',
      title: 'Client Enterprise Solutions & Integrations',
      description: 'Delivered rapid full-stack solutions and third-party integrations across 2+ commercial client codebases. Formulated relational PostgreSQL schemas, secure REST routing, and custom frontend views with strict deadlines.',
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
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
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
          <div className="exp-header-row">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              {/* Company Logo with Neon Frame */}
              <div 
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: 'rgba(6, 182, 212, 0.08)',
                  border: '1.5px solid rgba(0, 212, 245, 0.35)',
                  padding: '7px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 25px rgba(0, 212, 245, 0.18)',
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
                <h3 style={{ 
                  margin: 0, 
                  fontSize: 'clamp(1.6rem, 3.2vw, 2.1rem)', 
                  fontWeight: 800, 
                  color: 'var(--text-main)',
                  letterSpacing: '-0.5px'
                }}>
                  {EXPERIENCE_DATA.company}
                </h3>

                <div style={{ 
                  marginTop: '6px', 
                  fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', 
                  fontWeight: 600, 
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}>
                  <span style={{ color: 'var(--syn-cyan)' }}>{EXPERIENCE_DATA.role}</span>
                  <span style={{ color: 'rgba(255, 255, 255, 0.2)', fontSize: '0.8rem' }}>•</span>
                  <a
                    href={EXPERIENCE_DATA.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp-domain-link"
                    title="Visit periscale.ai (opens in new tab)"
                  >
                    <span>periscale.ai</span>
                    <FiArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Status & Period Badge */}
            <div className="exp-status-col">
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
                fontSize: '0.78rem', 
                color: 'var(--text-dim)' 
              }}>
                {EXPERIENCE_DATA.location}
              </div>
            </div>
          </div>

          {/* High-level Overview Summary */}
          <div style={{ padding: '1.75rem 0 2rem', color: 'var(--text-muted)', lineHeight: 1.75, fontSize: '1.05rem' }}>
            <p style={{ margin: 0 }}>
              {EXPERIENCE_DATA.summary}
            </p>
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

          {/* Repositories 3-Column / Equalized Geometric Grid */}
          <div className="exp-repos-grid">
            {EXPERIENCE_DATA.repositories.map((repo) => (
              <motion.div
                key={repo.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="exp-card"
                style={{
                  border: `1px solid ${repo.color}30`,
                  boxShadow: `0 8px 24px -10px ${repo.color}20`
                }}
              >
                {/* Card Top / Badge */}
                <div className="exp-card-top">
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

                {/* Card Title (Uniform Height) */}
                <h5 className="exp-card-title">
                  {repo.title}
                </h5>

                {/* Card Description (Flex-1 for uniform push) */}
                <p className="exp-card-desc">
                  {repo.description}
                </p>

                {/* Tech Badges (Pinned to exact same bottom baseline) */}
                <div className="exp-card-tags">
                  {repo.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="exp-tech-chip"
                    >
                      {TECH_ICONS[tag]}
                      <span>{tag}</span>
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
                  className="exp-stack-pill"
                >
                  {TECH_ICONS[item]}
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>

        </motion.div>

      </div>

      <style>{`
        .exp-header-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .exp-domain-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.82rem;
          text-decoration: none;
          padding: 2px 8px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.09);
          transition: all 0.2s ease;
        }

        .exp-domain-link:hover {
          color: var(--syn-cyan);
          background: rgba(0, 212, 245, 0.1);
          border-color: rgba(0, 212, 245, 0.35);
          transform: translateY(-1px);
        }

        .exp-status-col {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
        }

        @media (max-width: 640px) {
          .exp-status-col {
            align-items: flex-start;
          }
        }

        .exp-repos-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-bottom: 2.5rem;
          align-items: stretch;
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

        .exp-card {
          padding: 1.6rem;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.02);
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
        }

        .exp-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.9rem;
        }

        .exp-card-title {
          margin: 0 0 0.85rem 0;
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-main);
          line-height: 1.4;
          min-height: 2.85em;
          display: flex;
          align-items: flex-start;
        }

        .exp-card-desc {
          margin: 0;
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.65;
          flex: 1;
        }

        .exp-card-tags {
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          flex-wrap: wrap;
          align-content: flex-start;
          gap: 6px;
          min-height: 68px;
        }

        .exp-tech-chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.03);
          padding: 3px 8px;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .exp-tech-chip .exp-icon {
          color: var(--text-dim);
          opacity: 0.75;
          transition: all 0.2s ease;
        }

        .exp-tech-chip:hover {
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(255, 255, 255, 0.15);
          color: var(--text-main);
        }

        .exp-tech-chip:hover .exp-icon {
          color: var(--syn-cyan);
          opacity: 1;
        }

        .exp-stack-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-muted);
          background: rgba(0, 212, 245, 0.04);
          border: 1px solid rgba(0, 212, 245, 0.18);
          padding: 4px 12px;
          border-radius: 20px;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .exp-stack-pill .exp-icon {
          color: var(--syn-cyan);
          opacity: 0.8;
          transition: all 0.2s ease;
        }

        .exp-stack-pill:hover {
          background: rgba(0, 212, 245, 0.1);
          border-color: rgba(0, 212, 245, 0.4);
          color: var(--text-main);
          box-shadow: 0 0 15px rgba(0, 212, 245, 0.12);
          transform: translateY(-1px);
        }
      `}</style>
    </section>
  );
};

export default Experience;
