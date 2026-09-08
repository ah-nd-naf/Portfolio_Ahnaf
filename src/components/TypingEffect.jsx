import React, { useState, useEffect, useRef } from 'react';

const TypingEffect = ({ text, speed = 135, startDelay = 500, onComplete }) => {
  const [revealedCount, setRevealedCount] = useState(0);
  const [phase, setPhase] = useState('typing'); // 'typing' | 'purple-glitch' | 'green-glitch'
  const indexRef = useRef(0);
  const intervalRef = useRef(null);
  const timeoutsRef = useRef([]);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const clearAllTimers = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  const addTimeout = (fn, delay) => {
    const id = setTimeout(fn, delay);
    timeoutsRef.current.push(id);
    return id;
  };

  useEffect(() => {
    clearAllTimers();
    indexRef.current = 0;
    setRevealedCount(0);
    setPhase('typing');

    addTimeout(() => {
      intervalRef.current = setInterval(() => {
        if (indexRef.current < text.length) {
          indexRef.current += 1;
          setRevealedCount(indexRef.current);

          if (indexRef.current === text.length) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;

            // Phase 2: As soon as writing finishes:
            // A & R turn green; other letters glitch in Cyber Purple matching the site
            addTimeout(() => {
              setPhase('purple-glitch');

              // Phase 3: After some time (1.35s):
              // The whole name transitions to green, glitch continues, and other page elements load
              addTimeout(() => {
                setPhase('green-glitch');
                if (onCompleteRef.current) {
                  onCompleteRef.current();
                }
              }, 1350);
            }, 100);
          }
        }
      }, speed);
    }, startDelay);

    return () => {
      clearAllTimers();
    };
  }, [text, speed, startDelay]);

  const renderContent = () => {
    if (revealedCount === 0) return null;

    if (phase === 'purple-glitch' || phase === 'cyan-glitch' || phase === 'green-glitch' || phase === 'white-glitch') {
      // Glitch state: Cursive A & R in green, body letters glitch continuously across whole segments (like ABOUT ME)
      return (
        <>
          <span
            className="hero-name-initial initial-a"
            data-text="A"
          >
            A
          </span>
          <span
            className="hero-name-body hero-name-char glitch-text"
            data-text="HNAF"
          >
            HNAF
          </span>
          <span className="hero-name-space">&nbsp;</span>
          <span
            className="hero-name-initial initial-r"
            data-text="R"
          >
            R
          </span>
          <span
            className="hero-name-body hero-name-char glitch-text"
            data-text="ASHEED"
          >
            ASHEED
          </span>
        </>
      );
    }

    // While typing: Smooth character-by-character typing in clean white
    const elements = [];
    for (let i = 0; i < revealedCount && i < text.length; i++) {
      const ch = text[i];

      if (i === 0) {
        // Initial 'A'
        elements.push(
          <span
            key="char-0-initial-a"
            className="hero-name-initial initial-a hero-char-smooth"
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
            className="hero-name-initial initial-r hero-char-smooth"
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
            className="hero-name-char hero-char-smooth"
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
        className={`hero-name hero-name-${phase} ${phase === 'green-glitch' ? 'name-complete' : phase === 'typing' ? 'name-typing' : 'name-glitching'}`}
        style={{ whiteSpace: 'nowrap' }}
      >
        {renderContent()}
        <span className="cursor-blink">_</span>
      </h1>
    </div>
  );
};

export default TypingEffect;
