import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaPhoneAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Contact = () => (
  <section id="contact" style={{ padding: '80px 5vw 100px', position: 'relative', display: 'flex', justifyContent: 'center', minHeight: '60vh', alignItems: 'center' }}>
    {/* Ambient Glow */}
    <div style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, background: 'radial-gradient(circle at 50% 100%, rgba(199, 146, 234, 0.15) 0%, transparent 60%)', zIndex: 0, pointerEvents: 'none' }} />
    
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      style={{ 
        maxWidth: '750px', 
        width: '100%', 
        padding: '3.5rem 2.5rem', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center', 
        position: 'relative', 
        zIndex: 1, 
        background: 'linear-gradient(145deg, rgba(22, 27, 34, 0.8) 0%, rgba(13, 17, 23, 0.6) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '24px', 
        border: '1px solid rgba(199, 146, 234, 0.2)', 
        boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)' 
      }}
    >
      {/* Availability Status */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(78, 201, 176, 0.1)', border: '1px solid rgba(78, 201, 176, 0.25)', borderRadius: '30px', marginBottom: '1.5rem' }}>
        <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--syn-green)', boxShadow: '0 0 10px var(--syn-green)', animation: 'pulse 2s infinite' }}></span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--syn-green)', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 600 }}>Available for Opportunities</span>
      </div>
      
      {/* Heading */}
      <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', fontFamily: 'var(--font-sans)', fontWeight: 800, margin: 0, letterSpacing: '-1px', lineHeight: 1.1 }}>
        Let's build something <br/> 
        <span style={{ 
          background: 'linear-gradient(90deg, var(--syn-purple), var(--syn-pink))', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent', 
          textShadow: '0 0 30px rgba(249, 42, 173, 0.3)',
          display: 'inline-block'
        }}>
          extraordinary.
        </span>
      </h2>
      
      {/* Subtext */}
      <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '500px', margin: '1.5rem auto 2.5rem', lineHeight: 1.6 }}>
        Whether you have a project in mind, need a developer, or just want to chat about code—I'm always ready to connect.
      </p>

      {/* Action Buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', justifyContent: 'center', alignItems: 'center' }}>
        <a 
          href="mailto:ahnaf.rasheed.zaki@gmail.com" 
          style={{ 
            display: 'inline-flex', alignItems: 'center', gap: '10px', 
            padding: '0.9rem 2rem', background: 'var(--text-main)', color: 'var(--bg)', 
            borderRadius: '100px', fontWeight: 600, fontSize: '1rem', 
            transition: 'all 0.3s ease', cursor: 'pointer',
            boxShadow: '0 0 15px rgba(255,255,255,0.1)'
          }} 
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(255,255,255,0.2)';
          }} 
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = '0 0 15px rgba(255,255,255,0.1)';
          }}
        >
          <FiMail size={18} />
          Say Hello
        </a>
        
        <div style={{ display: 'flex', gap: '0.8rem' }}>
          {[
            { icon: <FaGithub size={20} />, href: "https://github.com/ah-nd-naf", color: "var(--syn-cyan)" },
            { icon: <FaLinkedin size={20} />, href: "https://linkedin.com/in/ahnafrasheed/", color: "var(--syn-purple)" },
            { icon: <FaPhoneAlt size={16} />, href: "tel:+8801715539677", color: "var(--syn-green)" }
          ].map((social, idx) => (
            <a 
              key={idx}
              href={social.href} 
              target={social.href.startsWith('http') ? "_blank" : "_self"} 
              rel="noopener noreferrer"
              style={{ 
                display: 'flex', alignItems: 'center', justifyContent: 'center', 
                width: '50px', height: '50px', borderRadius: '50%', 
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', 
                color: 'var(--text-main)', transition: 'all 0.3s ease' 
              }}
              onMouseEnter={e => { 
                e.currentTarget.style.background = social.color; 
                e.currentTarget.style.borderColor = social.color; 
                e.currentTarget.style.color = '#fff'; 
                e.currentTarget.style.transform = 'translateY(-2px)'; 
                e.currentTarget.style.boxShadow = `0 8px 20px ${social.color}40`; 
              }}
              onMouseLeave={e => { 
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; 
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; 
                e.currentTarget.style.color = 'var(--text-main)'; 
                e.currentTarget.style.transform = 'none'; 
                e.currentTarget.style.boxShadow = 'none'; 
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      
      {/* Terminal Snippet */}
      <div style={{ 
        marginTop: '3.5rem', padding: '0.8rem 1.5rem', 
        background: 'rgba(13, 17, 23, 0.8)', borderRadius: '8px', 
        border: '1px solid rgba(255,255,255,0.05)', display: 'inline-flex', 
        gap: '0.6rem', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.85rem',
        boxShadow: 'inset 0 0 15px rgba(0,0,0,0.5)'
      }}>
        <span style={{ color: 'var(--syn-pink)' }}>ahnaf@portfolio<span style={{ color: 'var(--text-main)' }}>:</span><span style={{ color: 'var(--syn-cyan)' }}>~$</span></span>
        <span style={{ color: 'var(--text-main)' }}>ping <span style={{ color: 'var(--syn-string)' }}>ahnaf.rasheed.zaki@gmail.com</span></span>
        <motion.span 
          animate={{ opacity: [1, 0, 1] }} 
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          style={{ display: 'inline-block', background: 'var(--text-main)', width: '6px', height: '1.2em', verticalAlign: 'middle' }}
        />
      </div>
    </motion.div>
  </section>
);

export default Contact;
