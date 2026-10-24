import { motion } from 'framer-motion';
import './Experience.css';
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
      color: '#c792ea'
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
          <div className="exp-section-badge">
            <FiBriefcase size={14} color="var(--syn-cyan)" />
            <span>git log --experience --live</span>
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

      
    </section>
  );
};

export default Experience;
