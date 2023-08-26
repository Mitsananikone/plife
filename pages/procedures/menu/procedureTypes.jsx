/** @format */

import React, { useState, useEffect } from "react";
import TreatmentCard from "@/components/treatmentCard/treatmentCard";
import styles from "./procedureTypes.module.css";
import CosmeticSurgeryCard from '@/components/cosmeticSurgeryInfo/cosmeticSurgeryCard';
import PopupAllSurgeries from '@/pages/resources/pop_cosmeticsurgery/popup_allSurgeries';

export default function ProcedureTypes() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleCardClick = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };
  return (
    <div className={styles.procedureContainer}>
      <h1>VIEW PROCEDURES AND ProcedureTypes</h1>
      <div className={styles.bothGroups}>
        <div className={styles.tCardGroup1}>
          <TreatmentCard
          onClick={handleCardClick}
            imageUrl="/images/types/aesthetic.PNG"
            description="AESTHETIC & NON-SURGICAL"
            className={styles.tCard}
          />
          <TreatmentCard
          onClick={handleCardClick}
            imageUrl="/images/types/weightloss.PNG"
            description="WEIGHT LOSS"
            className={styles.tCard}
          />
          <TreatmentCard
          onClick={handleCardClick}
            imageUrl="/images/types/cosmeticsurgery.PNG"
            description="COSMETIC SURGERY"
            className={styles.tCard}
          />
          <TreatmentCard
          onClick={handleCardClick}
            imageUrl="/images/types/gyno.PNG"
            description="COSMETIC GYNECOLOGY"
            className={styles.tCard}
          />
        </div>
        <div className={styles.tCardGroup2}>
          <TreatmentCard
          onClick={handleCardClick}
            imageUrl="/images/types/dental.PNG"
            description="DENTAL ProcedureTypes"
            className={styles.tCard}
          />
          <TreatmentCard
          onClick={handleCardClick}
            imageUrl="/images/types/trans.PNG"
            description="GENDER TRANSITION"
            className={styles.tCard}
          />
          <TreatmentCard
          onClick={handleCardClick}
            imageUrl="/images/types/lipo.PNG"
            description="LIPOSUCTION"
            className={styles.tCard}
          />
          <TreatmentCard
          onClick={handleCardClick}
            imageUrl="/images/types/hair.PNG"
            description="HAIR TRANSFORMATION"
            className={styles.tCard}
          />
        </div>
      </div>
      {isPopupVisible && (
        <PopupAllSurgeries onClose={closePopup} />
      )}
    </div>
  );
}
