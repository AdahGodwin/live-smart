import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageIntro from '../../shared/components/page-intro/PageIntro';
import './BookTourPage.scss';
import smartImage from '@/assets/smart-space.jpg';

const tourSpaces = [
  { id: 1, title: 'Modern Living Room', imageUrl: smartImage },
  { id: 2, title: 'Smart Kitchen', imageUrl: smartImage },
  { id: 3, title: 'Cozy Bedroom', imageUrl: smartImage },
  { id: 4, title: 'Home Office', imageUrl: smartImage },
  { id: 5, title: 'Entertainment Center', imageUrl: smartImage },
  { id: 6, title: 'Outdoor Patio', imageUrl: smartImage },
];

const BookTourPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'3D' | 'IN-PERSON'>('3D');
  const navigate = useNavigate();

  const navigateTo = (tab: '3D' | 'IN-PERSON') => {
    if (tab === '3D') {
      // navigate('/smart-spaces');
      return;
    }
    navigate('/book-tour/consultation');
  };

  return (
    <div className="book-tour-page">
      <PageIntro 
        title="Book A Tour"
        subtitle="Your space, your control, your happiness"
        backgroundImage={smartImage}
      />
      
      <div className="tour-content-container">
        <div className="tour-tabs-wrapper">
          <div className={`tour-tabs ${activeTab === '3D' ? 'active-first' : 'active-second'}`}>
            <button 
              className={`tab-btn ${activeTab === '3D' ? 'active' : ''}`}
              onClick={() => setActiveTab('3D')}
            >
              3D TOUR
            </button>
            <button 
              className={`tab-btn ${activeTab === 'IN-PERSON' ? 'active' : ''}`}
              onClick={() => setActiveTab('IN-PERSON')}
            >
              IN-PERSON TOUR
            </button>
            <div className="sliding-underline" />
          </div>
        </div>

        <div className="tour-places-list">
          {tourSpaces.map((space, index) => (
            <React.Fragment key={space.id}>
              <section className="tour-space-card">
                <div className="image-wrapper">
                  <img src={space.imageUrl} alt={space.title} />
                </div>
                <button
                  type="button"
                  className="tour-action-btn"
                  onClick={() => navigateTo(activeTab)}
                >
                  <span className={`btn-text ${activeTab === '3D' ? 'visible' : 'hidden'}`}>
                    Tour Now
                  </span>
                  <span className={`btn-text ${activeTab === 'IN-PERSON' ? 'visible' : 'hidden'}`}>
                    Book A Tour Now
                  </span>
                </button>
                <p className="tour-space-title">{space.title}</p>
              </section>
              {index < tourSpaces.length - 1 && <div className="mobile-divider" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookTourPage;
