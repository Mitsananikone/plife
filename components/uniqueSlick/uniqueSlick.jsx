import React, { useState, useEffect } from 'react';
import styles from './uniqueSlick.module.css';

const UniqueSlick = () => {
  const words = ['LIFE', 'PRICE', 'EXPERIENCE'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsFading(false);
      }, 300); // Half of transition duration
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className={styles.uniqueContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.titleContainer}>
          <div>
          <span className={styles.span1}>UNIQUE</span>
          </div>
          <div>
          <span className={styles.span2} >
            {words[currentWordIndex]}
          </span>
          </div>
        </div>
        <div className={styles.subTitle}>
          <span>Top Surgeons and Specialists</span>
          <span> Affordable Pricing </span>
          <span>Free Consultation</span>
        </div>
      </div>
      <button
        className={styles.requestButton}
      >
        REQUEST QUOTE
      </button>
    </div>
  );
};

export default UniqueSlick;
