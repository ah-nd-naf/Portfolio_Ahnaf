import React from 'react';

const GlitchText = ({ text, as: Component = 'h1', className = '' }) => {
  return (
    <div className={`glitch-wrapper ${className}`}>
      <Component className="glitch-text" data-text={text}>
        {text}
      </Component>
    </div>
  );
};

export default GlitchText;
