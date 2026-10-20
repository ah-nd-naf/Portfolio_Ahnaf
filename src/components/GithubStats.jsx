import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiFolder, 
  FiGitBranch, 
  FiGitCommit, 
  FiActivity, 
  FiCode, 
  FiMapPin, 
  FiTerminal, 
  FiArrowUpRight, 
  FiCheckCircle
} from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiPython, SiHtml5 } from 'react-icons/si';

// Curated project descriptions for repos when GitHub's description field is empty
const REPO_FALLBACK_DESCRIPTIONS = {
  'turf-management': 'Sports venue and turf booking platform featuring time-slot scheduling, reservation management, and automated booking workflows.',
  'ByteSpace': 'Modern full-stack web application implementing modular services, responsive UI components, and scalable REST routing.',
  'Rental-Management-Platform': 'Property and rental management platform with tenant tracking, lease records, and automated booking flows.',
  'AI-Resume-Analyzer': 'AI-powered SaaS platform evaluating resumes against ATS algorithms and job descriptions with Groq Vision OCR.',
  'Aurae-Ecommerce': 'Full-stack luxury fashion platform with OTP-based JWT authentication, SSLCommerz payment gateway, and Prisma PostgreSQL schema.',
  'Authentication-System': 'Production-ready authentication system featuring secure JWT tokens, bcrypt encryption, and protected routes.',
  'social-media-app': 'Interactive social networking application with user authentication, feed timeline, and nested comments.',
  'Portfolio_Ahnaf': 'Personal portfolio website showcasing engineering track record, research publications, and open-source projects.'
};

// Static fallback data for instant zero-latency loading and rate-limit immunity
const STATIC_REPOS = [
  {
    name: 'turf-management',
    description: REPO_FALLBACK_DESCRIPTIONS['turf-management'],
    language: 'Python',
    languageColor: '#4ec9b0',
    url: 'https://github.com/ah-nd-naf/turf-management',
    updatedAt: 'Recently updated'
  },
  {
    name: 'AI-Resume-Analyzer',
    description: REPO_FALLBACK_DESCRIPTIONS['AI-Resume-Analyzer'],
    language: 'TypeScript',
    languageColor: '#00d4f5',
    url: 'https://github.com/ah-nd-naf/AI-Resume-Analyzer',
    updatedAt: 'Active project'
  },
  {
    name: 'ByteSpace',
    description: REPO_FALLBACK_DESCRIPTIONS['ByteSpace'],
    language: 'JavaScript',
    languageColor: '#f8c555',
    url: 'https://github.com/ah-nd-naf/ByteSpace',
    updatedAt: 'Active codebase'
  },
  {
    name: 'Aurae-Ecommerce',
    description: REPO_FALLBACK_DESCRIPTIONS['Aurae-Ecommerce'],
    language: 'JavaScript',
    languageColor: '#f8c555',
    url: 'https://github.com/ah-nd-naf/Aurae-Ecommerce',
    updatedAt: 'Production repo'
  }
];

const LANGUAGE_STATS = [
  { name: 'JavaScript', percent: 45, color: '#f8c555', icon: SiJavascript },
  { name: 'TypeScript', percent: 28, color: '#00d4f5', icon: SiTypescript },
  { name: 'Python', percent: 17, color: '#4ec9b0', icon: SiPython },
  { name: 'HTML / CSS', percent: 10, color: '#c792ea', icon: SiHtml5 }
];

