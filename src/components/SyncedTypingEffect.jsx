import React, { useState, useEffect } from 'react';

const SyncedTypingEffect = ({
  pairs,
  typingSpeed = 65,
  deletingSpeed = 35,
  delay = 2200,
  startDelay = 350,
  isStarted = true,
  className1 = "hero-tagline",
  className2 = "hero-tagline hero-stack-tagline",
}) => {
  const [pairIndex, setPairIndex] = useState(0);
  const [displayedText1, setDisplayedText1] = useState('');
  const [displayedText2, setDisplayedText2] = useState('');
  const [phase, setPhase] = useState('waiting'); // 'waiting' | 'typing' | 'pausing' | 'deleting'

  // Vibrant cyber neon colors per pair
  // Pair 0: Line 1 = Crimson Red, Line 2 = Cyber Cyan
  // Pair 1: Line 1 = Neon Pink, Line 2 = Mint Green
  // Pair 2: Line 1 = Multi-color, Line 2 = Multi-color
  const colorsLine1 = ['#ff003c', '#00d4f5', '#ff003c'];
  const colorsLine2 = ['#00d4f5', '#4ec9b0', '#00d4f5'];

  useEffect(() => {
    if (!isStarted) {
      setPhase('waiting');
      setDisplayedText1('');
      setDisplayedText2('');
      setPairIndex(0);
      return;
    }

    const timer = setTimeout(() => {
      setPhase('typing');
    }, startDelay);

    return () => clearTimeout(timer);
  }, [isStarted, startDelay]);

  useEffect(() => {
    if (phase === 'waiting' || !pairs || pairs.length === 0) return;

    const currentPair = pairs[pairIndex];
    const target1 = currentPair.role;
    const target2 = currentPair.stack;

    let timeout;

    if (phase === 'typing') {
      const is1Done = displayedText1.length >= target1.length;
      const is2Done = displayedText2.length >= target2.length;

      if (is1Done && is2Done) {
        // Both lines have finished typing -> pause together
        timeout = setTimeout(() => {
          setPhase('deleting');
        }, delay);
      } else {
        timeout = setTimeout(() => {
          if (!is1Done) {
            setDisplayedText1(target1.substring(0, displayedText1.length + 1));
          }
          if (!is2Done) {
            setDisplayedText2(target2.substring(0, displayedText2.length + 1));
          }
        }, typingSpeed);
      }
    } else if (phase === 'deleting') {
      const is1Empty = displayedText1.length === 0;
      const is2Empty = displayedText2.length === 0;

      if (is1Empty && is2Empty) {
        // Both lines have finished backspacing -> switch to next pair together
        timeout = setTimeout(() => {
          setPairIndex((prev) => (prev + 1) % pairs.length);
          setPhase('typing');
        }, 400);
      } else {
        timeout = setTimeout(() => {
          if (!is1Empty) {
            setDisplayedText1(target1.substring(0, displayedText1.length - 1));
          }
          if (!is2Empty) {
            setDisplayedText2(target2.substring(0, displayedText2.length - 1));
          }
        }, deletingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, displayedText1, displayedText2, pairIndex, pairs, typingSpeed, deletingSpeed, delay]);

  const renderText = (text, defaultColor, c1, cSep, c2) => {
    const sepIdx = text.indexOf('</>');
    if (sepIdx === -1) {
      return (
        <span 
          style={{ 
            color: defaultColor, 
            textShadow: `0 0 15px ${defaultColor}80`,
            transition: 'color 0.3s ease'
          }}
        >
          {text}
        </span>
      );
    }

    const sepEnd = sepIdx + 3;
    if (text.length <= sepIdx) {
      return (
        <span style={{ color: c1, textShadow: `0 0 15px ${c1}80` }}>
          {text}
        </span>
      );
    }
    if (text.length <= sepEnd) {
      const p1 = text.substring(0, sepIdx);
      const pSep = text.substring(sepIdx);
      return (
        <>
          <span style={{ color: c1, textShadow: `0 0 15px ${c1}80` }}>{p1}</span>
          <span style={{ color: cSep, textShadow: `0 0 15px ${cSep}80` }}>{pSep}</span>
        </>
      );
    }
    const p1 = text.substring(0, sepIdx);
    const pSep = text.substring(sepIdx, sepEnd);
    const p2 = text.substring(sepEnd);
    return (
      <>
        <span style={{ color: c1, textShadow: `0 0 15px ${c1}80` }}>{p1}</span>
        <span style={{ color: cSep, textShadow: `0 0 15px ${cSep}80` }}>{pSep}</span>
        <span style={{ color: c2, textShadow: `0 0 15px ${c2}80` }}>{p2}</span>
      </>
    );
  };

  const c1 = colorsLine1[pairIndex % colorsLine1.length];
  const c2 = colorsLine2[pairIndex % colorsLine2.length];

  // Cursor color for line 1
  let cursor1Color = c1;
  const currentPair = pairs && pairs[pairIndex];
  if (currentPair && currentPair.role.includes('</>')) {
    const sIdx = currentPair.role.indexOf('</>');
    if (displayedText1.length <= sIdx) cursor1Color = '#ff003c';
    else if (displayedText1.length <= sIdx + 3) cursor1Color = '#c792ea';
    else cursor1Color = '#f92aad';
  }

  // Cursor color for line 2
  let cursor2Color = c2;
  if (currentPair && currentPair.stack.includes('</>')) {
    const sIdx = currentPair.stack.indexOf('</>');
    if (displayedText2.length <= sIdx) cursor2Color = '#00d4f5';
    else if (displayedText2.length <= sIdx + 3) cursor2Color = '#c792ea';
    else cursor2Color = '#4ec9b0';
  }

  const isReady = phase !== 'waiting';

  return (
    <>
      <div className={className1}>
        <b>
          <span style={{ position: 'relative', display: 'inline-block' }}>
            {renderText(displayedText1, c1, '#ff003c', '#c792ea', '#f92aad')}
            {isReady && (
              <span 
                className="cursor-blink" 
                style={{ 
                  color: cursor1Color, 
                  textShadow: `0 0 12px ${cursor1Color}`,
                  marginLeft: '4px',
                  opacity: phase === 'deleting' ? 0.8 : 1
                }}
              >
                _
              </span>
            )}
          </span>
        </b>
      </div>

      <div className="hero-taglines-divider" aria-hidden="true">
        <span className="taglines-divider-line" />
        <span className="taglines-divider-chip">// stack</span>
        <span className="taglines-divider-line fade" />
      </div>

      <div className={className2}>
        <b>
          <span style={{ position: 'relative', display: 'inline-block' }}>
            {renderText(displayedText2, c2, '#00d4f5', '#c792ea', '#4ec9b0')}
            {isReady && (
              <span 
                className="cursor-blink" 
                style={{ 
                  color: cursor2Color, 
                  textShadow: `0 0 12px ${cursor2Color}`,
                  marginLeft: '4px',
                  opacity: phase === 'deleting' ? 0.8 : 1
                }}
              >
                _
              </span>
            )}
          </span>
        </b>
      </div>
    </>
  );
};

export default SyncedTypingEffect;
