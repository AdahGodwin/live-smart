import React from 'react';
import './PageIntro.scss';

interface PageIntroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  height?: string;
  overlay?: boolean;
  overlayColor?: string;
  titleFontSize?: string;
  subtitleFontSize?: string;
}

const PageIntro: React.FC<PageIntroProps> = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  height = '600px', 
  overlay = true,
  overlayColor,
  titleFontSize,
  subtitleFontSize,
}) => {
  const defaultOverlay = 'linear-gradient(0deg, rgba(35, 31, 32, 0.80) 0%, rgba(35, 31, 32, 0.80) 100%)';

  return (
    <div 
      className={`page-intro ${overlay ? 'with-overlay' : ''}`}
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        '--intro-height': height,
        '--intro-overlay-color': overlayColor || defaultOverlay,
        '--intro-title-size': titleFontSize,
        '--intro-subtitle-size': subtitleFontSize,
      } as React.CSSProperties}
    >
      <div className="content">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageIntro;