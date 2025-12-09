import React from 'react';
import PageIntro from '../../shared/components/page-intro/PageIntro';
import './SmartSpacesList.scss';
import smartImage  from '@/assets/smart-space.jpg';

const smartSpaces = [
  { id: 1, title: 'Modern Living Room', imageUrl: smartImage },
  { id: 2, title: 'Smart Kitchen', imageUrl: smartImage },
  { id: 3, title: 'Cozy Bedroom', imageUrl: smartImage },
  { id: 4, title: 'Home Office', imageUrl: smartImage },
  { id: 5, title: 'Entertainment Center', imageUrl: smartImage },
  { id: 6, title: 'Outdoor Patio', imageUrl: smartImage },
];

const SmartSpacesList: React.FC = () => {
  return (
    <div className="smart-spaces-list-page">
      <PageIntro 
        title="Smart Spaces"
        subtitle="Explore our list of smart spaces."
        backgroundImage={smartImage}
      />
      <div className="smart-places-list">
        {smartSpaces.map((space, index) => (
          <React.Fragment key={space.id}>
            <section className="smart-space-card">
              <div className="image-container">
                <img src={space.imageUrl} alt={space.title} />
              </div>
              <p className="smart-space-title">{space.title}</p>
            </section>
            {index < smartSpaces.length - 1 && <div className="mobile-divider" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SmartSpacesList;