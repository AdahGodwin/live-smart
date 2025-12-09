import React from 'react';
import PageIntro from '../../shared/components/page-intro/PageIntro';
import buildImage from '@/assets/smart-space-2.jpg';
import buildImage2 from "@/assets/smart-space.jpg";
import './BuildSmartSpacePage.scss';

const buildOptions = [
  { id: 1, title: 'Home Office', imageUrl: buildImage2 },
  { id: 2, title: 'Living Room', imageUrl: buildImage2 },
  { id: 3, title: 'Kitchen', imageUrl: buildImage2 },
  { id: 4, title: 'Bedroom', imageUrl: buildImage2 },
   { id: 5, title: 'Kitchen', imageUrl: buildImage2 },
  { id: 6, title: 'Bedroom', imageUrl: buildImage2 },
   { id: 7, title: 'Kitchen', imageUrl: buildImage2 },
  { id: 8, title: 'Bedroom', imageUrl: buildImage2 },
];

const BuildSmartSpacePage: React.FC = () => {
  return (
    <div className="build-smart-space-page">
      <PageIntro 
        title="Build Smart places"
        backgroundImage={buildImage}
        height="650px"
        overlay={false}
      />
      <div className="build-options-list">
        {buildOptions.map((option) => (
          <div 
            key={option.id} 
            className="build-option-card"
            style={{ backgroundImage: `url(${option.imageUrl})` }}
          >
            <div className="overlay"></div>
            <div className="space-content">
              <h3>{option.title}</h3>
              <button>Customize smart space</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuildSmartSpacePage;
