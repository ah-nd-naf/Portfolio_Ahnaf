import React, { useState, useEffect, useRef } from 'react';

const TypingEffect = ({ text, speed = 135, startDelay = 500, onComplete }) => {
  const [revealedCount, setRevealedCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const indexRef = useRef(0);
  const intervalRef = useRef(null);
  const delayRef = useRef(null);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    indexRef.current = 0;
    setRevealedCount(0);
    setIsComplete(false);

    delayRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        if (indexRef.current < text.length) {
          indexRef.current += 1;
          setRevealedCount(indexRef.current);

          if (indexRef.current === text.length) {
            clearInterval(intervalRef.current);
            setTimeout(() => {
              setIsComplete(true);
              if (onCompleteRef.current) {
                onCompleteRef.current();
              }
            }, 300);
          }
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(delayRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, speed, startDelay]);

  const renderContent = () => {
    if (revealedCount === 0) return null;

    const glitchClass = isComplete ? 'glitch-text' : '';
    const elements = [];

    for (let i = 0; i < revealedCount && i < text.length; i++) {
      const ch = text[i];

      if (i === 0) {
        // Initial 'A'
        elements.push(
          <span
            key="char-0-initial-a"
            className={`hero-name-initial initial-a hero-char-smooth ${glitchClass}`}
            data-text={ch}
          >
            {ch}
          </span>
        );
      } else if (i === 6) {
        // Initial 'R'
        elements.push(
          <span
            key="char-6-initial-r"
            className={`hero-name-initial initial-r hero-char-smooth ${glitchClass}`}
            data-text={ch}
          >
            {ch}
          </span>
        );
      } else if (ch === ' ') {
        // Space between words
        elements.push(
          <span key={`space-${i}`} className="hero-name-space">
            {'\u00A0'}
          </span>
        );
      } else {
        // Standard body character
        elements.push(
          <span
            key={`char-${i}`}
            className={`hero-name-char hero-char-smooth ${glitchClass}`}
            data-text={ch}
          >
            {ch}
          </span>
        );
      }
    }

    return elements;
  };

  return (
    <div className="typing-wrapper">
      <h1 
        className={`hero-name ${isComplete ? 'name-complete' : 'name-typing'}`}
        style={{ whiteSpace: 'nowrap' }}
      >
        {renderContent()}
        <span className="cursor-blink">_</span>
      </h1>
    </div>
  );
};

export default TypingEffect;