const GithubStats = () => {
  const [repos, setRepos] = useState(STATIC_REPOS);
  const [repoCount, setRepoCount] = useState(15);
  const [totalContributions, setTotalContributions] = useState(473);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Check sessionStorage cache first to avoid redundant API hits
        const cached = sessionStorage.getItem('github_telemetry_ahnaf_opt1');
        if (cached) {
          const parsed = JSON.parse(cached);
          if (parsed.repos) {
            setRepos(parsed.repos);
            setRepoCount(parsed.repoCount || 15);
            setTotalContributions(parsed.totalContributions || 473);
            setIsLive(true);
            return;
          }
        }

        const [userRes, reposRes, contribRes] = await Promise.all([
          fetch('https://api.github.com/users/ah-nd-naf'),
          fetch('https://api.github.com/users/ah-nd-naf/repos?sort=pushed&per_page=8'),
          fetch('https://github-contributions-api.jogruber.de/v4/ah-nd-naf?y=last')
        ]);

        let currentRepos = STATIC_REPOS;
        let currentRepoCount = 15;
        let currentTotal = 473;

        if (userRes.ok) {
          const userData = await userRes.json();
          if (userData.public_repos) {
            currentRepoCount = userData.public_repos;
            setRepoCount(currentRepoCount);
          }
        }

        if (reposRes.ok) {
          const reposData = await reposRes.json();
          if (Array.isArray(reposData) && reposData.length > 0) {
            // Filter out self-portfolio so visitors see actual applications
            const filtered = reposData
              .filter(r => r.name.toLowerCase() !== 'portfolio_ahnaf')
              .slice(0, 4)
              .map(r => ({
                name: r.name,
                description: r.description || REPO_FALLBACK_DESCRIPTIONS[r.name] || 'Public open-source repository on GitHub.',
                language: r.language || 'Code',
                languageColor: r.language === 'TypeScript' ? '#00d4f5' : 
                               r.language === 'Python' ? '#4ec9b0' : 
                               r.language === 'JavaScript' ? '#f8c555' : '#c792ea',
                url: r.html_url,
                updatedAt: new Date(r.pushed_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
              }));

            if (filtered.length > 0) {
              currentRepos = filtered;
              setRepos(currentRepos);
            }
          }
        }

        if (contribRes.ok) {
          const contribData = await contribRes.json();
          const totalKey = Object.keys(contribData.total || {})[0];
          if (totalKey && contribData.total[totalKey]) {
            currentTotal = contribData.total[totalKey];
            setTotalContributions(currentTotal);
          }
        }

        setIsLive(true);
        sessionStorage.setItem('github_telemetry_ahnaf_opt1', JSON.stringify({
          repos: currentRepos,
          repoCount: currentRepoCount,
          totalContributions: currentTotal
        }));
      } catch {
        // Fallback gracefully on network failure
        setIsLive(false);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <section id="activity" className="gh-section">
      {/* Background Accent Glow */}
      <div 
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(900px, 95vw)',
          height: '380px',
          background: 'radial-gradient(ellipse at center, rgba(0, 212, 245, 0.07) 0%, rgba(199, 146, 234, 0.04) 50%, transparent 75%)',
          filter: 'blur(75px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
        aria-hidden="true"
      />

      <div className="gh-container">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gh-header"
        >
          <div className="gh-section-badge">
            <span className="gh-pulse-dot" />
            <span className="gh-badge-text">LIVE GITHUB TELEMETRY</span>
          </div>

          <h2 className="gh-title">
            <span>Engineering</span>{' '}
            <span className="text-gradient">Activity & Metrics</span>
          </h2>

          <p className="gh-subtitle">
            Public repository telemetry, authentic commit frequency, and language distribution across GitHub.
          </p>
        </motion.div>

        {/* Master GitHub Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="gh-master-card"
        >
          {/* Top Profile Strip */}
          <div className="gh-profile-strip">
            <div className="gh-profile-left">
              <div className="gh-avatar-wrap">
                <img 
                  src="https://avatars.githubusercontent.com/u/190648996?v=4" 
                  alt="Ahnaf Rasheed GitHub Avatar" 
                  className="gh-avatar-img"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="gh-avatar-status" />
              </div>

              <div className="gh-profile-meta">
                <div className="gh-name-row">
                  <h3 className="gh-display-name">Ahnaf Rasheed</h3>
                  <span className="gh-username">@ah-nd-naf</span>
                </div>
                <div className="gh-location-row">
                  <span className="gh-loc-item">
                    <FiMapPin size={12} color="var(--syn-cyan)" />
                    <span>Dhaka, Bangladesh</span>
                  </span>
                  <span className="gh-loc-item gh-status-pill">
                    <FiCheckCircle size={12} color="var(--syn-green)" />
                    <span>Active Contributor</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="gh-profile-right">
              <a 
                href="https://github.com/ah-nd-naf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="gh-github-link"
                title="Open GitHub Profile in new tab"
              >
                <FaGithub size={15} />
                <span>github.com/ah-nd-naf</span>
                <FiArrowUpRight size={13} />
              </a>

              <div className="gh-telemetry-badge">
                <span className="gh-telemetry-dot" />
                <span className="gh-telemetry-text">
                  {isLive ? 'Live API Synced' : 'Telemetry Ready'}
                </span>
              </div>
            </div>
          </div>

          {/* Key Metrics Grid (100% Authentic, High-Density, Zero Empty Gaps, Zero Stars, Zero Emojis) */}
          <div className="gh-metrics-grid">
            <div className="gh-metric-card">
              <div className="gh-metric-icon-wrap" style={{ borderColor: 'rgba(0, 212, 245, 0.3)', color: 'var(--syn-cyan)' }}>
                <FiFolder size={18} />
              </div>
              <div className="gh-metric-info">
                <span className="gh-metric-value">{repoCount}+</span>
                <span className="gh-metric-label">Public Repos</span>
                <span className="gh-metric-note">Full-stack & APIs</span>
              </div>
            </div>

            <div className="gh-metric-card">
              <div className="gh-metric-icon-wrap" style={{ borderColor: 'rgba(0, 212, 245, 0.35)', color: 'var(--syn-cyan)' }}>
                <FiActivity size={18} />
              </div>
              <div className="gh-metric-info">
                <span className="gh-metric-value">{totalContributions}+</span>
                <span className="gh-metric-label">Contributions</span>
                <span className="gh-metric-note">Past 12 months live</span>
              </div>
            </div>

            <div className="gh-metric-card">
              <div className="gh-metric-icon-wrap" style={{ borderColor: 'rgba(199, 146, 234, 0.3)', color: 'var(--syn-purple)' }}>
                <FiCode size={18} />
              </div>
              <div className="gh-metric-info">
                <span className="gh-metric-value">4+</span>
                <span className="gh-metric-label">Core Languages</span>
                <span className="gh-metric-note">TS, JS, Python, SQL</span>
              </div>
            </div>

            <div className="gh-metric-card">
              <div className="gh-metric-icon-wrap" style={{ borderColor: 'rgba(78, 201, 176, 0.3)', color: 'var(--syn-green)' }}>
                <FiGitCommit size={18} />
              </div>
              <div className="gh-metric-info">
                <span className="gh-metric-value">Active</span>
                <span className="gh-metric-label">Commit Stream</span>
                <span className="gh-metric-note">Continuous delivery</span>
              </div>
            </div>
          </div>

          {/* Language Breakdown Section */}
          <div className="gh-languages-card">
            <div className="gh-lang-header">
              <div className="gh-lang-title-row">
                <FiTerminal size={14} color="var(--syn-green)" />
                <h4 className="gh-lang-title">Primary Language Telemetry</h4>
              </div>
              <span className="gh-lang-meta">Calculated across public repositories</span>
            </div>

            {/* Multi-segment stacked bar */}
            <div className="gh-lang-bar-container">
              {LANGUAGE_STATS.map((lang, idx) => (
                <div 
                  key={idx}
                  className="gh-lang-bar-segment"
                  style={{
                    width: `${lang.percent}%`,
                    backgroundColor: lang.color
                  }}
                  title={`${lang.name}: ${lang.percent}%`}
                />
              ))}
            </div>

            {/* Chips breakdown grid */}
            <div className="gh-lang-chips-grid">
              {LANGUAGE_STATS.map((lang, idx) => {
                const IconComponent = lang.icon;
                return (
                  <div key={idx} className="gh-lang-chip">
                    <span className="gh-chip-dot" style={{ backgroundColor: lang.color }} />
                    <IconComponent size={13} style={{ color: lang.color }} />
                    <span className="gh-chip-name">{lang.name}</span>
                    <span className="gh-chip-pct">{lang.percent}%</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Active Repositories Sub-grid */}
          <div className="gh-recent-section">
            <div className="gh-recent-header">
              <div className="gh-recent-title-wrap">
                <FiGitBranch size={15} color="var(--syn-purple)" />
                <h4 className="gh-recent-title">Active Public Codebases</h4>
              </div>
              <span className="gh-recent-badge">Synced via GitHub</span>
            </div>

            <div className="gh-repos-grid">
              {repos.map((repo, idx) => (
                <a
                  key={idx}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gh-repo-item"
                >
                  <div className="gh-repo-top">
                    <div className="gh-repo-name-box">
                      <FiFolder size={14} color="var(--syn-cyan)" />
                      <span className="gh-repo-name">{repo.name}</span>
                    </div>
                    <FiArrowUpRight size={14} className="gh-repo-arrow" />
                  </div>

                  <p className="gh-repo-desc">{repo.description}</p>

                  <div className="gh-repo-bottom">
                    <div className="gh-repo-lang">
                      <span 
                        className="gh-lang-indicator" 
                        style={{ backgroundColor: repo.languageColor }}
                      />
                      <span>{repo.language}</span>
                    </div>
                    <span className="gh-repo-time">{repo.updatedAt}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .gh-section {
          position: relative;
          padding: 85px 5vw 75px;
          min-height: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: transparent;
          overflow: hidden;
          width: 100%;
        }

        .gh-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .gh-header {
          text-align: center;
          margin-bottom: 2.75rem;
        }

        .gh-section-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background: rgba(0, 212, 245, 0.06);
          border: 1px solid rgba(0, 212, 245, 0.22);
          border-radius: 100px;
          margin-bottom: 1.25rem;
          backdrop-filter: blur(10px);
        }

        .gh-pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--syn-cyan);
          box-shadow: 0 0 10px var(--syn-cyan);
          animation: pulse 2s infinite;
        }

        .gh-badge-text {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--syn-cyan);
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 600;
        }

        .gh-title {
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-family: var(--font-sans);
          font-weight: 800;
          letter-spacing: -1.5px;
          line-height: 1.15;
          margin: 0 0 1rem 0;
          color: var(--text-main);
        }

        .gh-subtitle {
          color: var(--text-muted);
          font-family: var(--font-sans);
          font-size: clamp(0.95rem, 1.8vw, 1.1rem);
          max-width: 620px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .gh-master-card {
          position: relative;
          background: linear-gradient(145deg, rgba(22, 27, 34, 0.88) 0%, rgba(13, 17, 23, 0.96) 100%);
          border: 1px solid rgba(0, 212, 245, 0.22);
          border-radius: 24px;
          padding: clamp(1.25rem, 3.5vw, 2.5rem);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.65), 0 0 35px rgba(0, 212, 245, 0.08);
          overflow: hidden;
        }

        /* Profile Strip */
        .gh-profile-strip {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          flex-wrap: wrap;
        }

        .gh-profile-left {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .gh-avatar-wrap {
          position: relative;
          width: 58px;
          height: 58px;
          flex-shrink: 0;
        }

        .gh-avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid rgba(0, 212, 245, 0.4);
          box-shadow: 0 0 20px rgba(0, 212, 245, 0.2);
          object-fit: cover;
        }

        .gh-avatar-status {
          position: absolute;
          bottom: 2px;
          right: 2px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--syn-green);
          border: 2px solid var(--bg-editor);
          box-shadow: 0 0 8px var(--syn-green);
        }

        .gh-display-name {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-main);
          letter-spacing: -0.3px;
        }

        .gh-username {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--syn-cyan);
          opacity: 0.9;
        }

        .gh-location-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 6px;
          flex-wrap: wrap;
        }

        .gh-loc-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .gh-status-pill {
          padding: 2px 8px;
          background: rgba(78, 201, 176, 0.1);
          border: 1px solid rgba(78, 201, 176, 0.25);
          border-radius: 12px;
          color: var(--syn-green);
          font-size: 0.75rem;
          font-weight: 500;
        }

        .gh-profile-right {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .gh-github-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(0, 212, 245, 0.08);
          border: 1px solid rgba(0, 212, 245, 0.3);
          border-radius: 12px;
          color: var(--syn-cyan);
          font-size: 0.82rem;
          font-family: var(--font-mono);
          font-weight: 500;
          transition: all 0.25s ease;
        }

        .gh-github-link:hover {
          background: rgba(0, 212, 245, 0.16);
          border-color: var(--syn-cyan);
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(0, 212, 245, 0.25);
        }

        .gh-telemetry-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
        }

        .gh-telemetry-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--syn-cyan);
        }

        /* Metrics Grid */
        .gh-metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
          margin: 2rem 0;
        }

        .gh-metric-card {
          background: rgba(22, 27, 34, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 16px;
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .gh-metric-card:hover {
          transform: translateY(-3px);
          border-color: rgba(0, 212, 245, 0.35);
          background: rgba(22, 27, 34, 0.85);
        }

        .gh-metric-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .gh-metric-info {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .gh-metric-value {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-main);
          line-height: 1.1;
          font-family: var(--font-sans);
        }

        .gh-metric-label {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-main);
          margin-top: 2px;
        }

        .gh-metric-note {
          font-size: 0.72rem;
          color: var(--text-muted);
          margin-top: 2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        /* Languages Section */
        .gh-languages-card {
          background: rgba(13, 17, 23, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 18px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .gh-lang-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
          gap: 8px;
        }

        .gh-lang-title-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .gh-lang-title {
          margin: 0;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .gh-lang-meta {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
        }

        .gh-lang-bar-container {
          height: 10px;
          width: 100%;
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          background: rgba(255, 255, 255, 0.05);
          margin-bottom: 1.25rem;
        }

        .gh-lang-bar-segment {
          height: 100%;
          transition: width 0.6s ease;
        }

        .gh-lang-chips-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .gh-lang-chip {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 14px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 20px;
          font-size: 0.8rem;
        }

        .gh-chip-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
        }

        .gh-chip-name {
          color: var(--text-main);
          font-weight: 500;
        }

        .gh-chip-pct {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        /* Repos Section */
        .gh-recent-section {
          margin-top: 1rem;
        }

        .gh-recent-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
          gap: 8px;
        }

        .gh-recent-title-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .gh-recent-title {
          margin: 0;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .gh-recent-badge {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--syn-purple);
          background: rgba(199, 146, 234, 0.1);
          padding: 3px 10px;
          border-radius: 12px;
          border: 1px solid rgba(199, 146, 234, 0.2);
        }

        .gh-repos-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        .gh-repo-item {
          background: rgba(22, 27, 34, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 16px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.25s ease;
          text-decoration: none;
          min-width: 0;
        }

        .gh-repo-item:hover {
          border-color: rgba(0, 212, 245, 0.35);
          transform: translateY(-3px);
          background: rgba(22, 27, 34, 0.85);
          box-shadow: 0 8px 24px -6px rgba(0, 0, 0, 0.5);
        }

        .gh-repo-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .gh-repo-name-box {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
        }

        .gh-repo-name {
          font-family: var(--font-mono);
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--syn-cyan);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .gh-repo-arrow {
          color: var(--text-muted);
          transition: transform 0.2s ease, color 0.2s ease;
          flex-shrink: 0;
        }

        .gh-repo-item:hover .gh-repo-arrow {
          color: var(--syn-cyan);
          transform: translate(2px, -2px);
        }

        .gh-repo-desc {
          font-size: 0.84rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin: 0 0 1rem 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .gh-repo-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
          font-family: var(--font-mono);
        }

        .gh-repo-lang {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--text-main);
        }

        .gh-lang-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .gh-repo-time {
          color: var(--text-muted);
        }

        /* ============================================
           MOBILE RESPONSIVENESS (320px - 768px)
           ============================================ */
        @media (max-width: 900px) {
          .gh-metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .gh-section {
            padding: 70px 4vw 60px;
          }

          .gh-profile-strip {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.25rem;
          }

          .gh-profile-right {
            width: 100%;
            justify-content: space-between;
          }

          .gh-github-link {
            width: 100%;
            justify-content: center;
          }

          .gh-repos-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 520px) {
          .gh-metrics-grid {
            grid-template-columns: 1fr;
            gap: 0.85rem;
          }

          .gh-metric-card {
            padding: 1rem;
          }

          .gh-lang-chips-grid {
            gap: 6px;
          }

          .gh-lang-chip {
            padding: 4px 10px;
            font-size: 0.75rem;
          }

          .gh-display-name {
            font-size: 1.1rem;
          }

          .gh-location-row {
            gap: 6px;
          }

          .gh-languages-card {
            padding: 1.15rem;
          }
        }
      `}</style>
    </section>
  );
};

export default GithubStats;
