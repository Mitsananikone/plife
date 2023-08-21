import React from 'react';
import styles from './treatmentCard.module.css';

const TreatmentCard = ({ imageUrl, description, style }) => (

    <div style={style}
      className={styles.tCard}>
      <div className={styles.imgContainer}>
        <img
          src={imageUrl}
          alt={description}
          className={styles.tCardImage}
        />
      </div>
      <div className={styles.tCardTitle}>
        <p>
          {description}
        </p>
      </div>
    </div>
)

export default TreatmentCard;
