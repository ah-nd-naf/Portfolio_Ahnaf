import React, { useState, useEffect } from 'react';

const LoopingTypingEffect = ({ 
  words, 
  typingSpeed = 80, 
  deletingSpeed = 40, 
  delay = 2000,
  startDelay = 0,
  isStarted = true
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [ready, setReady] = useState(false);

  // Cyberpunk theme colors (Crimson Red, Neon Pink, Synth Purple)
  const colors = ['#ff003c', '#f92aad', '#c792ea'];

  useEffect(() => {
    if (!isStarted) {
      setReady(false);
      setDisplayedText('');
      setIsDeleting(false);
      setWordIndex(0);
      return;
    }

    let startTimer;
    if (startDelay > 0) {
      startTimer = setTimeout(() => {
        setReady(true);
      }, startDelay);
    } else {
      setReady(true);
    }

    return () => {
      if (startTimer) clearTimeout(startTimer);
    };
  }, [isStarted, startDelay]);

  useEffect(() => {
    if (!ready) return;

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
        }, Math.max(20, typingSpeed + jitter));
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
      }
    }

    return () => clearTimeout(timeout);
  }, [ready, displayedText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delay]);

  let activeColor = colors[wordIndex % colors.length];
  if (wordIndex === 2) {
    if (displayedText.length <= 13) activeColor = colors[0];
    else if (displayedText.length <= 18) activeColor = colors[2];
    else activeColor = colors[1];
  }

  const renderText = (text, wIndex) => {
    if (wIndex === 2) {
      const part1 = text.substring(0, 13);
      const sep = text.substring(13, 18);
      const part2 = text.substring(18);
      
      return (
        <>
          <span style={{ color: colors[0], textShadow: `0 0 15px ${colors[0]}80`, transition: 'color 0.3s ease' }}>{part1}</span>
          <span style={{ color: colors[2], textShadow: `0 0 15px ${colors[2]}80`, transition: 'color 0.3s ease' }}>{sep}</span>
          <span style={{ color: colors[1], textShadow: `0 0 15px ${colors[1]}80`, transition: 'color 0.3s ease' }}>{part2}</span>
        </>
      );
    }
    return text;
  };

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span 
        style={{ 
          color: activeColor, 
          textShadow: `0 0 15px ${activeColor}80`,
          transition: 'color 0.3s ease, text-shadow 0.3s ease'
        }}
      >
        {renderText(displayedText, wordIndex)}
      </span>
      {ready && (
        <span 
          className="cursor-blink" 
          style={{ 
            color: activeColor, 
            textShadow: `0 0 12px ${activeColor}`,
            marginLeft: '4px',
            opacity: isDeleting ? 0.8 : 1
          }}
        >
          _
        </span>
      )}
    </span>
  );
};

export default LoopingTypingEffect;
