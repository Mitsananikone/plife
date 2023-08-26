import React from 'react';
import styles from './popup_allSurgeries.module.css';
import CosmeticSurgeryCard from '@/components/cosmeticSurgeryInfo/cosmeticSurgeryCard';
import BreastImplantInfo from '@/components/cosmeticSurgeryInfo/breastImplant/breastImplant';

const PopupAllSurgeries = ({ onClose }) => {
    return (
        <div className={styles.popupContainerFull}>
            <div className={styles.popupContainer} >
                <button onClick={onClose} 
                className={styles.closePopup}style={{ 
                    
                }}>X</button>
                
       
                <div style={{ 

                    width: '35%'
                }}>
                   <CosmeticSurgeryCard />
                </div>


                <div style={{ 
                    marginLeft: '2em',
                    paddingTop: '4em',
                    width: '65%', 
                    overflowY: 'auto',
                    zIndex: '9999999',
                }}>
                    <BreastImplantInfo/>
                </div>


            </div>
        </div>
    )
}

export default PopupAllSurgeries;
