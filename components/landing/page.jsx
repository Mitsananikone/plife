import React, { useState } from 'react';
import styles from './landing.module.css';

const LandingPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = (e) => {
    e.stopPropagation(); 
    console.log("Clicked!");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent} onClick={handleClose}>
        <div className={styles.popupText}>
        <h1>EXPERIENCE OUR <i>UNIQUE</i></h1>
        <h1><i>LIFE-CENTRIC BEAUTY.</i></h1>
        <h2>START YOUR JOURNEY WITH US.</h2>

        </div>
      </div>
    </div>
  );
}

export default LandingPopup;