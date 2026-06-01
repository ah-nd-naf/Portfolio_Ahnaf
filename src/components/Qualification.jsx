import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';
import { FiGitBranch } from 'react-icons/fi';

const qualifications = [
  {
    id: 1,
    title: 'M.Sc. in Computer Science',
    institution: 'Planning...',
    detail: 'Research planning & postgraduate preparation',
    period: 'Upcoming / Future',
    status: 'planning',
    hash: 'MSc-CS',
    icon: <FaGraduationCap size={18} />,
    color: 'var(--syn-pink)',
    tag: 'tag: MSc-CS',
    lines: [
      '// Future academic roadmap',
      'const mscProject = {',
      '  status: "Planning",',
      '  focus: ["Artificial Intelligence", "Machine Learning", "Deep Learning"]',
      '};'
    ]
  },
  {
    id: 2,
    title: 'B.Sc. in Computer Science & Engineering',
    institution: 'BRAC University',
    detail: 'Department of CSE',
    period: 'Completed',
    status: 'completed',
    hash: 'BSc-CSE',
    icon: <FaGraduationCap size={18} />,
    color: 'var(--syn-cyan)',
    tag: 'tag: BSc-CSE',
    lines: [
      '// Undergraduate degree',
      'const bscStatus = {',
      '  university: "BRAC University",',
      '  department: "CSE",',
      '  thesis: "Deep learning & software architecture patterns", "Computer Vision"',
      '  status: "Completed"',
      '};'
    ]
  },
  {
    id: 3,
    title: 'Higher Secondary Certificate (HSC)',
    institution: 'BN School & College, Khulna',
    detail: 'Science Group',
    period: 'Completed',
    status: 'completed',
    hash: 'HSC-grad',
    icon: <FaSchool size={16} />,
    color: 'var(--syn-purple)',
    tag: 'tag: HSC-grad',
    lines: [
      '// High school curriculum',
      'const hscRecord = {',
      '  institution: "BN School & College, Khulna",',
      '  group: "Science",',
      '  focus: ["Mathematics", "Physics", "Chemistry", "ICT"]',
      '};'
    ]
  },
  {
    id: 4,
    title: 'Secondary School Certificate (SSC)',
    institution: 'BN School & College, Khulna',
    detail: 'Science Group',
    period: 'Completed',
    status: 'completed',
    hash: 'SSC-grad',
    icon: <FaSchool size={16} />,
    color: 'var(--syn-green)',
    tag: 'tag: SSC-grad',
    lines: [
      '// School level foundation',
      'const sscRecord = {',
      '  institution: "BN School & College, Khulna",',
      '  group: "Science",',
      '  skills: ["Foundational Science", "Analytical Math"]',
      '};'
    ]
  }
];

