/** @format */

import React, { useEffect } from 'react';
import TreatmentCard from "@/components/treatmentCard/treatmentCard";
import styles from './type.module.css';

export default function Treatments() {
  useEffect(() => {
    // Set the background color when the component mounts
    document.body.style.backgroundColor = '#E5E7EB';

    return () => {
      // Reset the background color when the component unmounts
      document.body.style.backgroundColor = null;
    };
  }, []);
  return (
    <div className={styles.procedureContainer}> {/* Added overflow-hidden here */}
      <h1>
        VIEW PROCEDURES AND TREATMENTS
      </h1>
      <div className={styles.tCardGroup}>
        <TreatmentCard imageUrl="/images/types/aesthetic.PNG" description="AESTHETIC & NON-SURGICAL" />
        <TreatmentCard imageUrl="/images/types/weightloss.PNG" description="WEIGHT LOSS" />
        <TreatmentCard imageUrl="/images/types/cosmeticsurgery.PNG" description="COSMETIC SURGERY" />
        <TreatmentCard imageUrl="/images/types/gyno.PNG" description="COSMETIC GYNECOLOGY" />
      </div>
      <div className={styles.tCardGroup}>
        <TreatmentCard imageUrl="/images/types/dental.PNG" description="DENTAL TREATMENTS" />
        <TreatmentCard imageUrl="/images/types/trans.PNG" description="GENDER TRANSITION" />
        <TreatmentCard imageUrl="/images/types/lipo.PNG" description="LIPOSUCTION" />
        <TreatmentCard imageUrl="/images/types/hair.PNG" description="HAIR TRANSFORMATION" />
      </div>
    </div>

  );
}
