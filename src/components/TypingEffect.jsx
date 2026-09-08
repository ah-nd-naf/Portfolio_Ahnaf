import React, { useState, useEffect, useRef } from 'react';

const TypingEffect = ({ text, speed = 90, startDelay = 600, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const indexRef = useRef(0);
  const intervalRef = useRef(null);
  const delayRef = useRef(null);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

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
          if (indexRef.current === text.length) {
            clearInterval(intervalRef.current);
            setIsComplete(true);
            if (onCompleteRef.current) {
              onCompleteRef.current();
            }
          }
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(delayRef.current);
      clearInterval(intervalRef.current);
    };
  }, [text, speed, startDelay]);

  const renderContent = () => {
    if (!displayedText) return null;

    const n = displayedText.length;
    // Segment mapping for "AHNAF RASHEED":
    // Char 0: 'A' (Initial of AHNAF)
    // Chars 1..4: 'HNAF' (Body of AHNAF)
    // Char 5: Space ' '
    // Char 6: 'R' (Initial of RASHEED)
    // Chars 7..12: 'ASHEED' (Body of RASHEED)
    const initialA = n >= 1 ? displayedText[0] : '';
    const body1 = n >= 2 ? displayedText.slice(1, Math.min(n, 5)) : '';
    const hasSpace = n >= 6;
    const initialR = n >= 7 ? displayedText[6] : '';
    const body2 = n >= 8 ? displayedText.slice(7) : '';

    const glitchClass = isComplete ? 'glitch-text' : '';
    const elements = [];

    if (initialA) {
      elements.push(
        <span
          key="initial-a"
          className={`hero-name-initial initial-a ${glitchClass}`}
          data-text={initialA}
        >
          {initialA}
        </span>
      );
    }

    if (body1) {
      elements.push(
        <span
          key="body-1"
          className={`hero-name-body ${glitchClass}`}
          data-text={body1}
        >
          {body1}
        </span>
      );
    }

    if (hasSpace) {
      elements.push(
        <span key="space" className="hero-name-space">
          {'\u00A0'}
        </span>
      );
    }

    if (initialR) {
      elements.push(
        <span
          key="initial-r"
          className={`hero-name-initial initial-r ${glitchClass}`}
          data-text={initialR}
        >
          {initialR}
        </span>
      );
    }

    if (body2) {
      elements.push(
        <span
          key="body-2"
          className={`hero-name-body ${glitchClass}`}
          data-text={body2}
        >
          {body2}
        </span>
      );
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
