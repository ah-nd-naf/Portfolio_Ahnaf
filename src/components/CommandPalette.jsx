import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiTerminal, 
  FiSearch, 
  FiCornerDownLeft, 
  FiExternalLink, 
  FiArrowRight, 
  FiUser, 
  FiFolder, 
  FiCpu, 
  FiBookOpen, 
  FiMail, 
  FiGithub, 
  FiLinkedin, 
  FiFacebook, 
  FiX, 
  FiZap, 
  FiCheckCircle,
  FiCopy,
  FiCheck,
  FiCode,
  FiActivity,
  FiTrash2,
  FiHelpCircle,
  FiSliders,
  FiAward,
  FiLayers,
  FiCommand
} from 'react-icons/fi';
import { projects } from './Projects';

const NAV_ACTIONS = [
  {
    id: 'nav-home',
    title: 'Home / Hero Section',
    subtitle: 'Back to top overview & typing introduction',
    category: 'Navigation',
    icon: FiTerminal,
    action: () => { window.scrollTo({ top: 0, behavior: 'smooth' }); },
    shortcut: 'G H'
  },
  {
    id: 'nav-about',
    title: 'About Me',
    subtitle: 'Developer object bio & background story',
    category: 'Navigation',
    icon: FiUser,
    action: () => { document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); },
    shortcut: 'G A'
  },
  {
    id: 'nav-projects',
    title: 'Featured Projects',
    subtitle: 'Interactive carousel showcase of web apps',
    category: 'Navigation',
    icon: FiFolder,
    action: () => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); },
    shortcut: 'G P'
  },
  {
    id: 'nav-skills',
    title: 'Tech Skills & Arsenal',
    subtitle: 'Frontend, backend, database & devops tools',
    category: 'Navigation',
    icon: FiCpu,
    action: () => { document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); },
    shortcut: 'G S'
  },
  {
    id: 'nav-qualification',
    title: 'Education & Git Log Timeline',
    subtitle: 'Academic qualifications styled as git commit tree',
    category: 'Navigation',
    icon: FiBookOpen,
    action: () => { document.getElementById('qualification')?.scrollIntoView({ behavior: 'smooth' }); },
    shortcut: 'G E'
  },
  {
    id: 'nav-contact',
    title: 'Get In Touch / Contact',
    subtitle: 'Direct messaging form and terminal sign-off',
    category: 'Navigation',
    icon: FiMail,
    action: () => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); },
    shortcut: 'G C'
  },
];

