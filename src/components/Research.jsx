import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiExternalLink, 
  FiCopy, 
  FiCheck, 
  FiBookOpen, 
  FiFileText, 
  FiChevronDown, 
  FiChevronUp,
  FiAward,
  FiCpu,
  FiLayers,
  FiCode,
  FiUsers
} from 'react-icons/fi';

const BIBTEX_CITATION = `@inproceedings{sawom20253cnet,
  author={Sawom, Md. Safayet Hossain and Khan, Md. Adnan and Zaki, Md. Ahnaf Rasheed and Ronok, Mst. Noushin Fariha and Karim, Dewan Ziaul},
  booktitle={2025 4th International Conference on Biomedical Engineering, Computer and Information Technology for Health (BECITHCON)}, 
  title={3C-Net: Cervical Cancer Cell Classification from Liquid-Based Cytology Pap Smear Images using Deep Learning Techniques}, 
  year={2025},
  pages={1--6},
  doi={10.1109/BECITHCON.2025.11504298},
  publisher={IEEE}
}`;

const APA_CITATION = `Sawom, M. S. H., Khan, M. A., Zaki, M. A. R., Ronok, M. N. F., & Karim, D. Z. (2025). 3C-Net: Cervical Cancer Cell Classification from Liquid-Based Cytology Pap Smear Images using Deep Learning Techniques. In 2025 4th International Conference on Biomedical Engineering, Computer and Information Technology for Health (BECITHCON). IEEE. https://doi.org/10.1109/BECITHCON.2025.11504298`;

