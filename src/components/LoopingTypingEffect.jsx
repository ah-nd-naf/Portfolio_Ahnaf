import React, { useState, useEffect } from 'react';

const LoopingTypingEffect = ({ words, typingSpeed = 80, deletingSpeed = 40, delay = 2000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  // Cyberpunk theme colors
  const colors = ['#00d4f5', '#c792ea', '#6cf702', '#f92aad'];

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (isDeleting) {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.substring(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 500);
      }
    } else {
      if (displayedText.length < currentWord.length) {
        // Add random jitter to typing speed for realism
        const jitter = Math.random() * 40 - 20; 
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.substring(0, displayedText.length + 1));
        }, typingSpeed + jitter);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delay]);

  const currentColor = colors[wordIndex % colors.length];

  const renderText = (text) => {
    // Split by our interesting separator to style it differently
    const parts = text.split(/( <\/> )/g);
    return parts.map((part, i) => {
      if (part === ' </> ') {
        // Use the pink color for the separator to make it pop!
        return <span key={i} style={{ color: '#f92aad', textShadow: '0 0 15px #f92aad' }}>{part}</span>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span 
        style={{ 
          color: currentColor, 
          textShadow: `0 0 15px ${currentColor}80`,
          transition: 'color 0.3s ease, text-shadow 0.3s ease'
        }}
      >
        {renderText(displayedText)}
      </span>
      <span 
        className="cursor-blink" 
        style={{ 
          color: currentColor, 
          textShadow: `0 0 12px ${currentColor}`,
          marginLeft: '4px',
          opacity: isDeleting ? 0.8 : 1
        }}
      >
        _
      </span>
    </span>
  );
};

export default LoopingTypingEffect;
