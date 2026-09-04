import React, { useState, useEffect } from 'react';

const LoopingTypingEffect = ({ 
  words, 
  typingSpeed = 80, 
  deletingSpeed = 40, 
  delay = 2000,
  startDelay = 0,
  isStarted = true,
  themeColors
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [ready, setReady] = useState(false);

  // Cyberpunk theme colors (Crimson Red, Cyber Cyan, Synth Purple, Mint Green, Neon Pink)
  const defaultColors = ['#ff003c', '#00d4f5', '#c792ea', '#4ec9b0', '#f92aad'];
  const colors = themeColors || defaultColors;

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
    if (!ready || !words || words.length === 0) return;

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

  const currentWord = words && words[wordIndex] ? words[wordIndex] : '';
  const sepIdx = currentWord.indexOf('</>');
  const hasSep = sepIdx !== -1;

  let activeColor = colors[wordIndex % colors.length];
  if (hasSep) {
    const sepStart = sepIdx;
    const sepEnd = sepIdx + 3;
    if (displayedText.length <= sepStart) activeColor = colors[0];
    else if (displayedText.length <= sepEnd) activeColor = colors[2];
    else activeColor = colors[4];
  }

  const renderText = (text) => {
    if (hasSep) {
      const sepStart = sepIdx;
      const sepEnd = sepIdx + 3;
      if (text.length <= sepStart) {
        return <span style={{ color: colors[0], textShadow: `0 0 15px ${colors[0]}80`, transition: 'color 0.3s ease' }}>{text}</span>;
      } else if (text.length <= sepEnd) {
        const part1 = text.substring(0, sepStart);
        const sepPart = text.substring(sepStart);
        return (
          <>
            <span style={{ color: colors[0], textShadow: `0 0 15px ${colors[0]}80`, transition: 'color 0.3s ease' }}>{part1}</span>
            <span style={{ color: colors[2], textShadow: `0 0 15px ${colors[2]}80`, transition: 'color 0.3s ease' }}>{sepPart}</span>
          </>
        );
      } else {
        const part1 = text.substring(0, sepStart);
        const sepPart = text.substring(sepStart, sepEnd);
        const part2 = text.substring(sepEnd);
        return (
          <>
            <span style={{ color: colors[0], textShadow: `0 0 15px ${colors[0]}80`, transition: 'color 0.3s ease' }}>{part1}</span>
            <span style={{ color: colors[2], textShadow: `0 0 15px ${colors[2]}80`, transition: 'color 0.3s ease' }}>{sepPart}</span>
            <span style={{ color: colors[4], textShadow: `0 0 15px ${colors[4]}80`, transition: 'color 0.3s ease' }}>{part2}</span>
          </>
        );
      }
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
        {renderText(displayedText)}
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
