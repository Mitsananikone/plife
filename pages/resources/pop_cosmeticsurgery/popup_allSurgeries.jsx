/** @format */

import React, { useState, useEffect } from "react";
import styles from "./popup_allSurgeries.module.css";
import CosmeticSurgeryCard from "@/components/cosmeticSurgeryInfo/cosmeticSurgeryCard";
import BreastImplantInfo from "@/components/cosmeticSurgeryInfo/breastImplant/breastImplant";
import BreastLiftInfo from "@/components/cosmeticSurgeryInfo/breastLift/breastLift";
import BreastReductionInfo from "@/components/cosmeticSurgeryInfo/breastReduction/breastReduction"
import FaceliftInfo from '@/components/cosmeticSurgeryInfo/facelift/facelift';
import LiposuctionInfo from '@/components/cosmeticSurgeryInfo/liposuction/liposuction';
import TransitionInfo from '@/components/cosmeticSurgeryInfo/transition/transition';
import RhinoplastyInfo from '@/components/cosmeticSurgeryInfo/rhinoplasty/rhinoplasty';
import TummyTuckInfo from '@/components/cosmeticSurgeryInfo/tummyTuck/tummyTuck';


function PopupAllSurgeries({ isPopupVisible, onClose, selectedProcedure }) {

  useEffect(() => {
    setSelectedNavProcedure(selectedProcedure);
  }, [selectedProcedure]);

  let ProcedureInfoComponent;

  const [selectedNavProcedure, setSelectedNavProcedure] = useState(selectedProcedure);

  const onProcedureSelect = (procedureType) => {
      setSelectedNavProcedure(procedureType);
  };



  switch (selectedProcedure) {
    case "breastImplant":
      ProcedureInfoComponent = BreastImplantInfo; // assuming you've imported this component
      break;
    case "breastLift":
      ProcedureInfoComponent = BreastLiftInfo; // assuming you've imported this component
      break;
    case "breastReduction":
      ProcedureInfoComponent = BreastReductionInfo; // assuming you've imported this component
      break;
    case "faceLift":
      ProcedureInfoComponent = FaceliftInfo; // assuming you've imported this component
      break;
    case "liposuction":
      ProcedureInfoComponent = LiposuctionInfo; // assuming you've imported this component
      break;
    case "trans":
      ProcedureInfoComponent = TransitionInfo; // assuming you've imported this component
      break;
    case "rhinoplasty":
      ProcedureInfoComponent = RhinoplastyInfo; // assuming you've imported this component
      break;
    case "tummyTuck":
      ProcedureInfoComponent = TummyTuckInfo; // assuming you've imported this component
      break;
    default:
      ProcedureInfoComponent = null;
  }

  return (
    <div
      className={
        isPopupVisible ? styles.popupContainerFull : styles.popupContainerHidden
      }
    >
      <div className={styles.popupContainer}>
        <div className={styles.popup_navMenu}>
        <CosmeticSurgeryCard onProcedureSelect={onProcedureSelect} selectedProcedure={selectedNavProcedure}/>

        </div>

        <div className={styles.popup_info}>
        {selectedNavProcedure === "breastImplant" && <BreastImplantInfo />}
        {selectedNavProcedure === "breastLift" && <BreastLiftInfo />}
        {selectedNavProcedure === "breastReduction" && <BreastReductionInfo />}
        {selectedNavProcedure === "faceLift" && <FaceliftInfo />}
        {selectedNavProcedure === "liposuction" && <LiposuctionInfo />}
        {selectedNavProcedure === "trans" && <TransitionInfo />}
        {selectedNavProcedure === "rhinoplasty" && <RhinoplastyInfo />}
        {selectedNavProcedure === "tummyTuck" && <TummyTuckInfo />}
        </div>

        <button onClick={onClose} className={styles.closePopup}>
          x
        </button>
      </div>
    </div>
  );
}

export default PopupAllSurgeries;
