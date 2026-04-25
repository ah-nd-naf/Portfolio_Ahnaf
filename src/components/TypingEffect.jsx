import React, { useState, useEffect } from 'react';
import GlitchText from './GlitchText';

const TypingEffect = ({ text, speed = 100, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    setDisplayedText('');
    setIsComplete(false);
    
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) {
        clearInterval(interval);
        setIsComplete(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div className={`typing-effect-container ${className}`}>
      {isComplete ? (
        <GlitchText text={text} as="h1" className="hero-title" />
      ) : (
        <h1 className="hero-title glitch-text" data-text={displayedText}>
          {displayedText}
          <span className="typing-cursor"></span>
        </h1>
      )}
    </div>
  );
};

export default TypingEffect;
