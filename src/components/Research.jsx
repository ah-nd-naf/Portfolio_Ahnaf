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
  FiCode
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
    <section id="research" className="research-section" style={{ position: 'relative', padding: '110px 5vw 90px' }}>
      
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
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            padding: '1.1rem 2rem',
            background: 'rgba(13, 17, 23, 0.75)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: '6px',
                background: 'rgba(0, 212, 245, 0.12)',
                color: 'var(--syn-cyan)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.5px',
                border: '1px solid rgba(0, 212, 245, 0.3)'
              }}>
                <FiAward size={14} /> IEEE Xplore
              </span>
              <span style={{
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem'
              }}>
                BECITHCON 2025 · Conference Paper
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '3px 10px',
                borderRadius: '20px',
                background: 'rgba(78, 201, 176, 0.1)',
                border: '1px solid rgba(78, 201, 176, 0.3)',
                color: 'var(--syn-green)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 600
              }}>
                <span style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--syn-green)',
                  boxShadow: '0 0 8px var(--syn-green)'
                }} />
                PUBLISHED &amp; INDEXED
              </div>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--syn-comment)'
              }}>
                Doc #11504298
              </span>
            </div>
          </div>

          {/* Main Card Content */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            padding: '2.25rem 2.25rem 2rem'
          }} className="research-grid-layout">

            {/* Left: Interactive Diagram / Visual Showcase */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{
                position: 'relative',
                borderRadius: '14px',
                overflow: 'hidden',
                border: '1px solid rgba(0, 212, 245, 0.2)',
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
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  right: '12px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '8px 14px',
                  background: 'rgba(13, 17, 23, 0.85)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--syn-cyan)', fontWeight: 600 }}>
                    Architecture: 3C-Net CNN
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    Mendeley LBC Dataset
                  </span>
                </div>
              </div>

              {/* Research Metrics Pills */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '0.75rem'
              }}>
                <div style={{
                  padding: '0.75rem 1rem',
                  background: 'rgba(22, 27, 34, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '10px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--syn-purple)', textTransform: 'uppercase' }}>Focus</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginTop: '2px' }}>Medical AI &amp; CV</div>
                </div>

                <div style={{
                  padding: '0.75rem 1rem',
                  background: 'rgba(22, 27, 34, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '10px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--syn-cyan)', textTransform: 'uppercase' }}>Classes</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginTop: '2px' }}>3-Class Cytology</div>
                </div>

                <div style={{
                  padding: '0.75rem 1rem',
                  background: 'rgba(22, 27, 34, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '10px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--syn-green)', textTransform: 'uppercase' }}>Design</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginTop: '2px' }}>Lightweight CNN</div>
                </div>
              </div>
            </div>

            {/* Right: Paper Metadata & Findings */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                {/* Paper Title */}
                <h3 style={{
                  fontSize: 'clamp(1.25rem, 2.2vw, 1.7rem)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  lineHeight: 1.35,
                  color: 'var(--text-main)',
                  marginBottom: '1rem'
                }}>
                  3C-Net: Cervical Cancer Cell Classification from Liquid-Based Cytology Pap Smear Images using Deep Learning Techniques
                </h3>

                {/* Authors */}
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.86rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  marginBottom: '1.25rem'
                }}>
                  <span style={{ color: 'var(--syn-comment)' }}>// Authors: </span>
                  Md. Safayet Hossain Sawom, Md. Adnan Khan,{' '}
                  <span style={{
                    color: 'var(--syn-cyan)',
                    fontWeight: 700,
                    textShadow: '0 0 10px rgba(0, 212, 245, 0.35)',
                    borderBottom: '1px dashed var(--syn-cyan)',
                    paddingBottom: '1px'
                  }}>
                    Md. Ahnaf Rasheed Zaki
                  </span>
                  , Mst. Noushin Fariha Ronok, and Dewan Ziaul Karim.
                </div>

                {/* Conference Citation Info */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '0.6rem 1rem',
                  background: 'rgba(0, 212, 245, 0.04)',
                  border: '1px solid rgba(0, 212, 245, 0.12)',
                  borderRadius: '8px',
                  marginBottom: '1.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--text-main)'
                }}>
                  <FiBookOpen size={15} color="var(--syn-cyan)" />
                  <span>2025 IEEE International Conference on Biomedical Engineering, Computer and Information Technology for Health (BECITHCON)</span>
                </div>

                {/* Abstract Text */}
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.96rem',
                  lineHeight: 1.7,
                  color: 'var(--text-muted)',
                  marginBottom: '1.75rem'
                }}>
                  <p style={{ marginBottom: '0.75rem' }}>
                    <strong style={{ color: 'var(--text-main)' }}>Abstract &amp; Core Contribution: </strong>
                    Cervical cancer remains one of the leading causes of cancer mortality among women globally, where early cytological detection is paramount. This research presents <strong style={{ color: 'var(--syn-cyan)' }}>3C-Net</strong>, a lightweight deep learning architecture formulated to accurately categorize cervical cytology images into three diagnostic classes: <span style={{ color: 'var(--syn-green)' }}>normal</span>, <span style={{ color: 'var(--syn-yellow)' }}>precancerous</span>, and <span style={{ color: 'var(--syn-pink)' }}>cancerous</span>.
                  </p>
                  <p>
                    Evaluated on the Mendeley Liquid-Based Cytology (LBC) dataset, the proposed 3C-Net architecture achieves superior diagnostic classification performance while significantly reducing computational parameters, making it ideally suited for edge medical devices in clinical pathology laboratories.
                  </p>
                </div>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
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

              {/* Action Buttons Dock */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                alignItems: 'center',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)'
              }}>
                <a
                  href="https://ieeexplore.ieee.org/document/11504298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects-btn projects-btn-solid"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    padding: '0.75rem 1.6rem',
                    background: 'var(--name-grad)',
                    color: '#0d1117',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    boxShadow: '0 8px 25px rgba(0, 212, 245, 0.25)',
                    transition: 'all 0.3s ease'
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
                  <FiExternalLink size={16} /> Read on IEEE Xplore ↗
                </a>

                <button
                  type="button"
                  onClick={copyBibtex}
                  className="projects-btn projects-btn-outline"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.88rem',
                    padding: '0.7rem 1.25rem',
                    borderRadius: '8px',
                    background: 'rgba(22, 27, 34, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: copiedBib ? 'var(--syn-green)' : 'var(--text-main)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {copiedBib ? <FiCheck size={15} /> : <FiCopy size={15} />}
                  <span>{copiedBib ? 'BibTeX Copied!' : 'Copy BibTeX'}</span>
                </button>

                <button
                  type="button"
                  onClick={copyApa}
                  className="projects-btn projects-btn-outline"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.88rem',
                    padding: '0.7rem 1.25rem',
                    borderRadius: '8px',
                    background: 'rgba(22, 27, 34, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: copiedApa ? 'var(--syn-green)' : 'var(--text-main)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {copiedApa ? <FiCheck size={15} /> : <FiCopy size={15} />}
                  <span>{copiedApa ? 'APA Copied!' : 'Copy APA'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsBibOpen(!isBibOpen)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.85rem',
                    padding: '0.7rem 1rem',
                    borderRadius: '8px',
                    background: 'transparent',
                    border: '1px dashed rgba(255, 255, 255, 0.15)',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-mono)',
                    marginLeft: 'auto'
                  }}
                >
                  <FiCode size={14} />
                  <span>{isBibOpen ? 'Hide BibTeX' : 'View BibTeX'}</span>
                  {isBibOpen ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
                </button>
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
                <div style={{ padding: '1.5rem 2.25rem' }}>
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
        @media (min-width: 950px) {
          .research-grid-layout {
            grid-template-columns: 1fr 1.25fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Research;
