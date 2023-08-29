import { useState, useEffect } from 'react';
import UniqueSlick from '@/components/uniqueSlick/uniqueSlick';
import LandingPopup from '@/components/landing/page';

export default function LandingPage() {
  const images = [
    '/images/home1.png',
    '/images/home2.png',
    '/images/home3.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 10000);  // 10 seconds per image

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="backgroundChange">
      {/* Stack both images on top of each other */}
      {images.map((img, index) => (
        <div
          key={img}
          style={{ backgroundImage: `url(${img})` }}
          className={`backgroundChange-image ${index === currentImageIndex ? 'visible' : ''}`}
        ></div>
      ))}

      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '90%',
          marginTop: '25%',
          position: 'relative', // To overlay the images
          zIndex: 1, // To appear on top of the background images
        }}
      >
        <UniqueSlick />
      </div>
    </div>
  );
}