const Research = () => {
  const [copiedBib, setCopiedBib] = useState(false);
  const [copiedApa, setCopiedApa] = useState(false);
  const [isBibOpen, setIsBibOpen] = useState(false);

  const copyBibtex = () => {
    navigator.clipboard.writeText(BIBTEX_CITATION);
    setCopiedBib(true);
    setTimeout(() => setCopiedBib(false), 2200);
  };

  const copyApa = () => {
    navigator.clipboard.writeText(APA_CITATION);
    setCopiedApa(true);
    setTimeout(() => setCopiedApa(false), 2200);
  };

  return (
    <section id="research" className="research-section">
      
      {/* Ambient Glow */}
      <div 
        style={{
          position: 'absolute',
          top: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(0, 212, 245, 0.08) 0%, rgba(199, 146, 234, 0.05) 50%, transparent 75%)',
          filter: 'blur(75px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
        aria-hidden="true"
      />

      <div className="container" style={{ maxWidth: '1240px', position: 'relative', zIndex: 1 }}>

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
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
            background: 'rgba(0, 212, 245, 0.06)',
            border: '1px solid rgba(0, 212, 245, 0.22)',
            borderRadius: '100px',
            marginBottom: '1.25rem',
            backdropFilter: 'blur(10px)'
          }}>
            <span style={{
              display: 'inline-block',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--syn-cyan)',
              boxShadow: '0 0 10px var(--syn-cyan)',
              animation: 'pulse 2s infinite'
            }} />
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--syn-cyan)',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontWeight: 600
            }}>
              PEER-REVIEWED PUBLICATION
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
            fontFamily: 'var(--font-sans)',
            fontWeight: 800,
            letterSpacing: '-1.5px',
            lineHeight: 1.15,
            margin: 0,
            color: 'var(--text-main)'
          }}>
            Research & <span className="text-gradient">Publications</span>
          </h2>

          <p style={{
            color: 'var(--text-muted)',
            fontSize: '1.05rem',
            maxWidth: '650px',
            margin: '1.15rem auto 0 auto',
            lineHeight: 1.65,
            fontFamily: 'var(--font-sans)'
          }}>
            Academic investigations and scientific literature bridging deep learning architectures with automated medical diagnostics, published and indexed in IEEE Xplore.
          </p>
        </motion.div>

        {/* Featured Paper Master Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="research-paper-card"
          style={{
            position: 'relative',
            background: 'linear-gradient(145deg, rgba(22, 27, 34, 0.8) 0%, rgba(13, 17, 23, 0.6) 100%)',
            border: '1px solid rgba(0, 212, 245, 0.25)',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 35px rgba(0, 212, 245, 0.08)',
            backdropFilter: 'blur(16px)',
            transition: 'all 0.4s ease'
          }}
        >

          {/* Top Status Bar (IEEE & Indexing Badge) */}
          <div className="research-status-bar">
            <div className="research-status-group venue">
              <span className="research-ieee-badge">
                <FiAward size={14} /> IEEE Xplore
              </span>
              <span className="research-conf-text">
                BECITHCON 2025<span className="research-conf-full"> · Conference Paper</span>
              </span>
            </div>

            <div className="research-status-group indexing">
              <div className="research-indexed-badge">
                <span className="research-indexed-dot" />
                PUBLISHED &amp; INDEXED
              </div>
              <span className="research-doc-id">
                Doc #11504298
              </span>
            </div>
          </div>

          {/* Main Card Content */}
          <div className="research-grid-layout">

            {/* Left: Interactive Diagram, Architecture Highlights & Clinical Action Dock */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Image Preview Box */}
              <div style={{
                position: 'relative',
                borderRadius: '14px',
                overflow: 'hidden',
                border: '1px solid rgba(0, 212, 245, 0.25)',
                background: '#090d13',
                boxShadow: '0 12px 30px rgba(0,0,0,0.6)'
              }}>
                <img 
                  src="/3C-Net-Research.png" 
                  alt="3C-Net Deep Learning Cytology Architecture" 
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                    objectFit: 'cover'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                />
                
                {/* Visual Overlay Tag */}
                <div className="research-image-overlay">
                  <span className="research-overlay-arch">
                    <span className="research-arch-prefix">Architecture: </span>3C-Net CNN
                  </span>
                  <span className="research-overlay-dataset">
                    Mendeley LBC Dataset
                  </span>
                </div>
              </div>

              {/* Research Metrics Pills */}
              <div className="research-metrics-grid">
                <div className="research-metric-card">
                  <div className="research-metric-label focus">Focus</div>
                  <div className="research-metric-val">Medical AI &amp; CV</div>
                </div>

                <div className="research-metric-card">
                  <div className="research-metric-label classes">Classes</div>
                  <div className="research-metric-val">3-Class Cytology</div>
                </div>

                <div className="research-metric-card">
                  <div className="research-metric-label design">Design</div>
                  <div className="research-metric-val">Lightweight CNN</div>
                </div>
              </div>

              {/* Key Research Highlights Box (Positioned on Left to fully balance vertical space) */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
                padding: '1.1rem 1.25rem',
                background: 'rgba(13, 17, 23, 0.7)',
                borderRadius: '12px',
                border: '1px solid rgba(0, 212, 245, 0.16)',
                boxShadow: 'inset 0 0 15px rgba(0, 212, 245, 0.03)'
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--syn-cyan)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginBottom: '2px'
                }}>
                  <FiCpu size={13} />
                  <span>CORE ARCHITECTURAL HIGHLIGHTS</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                  <span style={{ color: 'var(--syn-cyan)', fontWeight: 700 }}>▹</span>
                  <span><strong style={{ color: 'var(--syn-cyan)' }}>Lightweight Edge CNN:</strong> Low-parameter model formulated for edge clinical diagnostic hardware.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                  <span style={{ color: 'var(--syn-purple)', fontWeight: 700 }}>▹</span>
                  <span><strong style={{ color: 'var(--syn-purple)' }}>3-Class Screening:</strong> High-precision classification across Normal, Precancerous, and Malignant cells.</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem', color: 'var(--text-main)', lineHeight: 1.5 }}>
                  <span style={{ color: 'var(--syn-green)', fontWeight: 700 }}>▹</span>
                  <span><strong style={{ color: 'var(--syn-green)' }}>Dataset Validation:</strong> Benchmark tested and verified on the Mendeley Liquid-Based Cytology dataset.</span>
                </div>
              </div>

              {/* Action Buttons Dock */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem',
                marginTop: '0.25rem'
              }}>
                {/* Primary Button */}
                <a
                  href="https://ieeexplore.ieee.org/document/11504298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects-btn projects-btn-solid"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    fontSize: '0.96rem',
                    fontWeight: 700,
                    padding: '0.85rem 1.5rem',
                    background: 'var(--name-grad)',
                    color: '#0d1117',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    boxShadow: '0 8px 25px rgba(0, 212, 245, 0.25)',
                    transition: 'all 0.3s ease',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 212, 245, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 212, 245, 0.25)';
                  }}
                >
                  <FiExternalLink size={17} /> Read on IEEE Xplore ↗
                </a>

                {/* Secondary Citation Buttons */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.75rem'
                }}>
                  <button
                    type="button"
                    onClick={copyBibtex}
                    className="projects-btn projects-btn-outline"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '7px',
                      fontSize: '0.84rem',
                      padding: '0.7rem 0.75rem',
                      borderRadius: '8px',
                      background: 'rgba(22, 27, 34, 0.6)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: copiedBib ? 'var(--syn-green)' : 'var(--text-main)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      width: '100%'
                    }}
                  >
                    {copiedBib ? <FiCheck size={14} /> : <FiCopy size={14} />}
                    <span>{copiedBib ? 'BibTeX Copied!' : 'Copy BibTeX'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={copyApa}
                    className="projects-btn projects-btn-outline"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '7px',
                      fontSize: '0.84rem',
                      padding: '0.7rem 0.75rem',
                      borderRadius: '8px',
                      background: 'rgba(22, 27, 34, 0.6)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: copiedApa ? 'var(--syn-green)' : 'var(--text-main)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      width: '100%'
                    }}
                  >
                    {copiedApa ? <FiCheck size={14} /> : <FiCopy size={14} />}
                    <span>{copiedApa ? 'APA Copied!' : 'Copy APA'}</span>
                  </button>
                </div>

                {/* Toggle Drawer Button */}
                <button
                  type="button"
                  onClick={() => setIsBibOpen(!isBibOpen)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    fontSize: '0.82rem',
                    padding: '0.65rem 1rem',
                    borderRadius: '8px',
                    background: isBibOpen ? 'rgba(0, 212, 245, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                    border: `1px dashed ${isBibOpen ? 'var(--syn-cyan)' : 'rgba(255, 255, 255, 0.15)'}`,
                    color: isBibOpen ? 'var(--syn-cyan)' : 'var(--text-muted)',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-mono)',
                    transition: 'all 0.2s ease',
                    width: '100%'
                  }}
                >
                  <FiCode size={14} />
                  <span>{isBibOpen ? 'Hide BibTeX Drawer' : 'View BibTeX Citation'}</span>
                  {isBibOpen ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
                </button>
              </div>
            </div>

            {/* Right: Paper Metadata, Authors Showcase & Findings */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
              <div>
                {/* Paper Title */}
                <h3 style={{
                  fontSize: 'clamp(1.35rem, 2.4vw, 1.85rem)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 800,
                  lineHeight: 1.3,
                  letterSpacing: '-0.5px',
                  color: 'var(--text-main)',
                  marginBottom: '1.25rem'
                }}>
                  3C-Net: Cervical Cancer Cell Classification from Liquid-Based Cytology Pap Smear Images using Deep Learning Techniques
                </h3>

                {/* Authors Showcase Chips */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--syn-comment)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: 600,
                    marginBottom: '0.65rem'
                  }}>
                    <FiUsers size={13} color="var(--syn-cyan)" />
                    <span>AUTHORS &amp; RESEARCHERS</span>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem', alignItems: 'center' }}>
                    {[
                      { name: 'Md. Safayet Hossain Sawom', isMe: false },
                      { name: 'Md. Adnan Khan', isMe: false },
                      { name: 'Md. Ahnaf Rasheed Zaki', isMe: true },
                      { name: 'Mst. Noushin Fariha Ronok', isMe: false },
                      { name: 'Dewan Ziaul Karim', isMe: false }
                    ].map((author) => (
                      author.isMe ? (
                        <div 
                          key={author.name}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '7px',
                            padding: '5px 14px',
                            borderRadius: '30px',
                            background: 'linear-gradient(135deg, rgba(0, 212, 245, 0.16) 0%, rgba(199, 146, 234, 0.16) 100%)',
                            border: '1px solid var(--syn-cyan)',
                            boxShadow: '0 0 16px rgba(0, 212, 245, 0.28)'
                          }}
                        >
                          <span style={{
                            width: '7px',
                            height: '7px',
                            borderRadius: '50%',
                            background: 'var(--syn-cyan)',
                            boxShadow: '0 0 8px var(--syn-cyan)'
                          }} />
                          <span style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '0.88rem',
                            fontWeight: 700,
                            color: '#fff'
                          }}>
                            {author.name}
                          </span>
                          <span style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.68rem',
                            padding: '1px 7px',
                            borderRadius: '12px',
                            background: 'var(--syn-cyan)',
                            color: '#0d1117',
                            fontWeight: 700,
                            letterSpacing: '0.5px'
                          }}>
                            AUTHOR
                          </span>
                        </div>
                      ) : (
                        <div 
                          key={author.name}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '5px 12px',
                            borderRadius: '30px',
                            background: 'rgba(22, 27, 34, 0.7)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            color: 'var(--text-muted)',
                            fontSize: '0.82rem',
                            fontFamily: 'var(--font-sans)'
                          }}
                        >
                          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.35)' }} />
                          <span>{author.name}</span>
                        </div>
                      )
                    ))}
                  </div>
                </div>

                {/* Redesigned Luxury Conference Credential Banner */}
                <div className="research-conf-banner">
                  {/* Glowing Conference Badge Emblem */}
                  <div className="research-conf-emblem">
                    <FiBookOpen size={20} />
                  </div>

                  {/* Conference Hierarchy & Metadata */}
                  <div className="research-conf-details">
                    <div className="research-conf-header-row">
                      <span className="research-conf-title-tag">
                        IEEE BECITHCON 2025
                      </span>
                      <span className="research-conf-dot-sep">•</span>
                      <span className="research-conf-proceedings-tag">
                        IEEE Conference Proceedings
                      </span>
                    </div>

                    <div className="research-conf-full-name">
                      4th International Conference on Biomedical Engineering, Computer and Information Technology for Health
                    </div>
                  </div>
                </div>

                {/* Editorial Abstract Callout Block */}
                <div style={{
                  padding: '1.2rem 1.4rem',
                  background: 'rgba(13, 17, 23, 0.6)',
                  borderLeft: '3px solid var(--syn-cyan)',
                  borderRadius: '0 12px 12px 0',
                  marginBottom: '1.6rem'
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    color: 'var(--syn-cyan)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: 600,
                    marginBottom: '0.65rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <FiFileText size={13} />
                    <span>ABSTRACT &amp; PROBLEM STATEMENT</span>
                  </div>

                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.94rem',
                    lineHeight: 1.75,
                    color: 'var(--text-muted)',
                    marginBottom: '0.75rem'
                  }}>
                    Cervical cancer remains one of the leading causes of cancer mortality among women globally, where early cytological detection is paramount. This research introduces <strong style={{ color: 'var(--syn-cyan)' }}>3C-Net</strong>, a lightweight deep learning architecture formulated to accurately categorize cervical cytology images into three clinical diagnostic classes: <span style={{ color: 'var(--syn-green)', fontWeight: 600 }}>Normal</span>, <span style={{ color: 'var(--syn-yellow)', fontWeight: 600 }}>Precancerous</span>, and <span style={{ color: 'var(--syn-pink)', fontWeight: 600 }}>Cancerous</span>.
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.94rem',
                    lineHeight: 1.75,
                    color: 'var(--text-muted)',
                    margin: 0
                  }}>
                    Evaluated on the Mendeley Liquid-Based Cytology (LBC) dataset, 3C-Net achieves superior diagnostic classification performance while significantly reducing computational parameters, making it ideally suited for edge deployment in resource-limited clinical pathology laboratories.
                  </p>
                </div>

                {/* Research Keywords */}
                <div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--text-dim)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '0.5rem'
                  }}>
                    INDEXED KEYWORDS
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['Deep Learning', 'Computer Vision', 'Medical AI', 'Convolutional Neural Networks', 'Cytology', 'Python', 'IEEE Xplore'].map((tag) => (
                      <span 
                        key={tag}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.74rem',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          color: 'var(--text-muted)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Collapsible BibTeX Drawer */}
          <AnimatePresence>
            {isBibOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  borderTop: '1px solid rgba(0, 212, 245, 0.15)',
                  background: 'rgba(10, 14, 20, 0.95)',
                  overflow: 'hidden'
                }}
              >
                <div className="research-bib-drawer-content">
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.75rem'
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--syn-cyan)',
                      fontWeight: 600
                    }}>
                      bibtex / citation.bib
                    </span>
                    <button
                      type="button"
                      onClick={copyBibtex}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: 'transparent',
                        border: 'none',
                        color: copiedBib ? 'var(--syn-green)' : 'var(--syn-cyan)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        cursor: 'pointer'
                      }}
                    >
                      {copiedBib ? <FiCheck size={14} /> : <FiCopy size={14} />}
                      {copiedBib ? 'Copied' : 'Copy BibTeX'}
                    </button>
                  </div>
                  <pre style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    lineHeight: 1.6,
                    color: 'var(--text-muted)',
                    background: 'rgba(0, 0, 0, 0.4)',
                    padding: '1.25rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    overflowX: 'auto',
                    margin: 0
                  }}>
                    <code>{BIBTEX_CITATION}</code>
                  </pre>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

      </div>

      <style>{`
        /* Base / Desktop Styles */
        .research-section {
          position: relative;
          padding: 110px 5vw 90px;
        }

        .research-status-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          padding: 1.1rem 2rem;
          background: rgba(13, 17, 23, 0.75);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .research-status-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .research-ieee-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 6px;
          background: rgba(0, 212, 245, 0.12);
          color: var(--syn-cyan);
          font-family: var(--font-mono);
          fontSize: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          border: 1px solid rgba(0, 212, 245, 0.3);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .research-conf-text {
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          white-space: nowrap;
        }

        .research-conf-full {
          display: inline;
        }

        .research-indexed-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 3px 10px;
          border-radius: 20px;
          background: rgba(78, 201, 176, 0.1);
          border: 1px solid rgba(78, 201, 176, 0.3);
          color: var(--syn-green);
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 600;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .research-indexed-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--syn-green);
          box-shadow: 0 0 8px var(--syn-green);
          flex-shrink: 0;
        }

        .research-doc-id {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--syn-comment);
          white-space: nowrap;
        }

        .research-grid-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          padding: 2.25rem 2.25rem 2rem;
        }

        @media (min-width: 950px) {
          .research-grid-layout {
            grid-template-columns: 1fr 1.25fr !important;
          }
        }

        .research-image-overlay {
          position: absolute;
          bottom: 12px;
          left: 12px;
          right: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 14px;
          background: rgba(13, 17, 23, 0.88);
          backdrop-filter: blur(8px);
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          gap: 8px;
        }

        .research-overlay-arch {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--syn-cyan);
          font-weight: 600;
          white-space: nowrap;
        }

        .research-overlay-dataset {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
          white-space: nowrap;
        }

        .research-metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }

        .research-metric-card {
          padding: 0.75rem 0.6rem;
          background: rgba(22, 27, 34, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .research-metric-label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          text-transform: uppercase;
        }

        .research-metric-label.focus {
          color: var(--syn-purple);
        }

        .research-metric-label.classes {
          color: var(--syn-cyan);
        }

        .research-metric-label.design {
          color: var(--syn-green);
        }

        .research-metric-val {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-main);
          margin-top: 2px;
          line-height: 1.25;
        }

        .research-bib-drawer-content {
          padding: 1.5rem 2.25rem;
        }

        .research-conf-banner {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 1.1rem 1.35rem;
          background: linear-gradient(135deg, rgba(0, 212, 245, 0.06) 0%, rgba(22, 27, 34, 0.8) 100%);
          border: 1px solid rgba(0, 212, 245, 0.22);
          border-radius: 12px;
          margin-bottom: 1.6rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .research-conf-emblem {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(0, 212, 245, 0.12);
          border: 1px solid rgba(0, 212, 245, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--syn-cyan);
          flex-shrink: 0;
          box-shadow: 0 0 16px rgba(0, 212, 245, 0.18);
        }

        .research-conf-details {
          flex: 1;
          min-width: 0;
        }

        .research-conf-header-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 4px;
        }

        .research-conf-title-tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--syn-cyan);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .research-conf-dot-sep {
          color: var(--text-dim);
          font-size: 0.75rem;
        }

        .research-conf-proceedings-tag {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--syn-purple);
          background: rgba(199, 146, 234, 0.12);
          padding: 1px 8px;
          border-radius: 4px;
          border: 1px solid rgba(199, 146, 234, 0.25);
          font-weight: 600;
        }

        .research-conf-full-name {
          font-family: var(--font-sans);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-main);
          line-height: 1.45;
        }

        /* Tablet Responsive Adjustments */
        @media (max-width: 768px) {
          .research-section {
            padding: 85px 4vw 70px;
          }
          .research-grid-layout {
            padding: 1.75rem 1.5rem;
            gap: 2rem;
          }
        }

        /* Mobile Responsive Adjustments */
        @media (max-width: 640px) {
          .research-section {
            padding: 70px 3.5vw 60px;
          }

          .research-status-bar {
            padding: 0.85rem 1rem;
            flex-direction: column;
            align-items: stretch;
            gap: 0.65rem;
          }

          .research-status-group.venue {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            gap: 8px;
          }

          .research-status-group.indexing {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            gap: 8px;
            padding-top: 0.55rem;
            border-top: 1px dashed rgba(255, 255, 255, 0.08);
          }

          .research-ieee-badge {
            font-size: 0.72rem;
            padding: 3px 9px;
            white-space: nowrap;
            flex-shrink: 0;
          }

          .research-conf-text {
            font-size: 0.72rem;
            text-align: right;
            white-space: nowrap;
          }

          .research-conf-full {
            display: none;
          }

          .research-indexed-badge {
            font-size: 0.68rem;
            padding: 2.5px 8px;
            white-space: nowrap;
            flex-shrink: 0;
          }

          .research-doc-id {
            font-size: 0.72rem;
            text-align: right;
            white-space: nowrap;
          }

          .research-grid-layout {
            padding: 1.25rem 1rem 1.5rem;
            gap: 1.5rem;
          }

          .research-image-overlay {
            bottom: 8px;
            left: 8px;
            right: 8px;
            padding: 6px 10px;
          }

          .research-overlay-arch {
            font-size: 0.7rem;
          }

          .research-overlay-dataset {
            font-size: 0.68rem;
          }

          .research-metrics-grid {
            gap: 0.5rem;
          }

          .research-metric-card {
            padding: 0.65rem 0.35rem;
            border-radius: 8px;
          }

          .research-metric-label {
            font-size: 0.64rem;
          }

          .research-metric-val {
            font-size: 0.76rem;
            line-height: 1.2;
          }

          .research-bib-drawer-content {
            padding: 1rem;
          }

          .research-conf-banner {
            align-items: flex-start !important;
            padding: 0.95rem 1rem !important;
            gap: 12px !important;
          }

          .research-conf-emblem {
            width: 38px !important;
            height: 38px !important;
            margin-top: 3px !important;
          }

          .research-conf-header-row {
            gap: 6px !important;
            margin-bottom: 5px !important;
          }

          .research-conf-title-tag {
            font-size: 0.7rem !important;
          }

          .research-conf-dot-sep {
            display: none !important;
          }

          .research-conf-proceedings-tag {
            font-size: 0.66rem !important;
            padding: 1px 6px !important;
          }

          .research-conf-full-name {
            font-size: 0.82rem !important;
            line-height: 1.4 !important;
          }
        }

        @media (max-width: 440px) {
          .research-arch-prefix {
            display: none;
          }
          .research-conf-text {
            font-size: 0.68rem;
          }
        }

        @media (max-width: 360px) {
          .research-conf-text {
            font-size: 0.65rem;
          }
          .research-metric-val {
            font-size: 0.72rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Research;
