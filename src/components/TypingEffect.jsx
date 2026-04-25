import React, { useState, useEffect, useRef } from 'react';

const TypingEffect = ({ text, speed = 90, startDelay = 600 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const indexRef = useRef(0);
  const intervalRef = useRef(null);
  const delayRef = useRef(null);

  useEffect(() => {
    // Reset state on mount
    indexRef.current = 0;
    setDisplayedText('');
    setIsComplete(false);

    delayRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        if (indexRef.current < text.length) {
          indexRef.current += 1;
          setDisplayedText(text.slice(0, indexRef.current));
        } else {
          clearInterval(intervalRef.current);
          setIsComplete(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(delayRef.current);
      clearInterval(intervalRef.current);
    };
  }, [text, speed, startDelay]);

  return (
    <div className="typing-wrapper">
      <h1 className={`hero-name ${isComplete ? 'name-complete' : 'name-typing'}`}>
        <span>{displayedText}</span>
        {!isComplete && <span className="cursor-blink">|</span>}
      </h1>
    </div>
  );
};

export default TypingEffect;
