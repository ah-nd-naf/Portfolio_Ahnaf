import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiFileText, 
  FiDownload, 
  FiExternalLink, 
  FiX, 
  FiEye, 
  FiCheck,
  FiTerminal,
  FiShare2
} from 'react-icons/fi';

const CVModal = ({ isOpen, onClose }) => {
  const cvPath = '/Ahnaf_Rasheed_CV.pdf';

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Ahnaf_Rasheed_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenTab = () => {
    window.open(cvPath, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="cv-modal-overlay" onClick={onClose}>
          {/* Backdrop Blur */}
          <motion.div
            className="cv-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />

          {/* Modal Container */}
          <motion.div
            className="cv-modal-container"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Ambient Background Glow */}
            <div className="cv-modal-glow" />

            {/* Window Header */}
            <div className="cv-modal-header">
              <div className="cv-modal-header-left">
                <div className="cv-mac-dots">
                  <span className="cv-dot dot-close" onClick={onClose} title="Close (Esc)" />
                  <span className="cv-dot dot-min" onClick={onClose} />
                  <span className="cv-dot dot-max" onClick={handleOpenTab} title="Fullscreen in new tab" />
                </div>
                <div className="cv-file-title">
                  <FiFileText className="cv-file-icon" />
                  <span className="cv-filename">Ahnaf_Rasheed_CV.pdf</span>
                  <span className="cv-status-badge">
                    <span className="cv-status-dot" />
                    LIVE PREVIEW
                  </span>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="cv-modal-header-actions">
                <button
                  type="button"
                  className="cv-action-btn cv-btn-open"
                  onClick={handleOpenTab}
                  title="Open in new browser tab"
                >
                  <FiExternalLink size={13} />
                  <span className="btn-text-desktop">New Tab</span>
                </button>

                <button
                  type="button"
                  className="cv-action-btn cv-btn-download"
                  onClick={handleDownload}
                  title="Download PDF directly"
                >
                  <FiDownload size={14} />
                  <span>Download PDF</span>
                </button>

                <button
                  type="button"
                  className="cv-close-btn"
                  onClick={onClose}
                  aria-label="Close CV Modal"
                  title="Close (Esc)"
                >
                  <FiX size={18} />
                </button>
              </div>
            </div>

            {/* Sub-header info bar */}
            <div className="cv-info-bar">
              <div className="cv-info-left">
                <FiTerminal size={12} color="var(--syn-cyan)" />
                <span className="cv-info-text">
                  <span style={{ color: 'var(--syn-purple)' }}>cat</span> ~/documents/Ahnaf_Rasheed_CV.pdf
                </span>
              </div>
              <div className="cv-info-right">
                <span className="cv-chip">PDF Document</span>
                <span className="cv-chip">Updated 2026</span>
              </div>
            </div>

            {/* PDF Viewer Body */}
            <div className="cv-modal-body">
              <iframe
                src={`${cvPath}#toolbar=1&navpanes=0`}
                title="Ahnaf Rasheed Curriculum Vitae"
                className="cv-pdf-iframe"
              />

              {/* Fallback & Mobile Assist Banner */}
              <div className="cv-mobile-banner">
                <div className="cv-mobile-banner-text">
                  <strong>Previewing on mobile or browser blocking inline PDF?</strong>
                  <p>Tap below to view full-screen or download directly to your device.</p>
                </div>
                <div className="cv-mobile-banner-btns">
                  <button type="button" className="btn btn-primary" onClick={handleDownload}>
                    <FiDownload /> Download CV
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={handleOpenTab}>
                    <FiExternalLink /> Open in Tab
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="cv-modal-footer">
              <span className="cv-footer-hint">
                Press <kbd className="cv-kbd">ESC</kbd> to close · 1-click download available
              </span>
              <div className="cv-footer-actions">
                <button
                  type="button"
                  className="cv-footer-download-link"
                  onClick={handleDownload}
                >
                  <FiDownload size={12} />
                  <span>Direct Download Link</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CVModal;
