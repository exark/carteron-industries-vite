import React from 'react';
import './BackgroundCarousel.css';

const BackgroundCarousel = () => {
  return (
    <div className="background-carousel-container">
      <div 
        className="background-carousel active"
        style={{
          backgroundImage: 'url(/images/golf_image_1.webp)'
        }}
      />
    </div>
  );
};

export default BackgroundCarousel;
