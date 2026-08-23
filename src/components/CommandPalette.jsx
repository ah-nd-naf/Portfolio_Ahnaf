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
  FiCheckCircle
} from 'react-icons/fi';
import { projects } from './Projects';

const NAV_ACTIONS = [
  {
    id: 'nav-home',
    title: 'Home / Hero',
    category: 'Navigation',
    icon: FiTerminal,
    action: () => { window.scrollTo({ top: 0, behavior: 'smooth' }); },
    shortcut: 'G H'
  },
  {
    id: 'nav-about',
    title: 'About Me',
    category: 'Navigation',
    icon: FiUser,
    action: () => { document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); },
    shortcut: 'G A'
  },
  {
    id: 'nav-projects',
    title: 'Featured Projects Section',
    category: 'Navigation',
    icon: FiFolder,
    action: () => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); },
    shortcut: 'G P'
  },
  {
    id: 'nav-skills',
    title: 'Tech Skills & Stack',
    category: 'Navigation',
    icon: FiCpu,
    action: () => { document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); },
    shortcut: 'G S'
  },
  {
    id: 'nav-qualification',
    title: 'Education & Qualification',
    category: 'Navigation',
    icon: FiBookOpen,
    action: () => { document.getElementById('qualification')?.scrollIntoView({ behavior: 'smooth' }); },
    shortcut: 'G E'
  },
  {
    id: 'nav-contact',
    title: 'Get In Touch / Contact',
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
    subtitle: 'github.com/ah-nd-naf',
    category: 'Socials',
    icon: FiGithub,
    action: () => { window.open('https://github.com/ah-nd-naf', '_blank'); }
  },
  {
    id: 'soc-linkedin',
    title: 'LinkedIn Profile',
    subtitle: 'linkedin.com/in/ahnafrasheed/',
    category: 'Socials',
    icon: FiLinkedin,
    action: () => { window.open('https://linkedin.com/in/ahnafrasheed/', '_blank'); }
  },
  {
    id: 'soc-facebook',
    title: 'Facebook Profile',
    subtitle: 'Ahnaf Rasheed',
    category: 'Socials',
    icon: FiFacebook,
    action: () => { window.open('https://www.facebook.com/share/192K2vokxv/', '_blank'); }
  },
  {
    id: 'soc-email',
    title: 'Send Direct Email',
    subtitle: 'ahnaf.rasheed.zaki@gmail.com',
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

const CommandPalette = ({ isOpen, setIsOpen }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('palette'); // 'palette' | 'terminal'
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'system', text: 'Cyber Terminal [v2.4.0]' },
    { type: 'system', text: 'Type "help" for available commands or switch to Quick Actions tab.' }
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  
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

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (activeTab === 'palette') {
          inputRef.current?.focus();
        } else {
          terminalInputRef.current?.focus();
        }
      }, 100);
    } else {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen, activeTab]);

  // Filter actions based on query
  const filteredActions = QUICK_ACTIONS.filter((action) => {
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

  // Scroll terminal bottom
  useEffect(() => {
    if (activeTab === 'terminal') {
      terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalHistory, activeTab]);

  const executeAction = (action) => {
    setIsOpen(false);
    action.action();
  };

  // CLI Command Parser
  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const cmd = terminalInput.trim();
    if (!cmd) return;

    const newHistory = [...terminalHistory, { type: 'user', text: `$ ${cmd}` }];
    const lowerCmd = cmd.toLowerCase();

    if (lowerCmd === 'help') {
      newHistory.push({
        type: 'output',
        text: `Available Commands:
  • whoami / about   : Developer biography and current role
  • skills           : Technical stack & languages breakdown
  • projects         : List top full-stack and AI projects
  • contact          : Direct email, location and socials
  • sudo hire        : Trigger hiring shortcut & contact flow
  • goto <section>   : Jump to [about, projects, skills, contact]
  • clear            : Clear terminal output
  • exit             : Close command palette`
      });
    } else if (lowerCmd === 'whoami' || lowerCmd === 'about') {
      newHistory.push({
        type: 'output',
        text: `Ahnaf Rasheed — Full-Stack Web Developer
Passionate developer crafting modern, high-performance web applications with React, Next.js, Node.js, Python, and PostgreSQL. Focused on clean architecture, futuristic UI, and AI integrations.`
      });
    } else if (lowerCmd === 'skills') {
      newHistory.push({
        type: 'output',
        text: `[Frontend]  React.js, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS
[Backend]   Node.js, Express.js, Python, FastAPI, REST APIs, JWT Auth
[Databases] PostgreSQL, MongoDB, Prisma ORM
[AI/Tools]  Groq API, OpenAI, Git/GitHub, Docker, Linux, Vite`
      });
    } else if (lowerCmd === 'projects') {
      newHistory.push({
        type: 'custom',
        render: (
          <div className="cmd-term-projects-container">
            <div className="cmd-term-projects-header">
              <div className="cmd-term-projects-title">
                <FiZap className="cmd-header-icon" />
                <span>Featured Projects ({projects.length} Total)</span>
              </div>
              <span className="cmd-term-projects-count">Select to Launch</span>
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
                          title={`${p.label} is currently in active development. Inspect source code on GitHub.`}
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
              <span>💡 Click any button above to launch live apps or inspect repositories.</span>
            </div>
          </div>
        )
      });
    } else if (lowerCmd === 'contact') {
      newHistory.push({
        type: 'output',
        text: `Email    : ahnaf.rasheed.zaki@gmail.com
GitHub   : https://github.com/ah-nd-naf
LinkedIn : https://linkedin.com/in/ahnafrasheed/`
      });
    } else if (lowerCmd === 'sudo hire' || lowerCmd === 'hire') {
      newHistory.push({
        type: 'success',
        text: `ACCESS GRANTED! 🎉
Thank you for your interest! Redirecting you to the contact section...`
      });
      setTimeout(() => {
        setIsOpen(false);
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 1200);
    } else if (lowerCmd.startsWith('goto ')) {
      const target = lowerCmd.replace('goto ', '').trim();
      const validSections = ['about', 'projects', 'skills', 'qualification', 'contact'];
      if (validSections.includes(target)) {
        newHistory.push({ type: 'success', text: `Navigating to #${target}...` });
        setTimeout(() => {
          setIsOpen(false);
          document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      } else {
        newHistory.push({ type: 'error', text: `Unknown section: "${target}". Valid targets: ${validSections.join(', ')}` });
      }
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
        text: `command not found: "${cmd}". Type "help" to see valid commands.`
      });
    }

    setTerminalHistory(newHistory);
    setTerminalInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="cmd-backdrop" onClick={() => setIsOpen(false)}>
          <motion.div
            className="cmd-modal"
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="cmd-header">
              <div className="cmd-header-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="cmd-header-title">
                <FiTerminal className="cmd-header-icon" />
                <span>ahnaf@portfolio:~ (command_palette)</span>
              </div>
              <div className="cmd-header-tabs">
                <button
                  className={`cmd-tab ${activeTab === 'palette' ? 'cmd-tab-active' : ''}`}
                  onClick={() => setActiveTab('palette')}
                >
                  <FiSearch size={13} /> Quick Search
                </button>
                <button
                  className={`cmd-tab ${activeTab === 'terminal' ? 'cmd-tab-active' : ''}`}
                  onClick={() => setActiveTab('terminal')}
                >
                  <FiTerminal size={13} /> CLI Shell
                </button>
                <button 
                  className="cmd-close-btn" 
                  onClick={() => setIsOpen(false)}
                  title="Close (Esc)"
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
                    placeholder="Type a section, project, or command..."
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setSelectedIndex(0);
                    }}
                    onKeyDown={handlePaletteKeyDown}
                  />
                  {query && (
                    <button className="cmd-clear-query" onClick={() => setQuery('')}>
                      <FiX size={14} />
                    </button>
                  )}
                  <div className="cmd-kbd-indicator">
                    <span>ESC to close</span>
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
                            <div className="cmd-item-icon-box">
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
                      <FiTerminal size={32} style={{ color: 'var(--text-dim)', marginBottom: '0.75rem' }} />
                      <p>No matching commands or projects found for "<b>{query}</b>"</p>
                      <p className="cmd-empty-hint">Try searching for <i>Projects</i>, <i>Skills</i>, <i>Contact</i>, or switch to the <b>CLI Shell</b> tab.</p>
                    </div>
                  )}
                </div>

                {/* Footer tip */}
                <div className="cmd-footer">
                  <div className="cmd-footer-keys">
                    <span><kbd>↑</kbd> <kbd>↓</kbd> Navigate</span>
                    <span><kbd>↵</kbd> Select</span>
                    <span><kbd>ESC</kbd> Close</span>
                  </div>
                  <div className="cmd-footer-hint">
                    Tip: Press <span className="cmd-highlight">`</span> (tilde) or <span className="cmd-highlight">Ctrl+K</span> anytime
                  </div>
                </div>
              </>
            )}

            {/* Interactive CLI Terminal Mode */}
            {activeTab === 'terminal' && (
              <div className="cmd-terminal-view">
                <div className="cmd-terminal-body">
                  {terminalHistory.map((item, idx) => (
                    <div key={idx} className={`cmd-term-line cmd-term-${item.type}`}>
                      {item.render ? item.render : item.text}
                    </div>
                  ))}
                  <div ref={terminalBottomRef} />
                </div>
                <form onSubmit={handleTerminalSubmit} className="cmd-terminal-form">
                  <span className="cmd-term-prompt">ahnaf@portfolio:~$</span>
                  <input
                    ref={terminalInputRef}
                    type="text"
                    className="cmd-term-input"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    placeholder='type "help", "whoami", "skills", "projects", "sudo hire"...'
                    autoFocus
                  />
                  <button type="submit" className="cmd-term-submit">
                    <FiCornerDownLeft size={14} />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