const Qualification = () => {
  return (
    <section id="qualification" style={{ position: 'relative', padding: '100px 5vw 80px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      
      {/* Background Accent Grid or Glow */}
      <div style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, background: 'radial-gradient(circle at 10% 30%, rgba(0, 212, 245, 0.05) 0%, transparent 50%)', zIndex: 0, pointerEvents: 'none' }} />

      <div className="container" style={{ maxWidth: '1000px', position: 'relative', zIndex: 1 }}>
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(199, 146, 234, 0.05)', border: '1px solid rgba(199, 146, 234, 0.15)', borderRadius: '30px', marginBottom: '1.5rem' }}>
             <FiGitBranch size={14} color="var(--syn-purple)" />
             <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--syn-purple)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>git log --oneline --graph</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontFamily: 'var(--font-sans)', fontWeight: 800, margin: 0, letterSpacing: '-1.5px', lineHeight: 1.1 }}>
            <span style={{ color: 'var(--text-main)' }}>My</span> <span className="text-gradient" style={{ display: 'inline-block', textShadow: '0 0 40px rgba(199, 146, 234, 0.3)' }}>Journey</span>
          </h2>
          
          <p style={{ color: 'var(--text-muted)', marginTop: '1.5rem', fontFamily: 'var(--font-sans)', fontSize: '1.1rem', maxWidth: '600px', margin: '1.5rem auto 0 auto', lineHeight: 1.6 }}>
            Educational background and qualifications tracked as system commits on the main timeline.
          </p>
        </motion.div>

        {/* Timeline Graph */}
        <div style={{ position: 'relative', paddingLeft: '50px', marginLeft: '10px' }}>
          
          {/* Main Git Branch Line */}
          <div style={{ 
            position: 'absolute', 
            left: '19px', 
            top: '15px', 
            bottom: '15px', 
            width: '3px', 
            background: 'linear-gradient(180deg, var(--syn-pink) 0%, var(--syn-cyan) 30%, var(--syn-purple) 65%, var(--syn-green) 100%)',
            borderRadius: '2px',
            opacity: 0.8
          }} />

          {/* Qualification Commits */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {qualifications.map((q, idx) => (
              <motion.div 
                key={q.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                style={{ position: 'relative' }}
              >
                
                {/* Git Node (Commit Point) */}
                <div style={{
                  position: 'absolute',
                  left: '-47px',
                  top: '15px',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--bg)',
                  border: `3px solid ${q.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: q.color,
                  zIndex: 2,
                  boxShadow: `0 0 15px ${q.color}50, inset 0 0 5px ${q.color}30`,
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.2) rotate(10deg)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none';
                }}
                title={q.tag}
                >
                  {q.icon}
                </div>

                {/* Glassmorphic Commit Card */}
                <div 
                  className="glass-card"
                  style={{
                    padding: '2rem',
                    borderRadius: '16px',
                    background: 'linear-gradient(145deg, rgba(22, 27, 34, 0.7) 0%, rgba(13, 17, 23, 0.5) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = q.color;
                    e.currentTarget.style.boxShadow = `0 15px 40px ${q.color}15`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.4)';
                  }}
                >
                  
                  {/* Card Header (Git Log Styling) */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: q.color, fontWeight: 700 }}>
                        commit {q.hash}
                      </span>
                      <span style={{ 
                        fontFamily: 'var(--font-mono)', 
                        fontSize: '0.7rem', 
                        padding: '2px 8px', 
                        borderRadius: '4px', 
                        background: `${q.color}15`, 
                        color: q.color,
                        border: `1px solid ${q.color}30`
                      }}>
                        {q.tag}
                      </span>
                    </div>
                    
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--syn-comment)' }}>
                      {q.period}
                    </span>
                  </div>

                  {/* Title & School */}
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-main)', margin: '0 0 0.25rem 0' }}>
                    {q.title}
                  </h3>
                  <div style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: q.color }}>●</span> {q.institution} {q.detail && `• ${q.detail}`}
                  </div>

                  {/* File Code Block representation */}
                  <div style={{
                    background: 'rgba(13, 17, 23, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.03)',
                    borderRadius: '8px',
                    padding: '1.25rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.88rem',
                    lineHeight: 1.6,
                    color: 'var(--text-muted)',
                    boxShadow: 'inset 0 0 15px rgba(0,0,0,0.5)'
                  }}>
                    {q.lines.map((line, lIdx) => {
                      // Simple syntax highlighting representation for the details block
                      let styledLine = <span style={{ color: 'var(--text-muted)' }}>{line}</span>;
                      if (line.startsWith('//')) {
                        styledLine = <span style={{ color: 'var(--syn-comment)' }}>{line}</span>;
                      } else if (line.includes('const')) {
                        styledLine = (
                          <>
                            <span style={{ color: 'var(--syn-purple)', fontWeight: 600 }}>const</span>{' '}
                            <span style={{ color: 'var(--syn-cyan)' }}>{line.split(' ')[1]}</span>{' '}
                            {line.substring(line.indexOf('='))}
                          </>
                        );
                      } else if (line.includes(':')) {
                        const parts = line.split(':');
                        const key = parts[0];
                        const val = parts.slice(1).join(':');
                        styledLine = (
                          <>
                            {key}:<span style={{ color: val.includes('"') ? 'var(--syn-string)' : 'var(--syn-purple)' }}>{val}</span>
                          </>
                        );
                      }
                      
                      return (
                        <div key={lIdx} style={{ display: 'flex', gap: '1rem' }}>
                          <span style={{ color: 'rgba(255,255,255,0.15)', userSelect: 'none', width: '2ch', textAlign: 'right' }}>{lIdx + 1}</span>
                          <span style={{ flex: 1 }}>{styledLine}</span>
                        </div>
                      );
                    })}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Qualification;
