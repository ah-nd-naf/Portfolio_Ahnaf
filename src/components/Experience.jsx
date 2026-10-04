import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiBriefcase, 
  FiGitCommit, 
  FiLayers, 
  FiTerminal,
  FiArrowUpRight,
  FiExternalLink,
  FiCalendar,
  FiMapPin
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
  'Meta CAPI': <FaServer size={10} className="exp-icon" />,
  'TikTok CAPI': <FaServer size={10} className="exp-icon" />,
  'GA4 Server': <FaServer size={10} className="exp-icon" />,
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
      id: 'periscale-ecom',
      badge: 'E-Commerce Engine',
      title: 'Periscale E-Commerce Platform',
      description: 'Engineered frontend modules and resilient API workflows for Periscale\'s multi-channel e-commerce engine. Built 60-second product catalogs, 1-click sync with Daraz & Shopify, AI fraud protection, bilingual EN/BN localization, and seamless checkout flows.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'REST APIs'],
      color: '#ff5500',
      liveUrl: 'https://www.periscale.ai/ecom',
      liveLabel: '/ecom'
    },
    {
      id: 'periscale-analytics',
      badge: 'Server CAPI & Tracking',
      title: 'First-Party CAPI & Deep Behavioral Analytics',
      description: 'Architected first-party Server-Side Conversions API (CAPI) relay preserving 100% ad signals past iOS 14+ / ad-blockers with 8.5+ Meta EMQ. Formulated real-time 0.018s latency signal streams, interactive injector testing, and behavioral session replays.',
      tags: ['Next.js', 'TypeScript', 'Meta CAPI', 'TikTok CAPI', 'GA4 Server', 'PostgreSQL'],
      color: '#00d4f5',
      liveUrl: 'https://www.periscale.ai/analytics',
      liveLabel: '/analytics'
    },
    {
      id: 'gammify',
      badge: 'Gaming & E-Commerce',
      title: 'Gammify (Online Gaming & Gift Card Platform)',
      description: 'Contributed to Gammify, an e-commerce platform for digital gaming cards, game top-ups, and gift cards. Executed UI/UX design implementation, component testing, stakeholder feedback reviews, and core technical workflows.',
      tags: ['Next.js', 'TypeScript', 'JavaScript', 'PostgreSQL', 'UI/UX & Testing'],
      color: '#c792ea',
      liveUrl: 'https://gammify.app',
      liveLabel: 'gammify.app'
    },
    {
      id: 'client-projects',
      badge: 'Client Deliverables',
      title: 'Client Enterprise Solutions & Integrations',
      description: 'Delivered rapid full-stack solutions and third-party integrations across 2+ commercial client codebases. Formulated relational PostgreSQL schemas, secure REST routing, and custom frontend views with strict deadlines.',
      tags: ['TypeScript', 'JavaScript', 'Node.js', 'PostgreSQL', 'Custom APIs'],
      color: '#4ec9b0'
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
          className="glass-card exp-master-card"
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
            {/* Left / Top: Company Brand & Role */}
            <div className="exp-brand-col">
              {/* Company Logo with Neon Frame */}
              <div className="exp-logo-box">
                <img 
                  src={EXPERIENCE_DATA.logo} 
                  alt={EXPERIENCE_DATA.company} 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>

              <div className="exp-brand-info">
                <div className="exp-company-title-row">
                  <h3 className="exp-company-name">
                    {EXPERIENCE_DATA.company}
                  </h3>

                  {/* Status Badge - Inlined in header for Mobile */}
                  <div className="exp-status-badge exp-status-mobile">
                    <span className="exp-status-dot" />
                    <span className="exp-status-text">{EXPERIENCE_DATA.status}</span>
                  </div>
                </div>

                <div className="exp-role-row">
                  <span className="exp-role-title">{EXPERIENCE_DATA.role}</span>
                  <span className="exp-role-dot">•</span>
                  <a
                    href={EXPERIENCE_DATA.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exp-domain-link exp-domain-desktop"
                    title="Visit periscale.ai (opens in new tab)"
                  >
                    <span>periscale.ai</span>
                    <FiArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Status & Period Column - Desktop View */}
            <div className="exp-status-col-desktop">
              <div className="exp-status-badge">
                <span className="exp-status-dot" />
                <span className="exp-status-text">{EXPERIENCE_DATA.status}</span>
              </div>

              <div className="exp-period">
                {EXPERIENCE_DATA.period}
              </div>

              <div className="exp-location">
                {EXPERIENCE_DATA.location}
              </div>
            </div>

            {/* Mobile Meta Strip (Shows domain link, period, and location seamlessly on phone) */}
            <div className="exp-mobile-meta">
              <a
                href={EXPERIENCE_DATA.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="exp-domain-link"
                title="Visit periscale.ai (opens in new tab)"
              >
                <span>periscale.ai</span>
                <FiArrowUpRight size={12} />
              </a>
              <span className="exp-mobile-meta-item">
                <FiCalendar size={12} style={{ color: 'var(--syn-cyan)', opacity: 0.85 }} />
                <span>Aug 2026 – Present</span>
              </span>
              <span className="exp-mobile-meta-item">
                <FiMapPin size={12} style={{ color: 'var(--syn-purple)', opacity: 0.85 }} />
                <span>Dhaka, BD</span>
              </span>
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
                  <span 
                    className="exp-card-badge"
                    style={{
                      background: `${repo.color}15`,
                      color: repo.color,
                      border: `1px solid ${repo.color}35`,
                    }}
                  >
                    {repo.badge}
                  </span>
                  {repo.liveUrl ? (
                    <a
                      href={repo.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="exp-repo-live-btn"
                      title={`Launch ${repo.title} in new tab`}
                      style={{
                        borderColor: `${repo.color}40`,
                        color: repo.color
                      }}
                    >
                      <span>{repo.liveLabel || 'Live Launch'}</span>
                      <FiExternalLink size={11} />
                    </a>
                  ) : (
                    <FiGitCommit size={14} color={repo.color} opacity={0.8} />
                  )}
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
          <div className="exp-stack-section">
            <div className="exp-stack-label">
              <FiTerminal size={16} color="var(--syn-green)" />
              <span>Active Production Stack:</span>
            </div>

            <div className="exp-stack-list">
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
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .exp-brand-col {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .exp-logo-box {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: rgba(6, 182, 212, 0.08);
          border: 1.5px solid rgba(0, 212, 245, 0.35);
          padding: 7px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 25px rgba(0, 212, 245, 0.18);
          flex-shrink: 0;
        }

        .exp-brand-info {
          display: flex;
          flex-direction: column;
        }

        .exp-company-title-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .exp-company-name {
          margin: 0;
          font-size: clamp(1.6rem, 3.2vw, 2.1rem);
          font-weight: 800;
          color: var(--text-main);
          letter-spacing: -0.5px;
        }

        .exp-role-row {
          margin-top: 6px;
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          font-weight: 600;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .exp-role-title {
          color: var(--syn-cyan);
        }

        .exp-role-dot {
          color: rgba(255, 255, 255, 0.2);
          font-size: 0.8rem;
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

        .exp-status-col-desktop {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
        }

        .exp-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 14px;
          background: rgba(195, 232, 141, 0.1);
          border: 1px solid rgba(195, 232, 141, 0.3);
          border-radius: 30px;
        }

        .exp-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--syn-green);
          box-shadow: 0 0 10px var(--syn-green);
          animation: pulse 2s infinite;
        }

        .exp-status-text {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--syn-green);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .exp-period {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .exp-location {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-dim);
        }

        /* Default (desktop) hidden items */
        .exp-status-mobile {
          display: none !important;
        }

        .exp-mobile-meta {
          display: none !important;
        }

        .exp-repos-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
          margin-bottom: 2.5rem;
          align-items: stretch;
        }

        .exp-card {
          padding: 1.5rem;
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
          gap: 0.75rem;
        }

        .exp-card-badge {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 6px;
          letter-spacing: 0.5px;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
        }

        .exp-repo-live-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          padding: 3px 9px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: var(--text-main);
          text-decoration: none;
          transition: all 0.2s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .exp-repo-live-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          transform: translateY(-1px);
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
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.73rem;
          color: var(--text-main);
          background: rgba(255, 255, 255, 0.05);
          padding: 4px 9px;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .exp-tech-chip .exp-icon {
          color: var(--syn-cyan);
          opacity: 0.85;
          transition: all 0.2s ease;
        }

        .exp-tech-chip:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.25);
          color: #fff;
        }

        .exp-tech-chip:hover .exp-icon {
          opacity: 1;
        }

        .exp-stack-section {
          padding-top: 1.75rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
        }

        .exp-stack-label {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .exp-stack-label span {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }

        .exp-stack-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .exp-stack-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-main);
          background: rgba(0, 212, 245, 0.05);
          border: 1px solid rgba(0, 212, 245, 0.2);
          padding: 5px 12px;
          border-radius: 100px;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .exp-stack-pill .exp-icon {
          color: var(--syn-cyan);
          opacity: 0.9;
          transition: all 0.2s ease;
        }

        .exp-stack-pill:hover {
          background: rgba(0, 212, 245, 0.12);
          border-color: rgba(0, 212, 245, 0.45);
          box-shadow: 0 0 15px rgba(0, 212, 245, 0.18);
          transform: translateY(-1px);
        }

        /* Medium screens / Tablet */
        @media (max-width: 860px) {
          .exp-repos-grid {
            grid-template-columns: 1fr;
            gap: 1.2rem;
          }
          .exp-card-title {
            min-height: auto !important;
          }
          .exp-card-tags {
            min-height: auto !important;
          }
        }

        /* Mobile phones */
        @media (max-width: 640px) {
          .exp-master-card {
            padding: 1.25rem 1rem 2.25rem 1rem !important;
            border-radius: 18px !important;
          }

          .exp-header-row {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 0.85rem !important;
            padding-bottom: 1.25rem !important;
          }

          .exp-brand-col {
            display: flex !important;
            align-items: center !important;
            gap: 0.85rem !important;
            width: 100% !important;
          }

          .exp-logo-box {
            width: 48px !important;
            height: 48px !important;
            border-radius: 12px !important;
            padding: 5px !important;
            flex-shrink: 0 !important;
          }

          .exp-brand-info {
            flex: 1 !important;
            min-width: 0 !important;
          }

          .exp-company-title-row {
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            gap: 8px !important;
          }

          .exp-company-name {
            font-size: 1.3rem !important;
            font-weight: 800 !important;
            letter-spacing: -0.5px !important;
            line-height: 1.2 !important;
          }

          .exp-status-mobile {
            display: inline-flex !important;
            padding: 3px 9px !important;
            gap: 6px !important;
          }

          .exp-status-mobile .exp-status-dot {
            width: 6px !important;
            height: 6px !important;
          }

          .exp-status-mobile .exp-status-text {
            font-size: 0.68rem !important;
            letter-spacing: 0.75px !important;
          }

          .exp-role-row {
            margin-top: 3px !important;
            display: block !important;
          }

          .exp-role-title {
            font-size: 0.88rem !important;
            font-weight: 600 !important;
            color: var(--syn-cyan) !important;
            display: block !important;
            line-height: 1.3 !important;
          }

          .exp-role-dot {
            display: none !important;
          }

          .exp-domain-desktop {
            display: none !important;
          }

          .exp-status-col-desktop {
            display: none !important;
          }

          .exp-mobile-meta {
            display: flex !important;
            align-items: center !important;
            flex-wrap: wrap !important;
            gap: 8px !important;
            padding: 0 !important;
            background: transparent !important;
            border: none !important;
            margin-top: 2px !important;
          }

          .exp-mobile-meta .exp-domain-link {
            font-size: 0.76rem !important;
            padding: 4px 9px !important;
            background: rgba(0, 212, 245, 0.08) !important;
            border: 1px solid rgba(0, 212, 245, 0.28) !important;
            color: var(--syn-cyan) !important;
            border-radius: 8px !important;
          }

          .exp-mobile-meta-item {
            display: inline-flex !important;
            align-items: center !important;
            gap: 6px !important;
            font-family: var(--font-mono) !important;
            font-size: 0.74rem !important;
            color: var(--text-muted) !important;
            padding: 4px 9px !important;
            background: rgba(255, 255, 255, 0.035) !important;
            border: 1px solid rgba(255, 255, 255, 0.08) !important;
            border-radius: 8px !important;
            white-space: nowrap !important;
          }

          .exp-repos-grid {
            gap: 1rem !important;
            margin-bottom: 1.5rem !important;
          }

          .exp-card {
            padding: 1.15rem 1rem !important;
            border-radius: 14px !important;
          }

          .exp-card-top {
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            gap: 8px !important;
            flex-wrap: wrap !important;
            margin-bottom: 0.75rem !important;
          }

          .exp-card-badge {
            font-size: 0.68rem !important;
            padding: 3px 8px !important;
            white-space: nowrap !important;
          }

          .exp-repo-live-btn {
            font-size: 0.68rem !important;
            padding: 3px 8px !important;
            white-space: nowrap !important;
          }

          .exp-card-title {
            font-size: 1rem !important;
            line-height: 1.35 !important;
            margin-bottom: 0.6rem !important;
            min-height: auto !important;
          }

          .exp-card-desc {
            font-size: 0.88rem !important;
            line-height: 1.6 !important;
          }

          .exp-card-tags {
            margin-top: 1rem !important;
            padding-top: 0.75rem !important;
            min-height: auto !important;
            gap: 6px !important;
          }

          .exp-tech-chip {
            font-size: 0.71rem !important;
            padding: 3.5px 7.5px !important;
            gap: 5px !important;
          }

          .exp-stack-section {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.85rem !important;
            padding-top: 1.25rem !important;
          }

          .exp-stack-label span {
            font-size: 0.78rem !important;
          }

          .exp-stack-list {
            gap: 6px !important;
            width: 100% !important;
          }

          .exp-stack-pill {
            font-size: 0.74rem !important;
            padding: 4px 10px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
