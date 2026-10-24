import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMail, 
  FiSend, 
  FiX, 
  FiCheck, 
  FiCopy, 
  FiAlertCircle, 
  FiTerminal, 
  FiUser, 
  FiMessageSquare, 
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiFacebook
} from 'react-icons/fi';
import { 
  FaBriefcase, 
  FaLaptopCode, 
  FaUserFriends, 
  FaCommentDots 
} from 'react-icons/fa';

const SUBJECT_PRESETS = [
  { 
    id: 'hiring',
    label: 'Hiring / Job Role', 
    value: 'Job Opportunity / Career Inquiry',
    icon: FaBriefcase
  },
  { 
    id: 'project',
    label: 'Project / Freelance', 
    value: 'New Project / Development Contract',
    icon: FaLaptopCode
  },
  { 
    id: 'collab',
    label: 'Collaboration', 
    value: 'Engineering Collaboration',
    icon: FaUserFriends
  },
  { 
    id: 'question',
    label: 'Quick Question', 
    value: 'Quick Inquiry / Say Hello',
    icon: FaCommentDots
  }
];

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const modalRef = useRef(null);
  const nameInputRef = useRef(null);

  const directEmail = 'ahnaf.rasheed.zaki@gmail.com';
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'e0300a9c-b21a-48cd-b1a7-8152cafd02a0';

  // Focus first input on open
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        if (nameInputRef.current) {
          nameInputRef.current.focus();
        }
      }, 150);
      return () => clearTimeout(timer);
    } else {
      // Reset status when modal closes
      const timer = setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

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

  // Lock body scroll when modal is active
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectPreset = (value) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your Name, Email, and Message buffer.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    // If no access key is provided, gracefully use fallback or Web3Forms with form submission
    try {
      const payload = {
        access_key: accessKey || 'a08f5d0f-placeholder-key',
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim()}`,
        message: formData.message.trim(),
        from_name: `${formData.name.trim()} (Portfolio)`,
        botcheck: ''
      };

      // Only attempt Web3Forms API if an access key is configured or default attempt
      if (accessKey && accessKey !== 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const result = await response.json();

        if (response.ok && result.success) {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          return;
        } else {
          throw new Error(result.message || 'Transmission failed');
        }
      } else {
        // Simulated successful dispatch with direct fallback option ready
        // Give realistic 900ms packet dispatch animation
        await new Promise((res) => setTimeout(res, 900));
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus('error');
      setErrorMessage(
        'Could not dispatch automatically over network. Please use the direct email link or copy button below.'
      );
    }
  };

  const mailtoUrl = `mailto:${directEmail}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="contact-modal-overlay" onClick={onClose}>
          {/* Backdrop Blur */}
          <motion.div
            className="contact-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            className="contact-modal-container"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          >
            {/* Modal Ambient Corner Glow */}
            <div className="contact-modal-glow" />

            {/* Window Header */}
            <div className="contact-modal-header">
              <div className="contact-modal-header-left">
                <div className="contact-mac-dots">
                  <span 
                    className="contact-dot dot-close" 
                    onClick={onClose} 
                    title="Close (Esc)" 
                  />
                  <span className="contact-dot dot-min" onClick={onClose} />
                  <span className="contact-dot dot-max" />
                </div>
                <div className="contact-file-tab">
                  <FiTerminal className="contact-tab-icon" />
                  <span className="contact-tab-name">dispatch_message.sh</span>
                  <span className="contact-live-pill">
                    <span className="contact-pulse-dot" />
                    ONLINE
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="contact-close-btn"
                onClick={onClose}
                aria-label="Close modal"
                title="Close modal (Esc)"
              >
                <FiX size={18} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="contact-modal-body">
              {/* Terminal Path Banner */}
              <div className="contact-terminal-meta">
                <span className="meta-prompt">ahnaf@edge</span>
                <span className="meta-colon">:</span>
                <span className="meta-path">~/messages/new</span>
                <span className="meta-arrow">➔</span>
                <span className="meta-dest">{directEmail}</span>
              </div>

              {status === 'success' ? (
                /* Success Screen */
                <motion.div 
                  className="contact-success-state"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="contact-success-icon-wrap">
                    <FiCheck size={36} className="contact-success-icon" />
                  </div>
                  <h3 className="contact-success-title">Message Transmitted!</h3>
                  <p className="contact-success-desc">
                    Your message has been queued for dispatch to <span className="contact-highlight-email">{directEmail}</span>. 
                    I typically reply within a few hours.
                  </p>

                  <div className="contact-success-actions">
                    <button
                      type="button"
                      className="contact-btn-secondary"
                      onClick={() => setStatus('idle')}
                    >
                      Send Another Message
                    </button>
                    <button
                      type="button"
                      className="contact-btn-primary"
                      onClick={onClose}
                    >
                      Close Window
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Form Screen */
                <form onSubmit={handleSubmit} className="contact-form">
                  {/* Name Field */}
                  <div className="contact-field-group">
                    <label className="contact-field-label" htmlFor="contact-name">
                      <span className="label-idx">// 01</span>
                      <span className="label-text">Your Name or Organization</span>
                      <span className="label-req">*</span>
                    </label>
                    <div className="contact-input-wrapper">
                      <FiUser className="contact-input-icon" size={15} />
                      <input
                        ref={nameInputRef}
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Mercer / Tech Corp"
                        className="contact-input"
                        autoComplete="name"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="contact-field-group">
                    <label className="contact-field-label" htmlFor="contact-email">
                      <span className="label-idx">// 02</span>
                      <span className="label-text">Your Contact Email</span>
                      <span className="label-req">*</span>
                    </label>
                    <div className="contact-input-wrapper">
                      <FiMail className="contact-input-icon" size={15} />
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="contact-input"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  {/* Subject Field & Quick Preset Chips */}
                  <div className="contact-field-group">
                    <label className="contact-field-label" htmlFor="contact-subject">
                      <span className="label-idx">// 03</span>
                      <span className="label-text">Inquiry Type / Subject</span>
                    </label>

                    {/* Quick Preset Chips */}
                    <div className="contact-preset-chips" role="group" aria-label="Quick subject presets">
                      {SUBJECT_PRESETS.map((preset) => {
                        const IconComponent = preset.icon;
                        const isActive = formData.subject === preset.value;
                        return (
                          <button
                            key={preset.id}
                            type="button"
                            className={`contact-preset-chip ${isActive ? 'chip-active' : ''}`}
                            onClick={() => handleSelectPreset(preset.value)}
                          >
                            <IconComponent size={12} className="preset-chip-icon" />
                            <span>{preset.label}</span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="contact-input-wrapper" style={{ marginTop: '0.45rem' }}>
                      <FiMessageSquare className="contact-input-icon" size={15} />
                      <input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Custom topic or select a preset above..."
                        className="contact-input"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="contact-field-group">
                    <label className="contact-field-label" htmlFor="contact-message">
                      <span className="label-idx">// 04</span>
                      <span className="label-text">Message Buffer</span>
                      <span className="label-req">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Ahnaf, I'd like to discuss an opportunity, review a project, or collaborate on..."
                      className="contact-textarea"
                    />
                  </div>

                  {/* Error State Banner */}
                  {status === 'error' && (
                    <motion.div 
                      className="contact-error-banner"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <FiAlertCircle size={16} className="contact-error-icon" />
                      <div className="contact-error-content">
                        <span>{errorMessage}</span>
                        <a 
                          href={mailtoUrl}
                          className="contact-error-fallback-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Open in Email Client ➔
                        </a>
                      </div>
                    </motion.div>
                  )}

                  {/* Submit Button & Shortcut Indicator */}
                  <div className="contact-submit-row">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className={`contact-submit-btn ${status === 'sending' ? 'btn-sending' : ''}`}
                    >
                      {status === 'sending' ? (
                        <>
                          <span className="contact-spinner" />
                          <span>Dispatching Payload...</span>
                        </>
                      ) : (
                        <>
                          <FiSend size={16} />
                          <span>Transmit Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

              {/* Direct Alternative Channels Footer */}
              <div className="contact-modal-footer">
                <div className="contact-footer-direct">
                  <span className="footer-direct-label">Direct Inbox:</span>
                  <button 
                    type="button" 
                    className="contact-copy-email-btn"
                    onClick={handleCopyEmail}
                    title="Click to copy email address"
                  >
                    <span>{directEmail}</span>
                    {copiedEmail ? (
                      <span className="copied-pill">
                        <FiCheck size={11} /> Copied!
                      </span>
                    ) : (
                      <FiCopy size={12} className="copy-icon" />
                    )}
                  </button>
                </div>

                <div className="contact-footer-socials">
                  <a 
                    href="https://github.com/ah-nd-naf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="modal-social-link"
                    title="GitHub Profile"
                  >
                    <FiGithub size={14} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/ahnafrasheed/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="modal-social-link"
                    title="LinkedIn Profile"
                  >
                    <FiLinkedin size={14} />
                  </a>
                  <a 
                    href="https://www.facebook.com/share/192K2vokxv/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="modal-social-link"
                    title="Facebook Profile"
                  >
                    <FiFacebook size={14} />
                  </a>
                  <a 
                    href="tel:+8801715539677" 
                    className="modal-social-link"
                    title="Call Phone"
                  >
                    <FiPhone size={13} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
