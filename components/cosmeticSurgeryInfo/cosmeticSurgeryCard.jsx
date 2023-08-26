/** @format */

import Link from "next/link";
import styles from './cosmeticSurgeryCard.module.css';

export default function CosmeticSurgeryCard({ onClose }) {
  return (
    <div className={styles.overlay}>
    <div className={styles.surgeryNavContainer}>
    <div className={styles.surgeryNav}> {/* Fixed positioning */}
      <h1 className={styles.cosmeticText}>COSMETIC</h1>
        <h1 className={styles.cosmeticText}>SURGERY</h1>
        <p className={styles.headerText}>
          Explore our popular beauty treatment offers and choose your products
        </p>
      
        <div className="mt-12 space-y-2 text-white ">
        <h1 className={styles.navItem}>BREAST IMPLANT</h1>
          <h1 className={styles.navItem}>BREAST LIFT</h1>
          <h1 className={styles.navItem}>NOSE ENGINEER</h1>
          <h1 className={styles.navItem}>BODY SHAPE LIFTING</h1>
          <h1 className={styles.navItem}>FACE AUGMENTATION</h1>
        </div>
        <Link href="/procedures/type/ProcedureTypes" passHref>
            <button
              className={styles.seeMoreButton}
            >
              See More
            </button>
          </Link>
      </div>

      <div className={styles.scrolling}>

      </div>
    </div>
    </div>
  );
}
