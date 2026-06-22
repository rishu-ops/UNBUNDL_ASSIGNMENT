import React from 'react';
import './Marquee.css';

interface MarqueeProps {
  texts: React.ReactNode | React.ReactNode[];
  shouldAnimate?: boolean;
  speed?: number; // animation duration in seconds
  textStyle?: React.CSSProperties; // custom font styling passed through props
}

const Marquee: React.FC<MarqueeProps> = ({
  texts,
  shouldAnimate = true,
  speed = 20,
  textStyle,
}) => {
  const textArray = Array.isArray(texts) ? texts : [texts];

  const renderContent = () => (
    <>
      {textArray.map((text, index) => (
        <span key={index} className="marquee-item">
          {text}
        </span>
      ))}
    </>
  );

  const trackStyle: React.CSSProperties = shouldAnimate
    ? { animationDuration: `${speed}s` }
    : {};

  return (
    <div className="marquee-container">
      <div 
        className={`marquee-track ${shouldAnimate ? 'animate' : ''}`} 
        style={trackStyle}
      >
        <div className="marquee-content" style={textStyle}>
          {renderContent()}
        </div>
        {shouldAnimate && (
          <div className="marquee-content" aria-hidden="true" style={textStyle}>
            {renderContent()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Marquee;