// Dynamically generate all project actions from Projects.jsx
const PROJECT_ACTIONS = projects.map((p, idx) => {
  const isLive = p.live && p.live !== '#';
  return {
    id: `proj-${p.name || idx}`,
    title: p.label,
    subtitle: p.tech ? p.tech.join(' · ') : p.description,
    category: 'Projects',
    isLive: isLive,
    icon: FiZap,
    action: () => {
      if (isLive) {
        window.open(p.live, '_blank');
      } else if (p.github && p.github !== '#') {
        window.open(p.github, '_blank');
      } else {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
});

const SOCIAL_ACTIONS = [
  {
    id: 'soc-github',
    title: 'GitHub Profile',
    subtitle: 'github.com/ah-nd-naf · Open source repositories',
    category: 'Socials',
    icon: FiGithub,
    action: () => { window.open('https://github.com/ah-nd-naf', '_blank'); }
  },
  {
    id: 'soc-linkedin',
    title: 'LinkedIn Profile',
    subtitle: 'linkedin.com/in/ahnafrasheed/ · Professional network',
    category: 'Socials',
    icon: FiLinkedin,
    action: () => { window.open('https://linkedin.com/in/ahnafrasheed/', '_blank'); }
  },
  {
    id: 'soc-facebook',
    title: 'Facebook Profile',
    subtitle: 'facebook.com/share/192K2vokxv/ · Personal connection',
    category: 'Socials',
    icon: FiFacebook,
    action: () => { window.open('https://www.facebook.com/share/192K2vokxv/', '_blank'); }
  },
  {
    id: 'soc-email',
    title: 'Send Direct Email',
    subtitle: 'ahnaf.rasheed.zaki@gmail.com · Instant email draft',
    category: 'Socials',
    icon: FiMail,
    action: () => { window.location.href = 'mailto:ahnaf.rasheed.zaki@gmail.com'; }
  },
  {
    id: 'cmd-hire',
    title: 'Hire Ahnaf (sudo hire)',
    subtitle: 'Launch hiring workflow & contact shortcut',
    category: 'Actions',
    icon: FiCheckCircle,
    action: () => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  }
];

const QUICK_ACTIONS = [
  ...NAV_ACTIONS,
  ...PROJECT_ACTIONS,
  ...SOCIAL_ACTIONS
];

const CATEGORIES = ['All', 'Navigation', 'Projects', 'Socials', 'Actions'];

const QUICK_CHIPS = [
  { label: 'help', cmd: 'help', icon: FiHelpCircle },
  { label: 'projects', cmd: 'projects', icon: FiFolder },
  { label: 'skills', cmd: 'skills', icon: FiCpu },
  { label: 'whoami', cmd: 'whoami', icon: FiUser },
  { label: 'neofetch', cmd: 'neofetch', icon: FiActivity },
  { label: 'contact', cmd: 'contact', icon: FiMail },
  { label: 'sudo hire', cmd: 'sudo hire', icon: FiZap },
  { label: 'clear', cmd: 'clear', icon: FiTrash2 }
];

const CommandPalette = ({ isOpen, setIsOpen }) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('palette'); // 'palette' | 'terminal' | 'shortcuts'
  const [copiedEmail, setCopiedEmail] = useState(false);
  
  // Terminal history & input state
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'system', text: 'CyberTerm OS [v3.2.0-PROD] — Interactive Portfolio Kernel' },
    { type: 'system', text: '💡 Type "help" or click any quick command chip below to execute actions.' }
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  
  const inputRef = useRef(null);
  const terminalInputRef = useRef(null);
  const terminalBottomRef = useRef(null);
  const listRef = useRef(null);

  // Global hotkey listener (Ctrl+K, Cmd+K, ~)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setIsOpen]);

  // Focus input on open or tab change
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (activeTab === 'palette') {
          inputRef.current?.focus();
        } else if (activeTab === 'terminal') {
          terminalInputRef.current?.focus();
        }
      }, 80);
    } else {
      setQuery('');
      setSelectedCategory('All');
      setSelectedIndex(0);
    }
  }, [isOpen, activeTab]);

  // Filter actions based on query and category
  const filteredActions = QUICK_ACTIONS.filter((action) => {
    const matchesCategory = selectedCategory === 'All' || action.category === selectedCategory;
    if (!matchesCategory) return false;

    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      action.title.toLowerCase().includes(q) ||
      action.category.toLowerCase().includes(q) ||
      (action.subtitle && action.subtitle.toLowerCase().includes(q))
    );
  });

  // Handle keyboard navigation in palette mode
  const handlePaletteKeyDown = (e) => {
    if (filteredActions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredActions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredActions[selectedIndex]) {
        executeAction(filteredActions[selectedIndex]);
      }
    }
  };

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.querySelector('.cmd-item-active');
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  // Scroll terminal to bottom
  useEffect(() => {
    if (activeTab === 'terminal') {
      terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalHistory, activeTab]);

  const executeAction = (action) => {
    setIsOpen(false);
    action.action();
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Run a terminal command programmatically or via form submit
  const processCommand = (rawCmd) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    // Record to history
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    const newHistory = [
      ...terminalHistory,
      {
        type: 'user',
        render: (
          <div className="cmd-term-user-entry">
            <span className="cmd-term-prompt-inline">
              <span className="cmd-prompt-user">ahnaf</span>
              <span className="cmd-prompt-at">@</span>
              <span className="cmd-prompt-host">portfolio</span>
              <span className="cmd-prompt-sep">:</span>
              <span className="cmd-prompt-path">~</span>
              <span className="cmd-prompt-char">$</span>
            </span>
            <span className="cmd-term-user-text">{cmd}</span>
          </div>
        )
      }
    ];
    const lowerCmd = cmd.toLowerCase();

    if (lowerCmd === 'help') {
      newHistory.push({
        type: 'custom',
        render: (
          <div className="cmd-rich-help">
            <div className="cmd-rich-header">
              <FiTerminal className="cmd-accent-cyan" />
              <span>CyberTerm CLI Command Matrix</span>
            </div>
            <div className="cmd-help-grid">
              <div className="cmd-help-card" onClick={() => processCommand('whoami')}>
                <div className="cmd-help-badge"><FiUser size={13} /> whoami</div>
                <div className="cmd-help-desc">Developer bio, identity & core focus</div>
              </div>
              <div className="cmd-help-card" onClick={() => processCommand('skills')}>
                <div className="cmd-help-badge"><FiCpu size={13} /> skills</div>
                <div className="cmd-help-desc">Full-stack technical competencies & tools</div>
              </div>
              <div className="cmd-help-card" onClick={() => processCommand('projects')}>
                <div className="cmd-help-badge"><FiZap size={13} /> projects</div>
                <div className="cmd-help-desc">Interactive portfolio cards with live links</div>
              </div>
              <div className="cmd-help-card" onClick={() => processCommand('neofetch')}>
                <div className="cmd-help-badge"><FiActivity size={13} /> neofetch</div>
                <div className="cmd-help-desc">System specs & developer telemetry</div>
              </div>
              <div className="cmd-help-card" onClick={() => processCommand('contact')}>
                <div className="cmd-help-badge"><FiMail size={13} /> contact</div>
                <div className="cmd-help-desc">Direct email, socials & messaging info</div>
              </div>
              <div className="cmd-help-card" onClick={() => processCommand('sudo hire')}>
                <div className="cmd-help-badge"><FiAward size={13} /> sudo hire</div>
                <div className="cmd-help-desc">Instant recruitment & contract trigger</div>
              </div>
              <div className="cmd-help-card" onClick={() => processCommand('goto projects')}>
                <div className="cmd-help-badge"><FiLayers size={13} /> goto &lt;sec&gt;</div>
                <div className="cmd-help-desc">Jump to [about, projects, skills, contact]</div>
              </div>
              <div className="cmd-help-card" onClick={() => processCommand('clear')}>
                <div className="cmd-help-badge"><FiTrash2 size={13} /> clear</div>
                <div className="cmd-help-desc">Purge terminal output buffer</div>
              </div>
            </div>
            <div className="cmd-help-footer">
              <span>💡 Click any command card above to execute immediately.</span>
            </div>
          </div>
        )
      });
    } else if (lowerCmd === 'whoami' || lowerCmd === 'about') {
      newHistory.push({
        type: 'custom',
        render: (
          <div className="cmd-rich-whoami">
            <div className="cmd-whoami-header">
              <div className="cmd-whoami-avatar">
                <FiUser size={20} />
              </div>
              <div className="cmd-whoami-meta">
                <div className="cmd-whoami-name">Ahnaf Rasheed</div>
                <div className="cmd-whoami-role">Full-Stack Web Developer & AI Integrator</div>
              </div>
              <div className="cmd-whoami-status">
                <span className="live-dot-pulse"></span>
                <span>AVAILABLE</span>
              </div>
            </div>
            <div className="cmd-whoami-body">
              Passionate developer crafting modern, high-performance web applications with <b>React 19</b>, <b>Next.js</b>, <b>Node.js</b>, <b>Python</b>, and <b>PostgreSQL</b>. Focused on clean architecture, futuristic UI, and AI integrations.
            </div>
            <div className="cmd-whoami-tags">
              <span>📍 Dhaka, Bangladesh / Global Remote</span>
              <span>⚡ MERN + Python Stack</span>
              <span>🚀 Open for Roles</span>
            </div>
            <div className="cmd-whoami-actions">
              <button 
                className="cmd-pill-btn"
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Jump to About Section</span> <FiArrowRight size={12} />
              </button>
            </div>
          </div>
        )
      });
    } else if (lowerCmd === 'skills') {
      newHistory.push({
        type: 'custom',
        render: (
          <div className="cmd-rich-skills">
            <div className="cmd-rich-header">
              <FiCpu className="cmd-accent-cyan" />
              <span>Technical Arsenal & Proficiency Grid</span>
            </div>
            <div className="cmd-skills-grid">
              <div className="cmd-skill-group">
                <div className="cmd-skill-group-title text-cyan">Frontend & UI</div>
                <div className="cmd-skill-chips">
                  <span className="skill-chip cyan">React 19</span>
                  <span className="skill-chip cyan">Next.js</span>
                  <span className="skill-chip cyan">JavaScript (ES6+)</span>
                  <span className="skill-chip cyan">Tailwind CSS</span>
                  <span className="skill-chip cyan">Framer Motion</span>
                  <span className="skill-chip cyan">HTML5/CSS3</span>
                </div>
              </div>
              <div className="cmd-skill-group">
                <div className="cmd-skill-group-title text-green">Backend & APIs</div>
                <div className="cmd-skill-chips">
                  <span className="skill-chip green">Node.js</span>
                  <span className="skill-chip green">Express.js</span>
                  <span className="skill-chip green">Python</span>
                  <span className="skill-chip green">FastAPI</span>
                  <span className="skill-chip green">REST APIs</span>
                  <span className="skill-chip green">JWT & OAuth</span>
                </div>
              </div>
              <div className="cmd-skill-group">
                <div className="cmd-skill-group-title text-purple">Databases & ORMs</div>
                <div className="cmd-skill-chips">
                  <span className="skill-chip purple">PostgreSQL</span>
                  <span className="skill-chip purple">MongoDB</span>
                  <span className="skill-chip purple">Prisma ORM</span>
                  <span className="skill-chip purple">Mongoose</span>
                </div>
              </div>
              <div className="cmd-skill-group">
                <div className="cmd-skill-group-title text-pink">AI & Dev Tools</div>
                <div className="cmd-skill-chips">
                  <span className="skill-chip pink">Groq Vision API</span>
                  <span className="skill-chip pink">OpenAI</span>
                  <span className="skill-chip pink">Docker</span>
                  <span className="skill-chip pink">Git / GitHub</span>
                  <span className="skill-chip pink">Linux</span>
                  <span className="skill-chip pink">Vite</span>
                </div>
              </div>
            </div>
          </div>
        )
      });
    } else if (lowerCmd === 'projects') {
      newHistory.push({
        type: 'custom',
        render: (
          <div className="cmd-term-projects-container">
            <div className="cmd-term-projects-header">
              <div className="cmd-term-projects-title">
                <FiZap className="cmd-header-icon" />
                <span>Featured Project Showcase ({projects.length} Total)</span>
              </div>
              <span className="cmd-term-projects-count">Click to Launch</span>
            </div>
            <div className="cmd-term-projects-list">
              {projects.map((p, i) => {
                const isLive = p.live && p.live !== '#';
                return (
                  <div key={p.name || i} className="cmd-term-project-card">
                    <div className="cmd-term-proj-info">
                      <div className="cmd-term-proj-top">
                        <span className="cmd-term-proj-num">0{i + 1}</span>
                        <span className="cmd-term-proj-title">{p.label}</span>
                      </div>
                      <div className="cmd-term-proj-tech">
                        {p.tech && p.tech.map((t, tidx) => (
                          <span key={tidx} className="cmd-term-tech-pill">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="cmd-term-proj-action">
                      {isLive ? (
                        <a 
                          href={p.live} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="cmd-term-live-btn"
                          title={`Launch ${p.label} Live Demo`}
                        >
                          <span className="live-dot-pulse"></span>
                          <span>Launch Live</span>
                          <FiExternalLink size={12} />
                        </a>
                      ) : (
                        <a 
                          href={p.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="cmd-term-wip-btn"
                          title={`${p.label} is in active development. Inspect source on GitHub.`}
                        >
                          <span className="wip-dot-pulse"></span>
                          <span>In Progress · Repo</span>
                          <FiExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="cmd-term-projects-footer">
              <span>💡 Click any button to launch live applications or inspect repositories.</span>
            </div>
          </div>
        )
      });
    } else if (lowerCmd === 'neofetch' || lowerCmd === 'fetch') {
      newHistory.push({
        type: 'custom',
        render: (
          <div className="cmd-neofetch-container">
            <div className="cmd-neofetch-ascii">
              <pre className="neofetch-art">{`
       /\\_____/\\
      /  o   o  \\
     ( ==  ^  == )
      )         (
     (           )
    ( (  )   (  ) )
   (__(__)___(__)__)
              `}</pre>
            </div>
            <div className="cmd-neofetch-info">
              <div className="neofetch-title">
                <span className="cmd-prompt-user">ahnaf</span>
                <span className="cmd-prompt-at">@</span>
                <span className="cmd-prompt-host">portfolio-os</span>
              </div>
              <div className="neofetch-line">---------------------</div>
              <div className="neofetch-row"><span className="neofetch-key">OS:</span> CyberPortfolio v3.2 x86_64</div>
              <div className="neofetch-row"><span className="neofetch-key">Host:</span> Ahnaf's Brain Engine</div>
              <div className="neofetch-row"><span className="neofetch-key">Kernel:</span> React 19.2.5 + Vite 8</div>
              <div className="neofetch-row"><span className="neofetch-key">Uptime:</span> 100% (High Availability)</div>
              <div className="neofetch-row"><span className="neofetch-key">Shell:</span> CyberTerm (Bash 5.2)</div>
              <div className="neofetch-row"><span className="neofetch-key">Theme:</span> Neon Glassmorphism Dark</div>
              <div className="neofetch-row"><span className="neofetch-key">Languages:</span> JS, Python, SQL, HTML/CSS</div>
              <div className="neofetch-row"><span className="neofetch-key">Status:</span> Open for Software Roles ⚡</div>
              <div className="neofetch-color-blocks">
                <span className="n-blk bg-cyan"></span>
                <span className="n-blk bg-purple"></span>
                <span className="n-blk bg-green"></span>
                <span className="n-blk bg-yellow"></span>
                <span className="n-blk bg-pink"></span>
                <span className="n-blk bg-blue"></span>
              </div>
            </div>
          </div>
        )
      });
    } else if (lowerCmd === 'contact' || lowerCmd === 'socials') {
      newHistory.push({
        type: 'custom',
        render: (
          <div className="cmd-rich-contact">
            <div className="cmd-rich-header">
              <FiMail className="cmd-accent-cyan" />
              <span>Contact Channels & Direct Links</span>
            </div>
            <div className="cmd-contact-grid">
              <div className="cmd-contact-card" onClick={() => copyToClipboard('ahnaf.rasheed.zaki@gmail.com')}>
                <FiMail className="cmd-contact-icon email" />
                <div className="cmd-contact-details">
                  <div className="cmd-contact-label">Email</div>
                  <div className="cmd-contact-val">ahnaf.rasheed.zaki@gmail.com</div>
                </div>
                <button className="cmd-copy-btn" title="Copy to clipboard">
                  {copiedEmail ? <FiCheck size={14} className="cmd-accent-green" /> : <FiCopy size={14} />}
                </button>
              </div>
              <a href="https://github.com/ah-nd-naf" target="_blank" rel="noopener noreferrer" className="cmd-contact-card">
                <FiGithub className="cmd-contact-icon github" />
                <div className="cmd-contact-details">
                  <div className="cmd-contact-label">GitHub</div>
                  <div className="cmd-contact-val">github.com/ah-nd-naf</div>
                </div>
                <FiExternalLink size={14} className="cmd-link-icon" />
              </a>
              <a href="https://linkedin.com/in/ahnafrasheed/" target="_blank" rel="noopener noreferrer" className="cmd-contact-card">
                <FiLinkedin className="cmd-contact-icon linkedin" />
                <div className="cmd-contact-details">
                  <div className="cmd-contact-label">LinkedIn</div>
                  <div className="cmd-contact-val">linkedin.com/in/ahnafrasheed</div>
                </div>
                <FiExternalLink size={14} className="cmd-link-icon" />
              </a>
              <a href="https://www.facebook.com/share/192K2vokxv/" target="_blank" rel="noopener noreferrer" className="cmd-contact-card">
                <FiFacebook className="cmd-contact-icon facebook" />
                <div className="cmd-contact-details">
                  <div className="cmd-contact-label">Facebook</div>
                  <div className="cmd-contact-val">Ahnaf Rasheed</div>
                </div>
                <FiExternalLink size={14} className="cmd-link-icon" />
              </a>
            </div>
          </div>
        )
      });
    } else if (lowerCmd === 'sudo hire' || lowerCmd === 'hire') {
      newHistory.push({
        type: 'custom',
        render: (
          <div className="cmd-rich-hire">
            <div className="cmd-hire-badge">
              <FiCheckCircle size={22} className="cmd-accent-green" />
              <span>👑 AUTHORIZATION GRANTED — 100% TALENT MATCH</span>
            </div>
            <p className="cmd-hire-text">
              Hiring protocol initiated! Thank you for considering Ahnaf Rasheed for your team or project. Redirecting directly to the contact terminal...
            </p>
            <div className="cmd-hire-progress-bar">
              <motion.div 
                className="cmd-hire-progress-fill" 
                initial={{ width: 0 }} 
                animate={{ width: '100%' }} 
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />
            </div>
          </div>
        )
      });
      setTimeout(() => {
        setIsOpen(false);
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 1500);
    } else if (lowerCmd.startsWith('goto ')) {
      const target = lowerCmd.replace('goto ', '').trim();
      const validSections = ['about', 'projects', 'skills', 'qualification', 'contact', 'hero', 'education'];
      const mappedTarget = target === 'education' ? 'qualification' : (target === 'hero' ? 'hero' : target);

      if (validSections.includes(target)) {
        newHistory.push({ type: 'success', text: `✔ Navigating to #${mappedTarget}...` });
        setTimeout(() => {
          setIsOpen(false);
          if (mappedTarget === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            document.getElementById(mappedTarget)?.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      } else {
        newHistory.push({ type: 'error', text: `✖ Unknown target section: "${target}". Available: [hero, about, projects, skills, education, contact]` });
      }
    } else if (lowerCmd === 'easteregg' || lowerCmd === 'matrix') {
      newHistory.push({
        type: 'custom',
        render: (
          <div className="cmd-matrix-box">
            <div className="cmd-matrix-title">🕶️ Wake up, Neo...</div>
            <div className="cmd-matrix-quote">
              "First, solve the problem. Then, write the code." — John Johnson
            </div>
            <div className="cmd-matrix-stats">
              Portfolio built with 💻 Code, ☕ Coffee, and ⚛️ React 19.
            </div>
          </div>
        )
      });
    } else if (lowerCmd === 'clear') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    } else if (lowerCmd === 'exit' || lowerCmd === 'quit') {
      setIsOpen(false);
      setTerminalInput('');
      return;
    } else {
      newHistory.push({
        type: 'error',
        text: `command not found: "${cmd}". Type "help" or click any quick command chip above.`
      });
    }

    setTerminalHistory(newHistory);
    setTerminalInput('');
  };

  // CLI Command History Traversal
  const handleTerminalKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex + 1 < commandHistory.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        setTerminalInput(commandHistory[commandHistory.length - 1 - nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setTerminalInput(commandHistory[commandHistory.length - 1 - nextIdx] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setTerminalInput('');
      }
    }
  };

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    processCommand(terminalInput);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="cmd-backdrop" onClick={() => setIsOpen(false)}>
          <motion.div
            className="cmd-modal"
            initial={{ opacity: 0, scale: 0.94, y: -25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: -25 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top glowing ambient neon border */}
            <div className="cmd-modal-glow-line" />

            {/* Header bar */}
            <div className="cmd-header">
              <div className="cmd-header-left">
                <div className="cmd-header-dots">
                  <span className="dot dot-red" onClick={() => setIsOpen(false)} title="Close"></span>
                  <span className="dot dot-yellow" onClick={() => setActiveTab('shortcuts')} title="Shortcuts"></span>
                  <span className="dot dot-green" onClick={() => setActiveTab('terminal')} title="Terminal"></span>
                </div>
                <div className="cmd-header-title">
                  <FiTerminal className="cmd-header-icon" />
                  <span className="cmd-term-prompt-header">
                    <span className="cmd-prompt-user">ahnaf</span>
                    <span className="cmd-prompt-at">@</span>
                    <span className="cmd-prompt-host">portfolio</span>
                    <span className="cmd-prompt-sep">:</span>
                    <span className="cmd-prompt-path">~</span>
                  </span>
                  <span className="cmd-ping-badge">
                    <span className="live-dot-pulse-sm"></span> 12ms
                  </span>
                </div>
              </div>

              <div className="cmd-header-tabs">
                <button
                  className={`cmd-tab ${activeTab === 'palette' ? 'cmd-tab-active' : ''}`}
                  onClick={() => setActiveTab('palette')}
                  title="Spotlight Search (Ctrl+K)"
                >
                  <FiSearch size={13} /> <span>Quick Search</span>
                </button>
                <button
                  className={`cmd-tab ${activeTab === 'terminal' ? 'cmd-tab-active' : ''}`}
                  onClick={() => setActiveTab('terminal')}
                  title="Interactive Terminal Shell"
                >
                  <FiTerminal size={13} /> <span>CLI Shell</span>
                </button>
                <button
                  className={`cmd-tab ${activeTab === 'shortcuts' ? 'cmd-tab-active' : ''}`}
                  onClick={() => setActiveTab('shortcuts')}
                  title="Cheatsheet & Hotkeys"
                >
                  <FiCommand size={13} /> <span>Shortcuts</span>
                </button>
                <button 
                  className="cmd-close-btn" 
                  onClick={() => setIsOpen(false)}
                  title="Close Modal (Esc)"
                >
                  <FiX size={15} />
                </button>
              </div>
            </div>

            {/* Quick Actions Search Mode */}
            {activeTab === 'palette' && (
              <>
                <div className="cmd-search-wrapper">
                  <FiSearch className="cmd-search-icon" />
                  <input
                    ref={inputRef}
                    type="text"
                    className="cmd-search-input"
                    placeholder="Search sections, projects, tech stacks, or actions..."
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setSelectedIndex(0);
                    }}
                    onKeyDown={handlePaletteKeyDown}
                  />
                  {query && (
                    <button className="cmd-clear-query" onClick={() => setQuery('')} title="Clear query">
                      <FiX size={14} />
                    </button>
                  )}
                  <div className="cmd-kbd-indicator">
                    <span>ESC to exit</span>
                  </div>
                </div>

                {/* Filter Pills */}
                <div className="cmd-filter-bar">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      className={`cmd-filter-chip ${selectedCategory === cat ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setSelectedIndex(0);
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                  <div className="cmd-results-counter">
                    {filteredActions.length} match{filteredActions.length === 1 ? '' : 'es'}
                  </div>
                </div>

                <div className="cmd-results-list" ref={listRef}>
                  {filteredActions.length > 0 ? (
                    filteredActions.map((action, idx) => {
                      const Icon = action.icon;
                      const isSelected = idx === selectedIndex;
                      return (
                        <div
                          key={action.id}
                          className={`cmd-item ${isSelected ? 'cmd-item-active' : ''}`}
                          onClick={() => executeAction(action)}
                          onMouseEnter={() => setSelectedIndex(idx)}
                        >
                          <div className="cmd-item-left">
                            <div className={`cmd-item-icon-box cat-${action.category.toLowerCase()}`}>
                              <Icon size={16} />
                            </div>
                            <div className="cmd-item-text">
                              <div className="cmd-item-title">{action.title}</div>
                              {action.subtitle && (
                                <div className="cmd-item-subtitle">{action.subtitle}</div>
                              )}
                            </div>
                          </div>
                          <div className="cmd-item-right">
                            {action.category === 'Projects' ? (
                              action.isLive ? (
                                <span className="cmd-badge-live">
                                  <span className="live-dot-pulse-sm"></span> Live App
                                </span>
                              ) : (
                                <span className="cmd-badge-wip">
                                  <span className="wip-dot-pulse-sm"></span> In Progress · Repo
                                </span>
                              )
                            ) : action.shortcut ? (
                              <kbd className="cmd-item-shortcut">{action.shortcut}</kbd>
                            ) : (
                              <span className="cmd-item-category">{action.category}</span>
                            )}
                            {isSelected && (
                              <span className="cmd-item-enter">
                                <FiCornerDownLeft size={13} /> Select
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="cmd-empty-state">
                      <FiTerminal size={36} className="cmd-empty-icon" />
                      <p>No matching actions found for "<b>{query}</b>"</p>
                      <div className="cmd-empty-chips">
                        <span>Try searching:</span>
                        <button onClick={() => setQuery('Projects')}>Projects</button>
                        <button onClick={() => setQuery('Skills')}>Skills</button>
                        <button onClick={() => setQuery('Contact')}>Contact</button>
                        <button onClick={() => setActiveTab('terminal')}>CLI Shell →</button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer hint */}
                <div className="cmd-footer">
                  <div className="cmd-footer-keys">
                    <span><kbd>↑</kbd> <kbd>↓</kbd> Navigate</span>
                    <span><kbd>↵</kbd> Select</span>
                    <span><kbd>ESC</kbd> Close</span>
                  </div>
                  <div className="cmd-footer-hint">
                    Toggle anytime: <span className="cmd-highlight">`</span> or <span className="cmd-highlight">Ctrl+K</span>
                  </div>
                </div>
              </>
            )}

            {/* Interactive CLI Terminal Mode */}
            {activeTab === 'terminal' && (
              <div className="cmd-terminal-view">
                {/* Sticky Command Chips Bar */}
                <div className="cmd-quick-chips-bar">
                  <span className="cmd-chips-label">Quick Run:</span>
                  <div className="cmd-chips-scroll">
                    {QUICK_CHIPS.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.cmd}
                          className="cmd-quick-chip"
                          onClick={() => processCommand(item.cmd)}
                          title={`Execute "${item.cmd}"`}
                        >
                          <Icon size={12} />
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="cmd-terminal-body">
                  {terminalHistory.map((item, idx) => (
                    <div key={idx} className={`cmd-term-line cmd-term-${item.type}`}>
                      {item.render ? item.render : item.text}
                    </div>
                  ))}
                  <div ref={terminalBottomRef} />
                </div>

                <form onSubmit={handleTerminalSubmit} className="cmd-terminal-form">
                  <span className="cmd-term-prompt">
                    <span className="cmd-prompt-user">ahnaf</span>
                    <span className="cmd-prompt-at">@</span>
                    <span className="cmd-prompt-host">portfolio</span>
                    <span className="cmd-prompt-sep">:</span>
                    <span className="cmd-prompt-path">~</span>
                    <span className="cmd-prompt-char">$</span>
                  </span>
                  <input
                    ref={terminalInputRef}
                    type="text"
                    className="cmd-term-input"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    onKeyDown={handleTerminalKeyDown}
                    placeholder='Type "help", "whoami", "skills", "projects", "sudo hire"...'
                    autoFocus
                  />
                  <button type="submit" className="cmd-term-submit" title="Execute command">
                    <FiCornerDownLeft size={14} />
                  </button>
                </form>
              </div>
            )}

            {/* Shortcuts Cheatsheet Tab */}
            {activeTab === 'shortcuts' && (
              <div className="cmd-shortcuts-view">
                <div className="cmd-shortcuts-header">
                  <FiCommand className="cmd-accent-cyan" size={18} />
                  <div>
                    <div className="cmd-shortcuts-title">Keyboard Shortcuts & Navigation Cheatsheet</div>
                    <div className="cmd-shortcuts-sub">Boost your navigation velocity across the portfolio.</div>
                  </div>
                </div>

                <div className="cmd-shortcuts-grid">
                  <div className="cmd-shortcut-card">
                    <div className="cmd-shortcut-keys">
                      <kbd>Ctrl</kbd> + <kbd>K</kbd> / <kbd>⌘</kbd> + <kbd>K</kbd>
                    </div>
                    <div className="cmd-shortcut-info">Toggle Command Palette from anywhere</div>
                  </div>
                  <div className="cmd-shortcut-card">
                    <div className="cmd-shortcut-keys">
                      <kbd>`</kbd> (Backtick)
                    </div>
                    <div className="cmd-shortcut-info">Quick one-key toggle for Command Palette</div>
                  </div>
                  <div className="cmd-shortcut-card">
                    <div className="cmd-shortcut-keys">
                      <kbd>↑</kbd> <kbd>↓</kbd>
                    </div>
                    <div className="cmd-shortcut-info">Navigate search results or browse CLI history</div>
                  </div>
                  <div className="cmd-shortcut-card">
                    <div className="cmd-shortcut-keys">
                      <kbd>↵ Enter</kbd>
                    </div>
                    <div className="cmd-shortcut-info">Execute selected action or run terminal command</div>
                  </div>
                  <div className="cmd-shortcut-card">
                    <div className="cmd-shortcut-keys">
                      <kbd>Esc</kbd>
                    </div>
                    <div className="cmd-shortcut-info">Close active modal window immediately</div>
                  </div>
                  <div className="cmd-shortcut-card">
                    <div className="cmd-shortcut-keys">
                      <kbd>sudo hire</kbd>
                    </div>
                    <div className="cmd-shortcut-info">Interactive easter-egg hiring authorization</div>
                  </div>
                </div>

                <div className="cmd-shortcuts-footer">
                  <button className="cmd-pill-btn" onClick={() => setActiveTab('terminal')}>
                    <FiTerminal size={13} /> <span>Open Cyber Terminal</span>
                  </button>
                  <button className="cmd-pill-btn primary" onClick={() => setActiveTab('palette')}>
                    <FiSearch size={13} /> <span>Open Quick Search</span>
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
